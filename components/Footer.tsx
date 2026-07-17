export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030303] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-white uppercase">
          Lounge<span className="text-primary">.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-secondary">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        
        <div className="text-sm text-secondary/60">
          © {new Date().getFullYear()} Snooker Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
