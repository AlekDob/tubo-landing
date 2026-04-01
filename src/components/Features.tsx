interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: "🗂",
    title: "Multi-Tab Browsing",
    description:
      "Browse YouTube like a pro with multiple tabs, session persistence, and keyboard shortcuts.",
  },
  {
    icon: "🖼",
    title: "Picture-in-Picture",
    description:
      "Floating always-on-top video window. Watch while you work.",
  },
  {
    icon: "⌨️",
    title: "Native Media Keys",
    description:
      "Play, pause, skip — right from your keyboard. Now Playing integration included.",
  },
  {
    icon: "💎",
    title: "Liquid Glass UI",
    description:
      "Built for macOS 26 Tahoe with Apple's new Liquid Glass design language.",
  },
  {
    icon: "⚡",
    title: "Zero Dependencies",
    description:
      "Pure Apple frameworks. No Electron, no bloat. Just native performance.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "No tracking, no ads injection, no data collection. Your YouTube, your rules.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <FeatureGrid />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Everything you need.
        <br />
        <span className="text-white/40">Nothing you don&apos;t.</span>
      </h2>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURES.map((feature) => (
        <FeatureCardItem key={feature.title} {...feature} />
      ))}
    </div>
  );
}

function FeatureCardItem({ icon, title, description }: FeatureCard) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
      <span className="text-3xl block mb-4">{icon}</span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
