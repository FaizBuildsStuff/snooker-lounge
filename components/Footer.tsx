import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.08] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#030303] py-12 px-4 md:px-8 lg:px-16 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <Image src="/logo.jpg" alt="Diamond Snooker Club" fill className="object-cover" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-black dark:text-white block">Diamond Snooker Club</span>
            <span className="text-[10px] text-black/50 dark:text-white/50 tracking-widest uppercase">Gaming Lounge | Private Rooms</span>
          </div>
        </Link>
        
        <div className="flex gap-8 text-sm text-black/60 dark:text-white/60">
          <a href="https://www.facebook.com/profile.php?id=61571754714172" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-primary transition-colors">Facebook</a>
        </div>
        
        <div className="text-sm text-black/40 dark:text-white/40">
          © {new Date().getFullYear()} Diamond Snooker Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
