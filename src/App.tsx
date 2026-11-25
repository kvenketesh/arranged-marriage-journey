import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { BeachDateSection } from './components/BeachDateSection';
import { FirstMeetSimulation } from './components/FirstMeetSimulation';
import { BlessingsSection } from './components/BlessingsSection';
import { PhotoStudio } from './components/PhotoStudio';
import { Footer } from './components/Footer';
import { MusicPlayerBar } from './components/MusicPlayerBar';
import { initialCoupleProfile, milestoneEvents } from './data/marriageData';
import { CoupleProfile } from './types';
import { sound } from './utils/audio';
import { PROFILE_STORAGE_KEY } from './utils/names';

export function App() {
  const [profile, setProfile] = useState<CoupleProfile>(() => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialCoupleProfile;
  });

  const [activeTab, setActiveTab] = useState<string>('journey');
  const [isPhotoStudioOpen, setIsPhotoStudioOpen] = useState<boolean>(false);

  // Jump to specific milestone on the timeline
  const handleJumpToMilestone = (id: string) => {
    setActiveTab('journey');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleExploreTimeline = () => {
    setActiveTab('journey');
    setTimeout(() => {
      const el = document.getElementById('timeline-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2C1810] flex flex-col font-sans-clean selection:bg-[#E0533C]/20 selection:text-[#9A1F16] overflow-x-hidden w-full">
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPhotoStudio={() => setIsPhotoStudioOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-1 w-full">
        {/* Hero & Timeline */}
        {activeTab === 'journey' && (
          <>
            <Hero
              profile={profile}
              onExploreTimeline={handleExploreTimeline}
              onOpenPhotoStudio={() => setIsPhotoStudioOpen(true)}
              onJumpToMilestone={handleJumpToMilestone}
            />
            <TimelineSection
              events={milestoneEvents}
              profile={profile}
              onOpenBeachSim={() => {
                setActiveTab('beach');
                sound.playTrack('beach-visit');
              }}
              onOpenFirstMeetSim={() => {
                setActiveTab('icebreaker');
                sound.playTrack('first-meet');
              }}
              onOpenPhotoStudio={() => setIsPhotoStudioOpen(true)}
            />
          </>
        )}

        {/* 21 Oct Beach Date Simulator */}
        {activeTab === 'beach' && (
          <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
            <BeachDateSection
              profile={profile}
              onOpenPhotoStudio={() => setIsPhotoStudioOpen(true)}
            />
          </div>
        )}

        {/* 6 May First Meet Living Room & Balcony Dialogue Sim */}
        {activeTab === 'icebreaker' && (
          <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
            <FirstMeetSimulation
              profile={profile}
              onContinueToEngagement={() => {
                sound.playTrack('engagement');
                handleJumpToMilestone('engagement');
              }}
            />
          </div>
        )}

        {/* Blessings & Family Roster */}
        {activeTab === 'blessings' && (
          <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
            <BlessingsSection profile={profile} />
          </div>
        )}
      </main>

      {/* Photo Studio & Customization Modal */}
      <PhotoStudio
        isOpen={isPhotoStudioOpen}
        onClose={() => setIsPhotoStudioOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />

      {/* Persistent 7-Occasion Music Player Bar */}
      <MusicPlayerBar />

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
