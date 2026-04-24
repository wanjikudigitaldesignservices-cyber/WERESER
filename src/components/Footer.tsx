export default function Footer() {
  return (
    <footer className="bg-sisu-black pt-24 pb-12 relative border-t border-sisu-red/20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-display tracking-widest text-sisu-white mb-20 uppercase glow-text">
          HE IS NOT IMMORTAL.<br className="hidden md:block"/> HE JUST REFUSES TO DIE.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-24">
          <button className="stencil-btn w-full md:w-auto">
            <span className="relative z-10 font-bold text-sisu-gold group-hover:text-sisu-black">WATCH NOW</span>
          </button>
          <button className="stencil-btn w-full md:w-auto" style={{ borderStyle: 'dashed' }}>
            <span className="relative z-10 font-bold">GET THE SEQUEL</span>
          </button>
        </div>

        <div className="w-12 h-12 mx-auto mb-16 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
        </div>

        <div className="flex flex-col items-center border-t border-sisu-white/10 pt-8 mt-8">
          <h1 className="text-4xl tracking-[1.5em] pl-[1.5em] text-sisu-gold/50 font-display mb-8">SISU</h1>
          
          <div className="flex gap-6 mb-8 text-sisu-white/40 font-mono text-xs tracking-widest">
            <a href="#" className="hover:text-sisu-gold transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-sisu-gold transition-colors">TERMS</a>
            <a href="#" className="hover:text-sisu-gold transition-colors">COOKIE POLICY</a>
          </div>

          <div className="flex gap-6 mb-8">
            <div className="w-8 h-8 rounded-full border border-sisu-white/20 flex items-center justify-center text-sisu-white/60 hover:border-sisu-gold hover:text-sisu-gold cursor-pointer transition-all">IG</div>
            <div className="w-8 h-8 rounded-full border border-sisu-white/20 flex items-center justify-center text-sisu-white/60 hover:border-sisu-gold hover:text-sisu-gold cursor-pointer transition-all">TT</div>
            <div className="w-8 h-8 rounded-full border border-sisu-white/20 flex items-center justify-center text-sisu-white/60 hover:border-sisu-gold hover:text-sisu-gold cursor-pointer transition-all">YT</div>
          </div>

          <p className="text-[10px] uppercase font-mono tracking-widest text-sisu-white/30">
            © 2023 Lionsgate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
