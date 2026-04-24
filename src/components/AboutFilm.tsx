export default function AboutFilm() {
  return (
    <section className="py-24 bg-sisu-grey relative">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sisu-gold/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display text-sisu-white mb-10 tracking-widest">ABOUT THE FILM</h2>
        
        <p className="font-mono text-sisu-white/80 text-lg md:text-xl leading-relaxed mb-6">
          "During the last desperate days of WWII, a solitary prospector crosses paths with Nazis on a scorched-earth retreat in northern Finland."
        </p>
        <p className="font-mono text-sisu-white/80 text-lg md:text-xl leading-relaxed mb-6">
          "When they steal his gold, they quickly discover they have tangled with no ordinary miner."
        </p>
        
        <div className="my-16 flex justify-center">
          <ul className="text-left font-mono tracking-widest text-sm space-y-4 border-l-2 border-sisu-gold pl-6">
            <li className="flex flex-col md:flex-row md:items-center">
              <span className="text-sisu-gold w-48">JORMA TOMMILA</span>
              <span className="text-sisu-white/60">AATAMI KORPI</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center">
              <span className="text-sisu-gold w-48">AKSEL HENNIE</span>
              <span className="text-sisu-white/60">OBERSTURMFÜHRER HELLDORF</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center">
              <span className="text-sisu-gold w-48">MIMOSA WILLAMO</span>
              <span className="text-sisu-white/60">CAPTURED WOMAN</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center">
              <span className="text-sisu-gold w-48">JACK DOOLAN</span>
              <span className="text-sisu-white/60">WOLF</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-xs tracking-[0.2em] text-sisu-white/40 border-t border-sisu-white/10 pt-10">
          <span className="border border-sisu-white/20 px-3 py-1">R RATED</span>
          <span>RUNTIME: 91 MIN</span>
          <span>© LIONSGATE</span>
        </div>
      </div>
    </section>
  );
}
