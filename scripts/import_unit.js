#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node scripts/import_unit.js --course <courseId> --unit <unitId> --file <path/to/unit.txt>');
  console.log('If --file is omitted, reads stdin. The script will split the file into topic markdown files based on lines starting with topic numbers like "1.1:" or "## 1.1: Title" and will save MD files under public/articles/<courseId>/');
}

const argv = require('minimist')(process.argv.slice(2));
if (argv.help || argv.h) {
  usage();
  process.exit(0);
}

const courseId = argv.course || argv.c;
const unitId = argv.unit || argv.u;
const file = argv.file || argv.f;

if (!courseId || !unitId) {
  console.error('Missing --course and --unit');
  usage();
  process.exit(2);
}

function readInput(callback) {
  if (file) {
    fs.readFile(path.resolve(file), 'utf8', (err, data) => {
      if (err) throw err;
      callback(data);
    });
  } else {
    // read stdin
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => callback(data));
  }
}

function parseUnitText(text) {
  // split into lines and find topic headers
  const lines = text.split(/\r?\n/);

  // pattern to match topic headings: optional hashes, then topic index (e.g., 1.1 or 2.3.4) then optional ':' and title
  const headingRe = /^\s*(?:#{1,6}\s*)?(\d+(?:\.\d+)*)\s*[:\-]?\s*(.*)$/;

  const topics = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(headingRe);
    if (m) {
      // start new topic if the match appears like a true heading (title not empty) or id looks like x.y
      const id = m[1].trim();
      const title = m[2] ? m[2].trim() : '';
      // if it's a top-level Unit header (e.g., "Unit 1:"), skip
      if (/^unit\b/i.test(line)) continue;

      // If we already had a current topic, push it
      if (current) topics.push(current);

      current = { id, title: title || id, lines: [] };
      continue;
    }

    if (current) current.lines.push(line);
  }

  if (current) topics.push(current);

  // Convert topic candidates to content strings
  return topics.map(t => ({ id: t.id, title: t.title, content: ['# ' + t.id + (t.title ? ': ' + t.title : ''), '', ...t.lines].join('\n') }));
}

function writeTopicFiles(courseId, topics) {
  const outDir = path.join(process.cwd(), 'public', 'articles', courseId);
  fs.mkdirSync(outDir, { recursive: true });

  const created = [];
  for (const t of topics) {
    // sanitize id for filename
    const fileName = t.id.replace(/\./g, '_') + '.md';
    const outPath = path.join(outDir, fileName);
    fs.writeFileSync(outPath, t.content, 'utf8');
    created.push({ topicId: t.id, filePath: `/articles/${courseId}/${fileName}` });
    console.log('WROTE', outPath);
  }

  return created;
}

function patchCoursesJs(courseId, created) {
  const courseFile = path.join(process.cwd(), 'src', 'data', 'courses.js');
  let text = fs.readFileSync(courseFile, 'utf8');

  let modified = false;

  for (const c of created) {
    // find topic by id and insert contentPath if not present
    const topicId = c.topicId;
    // regex to find id: "<topicId>" within an object and capture the closing brace of that object
    const topicRegex = new RegExp('(\{[^}]*?id:\s*"' + escapeRegExp(topicId) + '"[\s\S]*?)(\})', 'g');

    text = text.replace(topicRegex, (match, cap1, cap2) => {
      if (/contentPath\s*:/.test(cap1)) return match; // already has contentPath
      modified = true;
      // insert contentPath before the closing brace
      return cap1 + `  contentPath: "${c.filePath}",\n` + cap2;
    });
  }

  if (modified) {
    fs.writeFileSync(courseFile, text, 'utf8');
    console.log('Updated courses.js with contentPath entries.');
  } else {
    console.log('No changes needed in courses.js (contentPath already present or topics not found).');
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

readInput(text => {
  const topics = parseUnitText(text);
  if (topics.length === 0) {
    console.error('No topics found in input. Ensure your unit content has topic headers like "1.1: Title".');
    process.exit(3);
  }

  const created = writeTopicFiles(courseId, topics);
  // attempt to patch courses.js
  try {
    patchCoursesJs(courseId, created);
  } catch (e) {
    console.error('Warning: failed to update courses.js —', e.message);
  }

  console.log('Done. Created', created.length, 'topic files under public/articles/', courseId);
});
