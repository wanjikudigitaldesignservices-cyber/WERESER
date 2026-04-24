export default function MapNavigation({ activeChapter = 1 }: { activeChapter?: number }) {
  const chapters = [
    { id: 1, name: "Gold Strike" },
    { id: 2, name: "First Blood" },
    { id: 3, name: "The Bridge" },
    { id: 4, name: "The Tank" },
    { id: 5, name: "Survival" },
  ];

  const handleMapClick = (index: number) => {
    // In a real app, this would scroll to the specific chapter section.
    // Assuming sections have ids like 'chapter-1'
    const element = document.getElementById(`chapter-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden md:block w-48 opacity-80 hover:opacity-100 transition-opacity">
      <div className="text-[10px] text-sisu-gold font-mono tracking-widest uppercase mb-3 border-b border-sisu-gold/30 pb-1">
        Tactical Route
      </div>
      <div className="relative h-48 border-l border-dashed border-sisu-gold/20 ml-2">
        {chapters.map((ch, idx) => (
          <div 
            key={ch.id}
            className="absolute left-0 flex items-center cursor-pointer group"
            style={{ top: `${(idx / (chapters.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
            onClick={() => handleMapClick(idx)}
          >
            <div className={`w-2 h-2 rounded-none transition-all duration-300 ${activeChapter === ch.id ? 'bg-sisu-gold shadow-[0_0_10px_#C9A84C]' : 'bg-sisu-black border border-sisu-gold/50 group-hover:bg-sisu-gold/20'}`}></div>
            <span className={`ml-4 text-xs font-mono tracking-wider transition-colors duration-300 ${activeChapter === ch.id ? 'text-sisu-gold' : 'text-sisu-white/50 group-hover:text-sisu-white'}`}>
              0{ch.id} {ch.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
