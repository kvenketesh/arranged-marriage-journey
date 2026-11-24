import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, Sparkles, Volume2, Pause, Quote, Utensils, Award, ChevronDown, ChevronUp, Image as ImageIcon, Music } from 'lucide-react';
import { MilestoneEvent, CoupleProfile } from '../types';
import { sound, OccasionTrackId, OCCASION_TRACKS } from '../utils/audio';
import confetti from 'canvas-confetti';

interface TimelineSectionProps {
  events: MilestoneEvent[];
  profile: CoupleProfile;
  onOpenBeachSim: () => void;
  onOpenFirstMeetSim: () => void;
  onOpenPhotoStudio: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  events,
  profile,
  onOpenBeachSim,
  onOpenFirstMeetSim,
  onOpenPhotoStudio
}) => {
  const [expandedId, setExpandedId] = useState<string>('first-meet');
  const [activePhotoModal, setActivePhotoModal] = useState<{ url: string; caption: string } | null>(null);
  const [audioState, setAudioState] = useState(sound.getState());

  useEffect(() => {
    return sound.subscribe(setAudioState);
  }, []);

  const toggleExpand = (id: string) => {
    const nextId = expandedId === id ? '' : id;
    setExpandedId(nextId);
    if (nextId && audioState.isPlaying) {
      sound.playTrack(nextId as OccasionTrackId);
    }
  };

  const handleToggleCeremonyMusic = (event: MilestoneEvent) => {
    const trackId = event.id as OccasionTrackId;
    if (audioState.isPlaying && audioState.currentTrack === trackId) {
      sound.pauseMusic();
    } else {
      sound.playTrack(trackId);
      if (event.audioMood === 'shehnai' || event.audioMood === 'festive' || event.audioMood === 'reception') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#8B1E19', '#F43F5E', '#10B981', '#6366F1']
        });
      }
    }
  };

  const resolveEventImage = (event: MilestoneEvent): string => {
    switch (event.id) {
      case 'first-meet':
        return profile.firstMeetPhoto || event.coverImage;
      case 'engagement':
        return profile.engagementPhoto || event.coverImage;
      case 'pasupu':
        return profile.pasupuPhoto || event.coverImage;
      case 'beach-visit':
        return profile.beachPhoto || event.coverImage;
      case 'pandiri-rata':
        return profile.pandiriRataPhoto || event.coverImage;
      case 'marriage':
        return profile.marriagePhoto || event.coverImage;
      case 'reception':
        return profile.receptionPhoto || event.coverImage;
      default:
        return event.coverImage;
    }
  };

  return (
    <section id="timeline-section" className="py-12 sm:py-16 bg-[#FFFDF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[11px] font-semibold text-[#8B1E19] mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            <span>The Sacred 7-Chapter Story</span>
          </div>
          <h2 className="font-serif-royal text-2xl sm:text-5xl font-bold text-[#8B1E19]">
            The Journey of Two Souls
          </h2>
          <p className="font-script-romantic text-xl sm:text-3xl text-[#D97706] mt-0.5 sm:mt-1">
            Every glance, ritual, ocean wave & eternal vow
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3"></div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#D4AF37]/40 ml-2 sm:ml-32 md:ml-40 pl-4 sm:pl-10 space-y-8 sm:space-y-16">
          {events.map((event, index) => {
            const isExpanded = expandedId === event.id;
            const displayCover = resolveEventImage(event);
            const trackMeta = OCCASION_TRACKS.find(t => t.id === event.id);
            const isTrackPlaying = audioState.isPlaying && audioState.currentTrack === event.id;

            return (
              <div key={event.id} id={event.id} className="relative group">
                {/* Floating Date Badge on the Left (Desktop) */}
                <div className="hidden sm:flex absolute -left-36 md:-left-44 top-0 w-28 md:w-36 flex-col items-end pr-4 text-right">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-[#8B1E19] text-white shadow-sm">
                    {event.displayDateBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#78350F] mt-1 font-serif-royal">
                    {event.formattedDate.split('(')[0]}
                  </span>
                </div>

                {/* Milestone Node on the Timeline Line */}
                <div className="absolute -left-[23px] sm:-left-[49px] top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFFDF7] border-4 border-[#8B1E19] shadow group-hover:scale-125 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#D4AF37] animate-ping opacity-25"></div>
                </div>

                {/* Main Event Card */}
                <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/30 shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Top Header Banner */}
                  <div className={`p-4 sm:p-8 bg-gradient-to-br ${event.accentBg} border-b border-[#D4AF37]/20`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {/* Mobile date badge */}
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#8B1E19] text-white sm:hidden">
                          {event.displayDateBadge}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] sm:text-xs font-semibold text-[#78350F]">
                          Chapter {index + 1} of 7
                        </span>
                      </div>

                      {/* Occasion Music Player Button */}
                      <button
                        onClick={() => handleToggleCeremonyMusic(event)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-xs font-bold shadow-sm hover:scale-105 active:scale-95 transition-all ${
                          isTrackPlaying
                            ? 'bg-[#8B1E19] text-white border-[#8B1E19]'
                            : 'bg-white/95 text-[#8B1E19] border-[#D4AF37]/50'
                        }`}
                        title={trackMeta ? `Play "${trackMeta.title}" (${trackMeta.subtitle})` : 'Play Occasion Music'}
                      >
                        {isTrackPlaying ? (
                          <>
                            <Pause className="w-3 h-3 text-amber-300 fill-amber-300" />
                            <span>Playing: {trackMeta?.title}</span>
                          </>
                        ) : (
                          <>
                            <Music className="w-3 h-3 text-[#D97706]" />
                            <span>Play {trackMeta?.title || 'Music'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="font-serif-royal text-xl sm:text-4xl font-bold text-[#8B1E19] leading-tight">
                      {event.title}
                    </h3>
                    <p className="font-sans-clean text-xs sm:text-base text-[#78350F] font-medium mt-1">
                      {event.subTitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-[#573926] mt-2.5 pt-2.5 border-t border-[#D4AF37]/20">
                      <div className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3 h-3 text-[#8B1E19]" />
                        <span>{event.formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-[#8B1E19]" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hero Image & Lead Story */}
                  <div className="p-4 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center mb-6 sm:mb-8">
                      {/* Photo Thumbnail */}
                      <div className="lg:col-span-5 relative group/img rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/40 h-52 sm:h-72">
                        <img
                          src={displayCover}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 cursor-pointer"
                          onClick={() => setActivePhotoModal({ url: displayCover, caption: event.title })}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                          <p className="text-white text-[10px] sm:text-xs font-medium flex items-center gap-1">
                            <ImageIcon className="w-3 h-3" />
                            <span>Tap photo to enlarge</span>
                          </p>
                        </div>
                      </div>

                      {/* Lead Narrative */}
                      <div className="lg:col-span-7">
                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/80 border-l-4 border-[#8B1E19] mb-3">
                          <p className="font-serif-royal text-sm sm:text-xl font-bold text-[#8B1E19] italic leading-snug">
                            "{event.narrative.lead}"
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#573926] leading-relaxed mb-2.5">
                          {event.narrative.paragraphs[0]}
                        </p>
                        <p className="text-xs sm:text-sm text-[#573926] leading-relaxed">
                          {event.narrative.paragraphs[1]}
                        </p>
                      </div>
                    </div>

                    {/* Cultural Context Note */}
                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFF8E7] border border-[#D4AF37]/30 text-[11px] sm:text-xs text-[#78350F] leading-relaxed mb-4 sm:mb-6">
                      <strong className="text-[#8B1E19] font-bold block mb-1">
                        Cultural Heritage & Significance:
                      </strong>
                      {event.culturalContext}
                    </div>

                    {/* Highlights Badges */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-[11px] sm:text-xs font-bold text-[#8B1E19] tracking-wider uppercase mb-2 sm:mb-3 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Key Moments of This Ceremony</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-1.5 p-2 rounded-lg sm:rounded-xl bg-amber-50/60 border border-amber-200/60 text-[11px] sm:text-xs text-[#573926]"
                          >
                            <span className="text-[#D97706] font-bold">✦</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Collapsible Deep Details */}
                    {isExpanded && (
                      <div className="pt-4 sm:pt-6 border-t border-[#D4AF37]/30 space-y-6 sm:space-y-8 animate-fadeIn">
                        {/* More Narrative Paragraphs */}
                        <div className="space-y-3">
                          {event.narrative.paragraphs.slice(2).map((para, i) => (
                            <p key={i} className="text-xs sm:text-sm text-[#573926] leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Behind The Scenes Secret */}
                        <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200 shadow-inner">
                          <h5 className="font-serif-royal text-sm sm:text-base font-bold text-[#8B1E19] flex items-center gap-1.5 mb-1">
                            <span>🤫</span>
                            <span>Behind the Scenes Secret</span>
                          </h5>
                          <p className="text-[11px] sm:text-sm text-[#78350F] italic leading-relaxed">
                            {event.narrative.behindTheScenes}
                          </p>
                        </div>

                        {/* Food & Rituals Grid */}
                        <div>
                          <h4 className="text-[11px] sm:text-xs font-bold text-[#8B1E19] tracking-wider uppercase mb-2.5 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-[#D97706]" />
                            <span>Traditional Rituals & Hospitality</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {event.ritualsAndHospitality.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm"
                              >
                                <span className="text-xs font-bold text-[#8B1E19] block mb-0.5">
                                  {item.title}
                                </span>
                                <p className="text-[11px] sm:text-xs text-[#573926] leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Family Quotes */}
                        {event.familyQuotes.length > 0 && (
                          <div>
                            <h4 className="text-[11px] sm:text-xs font-bold text-[#8B1E19] tracking-wider uppercase mb-2.5 flex items-center gap-1">
                              <Quote className="w-3.5 h-3.5 text-[#D97706]" />
                              <span>Echoes of the Family (బంధువుల మాటలు)</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {event.familyQuotes.map((q, idx) => (
                                <div
                                  key={idx}
                                  className="p-3.5 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/40 shadow-sm flex items-start gap-2.5"
                                >
                                  <span className="text-2xl shrink-0">{q.avatar}</span>
                                  <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <span className="text-xs font-bold text-[#8B1E19]">
                                        {q.speaker}
                                      </span>
                                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-[#78350F]">
                                        {q.relation}
                                      </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-[#573926] italic">
                                      "{q.quote}"
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Interactive Action Shortcuts - Full width on phone */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#D4AF37]/20">
                          {event.id === 'first-meet' && (
                            <button
                              onClick={onOpenFirstMeetSim}
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                              <span>☕ Play 6 May First Meet Sim</span>
                            </button>
                          )}
                          {event.id === 'beach-visit' && (
                            <button
                              onClick={onOpenBeachSim}
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-700 text-white text-xs font-bold shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                              <span>🌊 Enter 21 Oct Sunset Beach Simulator</span>
                            </button>
                          )}
                          {event.id === 'marriage' && (
                            <button
                              onClick={() => {
                                sound.playTempleBell();
                                confetti({ particleCount: 90, spread: 80, colors: ['#E11D48', '#D4AF37', '#FBBF24'] });
                              }}
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs font-bold shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                              <span>💍 Shower 10 Feb Akshatalu & Pearls</span>
                            </button>
                          )}

                          <button
                            onClick={onOpenPhotoStudio}
                            className="text-center sm:text-right text-[11px] font-semibold text-[#8B1E19] hover:underline py-1"
                          >
                            <span>📸 Upload real ceremony photo →</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Expand/Collapse Toggle Button */}
                    <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex justify-center">
                      <button
                        onClick={() => toggleExpand(event.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-xs font-bold text-[#8B1E19] transition-all active:scale-95"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Read Full Story & Secrets</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activePhotoModal && (
        <div
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3"
        >
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 animate-scaleUp">
            <img
              src={activePhotoModal.url}
              alt={activePhotoModal.caption}
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
            <div className="p-3 text-center">
              <p className="font-serif-royal text-base font-bold text-[#8B1E19]">
                {activePhotoModal.caption}
              </p>
              <p className="text-[11px] text-[#78350F] mt-0.5">
                Tap anywhere outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
