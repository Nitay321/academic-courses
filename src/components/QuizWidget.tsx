import { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle } from 'lucide-react';
import type { QuizQuestion } from '../data/chapters';
import { RichText } from './MathRenderer';
import { useAppContext } from '../App';

export default function QuizWidget({ questions }: { questions: QuizQuestion[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const { language } = useAppContext();

  if (!questions || questions.length === 0) return null;

  const isHe = language === 'he';

  const q = questions[currentIdx];
  const isCorrect = selectedOpt === q.correctAnswerIndex;

  // Selected translations
  const questionText = isHe ? (q.questionHe || q.question) : q.question;
  const optionsText = isHe ? (q.optionsHe || q.options) : q.options;
  const explanationText = isHe ? (q.explanationHe || q.explanation) : q.explanation;

  const lHeader = isHe ? 'בדיקת ידע מהירה' : 'Knowledge Check';
  const lCorrect = isHe ? 'תשובה נכונה!' : 'Correct!';
  const lIncorrect = isHe ? 'תשובה שגויה' : 'Incorrect';
  const lNext = isHe ? 'לשאלה הבאה' : 'Next Question';

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelectedOpt(idx);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
      setShowAnswer(false);
    }
  };

  return (
    <div className="glass-card" style={{ marginTop: '3rem', borderColor: 'var(--warning)', whiteSpace: 'normal', wordBreak: 'break-word' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <HelpCircle size={28} color="var(--warning)" />
        <h2 style={{ margin: 0 }}>{lHeader}</h2>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>
          <RichText text={questionText} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {optionsText.map((opt, idx) => {
          let bg = 'rgba(255,255,255,0.05)';
          let border = '1px solid var(--surface-border)';
          
          if (showAnswer) {
            if (idx === q.correctAnswerIndex) {
              bg = 'rgba(16, 185, 129, 0.2)';
              border = '1px solid var(--success)';
            } else if (idx === selectedOpt) {
              bg = 'rgba(239, 68, 68, 0.2)';
              border = '1px solid var(--error)';
            }
          }

          return (
            <div 
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                background: bg,
                border: border,
                cursor: showAnswer ? 'default' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <RichText text={opt} />
            </div>
          );
        })}
      </div>

      {showAnswer && (
        <div className="animate-fade-in" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: 'var(--radius-md)', background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {isCorrect ? <CheckCircle color="var(--success)" /> : <AlertCircle color="var(--error)" />}
            <h4 style={{ margin: 0, color: isCorrect ? 'var(--success)' : 'var(--error)' }}>
              {isCorrect ? lCorrect : lIncorrect}
            </h4>
          </div>
          <div>
            <RichText text={explanationText} />
          </div>
        </div>
      )}

      {showAnswer && currentIdx < questions.length - 1 && (
        <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={handleNext}>
          {lNext}
        </button>
      )}
    </div>
  );
}
