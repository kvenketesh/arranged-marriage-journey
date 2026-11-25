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
    formattedDate: 'May 6, 2026 (Wednesday)',
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
        'The clock struck 11:30 AM when Venketesh and his family arrived at the house. Outside, Venketesh secretly adjusted his collar thrice while his mother whispered, "Smile naturally, and remember to touch the elders\' feet first!"',
        'Inside, Swetha was gently teased by her sisters as she arranged the cups on the tea tray. The living room was alive with vibrant conversation: uncles debating hometown roots and career milestones, and grandparents comparing planetary horoscopes.',
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
        speaker: 'Dadi Ji (Groom\'s Grandmother)',
        relation: 'Eldest Matriarch',
        avatar: '👵🏽',
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

  // 3. Pasupu Function: 13.10.2026
  {
    id: 'pasupu',
    key: 'pasupu',
    title: 'The Sacred Pasupu Function (Haldi & Nalugu)',
    hindiTitle: 'పసుపు వేడుక (हल्दी एवं नलगु समारोह)',
    subTitle: 'Grinding Sacred Turmeric Roots, Golden Radiance & Joyful Songs',
    date: '2026-10-13',
    displayDateBadge: '13.10.2026',
    formattedDate: 'October 13, 2026 (Tuesday)',
    location: "Courtyard of Bride's Ancestral Home",
    locationDetails: 'Decorated with Sunburst Marigolds, Brass Urulis with Floating Petals & Stone Mortars',
    coverImage: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#EAB308', // Radiant Turmeric Yellow
    accentBg: 'from-yellow-50 to-amber-100',
    audioMood: 'festive',
    culturalContext:
      'The Pasupu ceremony (Pasupu Kottadam / Danchadam / Nalugu) is one of the most auspicious and vibrant pre-wedding traditions. Married women (Muthaidhavulu) gather to grind whole organic turmeric roots into fragrant golden paste using traditional stone mortars (Rolu-Roddalu) while singing melodious wedding folk songs. The cooling paste is then lovingly applied to the bride and groom to sanctify, protect, and impart a bridal glow.',
    narrative: {
      lead: 'A courtyard bathed in sunburst yellow, fragrant fresh turmeric paste, and unrestrained laughter as relatives showered blessings.',
      paragraphs: [
        'On October 13, 2026, the courtyard was transformed into a sea of yellow silk sarees and kurtas. The sound of rhythmic pestle beats on the stone mortar echoed through the morning air as the aunts sang traditional Telugu mangala harathis.',
        'Swetha sat gracefully on a wooden peeta, surrounded by brass diyas and baskets piled high with raw golden turmeric rhizomes. Her grandmother initiated the ritual by applying the fragrant paste on her feet, palms, and cheeks with a betel leaf.',
        'Within minutes, the solemn blessing turned into playful celebrations! The cousins began smearing haldi on each other, splashing scented rose water, and teasing Swetha about how Venketesh would react when he saw her golden radiance.',
        'The ceremony concluded with the Mangala Snanam (sacred purification bath) with holy water infused with jasmine blossoms, leaving Swetha beaming with unmistakable bridal joy.'
      ],
      behindTheScenes:
        'Swetha\'s little cousins playfully sneaked behind her with yellow water guns filled with turmeric rose-water, turning the backyard into a playful Holi battlefield!'
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
        quote: 'As we pounded the turmeric roots today, I remembered Swetha as a little toddler. Today she looks like Goddess Lakshmi herself covered in sacred gold.'
      },
      {
        speaker: 'Kavya (Best Friend)',
        relation: 'Maid of Honor',
        avatar: '👧🏽',
        quote: 'We made sure not a single inch of her face was left without turmeric! Venketesh is going to be completely spellbound!'
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

  // 4. Groom First Visit & Beach Date: 21.10.2026
  {
    id: 'beach-visit',
    key: 'beach-visit',
    title: 'Groom\'s First House Visit & The Sunset Beach Date',
    hindiTitle: 'दमाद जी का पहला गृह-आगमन एवं सागर तट (బీచ్ సందర్శన)',
    subTitle: 'From Son-in-Law Royal Feast to Barefoot Romantic Sunset Waves',
    date: '2026-10-21',
    displayDateBadge: '21.10.2026',
    formattedDate: 'October 21, 2026 (Wednesday)',
    location: "Bride's House followed by the Golden Coast Beach",
    locationDetails: 'Breezy shoreline, crashing ocean waves, roasted bhutta stalls & golden sunset glow',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#0284C7',
    accentBg: 'from-sky-50 to-cyan-100',
    audioMood: 'ocean',
    culturalContext:
      'In Indian culture, the groom\'s first solo visit to the bride\'s house as the "Officially Engaged Son-in-law (Damad Ji / Alludu)" is a hilarious and heartwarming royal affair. The mother-in-law cooks a 10-course feast, while the cousins prepare mischievous pranks. But the real magic happens when the couple sneaks away for an intimate outdoor date.',
    narrative: {
      lead: 'After being pampered like an emperor at her home, Venketesh and Swetha escaped to the beach to create their most cherished memory.',
      paragraphs: [
        'On the morning of October 21, 2026, Venketesh arrived at Swetha\'s house. This time, there was no awkward tension—he was welcomed with a garland, traditional Aarti, and an irresistible feast of home-cooked delicacies personally prepared by Swetha\'s mother.',
        'Every cousin took turns testing the new "Jiju", asking tricky questions and trying to win shagun points. But Swetha and Venketesh kept exchanging playful smiles across the dining table, waiting for their planned afternoon escape.',
        'By 4:30 PM, they managed to slip out into the pleasant October breeze and headed straight for the coastline. As they stepped onto the damp golden sand, they took off their footwear and felt the cool ocean water lap gently over their feet.',
        'They walked miles along the shoreline, hand in hand. They shared spicy roasted corn (bhutta) rubbed with lime and salt, chased incoming waves like carefree children, and sat together on a wooden pier as the orange sun dipped into the roaring ocean.',
        'In that tranquil sea breeze, with salt in their hair and waves whispering at their feet, Venketesh took Swetha\'s hand and said: "From that nervous living room tea in May to this endless sea today, I didn\'t just find a bride—I found my best friend."'
      ],
      behindTheScenes:
        'A rogue sea wave unexpectedly caught them while taking a selfie, soaking their jeans completely! Instead of getting annoyed, they burst out laughing and splashed water on each other!'
    },
    highlights: [
      'The "Damad Ji VIP Reception" with 12 handcrafted family dishes',
      'Sneaking out together for their first long beach road trip',
      'Walking barefoot along the shoreline and writing their initials in the wet sand',
      'Sunset reflections, roasted bhutta with fresh lime, and deep conversations by the waves'
    ],
    ritualsAndHospitality: [
      {
        title: 'The Royal Son-in-Law Thali',
        description: 'Pooris, Paneer Makhani, fragrant Pulao, Gulab Jamuns, and special sweet curd fed with pure motherly affection.',
        category: 'food'
      },
      {
        title: 'Writing Names on the Sand',
        description: 'Carving initials on the shoreline and watching the gentle sea tide seal their memory.',
        category: 'emotion'
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

  // 5. Pandiri Rata: 08.02.2027
  {
    id: 'pandiri-rata',
    key: 'pandiri-rata',
    title: 'The Sacred Pandiri Rata (Pandal Installation)',
    hindiTitle: 'పందిరి రాట పూజ (मंडप स्थापना एवं बास रोपण)',
    subTitle: 'Planting the First Bamboo Pole to Welcome Gods & Ancestors',
    date: '2027-02-08',
    displayDateBadge: '08.02.2027',
    formattedDate: 'February 8, 2027 (Monday)',
    location: "Entrance of Bride & Groom's Family Residences",
    locationDetails: 'Decorated Bamboo Post with Mango Leaves, Coconut, Turmeric & Red Silk Thread',
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#16A34A', // Sacred Mango Leaf Green
    accentBg: 'from-emerald-50 to-green-100',
    audioMood: 'festive',
    culturalContext:
      'Pandiri Rata (Pandillu Veyadam / Mandap Sthapana) is the sacred foundation ritual that formally announces the commencement of wedding festivities. A sturdy bamboo pole (Rata), anointed with turmeric, kumkum, and wrapped with mango leaves (toranam) and coconut, is planted by five married women (Sumangalis) to invoke Lord Ganesha and ancestral deities to safeguard the wedding from any obstacles.',
    narrative: {
      lead: 'With the planting of the sacred bamboo pole and the tying of green mango festoons, the wedding house officially awoke to celebrations.',
      paragraphs: [
        'Two days before the grand wedding, on the morning of February 8, 2027, the pandit ji sounded the conch at dawn. The auspicious "Pandiri Rata" ceremony commenced to erect the holy wedding canopy.',
        'Five respected elder women from the family anointed the freshly cut bamboo pole with fragrant turmeric water, vermillion stripes, and tied a sacred yellow thread around its crown along with a green coconut.',
        'As the family chanted Vedic shlokas, the brothers and uncles hoisted the pole into the ground at the northeast corner of the house. Sweets were distributed to neighbors, declaring to the entire community that the marriage celebrations had officially begun.',
        'The home was now alive with non-stop nadaswaram melodies, relatives pouring in with luggage from trains and flights, and the aroma of filter coffee brewing in large brass vessels.'
      ],
      behindTheScenes:
        'Swetha\'s uncle insisted on hoisting the pole personally, chanting slogans so loud that the whole street cheered and came over for morning laddoos!'
    },
    highlights: [
      'Consecration of the sacred bamboo pole with turmeric, kumkum, and sacred yellow thread',
      'Tying of mango leaf festoons (Mavidakula Thoranam) to welcome divine energies',
      'Ganesha Pooja and coconut breaking to ensure an obstacle-free wedding',
      'Arrival of extended relatives from across the globe, filling the house with festive commotion'
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
        quote: 'Once the Pandiri Rata is planted, the wedding devatas reside in our home. Look at the joy in every corner!'
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

  // 6. The Grand Marriage: 10.02.2027
  {
    id: 'marriage',
    key: 'marriage',
    title: 'The Divine Kalyana Muhurtham (The Marriage)',
    hindiTitle: 'కళ్యాణ మహోత్సవం (शुभ विवाह • पाणिग्रहण)',
    subTitle: 'Jeelakarra Bellam, Mangalasutra Dharana & Joyful Talambralu',
    date: '2027-02-10',
    displayDateBadge: '10.02.2027',
    formattedDate: 'February 10, 2027 (Wednesday)',
    location: 'Sri Venkateswara Kalyana Mandapam Grand Hall',
    locationDetails: 'Grand Lotus Mandap, Fragrant Tuberose Chandeliers, Sacred Fire & Live Nadaswaram',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#8B1E19', // Royal Vermillion / Sindoor Red
    accentBg: 'from-red-50 to-rose-100',
    audioMood: 'shehnai',
    culturalContext:
      'The sacred wedding (Kalyana Muhurtham / Lagna) is the eternal union of two souls. Key rituals include: Jeelakarra Bellam (placing cumin and jaggery on each other\'s heads at the exact auspicious moment, symbolizing that couple remains inseparable through sweet and bitter), Kanyadanam, Mangalasutra Dharana (tying the three sacred golden knots), Saptapadi (seven circumambulations around the holy fire), and Talambralu (joyfully pouring turmeric rice and pearls over each other).',
    narrative: {
      lead: 'Nine months after that nervous cup of tea on May 6th, Venketesh and Swetha became husband and wife under the blessings of fire and gods.',
      paragraphs: [
        'At the auspicious pre-dawn muhurtham on February 10, 2027, the grand hall reverberated with the resonant notes of the Shehnai and Nadaswaram. Venketesh sat on the mandap in silk dhoti and angavastram, eagerly watching the entrance.',
        'When the curtain (Aggi / Thera) was held between them, Swetha was carried in by her maternal uncles in a royal yellow and crimson Kanjeevaram silk saree with intricate temple gold borders.',
        'At the precise stroke of the muhurtham, the curtain dropped. Venketesh and Swetha placed the sacred Jeelakarra Bellam (cumin & jaggery) paste firmly on each other\'s heads, locking eyes in profound emotion. Next came the defining moment: Venketesh tied the three knots of the golden Mangalsutra around Swetha\'s neck as hundreds of family members showered sacred yellow Akshatalu over them.',
        'And then came everyone\'s favorite ritual: Talambralu! What started as a gentle shower of turmeric-tinted rice quickly turned into a delightful, competitive laughter match, with Venketesh and Swetha playfully dumping bowls of pearls and flowers over each other\'s crowns to the roars and applause of the audience!'
      ],
      behindTheScenes:
        'During Talambralu, Swetha\'s brother hoisted her on his shoulders so Venketesh couldn\'t reach her head with the rice bowl! Venketesh\'s friends immediately lifted Venketesh even higher, sparking an unforgettable round of laughter!'
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
        quote: 'Giving away my daughter\'s hand in Kanyadanam was the most emotional second of my life. Seeing Venketesh\'s gentle, reassuring eyes gave me eternal peace.'
      },
      {
        speaker: 'Venketesh (The Groom)',
        relation: 'The Groom',
        avatar: '🤵🏽',
        quote: 'When that screen dropped at the muhurtham and I saw Swetha smiling, every bit of nervousness evaporated. I am the luckiest man alive.'
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

  // 7. Reception: 14.02.2027
  {
    id: 'reception',
    key: 'reception',
    title: 'The Grand Wedding Reception Gala',
    hindiTitle: 'विवाह प्रीतिभोज (రాయల్ రిసెప్షన్ • Valentine Gala)',
    subTitle: 'A Valentine’s Evening of Royal Elegance, Music & Welcoming Society',
    date: '2027-02-14',
    displayDateBadge: '14.02.2027',
    formattedDate: 'February 14, 2027 (Sunday • Valentine\'s Day)',
    location: 'The Imperial Crystal Ballroom & Lawns',
    locationDetails: 'Grand Chandelier Stage, Red Carpet Runway, Live Violin Symphony & Royal Buffet',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#4F46E5', // Regal Indigo / Royal Evening
    accentBg: 'from-indigo-50 to-purple-100',
    audioMood: 'reception',
    culturalContext:
      'Scheduled on Valentine\'s Day (February 14, 2027), the wedding reception is the grand modern social celebration where the newly married couple is presented to society, colleagues, and extended friends. Dressed in contemporary black-tie and designer evening wear, the couple cuts a three-tier wedding cake, takes photos on the stage, and dances the evening away.',
    narrative: {
      lead: 'On a romantic Valentine’s evening, the couple made their first grand social entrance as Mr. & Mrs. amidst glittering lights and champagne toasts.',
      paragraphs: [
        'On Sunday evening, February 14, 2027, the doors of the Crystal Ballroom opened to welcome over a thousand guests. The atmosphere was sparkling: fairy lights draped from ancient banyan trees, live violinists playing soulful harmonies, and a red carpet leading to the regal couple stage.',
        'Venketesh looked sharp and debonair in a custom midnight-blue velvet tuxedo, while Swetha stunned in an emerald green and gold designer evening gown with diamond chandelier earrings.',
        'They walked down the ramp holding hands, radiating the relaxed confidence of two best friends who were now married. Together, they cut an exquisite 3-tier red velvet wedding cake to a standing ovation and sparkling cold pyrotechnics.',
        'The evening flowed seamlessly into congratulations, endless group selfies with friends from school and university, heartfelt toasts by both best men, and a lavish global banquet with live pasta, chaat, and dessert stations.'
      ],
      behindTheScenes:
        'Venketesh secretly arranged for the live band to play the retro song they had bonded over during their very first balcony meeting on May 6th, surprising Swetha and making her tear up on stage!'
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
        description: 'Featuring Awadhi Dum Biryani, Mediterranean Mezze, Artisanal Pastas, Chaat Bazaar, and 12 varieties of ice cream.',
        category: 'food'
      },
      {
        title: 'The Retro Song Surprise',
        description: 'Venketesh took the microphone and dedicated their May 6th balcony song to Swetha in front of all 1,000 guests.',
        category: 'emotion'
      }
    ],
    familyQuotes: [
      {
        speaker: 'Neha & Sahil',
        relation: 'The Best Friends Clan',
        avatar: '👫🏽',
        quote: 'Watching them together on stage on Valentine\'s Day was like seeing a movie unfold! Best arranged-turned-love marriage story ever!'
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
    name: 'Pandit Ji / Dadi Maa',
    relation: 'Eldest Matriarch',
    side: 'groom',
    avatar: '👵🏽',
    funFact: 'Matches 36 Gunas in 2 minutes and knows every family secret!',
    firstMeetReaction: 'Gave a 100-rupee blessed shagun envelope immediately after the first sip of tea on May 6th!'
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
    name: 'Ananya & Sahil',
    relation: 'The Mischievous Cousins Roster',
    side: 'bride',
    avatar: '👧🏽👦🏽',
    funFact: 'Already drafted the contract for the "Joota Chupai" (shoe stealing) bounty for 10.02.2027!',
    firstMeetReaction: 'Spied on the garden talk and reported: "Chemistry is 100/100!"'
  }
];

export const defaultBlessings: Blessing[] = [
  {
    id: 'b-1',
    author: 'Uncle & Aunty Mehta',
    relation: 'Family Friends',
    message: 'From the first meet on May 6th, through the glowing Pasupu and beach date, all the way to your Feb 2027 wedding and Valentine reception, you two are made for each other! Sada Sukhi Raho! 🪷',
    timestamp: '2 hours ago',
    symbol: '🪷'
  },
  {
    id: 'b-2',
    author: 'Neha (College Bestie)',
    relation: "Swetha's Friend",
    message: 'I still remember Swetha calling me right after the May 6 verandah talk blushing like crazy! Can not wait for the February 10 Kalyanam and 14th Valentine Reception! 🎉💍',
    timestamp: '5 hours ago',
    symbol: '💖'
  },
  {
    id: 'b-3',
    author: 'Vikram',
    relation: "Venketesh's Childhood Bro",
    message: 'Bro, you went from being super nervous on May 6 to glowing on the beach in Oct and ready for marriage in Feb! Love you both!',
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
    question: 'The October 21 Beach Date: How did they celebrate their ocean escape?',
    context: 'After the heavy 10-course lunch at the bride\'s house...',
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
