const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Running import_unit on sample file...');
  execSync('node ./scripts/import_unit.js --course linear-algebra --unit 1 --file ./scripts/sample_unit_linear_algebra_1.txt', { stdio: 'inherit' });

  const base = path.join(process.cwd(), 'public', 'articles', 'linear-algebra');
  const files = ['1_1.md', '1_2.md', '1_3.md', '1_4.md'];
  let missing = [];
  for (const f of files) {
    if (!fs.existsSync(path.join(base, f))) missing.push(f);
  }

  if (missing.length) {
    console.error('MISSING expected files after import:', missing);
    process.exit(2);
  }

  console.log('All files present. Check src/data/courses.js for updated contentPath entries.');
} catch (e) {
  console.error('Test failed:', e.message);
  process.exit(1);
}
