// Small green "available / ongoing" marker: a dot inside a soft halo that slowly pulses.
export default function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative flex h-1.5 w-1.5 flex-none ${className}`}>
      <span className="absolute -inset-1 rounded-full bg-emerald-500/25 motion-safe:animate-halo dark:bg-emerald-400/30" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
    </span>
  );
}
