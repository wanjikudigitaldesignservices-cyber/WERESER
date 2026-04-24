export default function BTSSection() {
  return (
    <section className="relative py-32 bg-sisu-black overflow-hidden border-b border-sisu-gold/20">
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-lg text-sisu-gold font-mono tracking-[0.4em] uppercase mb-4">The Making of Sisu</h2>
          <div className="w-12 h-[1px] bg-sisu-gold/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 items-center">
          <div>
            <div className="text-[6rem] text-sisu-gold/20 font-display leading-none absolute -ml-6 -mt-10 pointer-events-none">"</div>
            <p className="text-2xl md:text-4xl font-display uppercase tracking-wider text-sisu-white leading-tight mb-6 relative z-10">
              I wanted to make a film where one man embodies something primal — a refusal to be broken. That is sisu.
            </p>
            <p className="font-mono text-sisu-gold text-sm tracking-widest uppercase">— Jalmari Helander, Writer/Director</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
            {/* Placeholder BTS Image */}
            <img src="https://images.unsplash.com/photo-1533422902779-dac564bc7df4?auto=format&fit=crop&q=80&w=800" alt="Director reading script on set" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 border-2 border-sisu-gold/30 translate-x-4 -translate-y-4 -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center flex-col-reverse md:flex-row-reverse">
          <div className="order-1 md:order-2">
            <div className="text-[6rem] text-sisu-gold/20 font-display leading-none absolute -ml-6 -mt-10 pointer-events-none">"</div>
            <p className="text-2xl md:text-4xl font-display uppercase tracking-wider text-sisu-white leading-tight mb-6 relative z-10">
              Aatami does not speak because he does not need to. His body tells the story.
            </p>
            <p className="font-mono text-sisu-gold text-sm tracking-widest uppercase">— Jorma Tommila, Aatami Korpi</p>
          </div>
          <div className="order-2 md:order-1 relative aspect-[4/3] w-full max-w-lg mx-auto grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
            {/* Placeholder Actor Image */}
            <img src="https://images.unsplash.com/photo-1508216391483-e18eebd54256?auto=format&fit=crop&q=80&w=800" alt="Jorma Tommila in costume" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 border-2 border-sisu-gold/30 -translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
