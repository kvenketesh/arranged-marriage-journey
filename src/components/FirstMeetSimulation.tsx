import React, { useState } from 'react';
import { Coffee, Heart, Sparkles, CheckCircle2, RotateCcw, Award, Users } from 'lucide-react';
import { CoupleProfile } from '../types';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface FirstMeetSimulationProps {
  profile: CoupleProfile;
  onContinueToEngagement: () => void;
}

export const FirstMeetSimulation: React.FC<FirstMeetSimulationProps> = ({
  profile,
  onContinueToEngagement
}) => {
  const [step, setStep] = useState<number>(0);
  const [chemistry, setChemistry] = useState<number>(25);
  const [history, setHistory] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const dialoguePhases = [
    {
      title: 'Scene 1: The Living Room Tea Tray Arrival',
      subtitle: 'May 6, 2026 • 11:45 AM • In front of 18 family elders',
      context:
        `Rohan sat upright on the sofa with both hands on his knees, surrounded by his parents, uncle, and grandmother. The door opened and ${profile.brideName} stepped into the living room, holding a silver tray with steaming cardamom tea and kaju katlis.`,
      question: `As ${profile.brideName} handed Rohan his cup of tea, their eyes met for the very first time. What was Rohan's reaction?`,
      options: [
        {
          label: 'A polite smile and nervous hands',
          dialogue: 'He said "Dhanyawad" so softly that only she could hear, and took three packets of sugar without noticing!',
          score: 25,
          reaction: 'Pooja secretly smiled seeing how down-to-earth and endearingly nervous he was.'
        },
        {
          label: 'Complimented the aroma of cardamom tea',
          dialogue: '"This smells like authentic homemade elaichi chai, my absolute favorite."',
          score: 25,
          reaction: "Pooja's mother beamed with pride from the kitchen door!"
        },
        {
          label: 'A respectful bow and warm eye contact',
          dialogue: 'He held the cup gently and said: "Thank you for the warm welcome."',
          score: 20,
          reaction: "Grandmother nodded approvingly: 'Such good sanskaars!'"
        }
      ]
    },
    {
      title: 'Scene 2: The 15-Minute Balcony Escapade',
      subtitle: 'May 6, 2026 • 12:15 PM • Away from the elders\' watchful eyes',
      context:
        `The elders coughed politely and said: "Beta, why don't you both sit outside in the garden verandah and talk comfortably?" Once the door closed behind them, the heavy formal silence broke.`,
      question: `Who broke the ice on the balcony and how?`,
      options: [
        {
          label: 'Rohan asked the candid arranged marriage question',
          dialogue: '"Be honest with me... did your parents force you to dress up like this, or are you happy to chat?"',
          score: 30,
          reaction: `${profile.brideName} burst out laughing! "I was going to ask you the exact same thing!" Tension = 0.`
        },
        {
          label: 'Pooja laughed about the family interrogation',
          dialogue: '"My uncle is probably outside writing your answers in a spreadsheet right now!"',
          score: 30,
          reaction: 'Rohan laughed out loud and loosened his collar: "I prepared for this like an interview!"'
        },
        {
          label: 'They bonded over weekend escapes and chai',
          dialogue: '"Do you like spontaneous road trips, or are you an introverted Netflix person?"',
          score: 25,
          reaction: 'They realized they had the exact same playlist of 90s retro melodies and love for roadside dhabas!'
        }
      ]
    },
    {
      title: 'Scene 3: The Green Signal (हाँ!)',
      subtitle: 'May 6, 2026 • 12:45 PM • The Final Verdict',
      context:
        `Fifteen minutes flew by like three seconds. When they walked back into the living room, the entire family was looking at their faces, waiting for a signal. Both of them couldn't hide their genuine smiles.`,
      question: `What sealed the deal before everyone said yes?`,
      options: [
        {
          label: 'A secret nod between the couple',
          dialogue: 'Rohan glanced at Pooja, she nodded gently, and Rohan turned to his parents: "Ma, Pa... it is a resounding YES from my side."',
          score: 30,
          reaction: 'Both mothers hugged with tears of joy, and fathers fed each other Kaju Katli!'
        },
        {
          label: 'The grandmother offered her heirloom kada',
          dialogue: 'Dadi ji took Pooja\'s hands into hers and blessed her: "You are the Lakshmi our family has been praying for."',
          score: 30,
          reaction: 'Temple bells rang in spirit and July 1st was immediately locked for Engagement!'
        }
      ]
    }
  ];

  const currentPhase = dialoguePhases[step];

  const handleSelectOption = (opt: { dialogue: string; score: number; reaction: string }) => {
    sound.playTeaClink();
    const newScore = Math.min(100, chemistry + opt.score);
    setChemistry(newScore);
    setHistory([...history, opt.dialogue]);

    if (step < dialoguePhases.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
      sound.playRingChime();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#8B1E19', '#F59E0B']
      });
    }
  };

  const handleReset = () => {
    setStep(0);
    setChemistry(25);
    setHistory([]);
    setCompleted(false);
  };

  return (
    <div className="py-6 sm:py-12 px-3 sm:px-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[10px] sm:text-xs font-semibold text-[#8B1E19] mb-2 sm:mb-3">
          <Coffee className="w-3.5 h-3.5 text-[#D97706]" />
          <span>May 6, 2026 • Interactive Rishta Baithak Simulator</span>
        </div>
        <h2 className="font-serif-royal text-2xl sm:text-5xl font-bold text-[#8B1E19]">
          The First Meet: Living Room to Balcony
        </h2>
        <p className="font-script-romantic text-xl sm:text-3xl text-[#D97706] mt-0.5 sm:mt-1">
          Relive the butterflies, the tea tray, and the spark
        </p>
      </div>

      {/* Chemistry Meter */}
      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#D4AF37]/40 shadow-sm mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
          <span className="flex items-center gap-1.5 text-[#8B1E19]">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Arranged Marriage Chemistry</span>
          </span>
          <span className="font-mono text-sm text-[#D97706]">{chemistry}%</span>
        </div>
        <div className="w-full h-2.5 sm:h-3 rounded-full bg-amber-100 overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-[#8B1E19] transition-all duration-500"
            style={{ width: `${chemistry}%` }}
          ></div>
        </div>
      </div>

      {!completed ? (
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/30 shadow-lg">
          {/* Phase Header */}
          <div className="border-b border-amber-100 pb-3 mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-0.5">
              {currentPhase.subtitle}
            </span>
            <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-[#8B1E19]">
              {currentPhase.title}
            </h3>
          </div>

          {/* Context Story */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-xs sm:text-sm text-[#573926] leading-relaxed mb-4 sm:mb-6">
            {currentPhase.context}
          </div>

          {/* Question */}
          <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19] mb-3 sm:mb-4">
            {currentPhase.question}
          </h4>

          {/* Choice Buttons */}
          <div className="space-y-2.5 sm:space-y-3">
            {currentPhase.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(opt)}
                className="w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 hover:border-[#8B1E19] hover:bg-amber-50/80 transition-all duration-200 group shadow-sm active:scale-[0.98]"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-[#8B1E19] group-hover:text-amber-800">
                    Option {String.fromCharCode(65 + i)}: {opt.label}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#D97706] shrink-0">
                    +{opt.score}%
                  </span>
                </div>
                <p className="text-xs text-[#573926] mt-1.5 italic">
                  "{opt.dialogue}"
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#78350F] mt-1 opacity-80">
                  Result: {opt.reaction}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Completion State */
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 border-2 border-[#D4AF37] shadow-xl text-center animate-fadeIn">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto bg-gradient-to-tr from-[#8B1E19] to-[#D97706] text-white flex items-center justify-center text-3xl sm:text-4xl shadow-md mb-3">
            💍
          </div>
          <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-[#8B1E19]">
            It Was an Instant "हाँ!" (Match Made in Heaven)
          </h3>
          <p className="font-script-romantic text-xl sm:text-2xl text-[#D97706] mt-1">
            Chemistry: 100% Soulmate Compatibility
          </p>

          <p className="text-xs sm:text-sm text-[#573926] leading-relaxed max-w-lg mx-auto mt-3">
            From the nervous tea cup to laughing on the verandah, May 6, 2026 transformed two families into one!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mt-6">
            <button
              onClick={onContinueToEngagement}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white text-xs font-bold shadow hover:scale-105 active:scale-95 transition-all"
            >
              Go to 1 July Engagement →
            </button>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white text-[#78350F] border border-amber-300 text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay First Meet</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
