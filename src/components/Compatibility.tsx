const MACOS_VERSIONS = [
  "Ventura",
  "Sonoma",
  "Sequoia",
  "Tahoe",
] as const;

export function Compatibility() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Works on macOS 13 Ventura and later
        </h2>
        <p className="text-white/50 mb-10">
          Native performance on every supported version of macOS.
        </p>
        <VersionBadges />
      </div>
    </section>
  );
}

function VersionBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {MACOS_VERSIONS.map((version) => (
        <span
          key={version}
          className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/70"
        >
          macOS {version}
        </span>
      ))}
    </div>
  );
}
