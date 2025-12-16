import React, { useState, useEffect } from 'react';
import './QuizBox.css';
import katex from 'katex';

export default function QuizBox({ questions, categoryKey }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // for MCQ: choice index; for FRQ: unused
  const [submitted, setSubmitted] = useState(false);
  const [htmlCache, setHtmlCache] = useState({});

  useEffect(() => {
    let cancelled = false;
    async function convertAll() {
      // default fallback parse = identity (no markdown -> HTML conversion)
      let parseFallback = (s) => s;
      try {
        const mod = await import('marked');
        const parseLib = mod.marked?.parse ?? mod.default?.parse ?? mod.default ?? mod.marked;
        if (parseLib) parseFallback = parseLib;
      } catch (e) {
        // marked not available — we still want math to render via KaTeX, so use identity parse
        console.warn('marked not available in QuizBox, rendering raw Markdown with KaTeX only', e);
      }
      const map = {};
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        // convert question text, choices / guidelines, and explanation separately
        const qHtml = convertMathThenMarkdown(parseFallback, q.question);
        const choicesHtml = (q.type === 'frq'
          ? []
          : q.choices.map(c => convertMathThenMarkdown(parseFallback, c.text))
        );
        const explHtml = convertMathThenMarkdown(parseFallback, q.explanation || '');
        const guidelinesHtml = q.type === 'frq'
          ? convertMathThenMarkdown(parseFallback, q.scoringGuidelines || '')
          : '';
        map[i] = { question: qHtml, choices: choicesHtml, explanation: explHtml, guidelines: guidelinesHtml };
      }
      if (!cancelled) setHtmlCache(map);
    }
    convertAll();
    return () => { cancelled = true; };
  }, [questions]);

  function convertMathThenMarkdown(parse, txt){
    if (!txt) return '';
    // render block math $$..$$ and inline $..$
    const withBlockMath = txt.replace(/\$\$([\s\S]+?)\$\$/g, (m, expr) => {
      try { return katex.renderToString(expr, { displayMode: true, throwOnError: false }); }
      catch (e) { return m; }
    });
    const withAllMath = withBlockMath.replace(/(?<!\$)\$([^\n$]+?)\$(?!\$)/g, (m, expr) => {
      try { return katex.renderToString(expr, { displayMode: false, throwOnError: false }); }
      catch (e) { return m; }
    });
    try { return parse(withAllMath); } catch(e) { return withAllMath; }
  }

  function selectChoice(qIndex, choiceIndex) {
    if (submitted) return;
    const changed = [...answers];
    changed[qIndex] = choiceIndex;
    setAnswers(changed);
  }

  function next() {
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function prev() {
    if (index > 0) setIndex(index - 1);
  }

  function submit() {
    setSubmitted(true);
    setIndex(0);
  }

  const q = questions[index];
  const html = htmlCache[index] || {
    question: q.question,
    choices: q.choices ? q.choices.map(c=>c.text) : [],
    explanation: q.explanation,
    guidelines: q.scoringGuidelines || ''
  };

  return (
    <div className="quizbox-wrapper" data-category={categoryKey}>
      <div className="quizbox-body">
        <div className="quiz-question">
          <span style={{ fontWeight: 700, marginRight: '8px' }}>{index + 1}.</span>
          <span dangerouslySetInnerHTML={{ __html: html.question }} />
        </div>
        {q.type === 'frq' ? (
          submitted && (
            <div className="quiz-frq-feedback">
              <div className="quiz-frq-section">
                <div className="quiz-frq-label">Scoring Guidelines:</div>
                <div
                  className="quiz-frq-content"
                  dangerouslySetInnerHTML={{ __html: html.guidelines || html.explanation }}
                />
              </div>
            </div>
          )
        ) : (
          <>
            <div className="quiz-choices">
              {q.choices.map((choice, i) => {
                const selected = answers[index] === i;
                const correctIndex = q.correctIndex;
                const showResult = submitted;
                let className = 'quiz-choice';
                if (showResult) {
                  if (i === correctIndex) className += ' correct';
                  else if (selected && i !== correctIndex) className += ' incorrect';
                } else if (selected) {
                  className += ' selected';
                }
                return (
                  <div key={i} className={className} onClick={() => selectChoice(index, i)} role="button" tabIndex={0}>
                    <div className="choice-letter">{String.fromCharCode(65 + i)}</div>
                    <div className="choice-text" dangerouslySetInnerHTML={{ __html: html.choices[i] }} />
                  </div>
                );
              })}
            </div>
            {submitted && (
              <div className="quiz-explanation" dangerouslySetInnerHTML={{ __html: html.explanation }} />
            )}
          </>
        )}
      </div>
      <div className="quizbox-footer">
        <button className="btn-arrow btn-prev" onClick={prev} disabled={index === 0} aria-label="Previous">
          ←
        </button>
        <div style={{ flex: 1 }} />
        {index < questions.length - 1 ? (
          <button
            className="btn-arrow btn-next"
            onClick={next}
            disabled={q.type !== 'frq' && answers[index] == null}
            aria-label="Next"
          >
            →
          </button>
        ) : (
          <button
            className="btn-arrow btn-next"
            onClick={submit}
            disabled={
              submitted ||
              (q.type !== 'frq' && answers[index] == null)
            }
            aria-label="Submit"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
