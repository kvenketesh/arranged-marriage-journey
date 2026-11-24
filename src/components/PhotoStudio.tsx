import React, { useState } from 'react';
import { Camera, Upload, X, Check, RefreshCw, Sparkles, User, Heart, Image as ImageIcon } from 'lucide-react';
import { CoupleProfile } from '../types';
import { initialCoupleProfile } from '../data/marriageData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface PhotoStudioProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CoupleProfile;
  onUpdateProfile: (updated: CoupleProfile) => void;
}

export const PhotoStudio: React.FC<PhotoStudioProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  const [formData, setFormData] = useState<CoupleProfile>(profile);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleFileUpload = (field: keyof CoupleProfile, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setFormData(prev => ({
          ...prev,
          [field]: reader.result as string
        }));
        sound.playTeaClink();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    localStorage.setItem('indian_marriage_couple_profile', JSON.stringify(formData));
    setSavedSuccess(true);
    sound.playRingChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#8B1E19', '#F59E0B']
    });
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all photos and names to default curated Indian wedding photography?')) {
      setFormData(initialCoupleProfile);
      onUpdateProfile(initialCoupleProfile);
      localStorage.removeItem('indian_marriage_couple_profile');
      sound.playTeaClink();
    }
  };

  const milestoneUploadConfigs: Array<{
    field: keyof CoupleProfile;
    label: string;
    date: string;
    sub: string;
    color: string;
  }> = [
    {
      field: 'firstMeetPhoto',
      label: '1. First Meet',
      date: '06.05.2026',
      sub: 'Living room tea tray & balcony',
      color: 'border-amber-300 bg-amber-50/50 text-[#8B1E19]'
    },
    {
      field: 'engagementPhoto',
      label: '2. Engagement',
      date: '01.07.2026',
      sub: 'Diamond rings & royal stage',
      color: 'border-rose-300 bg-rose-50/50 text-rose-900'
    },
    {
      field: 'pasupuPhoto',
      label: '3. Pasupu Function',
      date: '13.10.2026',
      sub: 'Turmeric Haldi & flower shower',
      color: 'border-yellow-300 bg-yellow-50/50 text-yellow-900'
    },
    {
      field: 'beachPhoto',
      label: '4. Beach Date',
      date: '21.10.2026',
      sub: 'Damad ji visit & sunset waves',
      color: 'border-sky-300 bg-sky-50/50 text-sky-900'
    },
    {
      field: 'pandiriRataPhoto',
      label: '5. Pandiri Rata',
      date: '08.02.2027',
      sub: 'Sacred bamboo pole & pandal',
      color: 'border-emerald-300 bg-emerald-50/50 text-emerald-900'
    },
    {
      field: 'marriagePhoto',
      label: '6. The Marriage',
      date: '10.02.2027',
      sub: 'Muhurtham & Talambralu',
      color: 'border-red-400 bg-red-50/50 text-red-950 font-bold'
    },
    {
      field: 'receptionPhoto',
      label: '7. Grand Reception',
      date: '14.02.2027',
      sub: "Valentine's evening gala & cake",
      color: 'border-indigo-300 bg-indigo-50/50 text-indigo-950'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center sm:p-4">
      <div className="bg-[#FFFDF7] w-full h-full sm:h-auto sm:max-h-[85vh] sm:max-w-4xl sm:rounded-3xl border-0 sm:border-2 border-[#D4AF37] shadow-2xl flex flex-col overflow-hidden animate-scaleUp">
        {/* Sticky Modal Header */}
        <div className="bg-gradient-to-r from-[#8B1E19] via-[#B91C1C] to-[#D97706] p-4 sm:p-5 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <h3 className="font-serif-royal text-lg sm:text-2xl font-bold tracking-wide">
                Photo Studio & Customizer
              </h3>
              <p className="text-[10px] sm:text-xs text-amber-100 line-clamp-1">
                Upload real photos from your phone gallery
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all active:scale-95 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {savedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Saved successfully! All 7 ceremonies and hero updated.</span>
            </div>
          )}

          {/* Couple Names */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19] mb-3 flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#D97706]" />
              <span>Couple Names & Nicknames</span>
            </h4>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                  Groom Name
                </label>
                <input
                  type="text"
                  value={formData.groomName}
                  onChange={e => setFormData({ ...formData, groomName: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-amber-50/40 border border-[#D4AF37]/50 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8B1E19] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                  Bride Name
                </label>
                <input
                  type="text"
                  value={formData.brideName}
                  onChange={e => setFormData({ ...formData, brideName: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-amber-50/40 border border-[#D4AF37]/50 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8B1E19] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                  Groom Nickname
                </label>
                <input
                  type="text"
                  value={formData.groomNickname}
                  onChange={e => setFormData({ ...formData, groomNickname: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-amber-50/40 border border-[#D4AF37]/50 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8B1E19] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#78350F] mb-1">
                  Bride Nickname
                </label>
                <input
                  type="text"
                  value={formData.brideNickname}
                  onChange={e => setFormData({ ...formData, brideNickname: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-amber-50/40 border border-[#D4AF37]/50 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8B1E19] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Primary Couple Portraits */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19] mb-3 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#D97706]" />
              <span>Couple Hero Portraits</span>
            </h4>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {/* Groom Photo */}
              <div className="p-2 sm:p-3 rounded-xl bg-amber-50/40 border border-[#D4AF37]/40 text-center flex flex-col items-center">
                <span className="text-[11px] font-bold text-[#8B1E19] mb-1.5">Groom</span>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#8B1E19] shadow mb-2 bg-white">
                  <img src={formData.groomPhoto} alt="Groom" className="w-full h-full object-cover" />
                </div>
                <label className="cursor-pointer w-full py-1.5 rounded-lg bg-white hover:bg-amber-100 text-[#8B1E19] border border-amber-300 text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95">
                  <Upload className="w-3 h-3 shrink-0" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => e.target.files?.[0] && handleFileUpload('groomPhoto', e.target.files[0])}
                  />
                </label>
              </div>

              {/* Bride Photo */}
              <div className="p-2 sm:p-3 rounded-xl bg-amber-50/40 border border-[#D4AF37]/40 text-center flex flex-col items-center">
                <span className="text-[11px] font-bold text-[#D97706] mb-1.5">Bride</span>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#D97706] shadow mb-2 bg-white">
                  <img src={formData.bridePhoto} alt="Bride" className="w-full h-full object-cover" />
                </div>
                <label className="cursor-pointer w-full py-1.5 rounded-lg bg-white hover:bg-amber-100 text-[#D97706] border border-amber-300 text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95">
                  <Upload className="w-3 h-3 shrink-0" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => e.target.files?.[0] && handleFileUpload('bridePhoto', e.target.files[0])}
                  />
                </label>
              </div>

              {/* Couple Photo */}
              <div className="p-2 sm:p-3 rounded-xl bg-amber-50/40 border border-[#D4AF37]/40 text-center flex flex-col items-center">
                <span className="text-[11px] font-bold text-[#8B1E19] mb-1.5">Couple</span>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow mb-2 bg-white">
                  <img src={formData.couplePhoto} alt="Couple" className="w-full h-full object-cover" />
                </div>
                <label className="cursor-pointer w-full py-1.5 rounded-lg bg-white hover:bg-amber-100 text-[#8B1E19] border border-amber-300 text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm active:scale-95">
                  <Upload className="w-3 h-3 shrink-0" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => e.target.files?.[0] && handleFileUpload('couplePhoto', e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* 7 Milestones Photos Grid */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <h4 className="font-serif-royal text-base sm:text-lg font-bold text-[#8B1E19] mb-3 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#D97706]" />
              <span>All 7 Milestone Ceremony Photos</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {milestoneUploadConfigs.map(item => (
                <div
                  key={item.field}
                  className={`p-2.5 sm:p-3 rounded-xl border text-center ${item.color} shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-[11px] font-bold block line-clamp-1">{item.label}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/90 font-bold block mb-1">
                      {item.date}
                    </span>
                    <div className="w-full h-20 sm:h-24 rounded-lg overflow-hidden border shadow-sm mb-2 bg-white">
                      <img
                        src={formData[item.field] as string}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <label className="cursor-pointer w-full py-1.5 rounded-lg bg-white hover:bg-amber-50 border text-[10px] font-bold inline-flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95">
                    <Upload className="w-3 h-3 shrink-0" />
                    <span>Change</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => e.target.files?.[0] && handleFileUpload(item.field, e.target.files[0])}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Sticky Modal Bottom Action Bar */}
        <div className="bg-[#FFFDF7] p-3 sm:p-4 border-t border-[#D4AF37]/30 shrink-0 flex items-center justify-between gap-2 shadow-lg">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="text-[10px] sm:text-xs text-[#78350F] hover:text-[#8B1E19] flex items-center gap-1 font-semibold py-1.5"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset Defaults</span>
            <span className="sm:hidden">Reset</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 sm:px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-[#8B1E19] to-[#B91C1C] text-white text-xs font-bold shadow-md active:scale-95 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Save & Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
