import React, { useState } from 'react';
import { Sparkles, HelpCircle, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

export const Quiz = ({ t, onSelectServiceForBooking }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: null, q2: null });

  const handleSelect = (question, val) => {
    const updated = { ...answers, [question]: val };
    setAnswers(updated);
    if (question === 'q1') {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const getRecommendation = () => {
    if (answers.q1 === 1 || answers.q2 === 1) {
      return {
        title: t.ui.quiz.r1Title,
        desc: t.ui.quiz.r1Desc,
        service: t.services.items[2]?.name
      };
    } else if (answers.q1 === 2 || answers.q2 === 2) {
      return {
        title: t.ui.quiz.r2Title,
        desc: t.ui.quiz.r2Desc,
        service: t.services.items[1]?.name
      };
    } else {
      return {
        title: t.academy.title,
        desc: t.ui.quiz.r3Desc,
        service: t.academy.title
      };
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ q1: null, q2: null });
  };

  return (
    <section id="quiz" className="py-20 md:py-28 bg-ivory relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-rose-deep">
            <span>{t.quiz.badge}</span>
          </div>

          <h2 className="font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.quiz.title}
          </h2>

          <p className="text-base text-muted max-w-xl mx-auto">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Quiz Card Box */}
        <div className="bg-white rounded-[1.75rem] p-6 sm:p-10 border border-line shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 bg-gold transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="font-serif-luxury font-semibold text-xl sm:text-2xl text-ink">
                {t.quiz.q1}
              </h3>
              <div className="space-y-3">
                {[
                  { id: 1, text: t.quiz.q1_opt1 },
                  { id: 2, text: t.quiz.q1_opt2 },
                  { id: 3, text: t.quiz.q1_opt3 }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('q1', opt.id)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-line hover:border-gold hover:bg-ivory transition-all font-medium text-sm text-ink-soft flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-stone group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="font-serif-luxury font-semibold text-xl sm:text-2xl text-ink">
                {t.quiz.q2}
              </h3>
              <div className="space-y-3">
                {[
                  { id: 1, text: t.quiz.q2_opt1 },
                  { id: 2, text: t.quiz.q2_opt2 },
                  { id: 3, text: t.quiz.q2_opt3 }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('q2', opt.id)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-line hover:border-gold hover:bg-ivory transition-all font-medium text-sm text-ink-soft flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-stone group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-cream text-rose-deep flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>

              <div>
                <span className="text-sm font-medium text-stone">
                  {t.quiz.resultTitle}
                </span>
                <h3 className="font-serif-luxury font-semibold text-2xl sm:text-3xl text-ink mt-2">
                  {getRecommendation().title}
                </h3>
                <p className="text-sm sm:text-base text-ink-soft max-w-lg mx-auto mt-3 leading-relaxed">
                  {getRecommendation().desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onSelectServiceForBooking(getRecommendation().service)}
                  className="w-full sm:w-auto bg-ink hover:bg-olive-800 text-ivory px-8 py-4 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-gold/50 cursor-pointer"
                >
                  <span>{t.quiz.bookResult}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-4 rounded-full border border-line text-xs font-semibold text-muted hover:bg-ivory transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.quiz.takeQuizAgain}</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
