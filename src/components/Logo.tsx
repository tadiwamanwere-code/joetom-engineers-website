interface LogoProps {
  className?: string;
}

/**
 * Alstyle Construction logo mark — twin angular roof peaks (blue + orange)
 * over a baseline bar, with a small window under the front gable.
 * Vector rebuild of the client logo so no raster asset is required.
 * Swap for the official PNG later by replacing this with an <img>.
 */
export default function Logo({ className = 'h-10 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 104"
      className={className}
      role="img"
      aria-label="Alstyle Construction logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back roof (orange) + chimney */}
      <rect x="92" y="40" width="7" height="20" rx="1" fill="#f5a833" />
      <path
        d="M50 76 L80 22 L110 76"
        stroke="#f5a833"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Front roof (blue) */}
      <path
        d="M10 76 L42 26 L74 76"
        stroke="#1f4fa0"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Window — 4 orange panes under the front gable */}
      <g fill="#f5a833">
        <rect x="33" y="54" width="7" height="7" rx="1" />
        <rect x="44" y="54" width="7" height="7" rx="1" />
        <rect x="33" y="65" width="7" height="7" rx="1" />
        <rect x="44" y="65" width="7" height="7" rx="1" />
      </g>
      {/* Baseline bar */}
      <rect x="12" y="88" width="96" height="8" rx="1.5" fill="#f5a833" />
    </svg>
  );
}
