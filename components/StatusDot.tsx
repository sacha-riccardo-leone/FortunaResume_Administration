// Small green "available / ongoing" marker: a dot inside a soft halo that slowly pulses.
// `inverse` is for bg-ink surfaces (dark in light mode, light in dark mode).
export default function StatusDot({
  inverse = false,
  className = "",
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span aria-hidden className={`relative flex h-1.5 w-1.5 flex-none ${className}`}>
      <span
        className={`absolute -inset-1 rounded-full motion-safe:animate-halo ${
          inverse
            ? "bg-emerald-400/30 dark:bg-emerald-500/25"
            : "bg-emerald-500/25 dark:bg-emerald-400/30"
        }`}
      />
      <span
        className={`relative h-1.5 w-1.5 rounded-full ${
          inverse ? "bg-emerald-400 dark:bg-emerald-600" : "bg-emerald-600 dark:bg-emerald-400"
        }`}
      />
    </span>
  );
}
