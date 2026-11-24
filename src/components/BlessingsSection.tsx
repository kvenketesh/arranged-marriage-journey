import React, { useState } from 'react';
import { Heart, Sparkles, MessageSquareHeart, Users, Send } from 'lucide-react';
import { FamilyMember, Blessing, CoupleProfile } from '../types';
import { familyMembers, defaultBlessings } from '../data/marriageData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface BlessingsSectionProps {
  profile: CoupleProfile;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ profile }) => {
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    const saved = localStorage.getItem('indian_marriage_blessings');
    return saved ? JSON.parse(saved) : defaultBlessings;
  });

  const [author, setAuthor] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState('🪷');

  const symbols = ['🪷', '💖', '💍', '🪔', '🌾', '🎉', '🌊'];

  const handleSubmitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: `b-${Date.now()}`,
      author: author.trim(),
      relation: relation.trim() || 'Well Wisher',
      message: message.trim(),
      timestamp: 'Just now',
      symbol: selectedSymbol
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    localStorage.setItem('indian_marriage_blessings', JSON.stringify(updated));

    setAuthor('');
    setRelation('');
    setMessage('');

    sound.playRingChime();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#8B1E19', '#F43F5E']
    });
  };

  return (
    <div className="py-6 sm:py-12 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[10px] sm:text-xs font-semibold text-[#8B1E19] mb-2 sm:mb-3">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Aashirwaad & Family Voices</span>
        </div>
        <h2 className="font-serif-royal text-2xl sm:text-5xl font-bold text-[#8B1E19]">
          Blessings & Khandaan
        </h2>
        <p className="font-script-romantic text-xl sm:text-3xl text-[#D97706] mt-0.5 sm:mt-1">
          Surrounded by the infinite love of family
        </p>
      </div>

      {/* The Khandaan / Family Roster */}
      <div className="mb-10 sm:mb-14">
        <h3 className="font-serif-royal text-lg sm:text-2xl font-bold text-[#8B1E19] mb-4 sm:mb-6 flex items-center gap-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
          <span>The Key Pillars of the Arranged Match</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {familyMembers.map(member => (
            <div
              key={member.id}
              className="p-4 rounded-xl sm:rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
                <span className="text-2xl sm:text-3xl shrink-0">
                  {member.avatar}
                </span>
                <div>
                  <h4 className="font-serif-royal text-sm sm:text-base font-bold text-[#8B1E19]">
                    {member.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-[#78350F] font-semibold">
                    {member.relation}
                  </span>
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-[#573926] leading-relaxed mb-1.5">
                <strong className="text-[#8B1E19]">First Meet: </strong>
                {member.firstMeetReaction}
              </p>
              <p className="text-[10px] sm:text-[11px] text-[#78350F] italic">
                "{member.funFact}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Blessing Input Form & Wall */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Write a Blessing Form */}
        <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border sm:border-2 border-[#D4AF37]/40 shadow-lg">
          <h4 className="font-serif-royal text-lg sm:text-xl font-bold text-[#8B1E19] mb-1.5 flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Leave a Sacred Blessing (ఆశీర్వాదం)</span>
          </h4>
          <p className="text-[11px] sm:text-xs text-[#78350F] mb-3">
            Send your warm wishes for {profile.groomName.split(' ')[0]} & {profile.brideName.split(' ')[0]}'s wedding.
          </p>

          <form onSubmit={handleSubmitBlessing} className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="e.g. Dadi, Chacha, Friend..."
                className="w-full px-3 py-2 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-[#2C1810] focus:ring-1 focus:ring-[#8B1E19] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                Relation / From
              </label>
              <input
                type="text"
                value={relation}
                onChange={e => setRelation(e.target.value)}
                placeholder="e.g. Groom's Cousin, College Bestie..."
                className="w-full px-3 py-2 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-[#2C1810] focus:ring-1 focus:ring-[#8B1E19] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                Auspicious Symbol
              </label>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                {symbols.map(sym => (
                  <button
                    key={sym}
                    type="button"
                    onClick={() => setSelectedSymbol(sym)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-base flex items-center justify-center shrink-0 transition-all ${
                      selectedSymbol === sym
                        ? 'bg-amber-200 border-2 border-[#8B1E19] scale-105 shadow-sm'
                        : 'bg-amber-50 border border-amber-200'
                    }`}
                  >
                    {sym}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                Blessing Message
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={3}
                placeholder="May your journey from 6 May to eternity be filled with joy..."
                className="w-full px-3 py-2 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-[#2C1810] focus:ring-1 focus:ring-[#8B1E19] focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white text-xs font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Blessing & Petals</span>
            </button>
          </form>
        </div>

        {/* Live Blessings Wall */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="font-serif-royal text-lg sm:text-xl font-bold text-[#8B1E19] mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Blessing Wall ({blessings.length})</span>
          </h4>

          <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
            {blessings.map(b => (
              <div
                key={b.id}
                className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm flex items-start gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-base shrink-0">
                  {b.symbol}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-bold text-[#8B1E19] truncate">
                      {b.author}
                    </span>
                    <span className="text-[9px] text-[#78350F]/70 shrink-0">
                      {b.timestamp}
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-[#78350F] font-semibold inline-block mb-1">
                    {b.relation}
                  </span>
                  <p className="text-[11px] sm:text-xs text-[#573926] leading-relaxed">
                    "{b.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
