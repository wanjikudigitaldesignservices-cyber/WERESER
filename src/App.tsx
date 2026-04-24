/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import LoadingScreen from './components/LoadingScreen';
import SoundToggle from './components/SoundToggle';
import HeroPanorama from './components/HeroPanorama';
import MapNavigation from './components/MapNavigation';
import Chapter from './components/Chapter';
import BTSSection from './components/BTSSection';
import AboutFilm from './components/AboutFilm';
import ARCTA from './components/ARCTA';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeChapter, setActiveChapter] = useState(1);
  const [flash, setFlash] = useState(false);
  const prevChapter = useRef(1);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const cursorFill = document.querySelector('.cursor-fill');
    
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A') {
        cursorFill?.classList.remove('opacity-0');
        cursor.classList.add('scale-150');
      } else {
        cursorFill?.classList.add('opacity-0');
        cursor.classList.remove('scale-150');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Track active chapter based on scroll position
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const chapters = [
        document.getElementById('chapter-1'),
        document.getElementById('chapter-2'),
        document.getElementById('chapter-3'),
        document.getElementById('chapter-4'),
        document.getElementById('chapter-5')
      ];

      let current = 1;
      // Very basic intersection logic - in a real app would use IntersectionObserver
      chapters.forEach((ch, index) => {
        if (ch) {
          const rect = ch.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = index + 1;
          }
        }
      });
      
      if (current !== prevChapter.current) {
        prevChapter.current = current;
        setFlash(true);
        setTimeout(() => setFlash(false), 400); // 400ms flash duration
      }
      
      setActiveChapter(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaded]);

  return (
    <>
      <div 
        id="custom-cursor" 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] hidden md:flex items-center justify-center transition-transform duration-100 ease-out mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[1px] h-full bg-sisu-gold transition-all duration-200"></div>
          <div className="absolute h-[1px] w-full bg-sisu-gold transition-all duration-200"></div>
          <div className="absolute w-2 h-2 bg-sisu-gold rounded-full opacity-0 transition-opacity duration-200 cursor-fill"></div>
        </div>
      </div>

      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {flash && <div className="fixed inset-0 z-[90] pointer-events-none flash-burst"></div>}

      {loaded && (
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
          <main className="relative min-h-screen bg-sisu-black overflow-x-hidden">
            <SoundToggle />
            <MapNavigation activeChapter={activeChapter} />
            
            <HeroPanorama />

            {/* Chapters */}
            <div className="relative z-20">
              <Chapter 
                id="chapter-1"
                num={1}
                title="THE GOLD STRIKE"
                desc="Aatami Korpi abandons his past, searching for peace in the Lapland wilderness. He finds something else. Deep beneath the permafrost, a vein of pure gold."
                bgUrl="https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&q=80&w=2000"
              />
              <Chapter 
                id="chapter-2"
                num={2}
                title="FIRST BLOOD"
                desc="The retreating Nazi convoy spots a lone rider. They mock him. They steal his gold. They make their final mistake. The road runs red with their arrogance."
                bgUrl="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000"
              />
              <Chapter 
                id="chapter-3"
                num={3}
                title="THE BRIDGE"
                desc="Trapped between destruction and the cold depths. SS Obersturmführer Helldorf believes he has him cornered. But sisu means turning pure terror into action."
                bgUrl="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=2000"
              />
              <Chapter 
                id="chapter-4"
                num={4}
                title="THE TANK"
                desc="A beast of iron and treads against a pickaxe. The frozen earth violently erupts as Aatami dismantles the German war machine piece by piece."
                bgUrl="https://images.unsplash.com/photo-1595155104443-4422e8316e6d?auto=format&fit=crop&q=80&w=2000"
              />
              <Chapter 
                id="chapter-5"
                num={5}
                title="INTO THE HORIZON"
                desc="Surviving the unsurvivable. Battered, bloodied, but unbowed. The gold is reclaimed. Aatami walks towards the decimated town, leaving ashes in his wake."
                bgUrl="https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&q=80&w=2000"
              />
            </div>

            {/* Interstitial Banner */}
            <div className="py-8 bg-sisu-red/10 border-y border-sisu-gold/20 flex overflow-hidden">
              <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-60">
                <span className="text-sisu-gold font-mono tracking-[0.5em] text-sm md:text-base mx-8 uppercase">SISU: A Finnish concept. Extraordinary determination in the face of adversity.</span>
                <span className="text-sisu-gold font-mono tracking-[0.5em] text-sm md:text-base mx-8 uppercase">FILMED ON LOCATION IN LAPLAND, FINLAND</span>
                <span className="text-sisu-gold font-mono tracking-[0.5em] text-sm md:text-base mx-8 uppercase">OVER 200 PRACTICAL EFFECTS USED IN PRODUCTION</span>
              </div>
            </div>

            <BTSSection />
            <AboutFilm />
            <ARCTA />
            <Footer />
            
            <div className="absolute inset-0 noise-overlay"></div>
          </main>
        </ReactLenis>
      )}
    </>
  );
}
