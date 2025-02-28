"use client";

import { useState, useRef, useEffect } from "react";
// import { FaPlay, FaPause, FaStop, FaDownload } from "react-icons/fa";
import VoiceSelector from "@/components/VoiceSelector";
import TextInput from "@/components/TextInput";
import ControlPanel from "@/components/ControlPanel";
import SpeedSelector from "@/components/SpeedSelector";
import PitchSelector from "@/components/PitchSelector";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available voices when component mounts
  useEffect(() => {
    const loadVoices = (): void => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
      if (voices.length > 0) {
        setSelectedVoice(voices[0].name);
      }
    };

    loadVoices();

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Cleanup function
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = (): void => {
    if (!text) return;

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Set the selected voice
    const voice = availableVoices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    // Set rate and pitch
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Event listeners
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = (): void => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    }
  };

  const handleStop = (): void => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleDownload = (): void => {
    if (!text) return;

    // Create a new utterance for the download
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    const voice = availableVoices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    // Set rate and pitch
    utterance.rate = rate;
    utterance.pitch = pitch;

    // For browser compatibility, we'll use the Web Speech API and convert to a blob
    // This is a simplified approach - actual audio file download may require a server-side component
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "speech-text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            Text to Speech Converter
          </h1>
          <p className="text-blue-100 mt-2">
            Convert your text to natural-sounding speech
          </p>
        </div>

        <div className="p-6">
          <TextInput value={text} onChange={(e) => setText(e.target.value)} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <VoiceSelector
              voices={availableVoices}
              selectedVoice={selectedVoice}
              onVoiceChange={(voice) => setSelectedVoice(voice)}
            />

            <div className="space-y-4">
              <SpeedSelector
                value={rate}
                onChange={(value) => setRate(value)}
              />

              <PitchSelector
                value={pitch}
                onChange={(value) => setPitch(value)}
              />
            </div>
          </div>

          <ControlPanel
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onStop={handleStop}
            onDownload={handleDownload}
            disableControls={!text}
          />
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Built with Next.js and Tailwind CSS | Using Web Speech API</p>
      </footer>
    </main>
  );
}
