// Small uppercase label above section titles (keeps the editorial rhythm consistent).
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}
