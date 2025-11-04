import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 p-[2px]">
            <div className="h-full w-full rounded-full bg-white dark:bg-neutral-900 grid place-items-center">
              <Rocket className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-lg">Asep AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
          <a href="#chat" className="hover:text-purple-600 transition-colors">Chat</a>
          <a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm shadow-lg shadow-purple-600/20">
            <Star className="h-4 w-4" /> Go Premium
          </a>
          <button className="inline-flex items-center px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-sm hover:bg-black/5 dark:hover:bg-white/5">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
