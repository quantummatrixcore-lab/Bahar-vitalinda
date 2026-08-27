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
        title: "Yüz Lifting Hacamatı & Gua Sha Masajı",
        desc: "Yüz ovalinizi toparlamak, ödemi tahliye etmek ve kolajen üretimini tetiklemek için ideal başlangıç seansı.",
        service: "Yüz Lifting Hacamatı"
      };
    } else if (answers.q1 === 2 || answers.q2 === 2) {
      return {
        title: "Sağlık İçin Hacamat & Analiz Sonrası Yüz Masajı",
        desc: "Sırt, boyun ve yüz gerginliklerinizi çözmek, kan dolaşımını hızlandırıp detoks sağlamak için en etkili ikili.",
        service: "Sağlık İçin Hacamat"
      };
    } else {
      return {
        title: "Kadının Doğal Güzellik ve Beden Dengesi Eğitimi",
        desc: "Kendi yüzünüzü ve bedeninizi tanıyıp evinizde sürdürülebilir bir bakım ve postür rutini kurmanız için 7 modüllük özel akademi.",
        service: "Kadının Doğal Güzellik ve Beden Dengesi Eğitimi"
      };
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ q1: null, q2: null });
  };

  return (
    <section id="quiz" className="py-20 md:py-28 bg-[#FCF8F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3E5DC] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.quiz.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D]">
            {t.quiz.title}
          </h2>

          <p className="text-base text-[#614F4C] max-w-xl mx-auto">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Quiz Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBDCD4] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 bg-[#D4AF37] transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="font-serif-luxury font-bold text-xl sm:text-2xl text-[#2D1B1D]">
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
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#EBDCD4] hover:border-[#D4AF37] hover:bg-[#FAF3F0] transition-all font-medium text-sm text-[#3B2B28] flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-[#8C6D68] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="font-serif-luxury font-bold text-xl sm:text-2xl text-[#2D1B1D]">
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
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#EBDCD4] hover:border-[#D4AF37] hover:bg-[#FAF3F0] transition-all font-medium text-sm text-[#3B2B28] flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-[#8C6D68] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F8EAE4] text-[#8B3A4A] flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6D68]">
                  {t.quiz.resultTitle}
                </span>
                <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#2D1B1D] mt-2">
                  {getRecommendation().title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C4A47] max-w-lg mx-auto mt-3 leading-relaxed">
                  {getRecommendation().desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onSelectServiceForBooking(getRecommendation().service)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#2D1B1D] to-[#4A2E30] text-[#FAF4F0] px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
                >
                  <span>{t.quiz.bookResult}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#E0CBC2] text-xs font-semibold text-[#665451] hover:bg-[#FAF3F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
