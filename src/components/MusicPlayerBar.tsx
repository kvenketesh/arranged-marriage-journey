import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music, ChevronUp, ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { sound, OCCASION_TRACKS, OccasionTrackId } from '../utils/audio';

export const MusicPlayerBar: React.FC = () => {
  const [audioState, setAudioState] = useState(sound.getState());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = sound.subscribe(setAudioState);
    return unsubscribe;
  }, []);

  const currentTrackMeta =
    OCCASION_TRACKS.find(t => t.id === audioState.currentTrack) || OCCASION_TRACKS[0];

  const handleSelectTrack = (id: OccasionTrackId) => {
    sound.playTrack(id);
    setIsDrawerOpen(false);
  };

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-5 sm:bottom-5 z-40 sm:w-[370px] pointer-events-auto">
      {/* Expandable 7-Occasion Playlist Drawer */}
      {isDrawerOpen && (
        <div className="mb-2.5 rounded-2xl bg-[#FFFDF7]/98 backdrop-blur-xl border-2 border-[#D4AF37]/60 shadow-2xl overflow-hidden animate-fadeIn">
          <div className="px-4 py-2.5 bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-serif-royal text-sm font-bold tracking-wide">
                Soundtrack for All 7 Occasions
              </span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-amber-200 hover:text-white p-0.5"
              aria-label="Close playlist"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto divide-y divide-amber-100">
            {OCCASION_TRACKS.map((track) => {
              const isSelected = track.id === audioState.currentTrack;
              const isThisPlaying = isSelected && audioState.isPlaying;
              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(track.id)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2 transition-all hover:bg-amber-50 active:bg-amber-100 ${
                    isSelected ? 'bg-amber-50/90' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-lg shrink-0">{track.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-bold truncate ${
                            isSelected ? 'text-[#8B1E19]' : 'text-[#2C1810]'
                          }`}
                        >
                          {track.title}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-100 text-[#78350F] font-semibold shrink-0">
                          {track.date}{track.isUpcoming ? ' (yet to happen)' : ''}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#78350F] truncate">
                        {track.moodLabel} • {track.subtitle}
                      </p>
                    </div>
                  </div>

                  {isThisPlaying ? (
                    <div className="flex items-end gap-0.5 h-3.5 shrink-0">
                      <span className="w-0.5 bg-[#8B1E19] rounded-full animate-pulse h-2"></span>
                      <span className="w-0.5 bg-[#D97706] rounded-full animate-bounce h-3.5"></span>
                      <span className="w-0.5 bg-[#8B1E19] rounded-full animate-pulse h-2.5"></span>
                    </div>
                  ) : (
                    <Play className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Compact Player Pill */}
      <div className="rounded-2xl bg-gradient-to-r from-[#24120C] via-[#3B1712] to-[#24120C] text-[#FFFDF7] border border-[#D4AF37]/60 shadow-2xl px-3 py-2.5 flex items-center justify-between gap-2.5 backdrop-blur-md">
        {/* Left: Track Info & Playlist Toggle */}
        <button
          onClick={() => setIsDrawerOpen(prev => !prev)}
          className="flex items-center gap-2.5 min-w-0 flex-1 text-left group"
          title="Choose ceremony soundtrack"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B1E19] to-[#D97706] border border-[#D4AF37]/60 flex items-center justify-center text-base shrink-0 shadow-inner relative">
            <span>{currentTrackMeta.emoji}</span>
            {audioState.isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#24120C] animate-pulse"></span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-amber-100 truncate">
                {currentTrackMeta.title}
              </span>
              <ChevronUp
                className={`w-3.5 h-3.5 text-amber-300 shrink-0 transition-transform ${
                  isDrawerOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            <p className="text-[10px] text-amber-300/85 truncate">
              {audioState.isPlaying ? '♪ Playing' : 'Tap ▶ to Play'} • {currentTrackMeta.moodLabel} ({currentTrackMeta.date}{currentTrackMeta.isUpcoming ? ' yet to happen' : ''})
            </p>
          </div>
        </button>

        {/* Right: Playback Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => sound.prevTrack()}
            className="p-1.5 rounded-full text-amber-200 hover:text-white hover:bg-white/10 active:scale-90 transition-all"
            title="Previous ceremony track"
            aria-label="Previous track"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => sound.togglePlayPause()}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FBBF24] text-[#24120C] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
            title={audioState.isPlaying ? 'Pause music' : 'Play ceremony music'}
            aria-label={audioState.isPlaying ? 'Pause music' : 'Play ceremony music'}
          >
            {audioState.isPlaying ? (
              <Pause className="w-4 h-4 fill-[#24120C]" />
            ) : (
              <Play className="w-4 h-4 fill-[#24120C] ml-0.5" />
            )}
          </button>

          <button
            onClick={() => sound.nextTrack()}
            className="p-1.5 rounded-full text-amber-200 hover:text-white hover:bg-white/10 active:scale-90 transition-all"
            title="Next ceremony track"
            aria-label="Next track"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => sound.toggleMute()}
            className="p-1.5 rounded-full text-amber-200 hover:text-white hover:bg-white/10 active:scale-90 transition-all hidden sm:flex"
            title={audioState.isMuted ? 'Unmute' : 'Mute'}
            aria-label={audioState.isMuted ? 'Unmute' : 'Mute'}
          >
            {audioState.isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-rose-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
