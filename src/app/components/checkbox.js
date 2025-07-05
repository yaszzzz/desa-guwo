import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleToggle = () => {
    setVisible(!visible);
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Blocked by browser:", e));
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <StyledWrapper>
      {/* tombol toggle panel */}
      <button
        onClick={handleToggle}
        className="toggle-button"
        aria-label="toggle music player"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
          <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2S9 11.895 9 13zm6-2V3h-4v8.132A3.993 3.993 0 0 0 9 10V1h6v10z" />
        </svg>
      </button>

      {visible && (
        <div className="audio-player">
          <div className="player-controls">
            <div className="song-info">
              <div className="song-title">Indonesia Pusaka</div>
              <p className="artist">Firman Putra - Violin Cover</p>
            </div>
            <div className="progress-bar">
              <div className="progress" />
            </div>
            <div className="buttons">
              <button className="skip-btn">⏮</button>
              <button className="play-btn" onClick={handlePlayPause}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button className="volume-btn">🔊</button>
            </div>
          </div>
          <audio
            ref={audioRef}
            src="/audio/Indonesia Pusaka - Violin Cover by Firman Putra.mp3"
            autoPlay
            muted
          />
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(6px);
    border-radius: 50%;
    border: none;
    color: #ff5500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.6;
    z-index: 10000;
  }
  .toggle-button:hover { opacity: 1; }

  .audio-player {
    position: fixed;
    right: 20px;
    bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 80px;
    background-color: rgba(243,243,243,0.95);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 9999;
  }
  .player-controls { flex-grow: 1; display: flex; flex-direction: column; }
  .song-info { margin-bottom: 4px; }
  .song-title { font-size: 16px; color: #333; margin: 0; }
  .artist { font-size: 12px; color: #666; margin: 0; }
  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: #ddd;
    border-radius: 2px;
    overflow: hidden;
  }
  .progress {
    width: 0;
    height: 100%;
    background-color: #ff5500;
    animation: progress-animation 10s linear infinite;
  }
  .buttons {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .play-btn,
  .skip-btn,
  .volume-btn {
    font-size: 16px;
    color: #666;
    margin-right: 8px;
    transition: transform 0.2s ease-in-out;
  }
  .play-btn:hover,
  .skip-btn:hover,
  .volume-btn:hover {
    transform: scale(1.2);
  }
  @keyframes progress-animation {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

export default Form;
