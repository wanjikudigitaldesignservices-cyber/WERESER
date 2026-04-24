import { useState } from 'react';

interface ChapterProps {
  id: string;
  num: number;
  title: string;
  desc: string;
  bgUrl: string;
}

export default function Chapter({ id, num, title, desc, bgUrl }: ChapterProps) {
  const [showBTS, setShowBTS] = useState(false);

  return (
    <section id={id} className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-sisu-gold/20">
      {/* Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${showBTS ? 'grayscale brightness-50 scale-105' : 'gold-tint'}`}
        style={{ backgroundImage: `url(${showBTS ? 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000' : bgUrl})` }}
      ></div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sisu-black to-transparent z-10"></div>
      <div className="absolute inset-0 vignette z-10"></div>

      {/* Large faint background number */}
      <div className="absolute left-4 -bottom-10 text-[20vw] font-display text-sisu-white/5 z-0 select-none pointer-events-none leading-none">
        0{num}
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-7xl font-display tracking-tighter text-sisu-white mb-6 uppercase">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-mono text-sisu-white/80 max-w-2xl leading-relaxed mb-8 border-l-2 border-sisu-gold pl-6">
            {showBTS 
              ? "Behind the scenes: over 200 practical effects were used, shooting entirely on location in Lapland underneath freezing temperatures to capture real breath and exhaustion."
              : desc}
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button className="stencil-btn text-sm">
              <span className="relative z-10 font-bold">Watch Clip</span>
            </button>
            <div className="flex items-center gap-3 bg-sisu-black/60 border border-sisu-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className={`text-xs font-mono tracking-widest ${!showBTS ? 'text-sisu-gold' : 'text-sisu-white/50'}`}>CINEMATIC</span>
              <button 
                onClick={() => setShowBTS(!showBTS)}
                className="w-12 h-6 bg-sisu-grey rounded-full relative transition-colors border border-sisu-gold/30 cursor-pointer"
              >
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sisu-gold transition-transform duration-300 ${showBTS ? 'translate-x-7' : 'translate-x-1'}`}></div>
              </button>
              <span className={`text-xs font-mono tracking-widest ${showBTS ? 'text-sisu-gold' : 'text-sisu-white/50'}`}>BTS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-50 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
