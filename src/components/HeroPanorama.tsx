import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroPanorama() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const sections = gsap.utils.toArray('.panorama-panel');
    
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + wrapperRef.current?.offsetWidth,
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const panels = [
    {
      id: "tundra",
      title: "THE GOLD STRIKE",
      bgUrl: "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&q=80&w=2000",
      desc: "ENV 1: Frozen tundra — Aatami digging for gold"
    },
    {
      id: "road",
      title: "FIRST BLOOD",
      bgUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000", // Some fire/smoke vibe
      desc: "ENV 2: Burning road — Nazi convoy visible in distance"
    },
    {
      id: "bridge",
      title: "THE BRIDGE",
      bgUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=2000",
      desc: "ENV 3: Bridge standoff — bodies of water, explosions"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-sisu-black">
      <div className="absolute inset-0 z-10 vignette pointer-events-none"></div>
      
      <div 
        ref={wrapperRef} 
        className="flex h-full w-[300vw]"
      >
        {panels.map((panel, i) => (
          <div 
            key={i} 
            className="panorama-panel relative h-full w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
          >
            {/* Parallax Background Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 gold-tint scale-110"
              style={{ backgroundImage: `url(${panel.bgUrl})` }}
            ></div>
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sisu-black to-transparent z-10"></div>
            
            <div className="relative z-20 text-center max-w-4xl px-8">
              <p className="text-sisu-gold/60 font-mono tracking-[0.3em] text-sm mb-4">0{i+1} // {panel.title}</p>
              <h2 className="text-5xl md:text-8xl text-sisu-white font-bold opacity-20 tracking-wider mix-blend-overlay">
                {panel.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <span className="text-xs tracking-widest text-sisu-gold/70 mb-4 animate-pulse">SCROLL TO CROSS THE WASTELAND</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sisu-gold/50 to-transparent"></div>
      </div>
    </section>
  );
}
