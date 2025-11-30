import React, { useState, useEffect } from 'react';
import './QuizBox.css';
import katex from 'katex';

export default function QuizBox({ questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [htmlCache, setHtmlCache] = useState({});

  useEffect(() => {
    let cancelled = false;
    async function convertAll() {
      try {
        const mod = await import('marked');
        const parse = mod.marked?.parse ?? mod.default?.parse ?? mod.default ?? mod.marked;
        const map = {};
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          // convert question text, choices, and explanation separately
          const qHtml = convertMathThenMarkdown(parse, q.question);
          const choicesHtml = q.choices.map(c => convertMathThenMarkdown(parse, c.text));
          const explHtml = convertMathThenMarkdown(parse, q.explanation || '');
          map[i] = { question: qHtml, choices: choicesHtml, explanation: explHtml };
        }
        if (!cancelled) setHtmlCache(map);
      } catch (e) {
        // leave empty and show raw markdown fallback
        if (!cancelled) setHtmlCache({});
      }
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
  const html = htmlCache[index] || { question: q.question, choices: q.choices.map(c=>c.text), explanation: q.explanation };

  return (
    <div className="quizbox-wrapper">
      <div className="quizbox-header" style={{ borderImage: 'linear-gradient(135deg, #FF6B6B, #9B59B6) 1' }}>
        <div className="quizbox-title">Practice</div>
        <div className="quizbox-subtitle">Question {index+1} of {questions.length}</div>
      </div>
      <div className="quizbox-body">
        <div className="quiz-question" dangerouslySetInnerHTML={{ __html: html.question }} />
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
      </div>
      <div className="quizbox-footer">
        <div className="quiz-controls">
          <button className="btn-ghost" onClick={prev} disabled={index === 0}>Previous</button>
          {index < questions.length - 1 ? (
            <button className="btn-primary" onClick={next} disabled={answers[index] == null}>Next</button>
          ) : (
            <button className="btn-primary" onClick={submit} disabled={submitted || answers[index] == null}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}
