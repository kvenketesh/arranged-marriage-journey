import { CoupleProfile, MilestoneEvent, FamilyMember, Blessing, StoryChoice } from '../types';

export const initialCoupleProfile: CoupleProfile = {
  brideName: 'N SWETHA',
  groomName: 'K VENKETESH',
  brideNickname: 'Swetha',
  groomNickname: 'Venketesh',
  bridePhoto: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', // Traditional Indian Bride
  groomPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', // Handsome Groom
  couplePhoto: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80', // Wedding couple smiling
  firstMeetPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80', // Tea tradition
  engagementPhoto: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80', // Ring exchange
  pasupuPhoto: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=80', // Haldi / Pasupu ceremony
  beachPhoto: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80', // Beach date
  pandiriRataPhoto: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80', // Traditional pandal / floral entrance
  marriagePhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80', // Muhurtham / Varmala
  receptionPhoto: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80', // Reception evening gala
  city: 'Jaipur & Hyderabad',
  weddingDate: '2027-02-10',
};

export const milestoneEvents: MilestoneEvent[] = [
  // 1. First Meet: 06.05.2026
  {
    id: 'first-meet',
    key: 'first-meet',
    title: 'The First Auspicious Meet',
    hindiTitle: 'पहेली मुलाकात (పెళ్లి చూపులు / Rishta Baithak)',
    subTitle: "Rishta Meeting at Bride's House in the Presence of Whole Family",
    date: '2026-05-06',
    displayDateBadge: '06.05.2026',
    formattedDate: 'May 6, 2026 (Wednesday • 4:30 PM)',
    location: "Bride's Family Residence",
    locationDetails: 'Living Room with 18 Family Elders, Fresh Marigolds & Porcelain Tea Service',
    coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#D97706',
    accentBg: 'from-amber-50 to-orange-100',
    audioMood: 'traditional',
    culturalContext:
      'In traditional Indian arranged marriages, the first official meeting is a grand social symphony. The groom arrives accompanied by parents, grandparents, and maternal uncles. The bride enters carrying a silver tray with warm cardamom tea and homemade snacks, leading to the famous 15-minute private balcony conversation.',
    narrative: {
      lead: 'Two worlds, two lineages, and two nervous hearts met under the affectionate eyes of 18 family elders.',
      paragraphs: [
        'The clock struck 4:30 PM when Venketesh and his family arrived at the house. Outside, Venketesh secretly adjusted his collar thrice while his mother whispered, "Smile naturally, and remember to touch the elders\' feet first!"',
        'Inside, Swetha was gently teased by her brothers as she arranged the cups on the tea tray. The living room was alive with vibrant conversation: uncles debating hometown roots and career milestones, and grandparents comparing planetary horoscopes.',
        'And then came the legendary moment: Swetha walked into the room carrying the warm tea. Their eyes locked for a fleeting three seconds—both blushing, their nervousness instantly melting into quiet curiosity.',
        'With a knowing smile, the elders announced: "Why don\'t both of you go sit on the garden verandah and talk comfortably for a while?" Those fifteen minutes changed everything. They laughed about how formal everyone was, discovered their shared playlist of retro melodies, and walked back in with eyes that said a resolute "YES".'
      ],
      behindTheScenes:
        'Swetha secretly admitted later that her hands were trembling so much while holding the tea cup that she thought the spoon would fall off! Meanwhile, Venketesh was so captivated that he put three packets of sugar in his tea without realizing!'
    },
    highlights: [
      'Warm welcome at the doorstep with Aarti & floral tika',
      'The classic tea-tray entrance: Stolen shy glances across the room',
      'The 15-minute private terrace conversation that sealed the spark',
      'Unanimous "Haan!" (Green Signal) celebrated with warm Kaju Katlis & Motichoor laddoos'
    ],
    ritualsAndHospitality: [
      {
        title: 'Shagun Ki Chai & Samosa',
        description: 'Steaming ginger cardamom tea served with crispy homemade samosas, mint chutney & cashew barfi.',
        category: 'food'
      },
      {
        title: 'Charan Sparsh & Blessings',
        description: 'Touching the feet of grandparents and seeking ancestral blessings for harmony and auspicious beginnings.',
        category: 'ritual'
      },
      {
        title: 'The Balcony Icebreaker',
        description: 'That sacred 15 minutes away from the elders\' stares where formal biodatas turned into real laughter.',
        category: 'fun'
      },
      {
        title: 'Sweetening the Word (Mukh Meetha)',
        description: 'When both fathers hugged and fed each other sweets, confirming the match with joyful tears.',
        category: 'emotion'
      }
    ],
    familyQuotes: [
      {
        speaker: "Groom's Aunt",
        relation: 'Family Elder',
        avatar: '👩🏽',
        quote: 'As soon as Swetha stepped into the room with that gentle grace, I told Venketesh\'s mother: "Look no further, our house has found its Laxmi."'
      },
      {
        speaker: 'Swetha\'s Father',
        relation: 'Bride\'s Papa',
        avatar: '👨🏽‍🦳',
        quote: 'Watching Venketesh speak so respectfully to my mother and then see his eyes light up when he looked at my daughter gave me complete peace of mind.'
      }
    ],
    gallery: [
      {
        id: 'fm-1',
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
        caption: 'The Silver Tray with Cardamom Tea and Marigold Petals',
        tag: 'Tradition'
      },
      {
        id: 'fm-2',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
        caption: 'The First Stolen Glance across the crowded living room',
        tag: 'Chemistry'
      }
    ]
  },

  // 2. Engagement: 01.07.2026
  {
    id: 'engagement',
    key: 'engagement',
    title: 'The Grand Engagement (Sagai & Roka)',
    hindiTitle: 'सगाई एवं रोका (నిశ్చితార్థం / Nischitartham)',
    subTitle: 'Exchanging Rings & Eternal Promises before Gods and Kin',
    date: '2026-07-01',
    displayDateBadge: '01.07.2026',
    formattedDate: 'July 1, 2026 (Wednesday)',
    location: 'The Royal Heritage Palace Banquet',
    locationDetails: 'Illuminated Mandap with Jasmine Canopy, Fairy Lights & Live Shehnai',
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#B91C1C',
    accentBg: 'from-rose-50 to-red-100',
    audioMood: 'shehnai',
    culturalContext:
      'The Engagement ceremony (Roka / Nischitartham / Sagai) marks the formal consecration of the alliance. Golden and diamond rings are exchanged to symbolize infinity and devotion, accompanied by traditional Vedic chants, sandalwood paste, and gift hampers containing rich silks and gourmet dry fruits.',
    narrative: {
      lead: 'Under a canopy of fragrant tuberose and glittering chandeliers, two rings sealed a timeless promise.',
      paragraphs: [
        'By July 1st, two months after their first meeting, the initial awkwardness had blossomed into late-night phone calls and excited WhatsApp messages.',
        'Venketesh stood waiting in a bespoke ivory sherwani with gold zardozi embroidery. When Swetha made her grand entrance in a crimson and peach lehenga with handcrafted gotta patti work, surrounded by her brothers holding a floral chadar, the entire hall erupted in cheers.',
        'As the pandit ji chanted the sacred shlokas, Venketesh gently held Swetha\'s hand and slipped the solitaire diamond ring onto her finger. Swetha followed, sliding the platinum band onto his. The moment they raised their hands together, a burst of rose petals showered over them, set to the joyous tunes of live Shehnai and Dhol.',
        'That evening ended with an impromptu dance performance by all the cousins, where Venketesh pulled Swetha to the center of the dance floor for their first romantic waltz amidst glowing cold pyros.'
      ],
      behindTheScenes:
        'Venketesh spent three weeks hunting for the exact ring size without letting Swetha know, enlisting her best friend as a covert spy!'
    },
    highlights: [
      'Grand bridal entry under the Phoolon Ki Chadar (Floral Canopy)',
      'Vedic Ring Exchange ritual with holy mantras and rose petal rain',
      'Formal Tilak & Shagun exchange between the two families',
      'The cousins\' energetic flash mob followed by the couple\'s romantic slow dance'
    ],
    ritualsAndHospitality: [
      {
        title: 'Ring Consecration & Tilak',
        description: 'Applying kumkum and akshat on the forehead followed by exchanging rings touched by the family deity.',
        category: 'ritual'
      },
      {
        title: '56 Bhog Royal Feast',
        description: 'Elaborate royal banquet featuring Dal Baati Churma, Paneer Tikka, Shahi Biryani, and hot Jalebi with Rabdi.',
        category: 'food'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Venketesh\'s Mother',
        relation: 'Mother of the Groom',
        avatar: '🧕🏽',
        quote: 'My heart overflowed with tears of happiness when they placed the rings on each other\'s fingers. May God protect their bond from all evil eyes.'
      }
    ],
    gallery: [
      {
        id: 'eng-1',
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
        caption: 'The Solitaire Diamond & Platinum Ring Exchange',
        tag: 'The Rings'
      }
    ]
  },

  // 3. Groom First Visit, Movie Date, Lunch & Beach Date: 21.10.2026
  {
    id: 'beach-visit',
    key: 'beach-visit',
    title: "Groom's First Visit: Movie Date, Lunch & Sunset Beach",
    hindiTitle: 'दमाद जी का गृह-आगमन: सिनेमा, प्रीतिभोज एवं सागर तट (మూవీ, లంచ్ & బీచ్)',
    subTitle: '11:00 AM–2:00 PM Movie Date, Royal Homemade Lunch & Barefoot Sunset Waves',
    date: '2026-10-21',
    displayDateBadge: '21.10.2026',
    formattedDate: 'October 21, 2026 (Wednesday • 11:00 AM Onwards)',
    isUpcoming: false,
    location: "Cinema Hall, Bride's House & Golden Coast Beach",
    locationDetails: '11:00 AM–2:00 PM Movie Date, Royal Lunch at Home & Breezy Sunset Shoreline',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#0284C7',
    accentBg: 'from-sky-50 to-cyan-100',
    audioMood: 'ocean',
    culturalContext:
      'In Indian culture, the groom\'s first solo outing and visit to the bride\'s house as the "Officially Engaged Son-in-law (Damad Ji / Alludu)" is a hilarious and heartwarming affair. They kicked off the day with an exciting 11:00 AM–2:00 PM movie date, followed by a 10-course homemade royal lunch prepared by the mother-in-law, before heading out to watch the sunset on the beach.',
    narrative: {
      lead: 'A complete dream day: sharing popcorn during an 11 AM–2 PM movie date, savoring a royal homemade lunch, and ending barefoot on the sunset beach.',
      paragraphs: [
        'October 21, 2026 began with a joyful morning arrival at Swetha\'s house, where Venketesh was warmly welcomed as the newly engaged son-in-law. Before the afternoon festivities, the two slipped out for their very first 11:00 AM to 2:00 PM movie date together—sharing caramel popcorn, whispering jokes in the dark theater, and soaking in the thrill of a real date without thirty pairs of eyes watching.',
        'Right after the movie wrapped up at 2:00 PM, they returned home for an irresistible royal lunch feast personally cooked by Swetha\'s mother. Every cousin took turns testing the new "Jiju" across the dining table, asking playful questions while trying to win shagun points.',
        'By 4:30 PM, thoroughly pampered and full from the lavish lunch, they drove out into the pleasant October breeze straight for the coastline. Stepping onto the damp golden sand, they kicked off their footwear and let the cool ocean waves wash gently over their feet.',
        'They walked miles along the shoreline hand in hand, shared spicy roasted corn (bhutta) rubbed with lime and salt, chased incoming tides like carefree children, and sat together watching the orange sun dip into the ocean.',
        'In that tranquil sea breeze, with salt in their hair and waves whispering at their feet, Venketesh took Swetha\'s hand and said: "From that nervous living room tea in May, to our movie and lunch today, and this endless sea—I didn\'t just find a bride, I found my best friend."'
      ],
      behindTheScenes:
        'During the 11 AM–2 PM movie, they were so busy chatting and stealing smiles that they barely noticed half the interval! Later at the beach, a rogue wave caught them mid-selfie and soaked their jeans in laughter!'
    },
    highlights: [
      '11:00 AM – 2:00 PM Movie Date: Caramel popcorn, theater laughs & first solo outing',
      '2:00 PM Royal "Damad Ji" Homemade Lunch with 12 handcrafted family dishes',
      'Afternoon coastal drive and walking barefoot along the golden shoreline',
      'Carving initials in wet sand, roasted bhutta with lime, and sunset ocean talks'
    ],
    ritualsAndHospitality: [
      {
        title: '11:00 AM – 2:00 PM Movie Date',
        description: 'Matinee cinema show together with caramel popcorn, samosas, and whispered laughter away from the wedding buzz.',
        category: 'fun'
      },
      {
        title: '2:00 PM Royal Son-in-Law Lunch',
        description: 'Homemade Pooris, Paneer Makhani, fragrant Pulao, Gulab Jamuns, and sweet curd served with pure motherly love.',
        category: 'food'
      },
      {
        title: 'Sunset Walk & Names on the Sand',
        description: 'Walking barefoot at 4:30 PM, carving initials on the shoreline, and watching the gentle tide seal their memory.',
        category: 'emotion'
      },
      {
        title: 'Coastal Bhutta & Ocean Breeze',
        description: 'Sharing spicy coal-roasted corn rubbed with lemon while watching the orange sun sink into the sea.',
        category: 'fun'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Swetha (The Bride)',
        relation: 'The Bride',
        avatar: '👰🏽',
        quote: 'That beach evening was pure magic. In the chaotic wedding prep, just holding his hand in silence while listening to the sea waves gave me the deepest sense of peace.'
      }
    ],
    gallery: [
      {
        id: 'beach-1',
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
        caption: 'Hand in Hand against the Golden Sunset Coast',
        tag: 'Beach Magic'
      }
    ]
  },

  // 4. Pasupu Function: 13.12.2026 (yet to happen)
  {
    id: 'pasupu',
    key: 'pasupu',
    title: 'The Sacred Pasupu Function (Haldi & Nalugu)',
    hindiTitle: 'పసుపు వేడుక (हल्दी एवं नलगु समारोह)',
    subTitle: 'Grinding Sacred Turmeric Roots, Golden Radiance & Joyful Songs',
    date: '2026-12-13',
    displayDateBadge: '13.12.2026',
    formattedDate: 'December 13, 2026 (Sunday)',
    isUpcoming: true,
    location: "Courtyard of Bride's Ancestral Home",
    locationDetails: 'Decorated with Sunburst Marigolds, Brass Urulis with Floating Petals & Stone Mortars',
    coverImage: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#EAB308', // Radiant Turmeric Yellow
    accentBg: 'from-yellow-50 to-amber-100',
    audioMood: 'festive',
    culturalContext:
      'The Pasupu ceremony (Pasupu Kottadam / Danchadam / Nalugu) is one of the most auspicious and vibrant pre-wedding traditions. Married women (Muthaidhavulu) gather to grind whole organic turmeric roots into fragrant golden paste using traditional stone mortars (Rolu-Roddalu) while singing melodious wedding folk songs. The cooling paste is then lovingly applied to the bride and groom to sanctify, protect, and impart a bridal glow.',
    narrative: {
      lead: 'A courtyard soon to be bathed in sunburst yellow, fragrant fresh turmeric paste, and joyful laughter as family gathers to shower blessings.',
      paragraphs: [
        'On December 13, 2026 (yet to happen), the family courtyard will be transformed into a sea of yellow silk sarees and kurtas. The rhythmic sound of pestle beats on the stone mortar will echo through the morning air as the aunts sing traditional Telugu mangala harathis.',
        'Swetha will sit gracefully on a wooden peeta, surrounded by brass diyas and baskets piled high with raw golden turmeric rhizomes. Her grandmother will initiate the ritual by applying the fragrant paste on her feet, palms, and cheeks with a betel leaf.',
        'Within minutes, the solemn blessing is sure to turn into playful celebrations—cousins smearing haldi, splashing scented rose water, and teasing Swetha about how Venketesh will react when he sees her golden radiance.',
        'The ceremony will conclude with the Mangala Snanam (sacred purification bath) infused with jasmine blossoms, leaving Swetha beaming with bridal joy as the countdown to February begins.'
      ],
      behindTheScenes:
        'Swetha\'s little cousins are already planning to sneak up with yellow water guns filled with turmeric rose-water, ready to turn the backyard into a joyful Haldi celebration!'
    },
    highlights: [
      'Pounding of raw whole turmeric roots in decorated stone mortars (Pasupu Danchadam)',
      'Application of cooling Nalugu herbal paste and yellow turmeric on feet and cheeks',
      'Singing of ancestral wedding folk songs and offering Mangala Harathi',
      'The sacred floral shower (Poola Varsham) and distribution of yellow shagun sarees'
    ],
    ritualsAndHospitality: [
      {
        title: 'Pasupu Danchadam (Turmeric Pounding)',
        description: 'Five married women pestle turmeric roots together symbolizing teamwork, health, and mutual prosperity.',
        category: 'ritual'
      },
      {
        title: 'Traditional Sweets & Bobbatlu',
        description: 'Hot Bobbatlu (Puran Poli) dripping with homemade ghee, Boondi laddoos, and spicy Murukku savories.',
        category: 'food'
      },
      {
        title: 'Poola Varsham (Flower Shower)',
        description: 'Cousins showering baskets of yellow marigold and pink rose petals over the bride during harathi.',
        category: 'fun'
      },
      {
        title: 'Mangala Harathi Blessings',
        description: 'Lighting camphor on brass plates to ward off all negative energies and bless the bride with lifelong grace.',
        category: 'emotion'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Peddamma (Eldest Aunt)',
        relation: 'Maternal Aunt',
        avatar: '🧕🏽',
        quote: 'When we pound the turmeric roots on December 13th, we will remember Swetha as a little toddler—ready to shine like Goddess Lakshmi in sacred gold.'
      },
      {
        speaker: 'Kavya (Best Friend)',
        relation: 'Maid of Honor',
        avatar: '👧🏽',
        quote: 'We are going to make sure not a single inch of her face is left without turmeric! Venketesh is going to be completely spellbound!'
      }
    ],
    gallery: [
      {
        id: 'pas-1',
        url: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=800&q=80',
        caption: 'The Sacred Golden Turmeric (Pasupu) & Marigold Petals',
        tag: 'Haldi Ceremony'
      },
      {
        id: 'pas-2',
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        caption: 'Traditional Brass Uruli with floating yellow blossoms',
        tag: 'Decor'
      }
    ]
  },

  // 5. Pandiri Rata: 08.02.2027 (yet to happen)
  {
    id: 'pandiri-rata',
    key: 'pandiri-rata',
    title: 'The Sacred Pandiri Rata (Pandal Installation)',
    hindiTitle: 'పందిరి రాట పూజ (मंडप स्थापना एवं बास रोपण)',
    subTitle: 'Planting the First Bamboo Pole to Welcome Gods & Ancestors',
    date: '2027-02-08',
    displayDateBadge: '08.02.2027',
    formattedDate: 'February 8, 2027 (Monday)',
    isUpcoming: true,
    location: "Entrance of Bride & Groom's Family Residences",
    locationDetails: 'Decorated Bamboo Post with Mango Leaves, Coconut, Turmeric & Red Silk Thread',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#16A34A', // Sacred Mango Leaf Green
    accentBg: 'from-emerald-50 to-green-100',
    audioMood: 'festive',
    culturalContext:
      'Pandiri Rata (Pandillu Veyadam / Mandap Sthapana) is the sacred foundation ritual that formally announces the commencement of wedding festivities. A sturdy bamboo pole (Rata), anointed with turmeric, kumkum, and wrapped with mango leaves (toranam) and coconut, is planted by five married women (Sumangalis) to invoke Lord Ganesha and ancestral deities to safeguard the wedding from any obstacles.',
    narrative: {
      lead: 'With the planting of the sacred bamboo pole and the tying of green mango festoons, the wedding house will officially awake to celebrations.',
      paragraphs: [
        'Two days before the grand wedding, on the morning of February 8, 2027 (yet to happen), the pandit ji will sound the conch at dawn as the auspicious "Pandiri Rata" ceremony commences.',
        'Five respected elder women from the family will anoint the freshly cut bamboo pole with fragrant turmeric water, vermillion stripes, and tie a sacred yellow thread around its crown along with a green coconut.',
        'As the family chants Vedic shlokas, the brothers and uncles will hoist the pole into the ground at the northeast corner of the house, distributing sweets to neighbors to declare that the marriage festivities have begun.',
        'The home will come alive with non-stop nadaswaram melodies, relatives arriving from near and far, and the aroma of filter coffee brewing in brass vessels.'
      ],
      behindTheScenes:
        'Swetha\'s uncle is already preparing to hoist the pole personally and distribute morning laddoos to the entire street!'
    },
    highlights: [
      'Consecration of the sacred bamboo pole with turmeric, kumkum, and sacred yellow thread',
      'Tying of mango leaf festoons (Mavidakula Thoranam) to welcome divine energies',
      'Ganesha Pooja and coconut breaking to ensure an obstacle-free wedding',
      'Arrival of extended relatives, filling the house with festive commotion'
    ],
    ritualsAndHospitality: [
      {
        title: 'Sumangali Rata Pradakshina',
        description: 'Five married women circling the bamboo pole with brass harathi plates, seeking blessings for a long married life.',
        category: 'ritual'
      },
      {
        title: 'Traditional Wedding Breakfast',
        description: 'Steaming hot Ghee Pongal, Medu Vada, Coconut Chutney, and Mysore Pak served on fresh banana leaves.',
        category: 'food'
      },
      {
        title: 'Toranam Stringing Competition',
        description: 'Cousins competing to string the longest string of fresh green mango leaves across the verandah.',
        category: 'fun'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Thatha Ji (Grandfather)',
        relation: 'Patriarch',
        avatar: '👴🏽',
        quote: 'Once the Pandiri Rata is planted, the wedding devatas reside in our home, filling every corner with auspicious joy!'
      }
    ],
    gallery: [
      {
        id: 'pan-1',
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
        caption: 'Sacred Mango Leaves & Floral Mandap Entrance',
        tag: 'Pandal Sacred'
      }
    ]
  },

  // 6. The Grand Marriage: 10.02.2027 (yet to happen)
  {
    id: 'marriage',
    key: 'marriage',
    title: 'The Divine Kalyana Muhurtham (The Marriage)',
    hindiTitle: 'కళ్యాణ మహోత్సవం (शुभ विवाह • पाणिग्रहण)',
    subTitle: 'Jeelakarra Bellam, Mangalasutra Dharana & Joyful Talambralu',
    date: '2027-02-10',
    displayDateBadge: '10.02.2027',
    formattedDate: 'February 10, 2027 (Wednesday)',
    isUpcoming: true,
    location: 'Sri Venkateswara Kalyana Mandapam Grand Hall',
    locationDetails: 'Grand Lotus Mandap, Fragrant Tuberose Chandeliers, Sacred Fire & Live Nadaswaram',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#8B1E19', // Royal Vermillion / Sindoor Red
    accentBg: 'from-red-50 to-rose-100',
    audioMood: 'shehnai',
    culturalContext:
      'The sacred wedding (Kalyana Muhurtham / Lagna) is the eternal union of two souls. Key rituals include: Jeelakarra Bellam (placing cumin and jaggery on each other\'s heads at the exact auspicious moment, symbolizing that couple remains inseparable through sweet and bitter), Kanyadanam, Mangalasutra Dharana (tying the three sacred golden knots), Saptapadi (seven circumambulations around the holy fire), and Talambralu (joyfully pouring turmeric rice and pearls over each other).',
    narrative: {
      lead: 'Nine months after that nervous cup of tea on May 6th, Venketesh and Swetha will unite as husband and wife under the blessings of sacred fire and family.',
      paragraphs: [
        'At the auspicious muhurtham on February 10, 2027 (yet to happen), the grand hall will reverberate with the resonant notes of Shehnai and Nadaswaram as Venketesh awaits Swetha at the mandap.',
        'With the sacred curtain held between them, Swetha will make her royal bridal entrance in a Kanjeevaram silk saree with intricate temple gold borders.',
        'At the exact stroke of the muhurtham, the curtain will drop: Venketesh and Swetha will place the sacred Jeelakarra Bellam (cumin & jaggery) on each other\'s heads, followed by Venketesh tying the three knots of the golden Mangalsutra as elders shower yellow Akshatalu.',
        'Then comes everyone\'s favorite moment—Talambralu! Joyful showers of turmeric rice and pearls over each other amidst cheers, laughter, and the seven sacred steps of Saptapadi.'
      ],
      behindTheScenes:
        'Swetha\'s brothers and Venketesh\'s friends are already strategizing for the playful Talambralu shoulder-lift battle!'
    },
    highlights: [
      'Jeelakarra Bellam: Placing the sacred cumin and jaggery paste on each other at the exact muhurtham',
      'Mangalasutra Dharana: Tying the three sacred golden knots (Maangalyam Tantunanena)',
      'Saptapadi: Taking seven steps together around the Agni Kundam, sealing the seven eternal marital vows',
      'Talambralu: The joyful tradition of pouring pearls, flowers, and turmeric rice over each other'
    ],
    ritualsAndHospitality: [
      {
        title: 'Jeelakarra Bellam',
        description: 'Cumin (bitter) and Jaggery (sweet) ground together: symbolizing that the couple will face life\'s joys and sorrows as one.',
        category: 'ritual'
      },
      {
        title: 'Mangalasutra Dharana',
        description: 'Tying the golden thali with three knots representing loyalty to husband, family, and god.',
        category: 'ritual'
      },
      {
        title: 'Traditional Wedding Bhojanam',
        description: 'Grand 21-item feast on banana leaf: Avakaya, Pulihora, Gutti Vankaya, Sambar, Payasam, and Sweet Pan.',
        category: 'food'
      },
      {
        title: 'Talambralu Rice Rain',
        description: 'Playful and joyous pearl and rice shower between bride and groom, celebrating abundant blessings.',
        category: 'fun'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Swetha\'s Father',
        relation: 'Father of the Bride',
        avatar: '👨🏽‍🦳',
        quote: 'Performing Kanyadanam on February 10th will be the proudest, most emotional moment of my life—knowing Swetha is stepping into a loving home with Venketesh.'
      },
      {
        speaker: 'Venketesh (The Groom)',
        relation: 'The Groom',
        avatar: '🤵🏽',
        quote: 'Waiting eagerly for the muhurtham screen to drop on February 10th and begin our forever journey together.'
      }
    ],
    gallery: [
      {
        id: 'mar-1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
        caption: 'The Holy Fire (Agni Kundam) & Varmala Ceremony',
        tag: 'Muhurtham'
      },
      {
        id: 'mar-2',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
        caption: 'Talambralu Pearl & Turmeric Rice Shower',
        tag: 'Pure Joy'
      }
    ]
  },

  // 7. Reception: 14.02.2027 (yet to happen)
  {
    id: 'reception',
    key: 'reception',
    title: 'The Grand Wedding Reception Gala',
    hindiTitle: 'विवाह प्रीतिभोज (రాయల్ రిసెప్షన్ • Valentine Gala)',
    subTitle: 'A Valentine’s Evening of Royal Elegance, Music & Welcoming Society',
    date: '2027-02-14',
    displayDateBadge: '14.02.2027',
    formattedDate: 'February 14, 2027 (Sunday • Valentine\'s Day)',
    isUpcoming: true,
    location: 'The Imperial Crystal Ballroom & Lawns',
    locationDetails: 'Grand Chandelier Stage, Red Carpet Runway, Live Violin Symphony & Royal Buffet',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#4F46E5', // Regal Indigo / Royal Evening
    accentBg: 'from-indigo-50 to-purple-100',
    audioMood: 'reception',
    culturalContext:
      'Scheduled on Valentine\'s Day (February 14, 2027), the wedding reception is the grand modern social celebration where the newly married couple is presented to society, colleagues, and extended friends. Dressed in contemporary black-tie and designer evening wear, the couple cuts a wedding cake, takes photos on stage, and celebrates with guests.',
    narrative: {
      lead: 'On a romantic Valentine’s evening, the newlyweds will make their first grand social entrance amidst glittering lights, music, and warm toasts.',
      paragraphs: [
        'On Sunday evening, February 14, 2027 (yet to happen), the doors of the Crystal Ballroom will open to welcome friends, colleagues, and extended family under twinkling fairy lights and a live violin symphony.',
        'Venketesh in a tailored tuxedo and Swetha in a radiant evening ensemble will walk the red carpet hand in hand to greet everyone.',
        'Together, they will cut a celebratory multi-tier wedding cake surrounded by sparkling fountains, heartfelt speeches from siblings and friends, and endless group photos.',
        'The evening will culminate in a grand banquet feast, celebrating a beautiful journey that started on May 6, 2026.'
      ],
      behindTheScenes:
        'Venketesh is secretly planning a special musical dedication on stage honoring their very first balcony conversation from May 6th!'
    },
    highlights: [
      'Valentine\'s Day romantic gala theme with red carpet and live violin orchestra',
      'Ceremonial 3-tier wedding cake cutting with indoor cold-firework fountains',
      'Heartfelt toasts and speeches by siblings, best friends, and parents',
      'Extravagant global dinner buffet with live culinary counters and gourmet desserts'
    ],
    ritualsAndHospitality: [
      {
        title: '3-Tier Cake Cutting',
        description: 'Rich Red Velvet & Belgian Chocolate cake cut under a cascade of sparkling golden fountains.',
        category: 'fun'
      },
      {
        title: 'International Royal Buffet',
        description: 'Featuring Awadhi Dum Biryani, Mediterranean Mezze, Artisanal Pastas, Chaat Bazaar, and gourmet desserts.',
        category: 'food'
      },
      {
        title: 'The Retro Song Dedication',
        description: 'A heartfelt musical tribute planned on stage celebrating their May 6th first meeting.',
        category: 'emotion'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Neha & Sahil',
        relation: 'The Best Friends Clan',
        avatar: '👫🏽',
        quote: 'Counting down to Valentine\'s Day 2027 to celebrate our favorite couple on stage! Best arranged-turned-love marriage story ever!'
      }
    ],
    gallery: [
      {
        id: 'rec-1',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
        caption: 'The Crystal Ballroom Stage on Valentine\'s Evening',
        tag: 'Gala Stage'
      }
    ]
  }
];

export const familyMembers: FamilyMember[] = [
  {
    id: 'f-1',
    name: 'Pandit Ji',
    relation: 'Sacred Matchmaker & Priest',
    side: 'groom',
    avatar: '🙏🏽',
    funFact: 'Matches 36 Gunas in 2 minutes and found the most auspicious muhurthams!',
    firstMeetReaction: 'Blessed the alliance immediately with holy akshatalu after seeing how well both families bonded on May 6th!'
  },
  {
    id: 'f-2',
    name: 'Papa Ji (Bride\'s Father)',
    relation: "Bride's Father",
    side: 'bride',
    avatar: '👨🏽‍🦳',
    funFact: 'Looked tough on the outside, but melted when Venketesh bowed to take his blessings.',
    firstMeetReaction: 'Secretly told his wife in the kitchen: "The boy has golden values. Yes from my side."'
  },
  {
    id: 'f-3',
    name: 'Chachi Ji (The Tea Connoisseur)',
    relation: 'Paternal Aunt',
    side: 'bride',
    avatar: '🧕🏽',
    funFact: 'Tested Venketesh by asking if he prefers Assam orthodox or spiced Kadak chai.',
    firstMeetReaction: 'Loved how politely he complimented her homemade gujiya!'
  },
  {
    id: 'f-4',
    name: 'Karthik & Sidhhu',
    relation: 'The Mischievous Brothers Roster',
    side: 'bride',
    avatar: '👦🏽👦🏽',
    funFact: 'Already drafted the contract for the "Joota Chupai" (shoe stealing) bounty for 10.02.2027!',
    firstMeetReaction: 'Spied on the garden talk and reported: "Chemistry is 100/100!"'
  },
  {
    id: 'f-5',
    name: 'Buji & Shiva',
    relation: "Venketesh's Sister & Brother",
    side: 'groom',
    avatar: '👧🏽👦🏽',
    funFact: 'Always hyping up Venketesh and already planning special sibling dances for the wedding and reception!',
    firstMeetReaction: 'Welcomed Swetha like family right from May 6th and promised to always have her back!'
  }
];

export const defaultBlessings: Blessing[] = [
  {
    id: 'b-1',
    author: 'Uncle & Aunty Kotnala',
    relation: 'Family Friends',
    message: 'From the first meet on May 6th and your Oct 21st beach date, to the upcoming Dec 13th Pasupu, Feb 2027 wedding and Valentine reception, you two are made for each other! Sada Sukhi Raho! 🪷',
    timestamp: '2 hours ago',
    symbol: '🪷'
  },
  {
    id: 'b-2',
    author: 'Sujji & Mouni (College Bestie)',
    relation: "Swetha's Besties",
    message: 'We still remember Swetha calling us right after the May 6 verandah talk blushing like crazy! Can not wait for the February 10 Kalyanam and 14th Valentine Reception! 🎉💍',
    timestamp: '5 hours ago',
    symbol: '💖'
  },
  {
    id: 'b-3',
    author: 'Priyabrata & Ratikanta',
    relation: "Venketesh's Colleagues",
    message: 'From being super nervous on May 6 to smiling on the beach in Oct and ready for marriage in Feb—wishing you both a lifetime of happiness!',
    timestamp: '1 day ago',
    symbol: '🌊'
  }
];

export const arrangeMarriageQuiz: StoryChoice[] = [
  {
    id: 1,
    question: 'The First Meet: What was the first icebreaker whispered on the balcony?',
    context: 'May 6, 2026 - After sneaking away from 18 family members in the living room...',
    options: [
      {
        text: '"Are you also being forced into this, or do you genuinely want to talk?"',
        reaction: 'They both burst into relieved laughter! Total honesty unlocked! +50 Chemistry',
        chemistryScore: 50
      },
      {
        text: '"Did you really drink that tea, or were you just holding it for photos?"',
        reaction: 'She laughed and showed her burned tongue! Instant warmth! +45 Chemistry',
        chemistryScore: 45
      }
    ]
  },
  {
    id: 2,
    question: 'The Engagement: When the rings were exchanged on July 1st, what happened next?',
    context: 'Surrounded by flashing cameras and rose petals...',
    options: [
      {
        text: 'A burst of rose petals showered over them to live Shehnai tunes',
        reaction: 'Iconic cinematic moment! The whole banquet clapped and danced! +50 Chemistry',
        chemistryScore: 50
      },
      {
        text: 'The mischievous cousins initiated an instant dance challenge on stage',
        reaction: 'Pure Bollywood energy! Even the grandfathers started grooving! +45 Chemistry',
        chemistryScore: 45
      }
    ]
  },
  {
    id: 3,
    question: 'The October 21 Outing: How did they wrap up after their 11 AM–2 PM movie & lunch?',
    context: 'After enjoying the matinee movie date (11 AM–2 PM) followed by a heavy royal lunch at the bride\'s house...',
    options: [
      {
        text: 'Kicked off shoes, chased waves, and ate piping hot spicy bhutta on the sand',
        reaction: 'Unfiltered, beautiful memories! A rogue wave soaked their jeans in laughter! +60 Chemistry',
        chemistryScore: 60
      },
      {
        text: 'Wrote their names in the wet sand with a seashell before the tide swept in',
        reaction: 'Poetic and romantic! Stored forever in their photo album! +55 Chemistry',
        chemistryScore: 55
      }
    ]
  }
];
