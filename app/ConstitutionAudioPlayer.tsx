"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "./publicAsset";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remaining}`;
};

export default function ConstitutionAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) await audio.play();
    else audio.pause();
  };

  const openAndPlay = async () => {
    setIsOpen(true);
    window.setTimeout(() => void togglePlayback(), 0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      <button className="constitutionListen" type="button" onClick={() => void openAndPlay()}>
        <span>Listen to the audiobook</span><span aria-hidden="true">▶</span>
      </button>
      <audio ref={audioRef} preload="metadata" src={publicAsset("JOSIEs_constitution_audiobook.mp3")} />
      {isOpen && typeof document !== "undefined" && createPortal(
        <section className="audioPlayer" aria-label="JOSIE Constitution audiobook player">
          <div className="audioPlayerInner">
            <button className="audioClose" type="button" onClick={() => { audioRef.current?.pause(); setIsOpen(false); }} aria-label="Close audiobook player">×</button>
            <div className="audioMeta"><span>Now listening</span><strong>JOSIE’s Constitution</strong></div>
            <button className="audioPlay" type="button" onClick={() => void togglePlayback()} aria-label={isPlaying ? "Pause audiobook" : "Play audiobook"}>{isPlaying ? "Ⅱ" : "▶"}</button>
            <span className="audioTime">{formatTime(currentTime)}</span>
            <input
              className="audioSeek"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              aria-label="Audiobook progress"
              onChange={(event) => {
                const value = Number(event.target.value);
                setCurrentTime(value);
                if (audioRef.current) audioRef.current.currentTime = value;
              }}
            />
            <span className="audioTime">{formatTime(duration)}</span>
          </div>
        </section>
      , document.body)}
    </>
  );
}
