export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <GradientBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <HeroContent />
        <HeroActions />
        <MacOSWindowMockup />
      </div>
    </section>
  );
}

function GradientBackground() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, #FF0033 0%, transparent 70%)",
      }}
    />
  );
}

function HeroContent() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up">
        The native YouTube app
        <br />
        for <span className="text-[#FF0033]">macOS</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
        Tubo is a free YouTube desktop app for Mac with multi-tab browsing,
        Picture-in-Picture, media keys, and Liquid Glass UI — built
        with pure Apple frameworks, no Electron.
      </p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
      <a
        href="#download"
        className="bg-[#FF0033] hover:bg-[#E0002D] text-white font-medium rounded-full px-8 py-3 transition-colors"
      >
        Download for macOS
      </a>
      <a
        href="https://github.com/AleKDob/tubo"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white/20 hover:border-white/40 text-white font-medium rounded-full px-8 py-3 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  );
}

function MacOSWindowMockup() {
  return (
    <div className="mt-16 animate-fade-in-up-delay-3 animate-float">
      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <WindowTitleBar />
        <div className="bg-[#1a1a1a] h-64 md:h-80 flex items-center justify-center">
          <span className="text-white/20 text-sm">
            Tubo — YouTube Player
          </span>
        </div>
      </div>
    </div>
  );
}

function WindowTitleBar() {
  return (
    <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      <span className="ml-4 text-xs text-white/30">
        youtube.com
      </span>
    </div>
  );
}
