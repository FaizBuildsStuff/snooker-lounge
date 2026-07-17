export default function GridBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none transform-gpu will-change-transform z-[-1] overflow-hidden bg-[#FAFAFA] dark:bg-[#030303] transition-colors duration-500">
      {/* Top massive radial glow (Hero) */}
      <div 
        className="absolute left-1/2 top-[-20%] h-[1200px] w-[2400px] -translate-x-1/2 rounded-[100%] block dark:hidden" 
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 35%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.8
        }} 
      />
      
      <div 
        className="absolute left-1/2 top-[-20%] h-[1200px] w-[2400px] -translate-x-1/2 rounded-[100%] hidden dark:block" 
        style={{
          background: 'radial-gradient(circle, rgba(163, 230, 53, 0.15) 0%, rgba(163, 230, 53, 0.05) 35%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.8
        }} 
      />
      
      {/* Subtle gradient from top */}
      <div className="absolute inset-x-0 top-0 h-screen bg-gradient-to-b from-black/[0.02] dark:from-primary/10 to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-10 block dark:hidden" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} 
      />
      <div 
        className="absolute inset-0 opacity-10 hidden dark:block" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} 
      />
      
      {/* Micro-dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1] dark:opacity-30 mix-blend-multiply dark:mix-blend-screen block dark:hidden" 
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }} 
      />
      
      <div 
        className="absolute inset-0 opacity-30 mix-blend-screen hidden dark:block" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }} 
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.25] dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')" }} 
      />

      {/* Fade out to background at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#FAFAFA] dark:from-[#030303] to-transparent transition-colors duration-500" />
    </div>
  );
}
