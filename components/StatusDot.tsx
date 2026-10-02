// Small "live" marker: a solid dot inside a soft halo that slowly pulses.
export default function StatusDot({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span aria-hidden className={`relative flex h-1.5 w-1.5 flex-none ${className}`}>
      <span
        className={`absolute -inset-1 rounded-full motion-safe:animate-halo ${
          tone === "paper" ? "bg-paper/25" : "bg-ink/10"
        }`}
      />
      <span
        className={`relative h-1.5 w-1.5 rounded-full ${tone === "paper" ? "bg-paper" : "bg-ink"}`}
      />
    </span>
  );
}
