import React, { useState, useEffect } from 'react';
import { Sunset, Moon, Sun, Waves, Sparkles, Heart, Coffee, Utensils, MessageCircle, Music, Volume2, VolumeX } from 'lucide-react';
import { CoupleProfile } from '../types';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface BeachDateSectionProps {
  profile: CoupleProfile;
  onOpenPhotoStudio: () => void;
}

export const BeachDateSection: React.FC<BeachDateSectionProps> = ({ profile, onOpenPhotoStudio }) => {
  const [skyTheme, setSkyTheme] = useState<'sunset' | 'golden' | 'night'>('sunset');
  const [sandMessage, setSandMessage] = useState<string>(`${profile.brideName.split(' ')[0]} ❤️ ${profile.groomName.split(' ')[0]} • 21.10.2026`);
  const [tempMessage, setTempMessage] = useState<string>('');
  const [isWaveWashing, setIsWaveWashing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'beach' | 'feast' | 'conversation'>('beach');
  const [audioState, setAudioState] = useState(sound.getState());
  const isPlayingWaves = audioState.isPlaying && audioState.currentTrack === 'beach-visit';

  useEffect(() => {
    const unsubscribe = sound.subscribe(setAudioState);
    sound.playTrack('beach-visit');
    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggleWaveSound = () => {
    if (isPlayingWaves) {
      sound.pauseMusic();
    } else {
      sound.playTrack('beach-visit');
    }
  };

  const handleCarveSand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempMessage.trim()) return;
    setSandMessage(tempMessage.trim());
    setTempMessage('');
    sound.playTeaClink();
  };

  const handleWaveWash = () => {
    setIsWaveWashing(true);
    sound.playTeaClink();
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0284C7', '#38BDF8', '#E0F2FE', '#FFF']
    });
    setTimeout(() => {
      setIsWaveWashing(false);
    }, 2500);
  };

  const skyGradients = {
    golden: 'from-amber-400 via-orange-300 to-sky-300',
    sunset: 'from-purple-900 via-rose-600 to-amber-400',
    night: 'from-slate-950 via-indigo-950 to-blue-900'
  };

  return (
    <div className="py-6 sm:py-12 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Top Header Card */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-[10px] sm:text-xs font-semibold text-sky-900 mb-2 sm:mb-3">
          <Waves className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span>October 21, 2026 • Official Son-in-Law Visit & Beach Date</span>
        </div>
        <h2 className="font-serif-royal text-2xl sm:text-5xl font-bold text-[#8B1E19]">
          The Sunset Beach Date
        </h2>
        <p className="font-script-romantic text-xl sm:text-3xl text-[#0284C7] mt-0.5 sm:mt-1">
          "From a formal cup of tea to dancing barefoot with the tide"
        </p>
      </div>

      {/* Interactive Beach Horizon & Sand Canvas */}
      <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-700 bg-gradient-to-b ${skyGradients[skyTheme]} p-4 sm:p-8 text-white min-h-[440px] sm:min-h-[460px] flex flex-col justify-between border sm:border-2 border-amber-200/40`}>
        {/* Top Control Bar (Mobile Responsive Row) */}
        <div className="flex items-center justify-between gap-2 z-20 mb-4">
          {/* Ambient Ocean Audio Button */}
          <button
            onClick={handleToggleWaveSound}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-white hover:bg-black/60 transition-all active:scale-95 shadow"
          >
            {isPlayingWaves ? (
              <>
                <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-sky-300 animate-pulse" />
                <span>Waves: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-red-300" />
                <span>Waves: Off</span>
              </>
            )}
          </button>

          {/* Sky Time Switcher */}
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/20 text-xs">
            <button
              onClick={() => setSkyTheme('golden')}
              className={`p-1 rounded-full transition-all ${skyTheme === 'golden' ? 'bg-amber-400 text-slate-900 shadow' : 'text-white/70'}`}
              title="Golden Hour"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSkyTheme('sunset')}
              className={`p-1 rounded-full transition-all ${skyTheme === 'sunset' ? 'bg-rose-500 text-white shadow' : 'text-white/70'}`}
              title="Deep Sunset Glow"
            >
              <Sunset className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSkyTheme('night')}
              className={`p-1 rounded-full transition-all ${skyTheme === 'night' ? 'bg-indigo-600 text-white shadow' : 'text-white/70'}`}
              title="Starry Night"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center Horizon Details */}
        <div className="my-auto text-center py-4 relative z-10 max-w-lg mx-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2.5 sm:mb-4 bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-inner">
            <span className="text-2xl sm:text-3xl">🌅</span>
          </div>
          <h3 className="font-serif-royal text-xl sm:text-3xl font-bold drop-shadow-md">
            21.10.2026 • The Coastline Escape
          </h3>
          <p className="text-xs sm:text-sm text-white/90 drop-shadow mt-1.5 leading-relaxed">
            After Rohan was pampered with 10 dishes at Pooja's house, they drove to the beach.
            With the sea breeze tangling their hair, all wedding stress faded into laughter.
          </p>
        </div>

        {/* Interactive Sand Beach Shoreline (Bottom) */}
        <div className="relative mt-4 pt-4 sm:pt-6 rounded-xl sm:rounded-2xl bg-gradient-to-t from-[#EED9A4] via-[#F4E4BA] to-[#E3CB94]/80 p-3.5 sm:p-5 text-slate-800 shadow-xl border-t-2 sm:border-t-4 border-amber-300/60 overflow-hidden">
          {/* Animated Wave Foam Sweep */}
          {isWaveWashing && (
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 via-white/80 to-sky-400/30 backdrop-blur-[2px] animate-pulse z-20 flex items-center justify-center">
              <span className="font-script-romantic text-xl sm:text-2xl text-sky-900 animate-bounce">
                🌊 The ocean wave gently kisses the sand...
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 relative z-10">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-amber-900 uppercase tracking-widest block">
                Carved in the Sand:
              </span>
              <p className="font-script-romantic text-2xl sm:text-3xl text-[#78350F] font-bold drop-shadow-sm select-all">
                "{sandMessage}"
              </p>
            </div>

            <button
              onClick={handleWaveWash}
              className="px-3 py-1 rounded-lg bg-white/95 text-sky-900 text-[11px] font-bold border border-sky-300 shadow-sm transition-all active:scale-95 flex items-center gap-1 shrink-0"
              title="Simulate wave washing over sand"
            >
              <Waves className="w-3 h-3 text-sky-600 shrink-0" />
              <span>Wash with Tide</span>
            </button>
          </div>

          {/* Form to Carve Custom Name/Message in the Sand */}
          <form onSubmit={handleCarveSand} className="mt-3 pt-2.5 border-t border-amber-900/15 flex gap-1.5">
            <input
              type="text"
              value={tempMessage}
              onChange={(e) => setTempMessage(e.target.value)}
              placeholder="Carve a custom love note on the sand..."
              className="flex-1 px-2.5 py-1.5 rounded-lg bg-white/95 border border-amber-300 text-xs text-slate-800 placeholder-amber-700/60 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-lg bg-[#8B1E19] hover:bg-[#A8251F] text-white text-xs font-bold shadow transition-all active:scale-95 shrink-0"
            >
              Carve
            </button>
          </form>
        </div>
      </div>

      {/* Sub-Tabs: Mobile Friendly Swipe Bar */}
      <div className="mt-6">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-[#D4AF37]/30 pb-3 mb-5">
          <button
            onClick={() => setActiveTab('beach')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'beach'
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'bg-white text-[#78350F] border border-amber-200'
            }`}
          >
            🌊 Barefoot Sands
          </button>
          <button
            onClick={() => setActiveTab('feast')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'feast'
                ? 'bg-[#8B1E19] text-white shadow-sm'
                : 'bg-white text-[#78350F] border border-amber-200'
            }`}
          >
            🍛 Damad Ji Feast
          </button>
          <button
            onClick={() => setActiveTab('conversation')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
              activeTab === 'conversation'
                ? 'bg-[#D97706] text-white shadow-sm'
                : 'bg-white text-[#78350F] border border-amber-200'
            }`}
          >
            💬 Sunset Talk
          </button>
        </div>

        {/* Tab 1: Barefoot Beach Moments */}
        {activeTab === 'beach' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 animate-fadeIn">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-sky-200 shadow-sm">
              <div className="text-2xl sm:text-3xl mb-1.5">🌽</div>
              <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19]">
                Roasted Spicy Bhutta
              </h4>
              <p className="text-xs text-[#573926] leading-relaxed mt-1">
                Sharing coal-roasted corn rubbed with red chili powder, rock salt, and freshly squeezed lemon juice by the shoreline pier.
              </p>
            </div>
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-sky-200 shadow-sm">
              <div className="text-2xl sm:text-3xl mb-1.5">🌊</div>
              <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19]">
                The Rogue Wave Selfie
              </h4>
              <p className="text-xs text-[#573926] leading-relaxed mt-1">
                A sudden giant wave swept over their knees, soaking their jeans completely! Instead of getting annoyed, they laughed and took the happiest selfie.
              </p>
            </div>
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white border border-sky-200 shadow-sm">
              <div className="text-2xl sm:text-3xl mb-1.5">🐚</div>
              <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19]">
                Collecting Seashells
              </h4>
              <p className="text-xs text-[#573926] leading-relaxed mt-1">
                Rohan found a spiral pearl-like seashell and handed it to Pooja: "First treasure from our first official trip." She still keeps it.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: The Damad Ji Feast */}
        {activeTab === 'feast' && (
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-amber-50/70 border border-amber-300 shadow-sm animate-fadeIn">
            <h4 className="font-serif-royal text-lg sm:text-xl font-bold text-[#8B1E19] mb-1.5 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-[#D97706]" />
              <span>10-Course Hospitality at Bride's House (21 Oct Morning)</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#573926] leading-relaxed mb-3">
              Before the beach, Rohan received the supreme royal treatment as the newly engaged "Damad Ji".
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                <strong className="block text-[#8B1E19]">Shahi Paneer</strong>
                <p className="text-[10px] text-[#78350F]">Cashew saffron gravy</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                <strong className="block text-[#8B1E19]">Bedmi Poori</strong>
                <p className="text-[10px] text-[#78350F]">Crispy homemade</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                <strong className="block text-[#8B1E19]">Dry Fruit Pulao</strong>
                <p className="text-[10px] text-[#78350F]">Ghee roasted nuts</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-200">
                <strong className="block text-[#8B1E19]">Gulab Jamuns</strong>
                <p className="text-[10px] text-[#78350F]">Hot rose syrup</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The Conversation */}
        {activeTab === 'conversation' && (
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-sky-50/70 border border-sky-300 shadow-sm animate-fadeIn space-y-2.5 text-xs sm:text-sm text-[#573926]">
            <div className="p-3 bg-white rounded-xl border border-sky-200">
              <span className="font-bold text-[#8B1E19]">Rohan:</span> "Do you remember how stiff I was on May 6th in your living room? I was terrified your grandfather would grill me!"
            </div>
            <div className="p-3 bg-white rounded-xl border border-sky-200">
              <span className="font-bold text-[#0284C7]">Pooja:</span> "Haha! My dadi told me: 'He is an engineer, ask if he can fix our TV!' But when we sat on the balcony, I knew you had a pure heart."
            </div>
            <div className="p-3 bg-white rounded-xl border border-sky-200">
              <span className="font-bold text-[#8B1E19]">Rohan:</span> "Looking at the endless ocean today, as long as you're by my side, every storm feels like music."
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
