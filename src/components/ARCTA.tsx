export default function ARCTA() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b border-sisu-gold/20 bg-sisu-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 gold-tint transition-transform duration-[20s] hover:scale-110 ease-linear"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1547468536-542612ce665f?auto=format&fit=crop&q=80&w=2000)' }}
      ></div>
      <div className="absolute inset-0 vignette z-10"></div>
      
      <div className="relative z-20 text-center max-w-3xl px-6 md:hidden">
        <div className="w-16 h-16 mx-auto mb-8 border border-sisu-gold/50 rounded-full flex items-center justify-center bg-sisu-black/80 backdrop-blur-sm animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
        </div>
        <h2 className="text-4xl font-display text-sisu-white mb-4 uppercase tracking-wider">Place Aatami In Your World</h2>
        <p className="font-mono text-sisu-white/60 text-sm mb-8 leading-relaxed">
          Open this experience on an AR-capable mobile device to place a 3D model of Aatami Korpi in your environment.
        </p>
        <button className="stencil-btn text-xs">
          <span className="relative z-10 font-bold">Launch Web AR</span>
        </button>
      </div>

      <div className="relative z-20 hidden md:flex items-center justify-center w-full h-full pointer-events-none">
        <h1 className="text-[12vw] font-display text-sisu-white/10 uppercase tracking-tighter leading-none select-none mix-blend-overlay">
          HE REFUSES TO DIE
        </h1>
      </div>
    </section>
  );
}
