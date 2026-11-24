import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Heart, Camera, Music } from 'lucide-react';
import { sound, OccasionTrackId } from '../utils/audio';
import { CoupleProfile } from '../types';

interface NavbarProps {
  profile: CoupleProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPhotoStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeTab,
  setActiveTab,
  onOpenPhotoStudio
}) => {
  const [audioState, setAudioState] = useState(sound.getState());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = sound.subscribe(setAudioState);
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMusic = () => {
    sound.togglePlayPause();
  };

  const handleTrackSwitch = (trackId: OccasionTrackId) => {
    sound.playTrack(trackId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/30 py-2 sm:py-2.5'
          : 'bg-[#FFFDF7]/90 backdrop-blur-sm border-b border-[#D4AF37]/20 py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between gap-2">
          {/* Couple Logo & Names */}
          <div
            onClick={() => setActiveTab('journey')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#8B1E19] to-[#D97706] flex items-center justify-center text-white shadow-sm shrink-0">
              <span className="text-base sm:text-xl">🪷</span>
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-serif-royal text-base sm:text-2xl font-bold text-[#8B1E19] tracking-wide">
                  {profile.groomName.split(' ')[0]}
                </span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600 fill-rose-600 animate-pulse" />
                <span className="font-serif-royal text-base sm:text-2xl font-bold text-[#8B1E19] tracking-wide">
                  {profile.brideName.split(' ')[0]}
                </span>
              </div>
              <p className="text-[9px] sm:text-[11px] font-sans-clean font-medium text-[#78350F] tracking-wider uppercase hidden xs:block">
                Arranged Marriage Odyssey
              </p>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFF8E7] p-1.5 rounded-full border border-[#D4AF37]/30 shadow-inner">
            <button
              onClick={() => {
                setActiveTab('journey');
                sound.playTeaClink();
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'journey'
                  ? 'bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white shadow-sm'
                  : 'text-[#78350F] hover:text-[#8B1E19] hover:bg-amber-100/50'
              }`}
            >
              📖 7 Chapters
            </button>
            <button
              onClick={() => {
                setActiveTab('beach');
                handleTrackSwitch('beach-visit');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'beach'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-sm'
                  : 'text-[#78350F] hover:text-[#0284C7] hover:bg-sky-100/50'
              }`}
            >
              🌊 21 Oct Beach
            </button>
            <button
              onClick={() => {
                setActiveTab('icebreaker');
                handleTrackSwitch('first-meet');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'icebreaker'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-sm'
                  : 'text-[#78350F] hover:text-[#D97706] hover:bg-amber-100/50'
              }`}
            >
              ☕ 6 May First Meet
            </button>
            <button
              onClick={() => {
                setActiveTab('blessings');
                handleTrackSwitch('marriage');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'blessings'
                  ? 'bg-gradient-to-r from-[#8B1E19] to-[#D97706] text-white shadow-sm'
                  : 'text-[#78350F] hover:text-[#8B1E19] hover:bg-amber-100/50'
              }`}
            >
              💌 Blessings
            </button>
          </nav>

          {/* Right Action Controls: Audio Ambience & Photo Upload Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Occasion Music Switcher (Desktop) */}
            <div className="hidden xl:flex items-center bg-[#FFF8E7] rounded-full px-2 py-1 border border-[#D4AF37]/30 text-xs text-[#78350F]">
              <span className="mr-1 text-[10px] font-medium opacity-75">Music:</span>
              <button
                onClick={() => handleTrackSwitch('first-meet')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                  audioState.currentTrack === 'first-meet' && audioState.isPlaying ? 'bg-[#D97706] text-white' : 'hover:bg-amber-200/50'
                }`}
              >
                Raag
              </button>
              <button
                onClick={() => handleTrackSwitch('marriage')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                  audioState.currentTrack === 'marriage' && audioState.isPlaying ? 'bg-[#B91C1C] text-white' : 'hover:bg-rose-200/50'
                }`}
              >
                Kalyanam
              </button>
              <button
                onClick={() => handleTrackSwitch('beach-visit')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                  audioState.currentTrack === 'beach-visit' && audioState.isPlaying ? 'bg-[#0284C7] text-white' : 'hover:bg-sky-200/50'
                }`}
              >
                Beach
              </button>
            </div>

            {/* Play/Pause Music Toggle Button */}
            <button
              onClick={handleToggleMusic}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full border transition-all text-[11px] font-bold ${
                audioState.isPlaying
                  ? 'bg-[#8B1E19] text-white border-[#8B1E19] shadow-sm'
                  : 'bg-amber-50 text-[#8B1E19] border-[#D4AF37]/40'
              }`}
              title={audioState.isPlaying ? 'Pause Music' : 'Play Wedding Music'}
            >
              {audioState.isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span className="hidden sm:inline">Music On</span>
                </>
              ) : (
                <>
                  <Music className="w-3.5 h-3.5 text-[#D97706]" />
                  <span className="hidden sm:inline">Play Music</span>
                </>
              )}
            </button>

            {/* Photo Studio / Upload Button */}
            <button
              onClick={onOpenPhotoStudio}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C07B] to-[#AA771C] text-[#2C1810] font-bold text-[11px] sm:text-xs shadow hover:scale-105 active:scale-95 transition-all border border-[#B8860B]/40"
              title="Upload your photos or edit details"
            >
              <Camera className="w-3.5 h-3.5 text-[#8B1E19] shrink-0" />
              <span>Photos</span>
            </button>
          </div>
        </div>

        {/* Mobile Scrollable Navigation Bar (Pills that never wrap or break) */}
        <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 pb-0.5 text-xs">
          <button
            onClick={() => {
              setActiveTab('journey');
              sound.playTeaClink();
            }}
            className={`px-3 py-1 rounded-full whitespace-nowrap text-[11px] font-bold shrink-0 transition-all ${
              activeTab === 'journey'
                ? 'bg-[#8B1E19] text-white shadow-sm'
                : 'bg-amber-50 text-[#78350F] border border-amber-200'
            }`}
          >
            📖 7 Chapters
          </button>
          <button
            onClick={() => {
              setActiveTab('beach');
              handleTrackSwitch('beach-visit');
            }}
            className={`px-3 py-1 rounded-full whitespace-nowrap text-[11px] font-bold shrink-0 transition-all ${
              activeTab === 'beach'
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'bg-sky-50 text-sky-900 border border-sky-200'
            }`}
          >
            🌊 21 Oct Beach
          </button>
          <button
            onClick={() => {
              setActiveTab('icebreaker');
              handleTrackSwitch('first-meet');
            }}
            className={`px-3 py-1 rounded-full whitespace-nowrap text-[11px] font-bold shrink-0 transition-all ${
              activeTab === 'icebreaker'
                ? 'bg-[#D97706] text-white shadow-sm'
                : 'bg-amber-50 text-[#78350F] border border-amber-200'
            }`}
          >
            ☕ 6 May First Meet
          </button>
          <button
            onClick={() => {
              setActiveTab('blessings');
              handleTrackSwitch('marriage');
            }}
            className={`px-3 py-1 rounded-full whitespace-nowrap text-[11px] font-bold shrink-0 transition-all ${
              activeTab === 'blessings'
                ? 'bg-[#8B1E19] text-white shadow-sm'
                : 'bg-rose-50 text-rose-900 border border-rose-200'
            }`}
          >
            💌 Blessings
          </button>
        </div>
      </div>
    </header>
  );
};
