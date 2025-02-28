interface Window {
  SpeechSynthesis: any;
  speechSynthesis: SpeechSynthesis;
  SpeechSynthesisUtterance: any;
}

interface SpeechSynthesis {
  pending: boolean;
  speaking: boolean;
  paused: boolean;
  onvoiceschanged: Function | null;
  getVoices(): SpeechSynthesisVoice[];
  speak(utterance: SpeechSynthesisUtterance): void;
  cancel(): void;
  pause(): void;
  resume(): void;
}

interface SpeechSynthesisVoice {
  default: boolean;
  lang: string;
  localService: boolean;
  name: string;
  voiceURI: string;
}

interface SpeechSynthesisUtterance extends EventTarget {
  lang: string;
  pitch: number;
  rate: number;
  text: string;
  voice: SpeechSynthesisVoice | null;
  volume: number;
  onstart: Function | null;
  onend: Function | null;
  onerror: Function | null;
  onpause: Function | null;
  onresume: Function | null;
  onboundary: Function | null;
  onmark: Function | null;
}