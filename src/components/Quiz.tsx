import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import { Trophy, RefreshCcw, CheckCircle2, XCircle } from 'lucide-react';

const Icons = { Trophy, RefreshCcw, CheckCircle2, XCircle };

interface QuizProps {
  questions: Question[];
  topicTitle: string;
}

interface UserAnswer {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
}

export const Quiz: React.FC<QuizProps> = ({ questions, topicTitle }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [viewMode, setViewMode] = useState<'test' | 'review'>('test');

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
    };

    const newUserAnswers = [...userAnswers, newAnswer];
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
    setHasAnswered(false);
    setViewMode('test');
  };

  const score = userAnswers.filter(a => a.isCorrect).length;

  if (showResult && viewMode === 'test') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-academy-card p-10 rounded-3xl shadow-xl border border-academy-border text-center"
      >
        <div className="w-20 h-20 bg-academy-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-academy-green-primary/30">
          <Trophy className="text-academy-green-primary w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-academy-text-primary mb-4">Test Completed!</h3>
        <p className="text-lg text-academy-text-secondary mb-8">You scored <span className="text-academy-green-primary font-bold">{score}</span> out of {questions.length}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setViewMode('review')} className="px-6 py-3 rounded-xl font-bold bg-academy-bg border border-academy-border text-academy-text-primary hover:border-academy-green-primary transition-all">
            Review Answers
          </button>
          <button onClick={resetQuiz} className="btn-primary">
            Retake Test
          </button>
        </div>
      </motion.div>
    );
  }

  if (showResult && viewMode === 'review') {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-academy-text-primary">Review: {topicTitle}</h3>
          <button onClick={resetQuiz} className="text-academy-green-primary font-bold hover:underline">
            Back to Start
          </button>
        </div>

        <div className="space-y-6">
          {questions.map((q, idx) => {
            const answer = userAnswers.find(a => a.questionId === q.id);
            return (
              <div key={q.id} className={`p-6 rounded-2xl border ${answer?.isCorrect ? 'border-academy-green-primary/30 bg-academy-green-primary/5' : 'border-red-500/30 bg-red-500/5'}`}>
                <p className="font-bold text-academy-text-primary mb-4">{idx + 1}. {q.text}</p>
                <div className="grid gap-2">
                  {q.options.map((opt, optIdx) => {
                    let style = "text-sm p-3 rounded-lg border ";
                    if (optIdx === q.correctAnswer) style += "bg-academy-green-primary/20 border-academy-green-primary text-academy-green-primary font-bold";
                    else if (optIdx === answer?.selectedOption && !answer.isCorrect) style += "bg-red-500/20 border-red-500 text-red-500";
                    else style += "bg-academy-bg border-academy-border text-academy-text-secondary";
                    
                    return <div key={optIdx} className={style}>{opt}</div>;
                  })}
                </div>
                <p className="mt-4 text-xs text-academy-text-secondary italic">
                  <strong className="text-academy-green-primary">Explanation:</strong> {q.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-academy-green-primary uppercase tracking-widest">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-academy-text-primary leading-relaxed">
          {currentQuestion.text}
        </h3>

        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            
            let buttonStyle = "w-full text-left p-4 rounded-xl border transition-all duration-200 ";
            if (hasAnswered) {
              if (isCorrect) buttonStyle += "bg-academy-green-primary/20 border-academy-green-primary text-academy-green-primary font-bold";
              else if (isSelected) buttonStyle += "bg-red-500/20 border-red-500 text-red-500";
              else buttonStyle += "bg-academy-bg border-academy-border text-academy-text-secondary opacity-50";
            } else {
              buttonStyle += "bg-academy-bg border-academy-border text-academy-text-secondary hover:border-academy-green-primary/50";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={hasAnswered}
                className={buttonStyle}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {hasAnswered && isCorrect && <Icons.CheckCircle2 size={18} className="text-academy-green-primary" />}
                  {hasAnswered && isSelected && !isCorrect && <Icons.XCircle size={18} className="text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className={`p-4 rounded-xl text-sm ${selectedOption === currentQuestion.correctAnswer ? 'bg-academy-green-primary/10 text-academy-green-primary' : 'bg-red-500/10 text-red-500'}`}>
                <p className="font-bold mb-1">{selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}</p>
                <p className="opacity-80">{currentQuestion.explanation}</p>
              </div>
              
              <button
                onClick={handleNext}
                className="w-full py-4 text-lg font-bold rounded-xl transition-all bg-academy-green-primary text-white shadow-lg hover:bg-academy-green-secondary"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
