#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && p.endsWith('.md')) processFile(p);
  }
}

function processFile(filePath) {
  let s = fs.readFileSync(filePath, 'utf8');
  const orig = s;

  // Replace Answer header bolding: **Answer:** -> Answer:
  s = s.replace(/\*\*Answer\*\*:/gi, 'Answer:');
  s = s.replace(/\*\*Answer:/gi, 'Answer:');

  // Replace Problem header bolding: **Problem N:** -> Problem N:
  s = s.replace(/\*\*Problem(\s+\d+):\*\*/gi, 'Problem$1:');
  s = s.replace(/\*\*Problem(\s+\d+):/gi, 'Problem$1:');

  // Also remove any leading/trailing double asterisks around answer/explanation lines
  s = s.replace(/\*\*(.*?)\*\*/g, '$1');

  if (s !== orig) {
    fs.writeFileSync(filePath, s, 'utf8');
    console.log('Updated', filePath);
  }
}

const base = path.join(__dirname, '..', 'public', 'articles');
walk(base);
console.log('Done cleaning practice explanations.');
