import React from 'react';
import { Calendar, MapPin, Sparkles, Heart, Clock, ArrowRight, Play } from 'lucide-react';
import { CoupleProfile } from '../types';
import { sound, OccasionTrackId } from '../utils/audio';
import confetti from 'canvas-confetti';

interface HeroProps {
  profile: CoupleProfile;
  onExploreTimeline: () => void;
  onOpenPhotoStudio: () => void;
  onJumpToMilestone: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExploreTimeline,
  onOpenPhotoStudio,
  onJumpToMilestone
}) => {
  const triggerCelebration = () => {
    sound.playRingChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#8B1E19', '#F59E0B', '#E11D48', '#FFE4E6']
    });
  };

  const milestonesList = [
    { id: 'first-meet', date: '06.05.2026', title: '1. First Meet', sub: "Bride's Home with Family", color: 'border-amber-300 bg-amber-50/80 hover:border-amber-500' },
    { id: 'engagement', date: '01.07.2026', title: '2. Engagement', sub: 'Ring Exchange Ceremony', color: 'border-rose-300 bg-rose-50/80 hover:border-rose-500' },
    { id: 'pasupu', date: '13.10.2026', title: '3. Pasupu Function', sub: 'Sacred Haldi & Nalugu', color: 'border-yellow-300 bg-yellow-50/80 hover:border-yellow-500' },
    { id: 'beach-visit', date: '21.10.2026', title: '4. Beach Date', sub: 'Damad Ji Visit & Waves', color: 'border-sky-300 bg-sky-50/80 hover:border-sky-500' },
    { id: 'pandiri-rata', date: '08.02.2027', title: '5. Pandiri Rata', sub: 'Wedding Pandal Pooja', color: 'border-emerald-300 bg-emerald-50/80 hover:border-emerald-500' },
    { id: 'marriage', date: '10.02.2027', title: '6. The Marriage', sub: 'Kalyana Muhurtham', color: 'border-red-400 bg-red-50/90 hover:border-red-600 font-bold' },
    { id: 'reception', date: '14.02.2027', title: '7. Grand Reception', sub: "Valentine's Evening Gala", color: 'border-indigo-300 bg-indigo-50/80 hover:border-indigo-500' }
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FFF8E7]/60 via-[#FFFDF7] to-[#FFFDF7]">
      {/* Decorative Traditional Indian Arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Floating accents */}
      <div className="absolute top-12 left-3 text-2xl sm:text-3xl opacity-25 animate-float select-none">🪷</div>
      <div className="absolute top-20 right-4 text-2xl sm:text-3xl opacity-25 animate-float select-none" style={{ animationDelay: '1.5s' }}>🪷</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Auspicious Shlok Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100/90 border border-[#D4AF37]/50 shadow-sm text-[10px] sm:text-xs font-semibold text-[#8B1E19] tracking-wider uppercase">
            <span className="text-[#D97706]">शुभ विवाह</span>
            <span>•</span>
            <span>Auspicious Kalyana Vaibhogam</span>
          </div>
        </div>

        {/* Grand Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif-royal text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#8B1E19] leading-tight drop-shadow-sm">
            The Arranged Marriage Journey
          </h1>
          <p className="font-script-romantic text-2xl sm:text-4xl text-[#D97706] mt-1 sm:mt-2">
            7 Sacred Milestones: Living Room Tea to Eternal Vows
          </p>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm text-[#573926] leading-relaxed max-w-2xl mx-auto font-sans-clean px-2">
            Chronicles of <strong className="text-[#8B1E19]">{profile.groomName.split(' ')[0]}</strong> & <strong className="text-[#8B1E19]">{profile.brideName.split(' ')[0]}</strong>: 
            From the tea meet (<strong className="text-[#8B1E19]">06.05.2026</strong>) to the beach date (<strong className="text-sky-700">21.10.2026</strong>) and Grand Marriage (<strong className="text-red-700">10.02.2027</strong>).
          </p>
        </div>

        {/* Couple Portraits Spotlight - Mobile Optimized Side-by-Side */}
        <div className="flex items-center justify-center gap-3 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto">
          {/* Groom Card */}
          <div className="flex flex-col items-center group flex-1 sm:flex-initial">
            <div className="relative">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#8B1E19] to-[#D97706] shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={profile.groomPhoto}
                  alt={profile.groomName}
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#8B1E19] text-white text-[9px] sm:text-[10px] font-bold tracking-wider shadow">
                GROOM
              </span>
            </div>
            <h3 className="font-serif-royal text-sm sm:text-lg font-bold text-[#8B1E19] mt-2.5 text-center line-clamp-1">
              {profile.groomName.split(' ')[0]}
            </h3>
            <p className="text-[10px] sm:text-xs text-[#78350F] italic">"{profile.groomNickname}"</p>
          </div>

          {/* Central Sacred Knot / Heart */}
          <div className="flex flex-col items-center shrink-0 px-1">
            <div className="relative">
              <button
                onClick={triggerCelebration}
                title="Shower Rose Petals & Confetti"
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8B1E19] to-[#B91C1C] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all group border-2 border-[#D4AF37]"
              >
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-amber-200 fill-amber-200 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#8B1E19] mt-1.5 tracking-wider uppercase">
              Bandham
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#78350F] font-mono font-bold">
              10 Feb 2027 💍
            </span>
          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center group flex-1 sm:flex-initial">
            <div className="relative">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D97706] via-[#B91C1C] to-[#D4AF37] shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={profile.bridePhoto}
                  alt={profile.brideName}
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#D97706] text-white text-[9px] sm:text-[10px] font-bold tracking-wider shadow">
                BRIDE
              </span>
            </div>
            <h3 className="font-serif-royal text-sm sm:text-lg font-bold text-[#8B1E19] mt-2.5 text-center line-clamp-1">
              {profile.brideName.split(' ')[0]}
            </h3>
            <p className="text-[10px] sm:text-xs text-[#78350F] italic">"{profile.brideNickname}"</p>
          </div>
        </div>

        {/* 7 Milestones Quick Navigation Bar - Mobile Horizontal Swipeable Track */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#78350F] uppercase tracking-wider">
              ✦ All 7 Ceremonies ✦
            </span>
            <span className="text-[10px] text-[#8B1E19] font-medium sm:hidden">
              Swipe left/right →
            </span>
          </div>

          {/* Swipe container on mobile, grid on desktop */}
          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-2 px-2 sm:mx-0 sm:px-0">
            {milestonesList.map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  onJumpToMilestone(m.id);
                  sound.playTrack(m.id as OccasionTrackId);
                }}
                className={`p-2.5 sm:p-3 rounded-2xl border cursor-pointer shrink-0 w-32 sm:w-auto snap-center transition-all hover:scale-105 active:scale-95 hover:shadow-md ${m.color} text-center flex flex-col justify-between`}
              >
                <span className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/90 text-[#8B1E19] block mb-1">
                  {m.date}
                </span>
                <h5 className="font-serif-royal text-[11px] sm:text-xs font-bold text-[#8B1E19] line-clamp-1">
                  {m.title}
                </h5>
                <p className="text-[9px] sm:text-[10px] text-[#573926] opacity-80 line-clamp-1 mt-0.5">
                  {m.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons - Mobile Touch Friendly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 px-2">
          <button
            onClick={() => {
              onExploreTimeline();
              if (!sound.getState().isPlaying) {
                sound.playTrack('first-meet');
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>Explore Storyline & Music</span>
          </button>

          <button
            onClick={onOpenPhotoStudio}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#8B1E19] font-bold text-xs sm:text-sm border-2 border-[#D4AF37] shadow-sm hover:bg-amber-50 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
            <span>Upload Real Photos in Studio</span>
          </button>
        </div>
      </div>
    </section>
  );
};
