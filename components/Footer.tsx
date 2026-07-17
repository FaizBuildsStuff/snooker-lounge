export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.08] bg-[#FAFAFA] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-black uppercase">
          Lounge<span className="text-black/50">.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-black/60">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Facebook</a>
          <a href="#" className="hover:text-black transition-colors">Twitter</a>
        </div>
        
        <div className="text-sm text-black/40">
          © {new Date().getFullYear()} Snooker Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
