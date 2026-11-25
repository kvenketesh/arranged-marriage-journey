// Multi-instrument Web Audio API Music & Ambience Engine
// 100% offline, zero-dependency, warm stereo reverb + 7 tailored occasion compositions

export type OccasionTrackId =
  | 'first-meet'
  | 'engagement'
  | 'pasupu'
  | 'beach-visit'
  | 'pandiri-rata'
  | 'marriage'
  | 'reception';

export interface OccasionTrack {
  id: OccasionTrackId;
  title: string;
  subtitle: string;
  date: string;
  isUpcoming?: boolean;
  emoji: string;
  moodLabel: string;
  tempoMs: number;
}

export const OCCASION_TRACKS: OccasionTrack[] = [
  {
    id: 'first-meet',
    title: 'Chai & Shy Glances',
    subtitle: 'Raag Yaman Bansuri & Santoor',
    date: '06.05.2026',
    isUpcoming: false,
    emoji: '☕',
    moodLabel: 'First Meet',
    tempoMs: 420
  },
  {
    id: 'engagement',
    title: 'Sagai Shehnai',
    subtitle: 'Royal Reed, Harp & Bells',
    date: '01.07.2026',
    isUpcoming: false,
    emoji: '💍',
    moodLabel: 'Engagement',
    tempoMs: 360
  },
  {
    id: 'beach-visit',
    title: 'Sunset Waves & Guitar',
    subtitle: 'Ocean Surf & Acoustic Chords',
    date: '21.10.2026',
    isUpcoming: false,
    emoji: '🌊',
    moodLabel: 'Beach Date',
    tempoMs: 440
  },
  {
    id: 'pasupu',
    title: 'Pasupu & Haldi Joy',
    subtitle: 'Festive Folk & Dholak Beats',
    date: '13.12.2026',
    isUpcoming: true,
    emoji: '💛',
    moodLabel: 'Pasupu Function',
    tempoMs: 280
  },
  {
    id: 'pandiri-rata',
    title: 'Subha Pandiri',
    subtitle: 'Mangala Vadhyam & Temple Bells',
    date: '08.02.2027',
    isUpcoming: true,
    emoji: '🌿',
    moodLabel: 'Pandiri Rata',
    tempoMs: 330
  },
  {
    id: 'marriage',
    title: 'Kalyana Vaibhogam',
    subtitle: 'Raag Mohanam Divine Muhurtham',
    date: '10.02.2027',
    isUpcoming: true,
    emoji: '🪷',
    moodLabel: 'The Marriage',
    tempoMs: 340
  },
  {
    id: 'reception',
    title: "Valentine's Evening Waltz",
    subtitle: 'Romantic Violin & Grand Piano',
    date: '14.02.2027',
    isUpcoming: true,
    emoji: '🎻',
    moodLabel: 'Reception Gala',
    tempoMs: 380
  }
];

// Note frequencies in Hz (C4 scale + octaves)
const N: Record<string, number> = {
  C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98.00, A2: 110.00, Bb2: 116.54, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, Fs3: 185.00, G3: 196.00, A3: 220.00, Bb3: 233.08, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.00, A4: 440.00, Bb4: 466.16, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, Fs5: 739.99, G5: 783.99, A5: 880.00, Bb5: 932.33, B5: 987.77,
  C6: 1046.50
};

type AudioStateListener = (state: {
  currentTrack: OccasionTrackId;
  isPlaying: boolean;
  isMuted: boolean;
}) => void;

class SoundFX {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private dryGain: GainNode | null = null;
  private wetGain: GainNode | null = null;

  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private currentTrack: OccasionTrackId = 'first-meet';
  private sequencerTimer: number | null = null;
  private stepIndex: number = 0;

  private oceanNode: AudioNode | null = null;
  private oceanSource: AudioBufferSourceNode | null = null;
  private oceanLfo: OscillatorNode | null = null;
  private oceanActive: boolean = false;
  private listeners: Set<AudioStateListener> = new Set();

  constructor() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && this.isPlaying) {
          this.pauseMusic();
        }
      });
      window.addEventListener('pagehide', () => {
        if (this.isPlaying) {
          this.pauseMusic();
        }
      });
    }
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  public getState() {
    return {
      currentTrack: this.currentTrack,
      isPlaying: this.isPlaying && !this.isMuted,
      isMuted: this.isMuted
    };
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.72, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.dryGain = this.ctx.createGain();
      this.dryGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.dryGain.connect(this.masterGain);

      this.wetGain = this.ctx.createGain();
      this.wetGain.gain.setValueAtTime(0.38, this.ctx.currentTime);
      this.wetGain.connect(this.masterGain);

      // Procedural warm concert-hall impulse response for rich reverb
      this.reverbNode = this.createReverb(2.2, 2.8);
      if (this.reverbNode) {
        this.reverbNode.connect(this.wetGain);
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createReverb(duration: number, decay: number): ConvolverNode | null {
    if (!this.ctx) return null;
    const length = Math.floor(this.ctx.sampleRate * duration);
    const impulse = this.ctx.createBuffer(2, length, this.ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < length; i++) {
        const env = Math.pow(1 - i / length, decay);
        const white = (Math.random() * 2 - 1) * env;
        // Soft lowpass smoothing so reverb sounds warm & acoustic
        lp = lp * 0.65 + white * 0.35;
        data[i] = lp;
      }
    }
    const convolver = this.ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
  }

  private connectToOutput(node: AudioNode, sendReverb = true) {
    if (this.dryGain) node.connect(this.dryGain);
    if (sendReverb && this.reverbNode) node.connect(this.reverbNode);
  }

  // --- Instruments ---

  // 1. Warm Bansuri Flute / Romantic Violin (with gentle attack + vibrato)
  private playMelodicLead(
    freq: number,
    duration: number,
    style: 'bansuri' | 'shehnai' | 'violin' | 'nadaswaram',
    volume = 0.14
  ) {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    if (style === 'bansuri') {
      osc.type = 'sine';
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
    } else if (style === 'shehnai' || style === 'nadaswaram') {
      osc.type = 'sawtooth';
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq, now);
      // Formant-like bandpass + lowpass warmth for reed texture without harshness
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(style === 'shehnai' ? 1650 : 1950, now);
      filter.Q.setValueAtTime(2.5, now);
    } else {
      // Violin
      osc.type = 'sawtooth';
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.Q.setValueAtTime(1.2, now);
    }

    osc.frequency.setValueAtTime(freq, now);

    // Expressive vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(style === 'violin' ? 5.5 : 4.8, now);
    lfoGain.gain.setValueAtTime(0, now);
    lfoGain.gain.linearRampToValueAtTime(freq * 0.012, now + Math.min(0.25, duration * 0.4));
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    const osc2Gain = this.ctx.createGain();
    osc2Gain.gain.setValueAtTime(style === 'bansuri' ? 0.15 : 0.35, now);

    osc.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(gain);
    this.connectToOutput(gain, true);

    const attack = style === 'violin' ? 0.12 : 0.06;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume, now + attack);
    gain.gain.setValueAtTime(volume * 0.85, now + Math.max(attack + 0.02, duration - 0.12));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.start(now);
    osc2.start(now);
    lfo.start(now);
    osc.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
    lfo.stop(now + duration + 0.05);
  }

  // 2. Santoor / Sitar / Acoustic Guitar / Piano pluck
  private playPluck(
    freq: number,
    duration: number,
    tone: 'santoor' | 'guitar' | 'piano' | 'harp',
    volume = 0.13
  ) {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = tone === 'piano' ? 'triangle' : tone === 'santoor' ? 'sine' : 'triangle';
    overtone.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    overtone.frequency.setValueAtTime(freq * (tone === 'santoor' ? 3 : 2), now);

    const overGain = this.ctx.createGain();
    overGain.gain.setValueAtTime(tone === 'santoor' ? 0.25 : 0.18, now);
    overGain.gain.exponentialRampToValueAtTime(0.01, now + duration * 0.5);

    filter.type = 'lowpass';
    const startCutoff = tone === 'harp' ? 2800 : tone === 'guitar' ? 1900 : 2400;
    filter.frequency.setValueAtTime(startCutoff, now);
    filter.frequency.exponentialRampToValueAtTime(450, now + duration);

    osc.connect(filter);
    overtone.connect(overGain);
    overGain.connect(filter);
    filter.connect(gain);
    this.connectToOutput(gain, true);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + duration + 0.05);
    overtone.stop(now + duration + 0.05);
  }

  // 3. Lush Warm Pad / Tanpura Harmony Drone
  private playPadChord(freqs: number[], duration: number, volume = 0.045) {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    freqs.forEach(freq => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume, now + duration * 0.28);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      this.connectToOutput(gain, true);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  // 4. Tabla / Dholak / Thavil Percussion
  private playDrum(hit: 'dha' | 'ge' | 'ta' | 'dhin') {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (hit === 'dha' || hit === 'ge' || hit === 'dhin') {
      // Bass Bayan drum resonant thump
      const bass = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bass.type = 'sine';
      bass.frequency.setValueAtTime(hit === 'dha' ? 145 : 120, now);
      bass.frequency.exponentialRampToValueAtTime(58, now + 0.18);

      bassGain.gain.setValueAtTime(0.001, now);
      bassGain.gain.linearRampToValueAtTime(0.18, now + 0.008);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      bass.connect(bassGain);
      this.connectToOutput(bassGain, false);
      bass.start(now);
      bass.stop(now + 0.3);
    }

    if (hit === 'dha' || hit === 'ta' || hit === 'dhin') {
      // Crisp Dayan / Dholak treble tap
      const tap = this.ctx.createOscillator();
      const tapGain = this.ctx.createGain();
      tap.type = 'triangle';
      tap.frequency.setValueAtTime(hit === 'ta' ? 390 : 320, now);
      tap.frequency.exponentialRampToValueAtTime(240, now + 0.09);

      tapGain.gain.setValueAtTime(0.001, now);
      tapGain.gain.linearRampToValueAtTime(hit === 'ta' ? 0.09 : 0.06, now + 0.004);
      tapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      tap.connect(tapGain);
      this.connectToOutput(tapGain, true);
      tap.start(now);
      tap.stop(now + 0.14);
    }
  }

  // 5. Shimmering Temple Bell / Manjira Accent
  private playSoftBell(freq: number, volume = 0.045) {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
    osc.connect(gain);
    this.connectToOutput(gain, true);
    osc.start(now);
    osc.stop(now + 1.25);
  }

  // --- 7 Musical Sequencer Compositions ---

  private runStep() {
    if (!this.isPlaying || this.isMuted || !this.ctx) return;
    const step = this.stepIndex;

    switch (this.currentTrack) {
      case 'first-meet': {
        // 06.05.2026 — Raag Yaman Morning: Bansuri + Santoor + Tanpura
        // 16-step tranquil phrase
        const s = step % 16;
        if (s === 0 || s === 8) this.playPadChord([N.C3, N.G3, N.B3], 3.4, 0.04);
        const santoorArp = [N.C4, N.E4, N.G4, N.B4, N.Fs4, N.G4, N.D4, N.E4];
        if (s % 2 === 0) this.playPluck(santoorArp[(s / 2) % santoorArp.length], 1.1, 'santoor', 0.09);

        const yamanMelody: Record<number, [number, number]> = {
          0: [N.B4, 0.85],
          2: [N.D5, 0.85],
          4: [N.G5, 1.3],
          7: [N.Fs5, 0.6],
          8: [N.E5, 0.9],
          10: [N.D5, 0.8],
          12: [N.B4, 0.9],
          14: [N.A4, 0.7]
        };
        if (yamanMelody[s]) {
          this.playMelodicLead(yamanMelody[s][0], yamanMelody[s][1], 'bansuri', 0.12);
        }
        break;
      }

      case 'engagement': {
        // 01.07.2026 — Sagai Shehnai: Regal Raag Desh / Bhupali + Harp + Bells + Dholak
        const s = step % 16;
        if (s === 0) this.playPadChord([N.C3, N.G3, N.D4], 3.0, 0.045);
        if (s === 8) this.playPadChord([N.F3, N.C4, N.A4], 3.0, 0.045);

        // Gentle celebratory rhythm
        if (s === 0 || s === 6 || s === 10) this.playDrum('dha');
        if (s === 4 || s === 12) this.playDrum('ta');

        const harp = [N.C4, N.G4, N.C5, N.E5, N.D5, N.C5, N.G4, N.E4];
        if (s % 2 === 1) this.playPluck(harp[Math.floor(s / 2) % harp.length], 0.9, 'harp', 0.08);

        const shehnaiPhrase: Record<number, [number, number]> = {
          0: [N.G4, 0.65],
          2: [N.A4, 0.65],
          4: [N.C5, 1.0],
          8: [N.E5, 0.7],
          10: [N.D5, 0.65],
          12: [N.C5, 0.85],
          14: [N.G4, 0.7]
        };
        if (shehnaiPhrase[s]) {
          this.playMelodicLead(shehnaiPhrase[s][0], shehnaiPhrase[s][1], 'shehnai', 0.09);
        }
        if (s === 0 || s === 8) this.playSoftBell(N.C6, 0.03);
        break;
      }

      case 'pasupu': {
        // 13.12.2026 — Pasupu & Haldi Joy: Upbeat Festive Folk + Bouncy Dholak
        const s = step % 16;
        if (s === 0 || s === 8) this.playPadChord([N.C3, N.G3, N.E4], 2.2, 0.035);

        // Energetic Dholak groove
        if (s === 0 || s === 6 || s === 8) this.playDrum('dha');
        if (s === 3 || s === 11 || s === 14) this.playDrum('dhin');
        if (s === 4 || s === 12) this.playDrum('ta');

        // Bouncy folk pentatonic tune
        const folk = [N.E5, N.E5, N.G5, N.E5, N.D5, N.C5, N.D5, N.E5, N.G5, N.A5, N.G5, N.E5, N.D5, N.C5, N.A4, N.C5];
        this.playPluck(folk[s], 0.45, 'santoor', 0.12);
        if (s % 4 === 0) this.playMelodicLead(folk[s], 0.45, 'bansuri', 0.08);
        if (s === 0 || s === 8) this.playSoftBell(N.G5 * 2, 0.035);
        break;
      }

      case 'beach-visit': {
        // 21.10.2026 — Sunset Waves & Guitar: Coastal Ballad (Cmaj7 - G6 - Am7 - Fmaj7)
        const s = step % 32;
        const bar = Math.floor(s / 8);
        const beat = s % 8;

        const chords = [
          [N.C3, N.E3, N.G3, N.B3], // Cmaj7
          [N.G2, N.B2, N.D3, N.E3], // G6
          [N.A2, N.E3, N.G3, N.C4], // Am7
          [N.F2, N.C3, N.E3, N.A3]  // Fmaj7
        ];

        const chord = chords[bar];
        if (beat === 0) {
          this.playPadChord(chord, 3.6, 0.045);
        }

        // Gentle acoustic guitar fingerpicking pattern
        const arpPattern = [0, 1, 2, 3, 2, 1, 3, 2];
        const noteFreq = chord[arpPattern[beat]] * (beat >= 3 ? 2 : 1);
        this.playPluck(noteFreq, 1.4, 'guitar', 0.11);

        // Occasional tender flute sigh over the waves
        if (s === 2) this.playMelodicLead(N.E5, 1.5, 'bansuri', 0.08);
        if (s === 10) this.playMelodicLead(N.D5, 1.5, 'bansuri', 0.08);
        if (s === 18) this.playMelodicLead(N.C5, 1.5, 'bansuri', 0.08);
        if (s === 26) this.playMelodicLead(N.A4, 1.8, 'bansuri', 0.08);
        break;
      }

      case 'pandiri-rata': {
        // 08.02.2027 — Subha Pandiri: Raag Hamsadhwani (C D E G B C5) + Temple Bells + Thavil
        const s = step % 16;
        if (s === 0 || s === 8) this.playPadChord([N.C3, N.G3, N.C4], 2.7, 0.045);

        if (s === 0 || s === 4 || s === 8 || s === 12) this.playDrum('dha');
        if (s === 2 || s === 6 || s === 10 || s === 14) this.playDrum('ta');

        const hamsa: Record<number, [number, number]> = {
          0: [N.C5, 0.65],
          2: [N.B4, 0.6],
          4: [N.G4, 0.65],
          6: [N.E4, 0.6],
          8: [N.G4, 0.65],
          10: [N.B4, 0.6],
          12: [N.C5, 0.9],
          14: [N.E5, 0.6]
        };
        if (hamsa[s]) {
          this.playMelodicLead(hamsa[s][0], hamsa[s][1], 'nadaswaram', 0.09);
        }
        if (s === 0 || s === 8) this.playSoftBell(N.G5 * 2, 0.04);
        break;
      }

      case 'marriage': {
        // 10.02.2027 — Kalyana Vaibhogam: Grand Auspicious Wedding in Raag Mohanam (C D E G A C5)
        const s = step % 16;
        if (s === 0) this.playPadChord([N.C3, N.G3, N.E4], 2.8, 0.05);
        if (s === 8) this.playPadChord([N.G2, N.D3, N.B3, N.G4], 2.8, 0.045);

        if (s === 0 || s === 6 || s === 8) this.playDrum('dha');
        if (s === 4 || s === 12 || s === 14) this.playDrum('ta');

        // Shimmering Talambralu / Harp accompaniment
        const mohanamHarp = [N.C4, N.E4, N.G4, N.A4, N.C5, N.A4, N.G4, N.E4];
        if (s % 2 === 0) this.playPluck(mohanamHarp[(s / 2) % mohanamHarp.length], 0.9, 'harp', 0.085);

        // Uplifting wedding melody
        const weddingMelody: Record<number, [number, number]> = {
          0: [N.E5, 0.65],
          2: [N.G5, 0.65],
          4: [N.A5, 0.95],
          7: [N.G5, 0.55],
          8: [N.E5, 0.7],
          10: [N.D5, 0.65],
          12: [N.C5, 0.9],
          14: [N.D5, 0.6]
        };
        if (weddingMelody[s]) {
          this.playMelodicLead(weddingMelody[s][0], weddingMelody[s][1], 'nadaswaram', 0.095);
        }
        if (s === 0 || s === 4 || s === 12) this.playSoftBell(N.C6, 0.032);
        break;
      }

      case 'reception': {
        // 14.02.2027 — Valentine's Evening Waltz: Romantic Grand Piano + Expressive Violin
        const s = step % 24; // 3/4 Waltz feel! 8 beats per chord? 6 steps per bar!
        const bar = Math.floor(s / 6);
        const beat = s % 6;

        const waltzChords = [
          [N.C3, N.E3, N.G3, N.C4], // C
          [N.A2, N.E3, N.A3, N.C4], // Am
          [N.F2, N.C3, N.F3, N.A3], // F
          [N.G2, N.D3, N.G3, N.B3]  // G
        ];
        const chord = waltzChords[bar];

        if (beat === 0) {
          this.playPadChord(chord, 2.4, 0.045);
          this.playPluck(chord[0], 1.6, 'piano', 0.13);
        } else if (beat === 2 || beat === 4) {
          this.playPluck(chord[1] * 2, 0.9, 'piano', 0.09);
          this.playPluck(chord[2] * 2, 0.9, 'piano', 0.08);
        }

        // Soaring romantic violin melody
        const violinNotes: Record<number, [number, number]> = {
          0: [N.G5, 1.3],
          4: [N.E5, 0.75],
          6: [N.C5, 1.3],
          10: [N.E5, 0.75],
          12: [N.A5, 1.4],
          16: [N.G5, 0.75],
          18: [N.F5, 1.0],
          21: [N.D5, 1.1]
        };
        if (violinNotes[s]) {
          this.playMelodicLead(violinNotes[s][0], violinNotes[s][1], 'violin', 0.095);
        }
        break;
      }
    }

    this.stepIndex++;
  }

  private startSequencer() {
    this.stopSequencer();
    const trackMeta = OCCASION_TRACKS.find(t => t.id === this.currentTrack) || OCCASION_TRACKS[0];
    this.stepIndex = 0;

    // Start ocean ambience underneath Beach Date
    if (this.currentTrack === 'beach-visit') {
      this.startOceanWaves();
    } else {
      this.stopOceanWaves();
    }

    this.runStep();
    this.sequencerTimer = window.setInterval(() => {
      this.runStep();
    }, trackMeta.tempoMs);
  }

  private stopSequencer() {
    if (this.sequencerTimer !== null) {
      clearInterval(this.sequencerTimer);
      this.sequencerTimer = null;
    }
  }

  // --- Public Music Controls ---

  public playTrack(trackId: OccasionTrackId) {
    this.initCtx();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = false;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(0.72, this.ctx.currentTime);
    }
    this.currentTrack = trackId;
    this.isPlaying = true;
    this.startSequencer();
    this.notify();
  }

  public pauseMusic() {
    this.isPlaying = false;
    this.stopSequencer();
    this.stopOceanWaves();
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend().catch(() => {});
    }
    this.notify();
  }

  public resumeMusic() {
    this.playTrack(this.currentTrack);
  }

  public togglePlayPause(): boolean {
    if (this.isPlaying && !this.isMuted) {
      this.pauseMusic();
      return false;
    } else {
      this.playTrack(this.currentTrack);
      return true;
    }
  }

  public nextTrack() {
    const idx = OCCASION_TRACKS.findIndex(t => t.id === this.currentTrack);
    const next = OCCASION_TRACKS[(idx + 1) % OCCASION_TRACKS.length];
    this.playTrack(next.id);
  }

  public prevTrack() {
    const idx = OCCASION_TRACKS.findIndex(t => t.id === this.currentTrack);
    const prev = OCCASION_TRACKS[(idx - 1 + OCCASION_TRACKS.length) % OCCASION_TRACKS.length];
    this.playTrack(prev.id);
  }

  public toggleMute(): boolean {
    this.initCtx();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.72, this.ctx.currentTime);
    }
    if (this.isMuted) {
      this.stopSequencer();
      this.stopOceanWaves();
    } else if (this.isPlaying) {
      this.startSequencer();
    }
    this.notify();
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // --- Sound Effects & Legacy Mood Compatibility ---

  public playRingChime() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.07);

      gain.gain.setValueAtTime(0.01, this.ctx!.currentTime + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.16, this.ctx!.currentTime + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + idx * 0.07 + 0.9);

      osc.connect(gain);
      this.connectToOutput(gain, true);

      osc.start(this.ctx!.currentTime + idx * 0.07);
      osc.stop(this.ctx!.currentTime + idx * 0.07 + 0.95);
    });
  }

  public playTeaClink() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(2200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1750, this.ctx.currentTime + 0.14);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

    osc.connect(gain);
    this.connectToOutput(gain, true);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.24);
  }

  public playTempleBell() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const freqs = [784, 1175, 1568, 2349];
    freqs.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

      gain.gain.setValueAtTime(0.1 / (i + 1), this.ctx!.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx!.currentTime + 1.8);

      osc.connect(gain);
      this.connectToOutput(gain, true);

      osc.start();
      osc.stop(this.ctx!.currentTime + 1.85);
    });
  }

  public playHaldiJoy() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      this.playPluck(freq, 0.5, 'santoor', 0.1);
    });
  }

  public startOceanWaves() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx || this.oceanActive) return;

    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.09;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);

    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.14, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(380, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const waveGain = this.ctx.createGain();
    waveGain.gain.setValueAtTime(0.14, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(waveGain);
    this.connectToOutput(waveGain, false);

    whiteNoise.start();
    lfo.start();

    this.oceanSource = whiteNoise;
    this.oceanLfo = lfo;
    this.oceanNode = waveGain;
    this.oceanActive = true;
  }

  public stopOceanWaves() {
    if (this.oceanNode && this.ctx) {
      try {
        (this.oceanNode as GainNode).gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
        const nodeToDisconnect = this.oceanNode;
        const sourceToStop = this.oceanSource;
        const lfoToStop = this.oceanLfo;
        setTimeout(() => {
          try {
            sourceToStop?.stop();
            sourceToStop?.disconnect();
            lfoToStop?.stop();
            lfoToStop?.disconnect();
            nodeToDisconnect.disconnect();
          } catch {
            // ignore already stopped
          }
        }, 350);
      } catch {
        // ignore
      }
      this.oceanNode = null;
      this.oceanSource = null;
      this.oceanLfo = null;
      this.oceanActive = false;
    }
  }

  public stopAllBackgrounds() {
    this.pauseMusic();
  }

  public setMood(mood: 'traditional' | 'shehnai' | 'ocean' | 'festive' | 'reception' | 'none') {
    if (mood === 'none') {
      this.pauseMusic();
      return;
    }
    const map: Record<string, OccasionTrackId> = {
      traditional: 'first-meet',
      shehnai: 'engagement',
      ocean: 'beach-visit',
      festive: 'pasupu',
      reception: 'reception'
    };
    this.playTrack(map[mood] || 'first-meet');
  }
}

export const sound = new SoundFX();
