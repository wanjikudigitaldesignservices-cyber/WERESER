import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Simulate loading for 3 strikes
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setComplete(true);
      }
      setProgress(Math.floor(current));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // fade out duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-sisu-black transition-opacity duration-1000 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 vignette"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl tracking-[1.5em] pl-[1.5em] text-sisu-gold opacity-90 drop-shadow-lg mb-6 font-display">
          SISU
        </h1>
        
        <p className="text-sisu-white/80 font-mono tracking-widest text-sm md:text-base leading-relaxed mb-12">
          LAPLAND. 1944. THE WAR IS ENDING.<br/>
          FOR ONE MAN — IT'S JUST BEGINNING.
        </p>

        {!complete ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 flex items-center justify-center border border-sisu-gold/30 rounded-full animate-bounce">
              <svg className="w-6 h-6 text-sisu-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0 0l-5-5m5 5l5-5" />
              </svg>
            </div>
            <p className="text-sisu-gold/70 text-xs tracking-[0.3em] font-mono">{progress}%</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <button onClick={handleEnter} className="stencil-btn group cursor-pointer z-20">
              <span className="relative z-10 font-bold tracking-[0.2em]">Enter The Wasteland</span>
            </button>
            <p className="text-xs text-sisu-white/40 tracking-wider">Best experienced on mobile with sound on</p>
          </div>
        )}
      </div>
    </div>
  );
}
