// Small green "available / ongoing" marker: a dot inside a soft halo that slowly pulses.
export default function StatusDot({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span aria-hidden className={`relative flex h-1.5 w-1.5 flex-none ${className}`}>
      <span
        className={`absolute -inset-1 rounded-full motion-safe:animate-halo ${
          onDark ? "bg-emerald-400/30" : "bg-emerald-500/25"
        }`}
      />
      <span
        className={`relative h-1.5 w-1.5 rounded-full ${onDark ? "bg-emerald-400" : "bg-emerald-600"}`}
      />
    </span>
  );
}
