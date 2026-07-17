export default function GridBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none transform-gpu will-change-transform z-[-1] overflow-hidden bg-[#030303]">
      {/* Top massive radial glow (Hero) */}
      <div 
        className="absolute left-1/2 top-[-20%] h-[1200px] w-[2400px] -translate-x-1/2 rounded-[100%]" 
        style={{
          background: 'radial-gradient(circle, #84cc16 0%, #3f6212 35%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.65
        }} 
      />
      
      {/* Subtle green gradient from top */}
      <div className="absolute inset-x-0 top-0 h-screen bg-gradient-to-b from-[#84cc16]/5 to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} 
      />
      
      {/* Micro-dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          mixBlendMode: 'overlay'
        }} 
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')" }} 
      />

      {/* Fade out to black at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}
