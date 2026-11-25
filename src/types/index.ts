export interface CoupleProfile {
  brideName: string;
  groomName: string;
  brideNickname: string;
  groomNickname: string;
  bridePhoto: string;
  groomPhoto: string;
  couplePhoto: string;
  beachPhoto: string;
  firstMeetPhoto: string;
  engagementPhoto: string;
  pasupuPhoto: string;
  pandiriRataPhoto: string;
  marriagePhoto: string;
  receptionPhoto: string;
  city: string;
  weddingDate: string; // 2027-02-10
}

export interface MilestoneEvent {
  id: string;
  key: 'first-meet' | 'engagement' | 'pasupu' | 'beach-visit' | 'pandiri-rata' | 'marriage' | 'reception';
  title: string;
  hindiTitle: string;
  subTitle: string;
  date: string; // YYYY-MM-DD
  displayDateBadge: string; // DD.MM.YYYY
  formattedDate: string;
  isUpcoming?: boolean;
  location: string;
  locationDetails: string;
  coverImage: string;
  themeColor: string;
  accentBg: string;
  audioMood: 'traditional' | 'shehnai' | 'ocean' | 'festive' | 'reception';
  culturalContext: string;
  narrative: {
    lead: string;
    paragraphs: string[];
    behindTheScenes: string;
  };
  highlights: string[];
  ritualsAndHospitality: Array<{
    title: string;
    description: string;
    category: 'ritual' | 'food' | 'emotion' | 'fun';
  }>;
  familyQuotes: Array<{
    speaker: string;
    relation: string;
    avatar: string;
    quote: string;
  }>;
  gallery: Array<{
    id: string;
    url: string;
    caption: string;
    tag: string;
  }>;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  side: 'bride' | 'groom';
  avatar: string;
  funFact: string;
  firstMeetReaction: string;
}

export interface Blessing {
  id: string;
  author: string;
  relation: string;
  message: string;
  timestamp: string;
  symbol: string;
}

export interface StoryChoice {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    reaction: string;
    chemistryScore: number;
  }[];
}
