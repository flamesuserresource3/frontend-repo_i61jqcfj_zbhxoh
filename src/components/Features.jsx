import { Image as ImageIcon, FileText, Crown, MessageSquare } from "lucide-react";

const features = [
  {
    title: "GPT-style Learning Chat",
    desc: "Ask anything. Get step-by-step explanations, practice questions, and summaries tailored to your level.",
    icon: MessageSquare,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Image Editor",
    desc: "Enhance, crop, adjust colors, and apply smart effects — perfect for study notes and presentations.",
    icon: ImageIcon,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "PowerPoint Creator",
    desc: "Turn outlines into beautiful slides with consistent themes, imagery, and speaker notes.",
    icon: FileText,
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "Premium: Motion Slides",
    desc: "Unlock cinematic slide animations, advanced templates, and brand kits for truly standout decks.",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to learn and create
          </h2>
          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto mt-3">
            Asep brings conversation, visuals, and presentation design together so you can focus on outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur group overflow-hidden"
            >
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${f.color} opacity-20 blur-2xl`} />
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow-lg mb-4`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mt-1">{f.desc}</p>
              <button className="mt-4 text-sm font-medium text-purple-600 hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
