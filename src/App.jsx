import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ChatDemo from "./components/ChatDemo";

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-black/60 dark:text-white/60">
      <p>© {new Date().getFullYear()} Asep AI — Learn. Create. Present.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <Hero />
      <Features />
      <ChatDemo />
      <Footer />
    </div>
  );
}
