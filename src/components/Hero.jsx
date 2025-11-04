import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast; doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),rgba(255,255,255,0.6),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.8),rgba(10,10,10,0.6),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-black/5 dark:bg-white/10 backdrop-blur">
          Meet Asep — your AI learning and creation copilot
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Learn faster, create smarter.
          <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">Chat, edit images, and build stunning slides.</span>
        </h1>
        <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
          An AI that feels like a study partner. Ask questions, transform images, and generate polished PowerPoints — with premium animations — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#chat" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-600/20">
            Start chatting <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center px-5 py-3 rounded-full border border-black/10 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-neutral-900/60">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
