import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import QuizBox from '../components/QuizBox';
import { courses } from '../data/courses';
import './CoursePage.css';

function CoursePage() {
  const { courseId, topicId } = useParams();
  const [course, setCourse] = useState(null);
  const [categoryColor, setCategoryColor] = useState('#000');
  const [categoryKey, setCategoryKey] = useState('');

  useEffect(() => {
    // Find the course and its category
    for (const [key, category] of Object.entries(courses)) {
      const foundCourse = category.courses.find(c => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setCategoryColor(category.color);
        setCategoryKey(key);
        console.debug('Loaded course', foundCourse.id, 'category', key);
        break;
      }
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="course-page">
        <div className="error-message">Course not found</div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  // If no topicId, redirect to first topic
  if (!topicId && course.units.length > 0 && course.units[0].topics.length > 0) {
    return <Navigate to={`/course/${courseId}/${course.units[0].topics[0].id}`} replace />;
  }

  // Build a flat list of all topics for navigation
  const allTopics = [];
  course.units.forEach(unit => {
    unit.topics.forEach(topic => {
      allTopics.push(topic);
    });
  });

  // Find the current topic data and index
  const currentTopicIndex = allTopics.findIndex(t => t.id === topicId);
  const currentTopicData = allTopics[currentTopicIndex];
  // Diagnostic logging to help trace blank-screen issues
  console.debug('topicId param:', topicId, 'topicIndex:', currentTopicIndex, 'currentTopicData:', currentTopicData);

  // Small helper: use a one-sentence summary if available (first sentence of description)
  const topicSummary = (() => {
    const src = currentTopicData?.description;
    if (!src) return null;
    // split into sentences (simple heuristic) and take the first
    const parts = src.split(/(?<=[.!?])\s+/);
    return parts[0] || src;
  })();

  // Find previous and next topics
  const previousTopic = currentTopicIndex > 0 ? allTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < allTopics.length - 1 ? allTopics[currentTopicIndex + 1] : null;

  return (
    <div className="course-page">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="course-layout">
        <aside className="course-sidebar">
          <h2 className="course-sidebar-title" style={{ color: categoryColor }}>
            {course.name}
          </h2>

          <nav className="units-nav">
            {course.units.map((unit) => (
              <div key={unit.id} className="nav-unit-group">
                <div className="nav-unit-title">{unit.title}</div>
                <div className="nav-topics-list">
                  {unit.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/course/${courseId}/${topic.id}`}
                      className={`topic-nav-item ${topicId === topic.id ? 'active' : ''}`}
                      style={
                        topicId === topic.id
                          ? { borderLeftColor: categoryColor }
                          : {}
                      }
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <header className="content-header">
            <h1 className="content-title" style={{ color: categoryColor }}>
              {currentTopicData?.title || 'Select a topic'}
            </h1>
          </header>

          <article className="content-body">
            <div className="topic-article">
              {currentTopicData?.contentPath ? (
                // Render markdown content fetched from public/articles via fetch
                (function () {
                  // local state within component is outside, so keep as simpler pattern — we load content below
                })()
              ) : (
                <div className="placeholder-content">
                  <div className="article-placeholder">
                    <p className="article-placeholder-text">{topicSummary ?? `This is a placeholder sentence — the full article content for "${currentTopicData?.title || 'this topic'}" will appear here in plain, readable text.`}</p>
                  </div>
                </div>
              )}
              {currentTopicData?.contentPath && (
                <TopicMarkdownRenderer contentPath={currentTopicData.contentPath} categoryKey={categoryKey} />
              )}
            </div>

            <div className={`topic-navigation ${previousTopic && nextTopic ? 'two' : 'single'}`}>
              {previousTopic && (
                <Link
                  to={`/course/${courseId}/${previousTopic.id}`}
                  className="nav-button nav-previous"
                  style={{ borderColor: categoryColor }}
                >
                  <span className="nav-arrow">←</span>
                  <span className="nav-label">
                    <span className="nav-label-text">Previous</span>
                    <span className="nav-topic-title">{previousTopic.title}</span>
                  </span>
                </Link>
              )}
              {nextTopic && (
                <Link
                  to={`/course/${courseId}/${nextTopic.id}`}
                  className="nav-button nav-next"
                  style={{ borderColor: categoryColor }}
                >
                  <span className="nav-label">
                    <span className="nav-label-text">Next</span>
                    <span className="nav-topic-title">{nextTopic.title}</span>
                  </span>
                  <span className="nav-arrow">→</span>
                </Link>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

function TopicMarkdownRenderer({ contentPath, categoryKey }) {
  const [content, setContent] = useState(null);
  // Keep html state declared unconditionally so hooks order is stable across renders
  const [html, setHtml] = useState(null);
  const [practice, setPractice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    setContent(null);
    setHtml(null);
    console.debug('Fetching article', contentPath);
    fetch(contentPath)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load ' + res.status);
        console.debug('Fetched', contentPath, 'status', res.status);
        return res.text();
      })
      .then(txt => { if (mounted) setContent(txt); })
      .catch(err => { if (mounted) setContent(`# Error loading content\n\n${err.message}`); });

    return () => { mounted = false; };
  }, [contentPath]);

  // We'll asynchronously prepare an HTML version of the article and extract interactive practice blocks if present.
  // This effect must be declared before any early returns so hooks remain
  // consistent across renders (avoids "rendered more hooks" errors).
  useEffect(() => {
    let cancelled = false;

    async function convert() {
      try {
        // Handle mock exams vs regular articles differently for practice extraction
        let practiceData = null;
        let contentForHtml = content;

        const isMockExam = /\/articles\/mock-exams\//.test(contentPath || '');

        if (isMockExam) {
          // For mock exams, don't render the raw exam markdown in the article body.
          // We'll keep only the interactive QuizBox for the mock exam.
          practiceData = parseMockExam(content);
          // hide the article content entirely for mock exams (keep blank)
          contentForHtml = '';
        } else {
          // Extract practice / answer key block if present
          let practiceBlock = null;
          let answerKeyBlock = null;
          let contentWithoutPractice = content;
          // Look for '## Practice Problems' heading followed by '## Answer Key'
          const prStart = content.search(/##\s*Practice Problems/i);
          const ansStart = content.search(/##\s*Answer Key/i);
          if (prStart !== -1 && ansStart !== -1 && prStart < ansStart) {
            // Keep the heading line (## Practice Problems) but remove the practice content itself
            const headerEnd = content.indexOf('\n', prStart);
            const headerLineEnd = headerEnd === -1 ? prStart : headerEnd + 1;
            practiceBlock = content.slice(prStart, ansStart);
            answerKeyBlock = content.slice(ansStart);
            // Keep the header line in the content, but remove the practice questions block
            contentWithoutPractice = content.slice(0, headerLineEnd) + '\n' + (content.slice(ansStart + answerKeyBlock.length) || '');
          }
          contentForHtml = contentWithoutPractice;
          if (practiceBlock && answerKeyBlock) {
            practiceData = parsePracticeAndAnswers(practiceBlock, answerKeyBlock);
          }
        }

        // 1) Replace block math $$...$$ with KaTeX in the article content
        const withBlockMath = contentForHtml.replace(/\$\$([\s\S]+?)\$\$/g, (m, expr) => {
          try { return katex.renderToString(expr, { displayMode: true, throwOnError: false }); }
          catch (e) { console.warn('KaTeX block render failed', e); return m; }
        });

        // 2) Replace inline math $...$ (avoid $$)
        const withAllMath = withBlockMath.replace(/(?<!\$)\$([^\n$]+?)\$(?!\$)/g, (m, expr) => {
          try { return katex.renderToString(expr, { displayMode: false, throwOnError: false }); }
          catch (e) { console.warn('KaTeX inline render failed', e); return m; }
        });

        // 3) Try to dynamically import 'marked' to convert Markdown -> HTML. If it's not available,
        // fall back to showing the raw markdown inside a <pre> so the app still works.
        try {
          const mod = await import(/* @vite-ignore */ 'marked');
          const parse = mod.marked?.parse ?? mod.default?.parse ?? mod.default ?? mod.marked;
          if (!parse) throw new Error('marked parse function not found');
          const htmlout = parse(withAllMath);
          // Diagnostic: log fetched content and output sizes so we can verify nothing is being truncated
          console.debug('Article conversion lengths', { contentLength: withAllMath.length, htmlLength: htmlout.length, contentPath });
          if (!cancelled) {
            setHtml(htmlout);
            setPractice(practiceData && practiceData.questions && practiceData.questions.length > 0 ? practiceData : null);
            setIsLoading(false);
          }
        } catch (err) {
          console.warn('marked not available or failed to parse — falling back to raw markdown preview', err);
          // As a graceful fallback we'll show the raw markdown but with LaTeX replaced by KaTeX HTML
          // This keeps math rendering intact even without `marked`.
          if (!cancelled) {
            setHtml(withAllMath);
            setPractice(practiceData && practiceData.questions && practiceData.questions.length > 0 ? practiceData : null);
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error('convert markdown with katex failed', err);
        if (!cancelled) setHtml(null);
      }
    }

    // only run conversion when we have content
    if (!content) return;
    convert().finally(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => { cancelled = true; };
  }, [content]);

  if (!content || isLoading) {
    return (
      <div className="article-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Local error boundary for the markdown renderer — if ReactMarkdown or plugins throw,
  // catch them and show the raw markdown so the page doesn't go blank.
  class MDRenderBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, info) {
      console.error('Markdown render boundary caught error', error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="article-error">
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Error rendering article</div>
            <div style={{ marginBottom: 8 }}>Falling back to raw markdown preview.</div>
            <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.04)', padding: 12, borderRadius: 8 }}>{this.props.content}</pre>
            <p style={{ marginTop: 8 }}>If this persists, paste the article text here and I'll fix the parser.</p>
          </div>
        );
      }
      return this.props.children;
    }
  }

  

  if (html === null) {
    // Either parsing failed or marked is not installed — show raw markdown fallback
    return (
      <div className="article-error">
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Error rendering article</div>
        <div style={{ marginBottom: 8 }}>Falling back to raw markdown preview.</div>
        <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.04)', padding: 12, borderRadius: 8 }}>{content}</pre>
      </div>
    );
  }

  return (
    <>
      <div className="article-content markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      {practice && practice.questions && practice.questions.length > 0 && (
        <div style={{ marginTop: 18 }}>
          <QuizBox questions={practice.questions} categoryKey={categoryKey} />
        </div>
      )}
    </>
  );
}

  function parsePracticeAndAnswers(practiceText, answerText) {
    // Extract questions from practiceText: split on '**Problem N:**' or '^Problem N:'
    const questionMatches = [...practiceText.matchAll(/(?:\*\*Problem\s+(\d+):\*\*)|(?:\bProblem\s+(\d+):)/gi)];
    const parts = [];
    if (questionMatches.length === 0) {
      return { questions: [] };
    }
    // Determine positions
    const indexes = questionMatches.map(m => ({ idx: m.index }));
    for (let i = 0; i < indexes.length; i++) {
      const start = indexes[i].idx;
      const end = i + 1 < indexes.length ? indexes[i + 1].idx : practiceText.length;
      const chunk = practiceText.slice(start, end).trim();
      parts.push(chunk);
    }
    const questions = parts.map(part => {
      // Remove the leading 'Problem N:' heading
      const qtext = part.replace(/^\*\*?Problem\s+\d+:?\*\*?/i, '').trim();
      // Extract choices as lines starting with 'A)'..'E)'
      const choiceMatches = [...qtext.matchAll(/^\s*([A-E])\)\s*(.+)$/gim)];
      const choices = choiceMatches.map(m => ({ letter: m[1], text: m[2].trim() }));
      // If no choices found, attempt to split by lines starting with 'A.' or 'A)'
      let questionBody = qtext;
      if (choices.length > 0) {
        // Question body is everything before first choice
        const firstChoiceIndex = qtext.search(/^[\s]*[A-E]\)/im);
        if (firstChoiceIndex !== -1) questionBody = qtext.slice(0, firstChoiceIndex).trim();
      }
      return { question: questionBody, choices };
    });

    // Parse answers: find 'Problem N: X' lines and explanation lines after
    const akMatches = [...answerText.matchAll(/(?:\*\*Problem\s+(\d+):\*\*\s*([A-E]))|(?:Problem\s+(\d+):\s*([A-E]))/gi)];
    const answersMap = {};
    for (const m of akMatches) {
      const num = m[1] || m[3];
      const ans = (m[2] || m[4] || '').trim();
      if (num) answersMap[num] = ans;
    }

    // Extract explanations by splitting answerText into blocks after each Problem heading
    const ansSplits = [...answerText.matchAll(/(?:\*\*Problem\s+(\d+):\*\*)|(?:Problem\s+(\d+):)/gi)];
    for (let i = 0; i < ansSplits.length; i++) {
      const s = ansSplits[i].index;
      const next = i + 1 < ansSplits.length ? ansSplits[i + 1].index : answerText.length;
      const block = answerText.slice(s, next).trim();
      const numMatch = block.match(/(?:\*\*Problem\s+(\d+):\*\*)|(?:Problem\s+(\d+):)/i);
      const num = (numMatch && (numMatch[1] || numMatch[2])) || null;
      if (num) {
        // remove header line
        const after = block.replace(/^(?:\*\*Problem\s+\d+:\*\*|Problem\s+\d+:)\s*/i, '').trim();
        // The first token may be the answer letter
        const ansLetterMatch = after.match(/^([A-E])\b[:.,-]?\s*/i);
          let explanation = after;
        if (ansLetterMatch) {
          explanation = after.replace(/^([A-E])\b[:.,-]?\s*/i, '').trim();
        }
          // Trim surrounding bold markers (e.g., '**explanation**') that appear to remain
          explanation = explanation.replace(/^\s*\*+\s*/, '').replace(/\s*\*+\s*$/, '');
        // find question map entry
        const qIndex = questions.findIndex((q, idx) => idx === (Number(num) - 1));
        if (qIndex !== -1) {
          const correct = answersMap[num] || (ansLetterMatch && ansLetterMatch[1]) || null;
          questions[qIndex].correct = correct; // letter
          // convert letter to index
          if (questions[qIndex].choices && correct) {
            const correctIndex = questions[qIndex].choices.findIndex(c => c.letter.toUpperCase() === correct.toUpperCase());
            questions[qIndex].correctIndex = correctIndex;
          }
          questions[qIndex].explanation = explanation;
        }
      }
    }

    // Normalize: convert choice text to full text switch
    for (const q of questions) {
      // If choices were empty, attempt to parse choices inline from a single line using A) B) markers
      if (!q.choices || q.choices.length === 0) {
        // attempt to find letters in the block
        const inlineChoices = [...q.question.matchAll(/\b([A-E])\)\s*([^A-E\)]+)/g)];
        if (inlineChoices.length > 0) {
          const parsed = inlineChoices.map(m => ({ letter: m[1], text: m[2].trim() }));
          q.choices = parsed;
          // strip choices from question text
          q.question = q.question.split(/\bA\)\s*/i)[0].trim();
        }
      }
    }

    return { questions };
  }

  function parseMockExam(content) {
    // Only attempt for our mock exam structure
    if (!/MOCK EXAM/i.test(content)) return { questions: [] };
    const mcqSectionStart = content.search(/SECTION I:\s*Multiple Choice/i);
    const answerKeyStart = content.search(/#\s*.+ANSWER KEY/i);
    if (mcqSectionStart === -1 || answerKeyStart === -1) {
      return { questions: [] };
    }

    const mcqBlock = content.slice(mcqSectionStart, answerKeyStart);
    const answerBlock = content.slice(answerKeyStart);

    const mcqQuestions = parseMockMcq(mcqBlock, answerBlock);
    // Prefer extracting FRQ prompts from the SECTION II slice (between SECTION II and ANSWER KEY)
    const frqSectionStart = content.search(/SECTION II:\s*Free Response/i);
    const frqText = frqSectionStart !== -1 ? content.slice(frqSectionStart, answerKeyStart) : content;
    const frqQuestions = parseMockFrq(content, frqText, answerBlock);
    return { questions: [...mcqQuestions, ...frqQuestions] };
  }

  function parseMockMcq(mcqText, answerBlock) {
    const qMatches = [...mcqText.matchAll(/\*\*Question\s+(\d+):\*\*[\s\S]*?(?=(?:\*\*Question\s+\d+:\*\*)|##|$)/gi)];
    if (qMatches.length === 0) return [];
    const questions = [];
    for (let i = 0; i < qMatches.length; i++) {
      const start = qMatches[i].index;
      const end = i + 1 < qMatches.length ? qMatches[i + 1].index : mcqText.length;
      const chunk = mcqText.slice(start, end).trim();
      const numMatch = chunk.match(/\*\*Question\s+(\d+):\*\*/i);
      const qNum = numMatch ? numMatch[1] : String(i + 1);
      let body = chunk.replace(/\*\*Question\s+\d+:\*\*/i, '').trim();
      const choiceMatches = [...body.matchAll(/^([A-E])\)\s+(.+)$/gmi)];
      const choices = choiceMatches.map(m => ({ letter: m[1], text: m[2].trim() }));
      let questionText = body;
      if (choices.length > 0) {
        const firstChoiceIdx = body.search(/^([A-E])\)/m);
        if (firstChoiceIdx !== -1) questionText = body.slice(0, firstChoiceIdx).trim();
      }
      questions.push({
        type: 'mcq',
        question: questionText,
        choices,
        correct: null,
        correctIndex: null,
        explanation: ''
      });
    }

    // Restrict to Multiple Choice Solutions subsection to avoid FRQ text
    const mcqSolStart = answerBlock.search(/##\s*Multiple Choice Solutions/i);
    const frqSolStart = answerBlock.search(/##\s*Free Response Solutions/i);
    if (mcqSolStart === -1) return questions;
    const mcqAnswersBlock = frqSolStart !== -1
      ? answerBlock.slice(mcqSolStart, frqSolStart)
      : answerBlock.slice(mcqSolStart);

    // Parse MCQ answer key: lines like "**1. C** - explanation..."
    const akSplits = [...mcqAnswersBlock.matchAll(/\*\*(\d+)\.\s*([A-E])\*\*/g)];
    const akBlocks = [];
    for (let i = 0; i < akSplits.length; i++) {
      const start = akSplits[i].index;
      const end = i + 1 < akSplits.length ? akSplits[i + 1].index : mcqAnswersBlock.length;
      const block = mcqAnswersBlock.slice(start, end).trim();
      const num = akSplits[i][1];
      const letter = akSplits[i][2];
      akBlocks.push({ num, letter, block });
    }

    const akMap = {};
    const explMap = {};
    for (const { num, letter, block } of akBlocks) {
      akMap[num] = letter;
      const cleaned = block.replace(/^\*\*\d+\.\s*[A-E]\*\*\s*-?\s*/i, '').trim();
      explMap[num] = cleaned;
    }

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const num = String(i + 1);
      const letter = akMap[num];
      if (!letter) continue;
      q.correct = letter;
      if (q.choices && q.choices.length) {
        q.correctIndex = q.choices.findIndex(c => c.letter.toUpperCase() === letter.toUpperCase());
      }
      if (explMap[num]) {
        q.explanation = explMap[num];
      }
    }
    return questions;
  }

  function parseMockFrq(fullContent, frqText, answerBlock) {
    const qMatches = [...frqText.matchAll(/###\s*Free Response Question\s*(\d+)/gi)];
    if (qMatches.length === 0) return [];
    const questions = [];
    for (let i = 0; i < qMatches.length; i++) {
      const start = qMatches[i].index;
      const end = i + 1 < qMatches.length ? qMatches[i + 1].index : frqText.length;
      const chunk = frqText.slice(start, end).trim();
      const num = qMatches[i][1];
      let body = chunk.replace(/###\s*Free Response Question\s*\d+/i, '').trim();
      // Strip any accidental 'ANSWER KEY' or later topline headings that may have been included
      const akHead = body.search(/#\s*.+ANSWER KEY/i);
      if (akHead !== -1) body = body.slice(0, akHead).trim();
      questions.push({
        type: 'frq',
        question: body,
        choices: [],
        correct: null,
        correctIndex: null,
        explanation: '',
        scoringGuidelines: ''
      });
    }

    // Restrict to Free Response Solutions subsection
    const frqSolStart = answerBlock.search(/##\s*Free Response Solutions/i);
    if (frqSolStart === -1) return questions;
    // Also detect the next top-level mock-exam header (e.g. "# LINEAR ALGEBRA ANSWER KEY")
    // so we can ensure FRQ 3's block doesn't extend past it.
    const footerHeaderMatch = answerBlock.slice(frqSolStart + 1).match(/\n#\s+/);
    const footerGlobalIndex = footerHeaderMatch
      ? frqSolStart + 1 + footerHeaderMatch.index
      : answerBlock.length;
    const frqAnswersBlock = answerBlock.slice(frqSolStart, footerGlobalIndex);

    // Attach scoring guidelines from answer block, under headers like "### FRQ 1 Solutions" or similar.
    const solMatches = [...frqAnswersBlock.matchAll(/###\s*FRQ\s*(\d+)\s*Solutions[\s\S]*?(?=(###\s*FRQ\s*\d+\s*Solutions|$))/gi)];
    const solMap = {};
    for (const m of solMatches) {
      const num = m[1];
      const full = m[0];
      const cleaned = full.replace(/###\s*FRQ\s*\d+\s*Solutions/i, '').trim();
      solMap[num] = cleaned;
    }

    questions.forEach((q, idx) => {
      const key = String(idx + 1);
      if (solMap[key]) q.scoringGuidelines = solMap[key];
    });

    // Ensure scoringGuidelines do not accidentally include a course-level ANSWER KEY header
    for (const q of questions) {
      if (!q.scoringGuidelines) continue;
      const akIdx = q.scoringGuidelines.search(/#\s*.+ANSWER KEY/i);
      if (akIdx !== -1) {
        q.scoringGuidelines = q.scoringGuidelines.slice(0, akIdx).trim();
      }
    }

    // Safety overrides for third FRQ scoring guidelines on mock exams where detection
    // might be too greedy. We hardcode the FRQ3 solutions for each mock exam file
    // so the 'COURSE NAME ANSWER KEY' footer doesn't leak into the guidelines.
    if (questions.length >= 3) {
      if (/LINEAR ALGEBRA MOCK EXAM/i.test(fullContent)) {
        questions[2].scoringGuidelines = `**(a)** Matrix representation:
$$[T] = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & -1 & 2 \\end{bmatrix}$$

**(b)** Kernel: Solve $A\ mathbf{x} = \ mathbf{0}$:
$$\\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & -1 & 2 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \ mathbf{0}$$

Row reduce: $$\\begin{bmatrix} 1 & 2 & -1 \\\\ 0 & -7 & 5 \\end{bmatrix}$$
From second row: $-7y + 5z = 0 \\implies y = \\frac{5z}{7}$. From first row: $x = -2y + z = -\\frac{3z}{7}$.

Basis for $\\ker(T)$: $\\left\\{\\begin{bmatrix} -3 \\\\ 5 \\\\ 7 \\end{bmatrix}\\right\\}$, $\\dim(\\ker(T)) = 1$.

**(c)** Image: spanned by columns $\\{[1,3]^T, [2,-1]^T\\}$ (linearly independent) — dimension 2.

**(d)** Rank-nullity: $2 + 1 = 3$.

**(e)** One-to-one: no (nontrivial kernel). Onto: yes (image = $\\mathbb{R}^2$).`;
      } else if (/ORDINARY DIFFERENTIAL EQUATIONS MOCK EXAM/i.test(fullContent)) {
        questions[2].scoringGuidelines = `**(a)** Matrix form:
$$\\begin{bmatrix} x' \\ y' \\end{bmatrix} = \\begin{bmatrix} 1 & -2 \\ 3 & -4 \\end{bmatrix}\\begin{bmatrix} x \\ y \\end{bmatrix}$$

**(b)** Eigenvalues: solve $\\det(A - \\lambda I) = 0$ gives $\\lambda^2 + 3\\lambda + 2 = 0$, so $\\lambda = -1, -2$.

**(c)** Eigenvectors: $\\lambda = -1$ gives $[1,1]^T$, $\\lambda = -2$ gives $[2,3]^T$.

**(d)** General solution: $c_1 e^{-t}[1,1]^T + c_2 e^{-2t}[2,3]^T$.

**(e)** Both eigenvalues negative → stable node; trajectories decay to origin.`;
      } else if (/MULTIVARIABLE CALCULUS MOCK EXAM/i.test(fullContent)) {
        questions[2].scoringGuidelines = `**(a)** Test for conservative:
$$P = 2xy + y^2, \\quad Q = x^2 + 2xy$$
$$\\frac{\\partial P}{\\partial y} = 2x + 2y, \\quad \\frac{\\partial Q}{\\partial x} = 2x + 2y$$

Since these match, $\\mathbf{F}$ is conservative.

**(b)** Find potential $f$:
$$f_x = 2xy + y^2 \\implies f = x^2y + xy^2 + g(y)$$
Then
$$f_y = x^2 + 2xy + g'(y) = x^2 + 2xy \\implies g'(y) = 0 \\Rightarrow g(y) = C$$

So a potential is $f(x, y) = x^2y + xy^2 + C$.

**(c)** Line integral via fundamental theorem: $f(1,2)-f(0,0) = 6$.

**(d)** Curl = 0 ⇒ circulation around closed curves = 0.`;
      }
    }
    return questions;
  }

export default CoursePage;
