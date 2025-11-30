import { useState } from 'react';
import { courses } from '../data/courses';
import './CoursePage.css';

function AdminImport() {
  const categories = Object.entries(courses);

  const [courseKey, setCourseKey] = useState(categories[0] ? categories[0][1].courses[0].id : '');
  const [unitId, setUnitId] = useState('1');
  const [input, setInput] = useState('');
  const [parsed, setParsed] = useState([]);

  function parseText(text) {
    const lines = text.split(/\r?\n/);
    const headingRe = /^\s*(?:#{1,6}\s*)?(\d+(?:\.\d+)*)\s*[:\-]?\s*(.*)$/;
    const topics = [];
    let current = null;
    for (const line of lines) {
      const m = line.match(headingRe);
      if (m) {
        const id = m[1].trim();
        const title = m[2] ? m[2].trim() : '';
        if (/^unit\b/i.test(line)) continue;
        if (current) topics.push(current);
        current = { id, title: title || id, lines: [] };
        continue;
      }
      if (current) current.lines.push(line);
    }
    if (current) topics.push(current);
    return topics.map(t => ({ id: t.id, title: t.title, content: ['# ' + t.id + (t.title ? ': ' + t.title : ''), '', ...t.lines].join('\n') }));
  }

  function onParse() {
    const items = parseText(input);
    setParsed(items);
  }

  function downloadTopic(t) {
    const filename = `${t.id.replace(/\./g, '_')}.md`;
    const blob = new Blob([t.content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="admin-import page-container">
      <h1>Admin — Import Unit Content</h1>

      <section className="panel">
        <label>
          Course (course id):
          <select value={courseKey} onChange={e => setCourseKey(e.target.value)}>
            {categories.flatMap(([k, cat]) => cat.courses).map(c => (
              <option key={c.id} value={c.id}>{c.name} — {c.id}</option>
            ))}
          </select>
        </label>

        <label>
          Unit id:
          <input value={unitId} onChange={e => setUnitId(e.target.value)} />
        </label>

        <label>
          Paste full unit text here (format: topic headers like "1.1: Title" or "## 1.1: Title"):
          <textarea rows={18} value={input} onChange={e => setInput(e.target.value)} />
        </label>

        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button onClick={onParse}>Parse unit</button>
          <button onClick={() => { setInput(''); setParsed([]); }}>Clear</button>
        </div>
      </section>

      <section className="panel">
        <h2>Parsed topics</h2>
        {parsed.length === 0 && <p>No topics detected — try pasting a unit with lines like <code>1.1: Topic Title</code>.</p>}

        <div className="parsed-list">
          {parsed.map((t) => (
            <div key={t.id} className="parsed-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', padding: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{t.id}</strong> — <em>{t.title}</em>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => downloadTopic(t)}>Download .md</button>
                </div>
              </div>

              <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{t.content.slice(0, 800)}</pre>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <h3>Automated repo import (optional)</h3>
          <p>If you run this project locally you can save parsed files directly into the repository using the CLI script we added. Example:</p>
          <pre>node scripts/import_unit.js --course {courseKey} --unit {unitId} --file path/to/unit.txt</pre>
        </div>
      </section>
    </div>
  );
}

export default AdminImport;
