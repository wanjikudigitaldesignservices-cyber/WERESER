import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

// Using a remote audio file for ambient wind.
const ambientSound = new Howl({
  src: ['https://actions.google.com/sounds/v1/weather/wind_and_snow.ogg'],
  loop: true,
  volume: 0.2,
});

export default function SoundToggle() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    Howler.mute(muted);
    // Attempt autoplay if not muted (browsers usually block this unless user interacted)
    if (!muted && !ambientSound.playing()) {
      ambientSound.play();
    }
  }, [muted]);

  const toggleSound = () => {
    if (muted && !ambientSound.playing()) {
      ambientSound.play();
    }
    setMuted(!muted);
  };

  return (
    <button 
      onClick={toggleSound}
      className="fixed top-6 right-6 z-40 w-12 h-12 flex items-center justify-center border border-sisu-gold/30 rounded-full bg-sisu-black/50 backdrop-blur-sm text-sisu-gold hover:bg-sisu-gold/10 transition-colors cursor-pointer"
      aria-label="Toggle Sound"
    >
      {muted ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
      )}
    </button>
  );
}
