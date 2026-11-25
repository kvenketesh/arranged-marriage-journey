import React from 'react';
import { Heart, Sparkles, MapPin, Calendar } from 'lucide-react';
import { CoupleProfile } from '../types';

interface FooterProps {
  profile: CoupleProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-[#24120C] text-[#FDF8EE] pt-16 pb-24 sm:pb-20 border-t-4 border-[#D4AF37]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Sacred Shlok Banner */}
        <div className="max-w-xl mx-auto mb-8 p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/30">
          <p className="font-serif-royal text-base sm:text-lg text-amber-200 tracking-wide">
            "మంగళం భగవాన్ విష్ణుః మంగళం గరుడధ్వజః। <br />
            మంగళం పుండరీకాక్షః మంగళాయ తనో హరిః॥"
          </p>
          <span className="text-[11px] text-amber-300/70 tracking-widest uppercase block mt-1">
            May this sacred alliance of two families be blessed with health, happiness & eternal unity
          </span>
        </div>

        {/* Couple Names */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="font-serif-royal text-2xl sm:text-3xl font-bold text-amber-100">
            {profile.groomName}
          </span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
          <span className="font-serif-royal text-2xl sm:text-3xl font-bold text-amber-100">
            {profile.brideName}
          </span>
        </div>

        <p className="font-script-romantic text-2xl text-amber-400 mb-8">
          The Arranged Marriage Journey • 06.05.2026 to 14.02.2027 & Forever
        </p>

        {/* 7-Milestone Recap Stream */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] mb-10 max-w-5xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-amber-400/40 text-amber-200">
            06.05.2026 • First Meet
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-rose-400/40 text-rose-200">
            01.07.2026 • Engagement
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-sky-400/40 text-sky-200">
            21.10.2026 • Beach Date
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-yellow-400/40 text-yellow-200">
            13.12.2026 • Pasupu Function (yet to happen)
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-emerald-400/40 text-emerald-200">
            08.02.2027 • Pandiri Rata (yet to happen)
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-400 text-red-200 font-bold">
            10.02.2027 • The Marriage 💍 (yet to happen)
          </span>
          <span className="text-amber-500">→</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-indigo-400/40 text-indigo-200">
            14.02.2027 • Reception (yet to happen)
          </span>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-6"></div>

        <p className="text-[11px] text-amber-200/60 font-sans-clean">
          An auspicious arranged marriage chronicle celebrating love, family elders, and sacred traditions.
        </p>
      </div>
    </footer>
  );
};
