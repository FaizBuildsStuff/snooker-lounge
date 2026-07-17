export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#030303] py-12 px-4 md:px-8 lg:px-16 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase">
          Lounge<span className="text-black/50 dark:text-primary">.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-black/60 dark:text-white/60">
          <a href="#" className="hover:text-black dark:hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-black dark:hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-black dark:hover:text-primary transition-colors">Twitter</a>
        </div>
        
        <div className="text-sm text-black/40 dark:text-white/40">
          © {new Date().getFullYear()} Snooker Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
