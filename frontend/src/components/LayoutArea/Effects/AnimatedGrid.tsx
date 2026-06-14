import "./AnimatedGrid.css";

export function AnimatedGrid() {
  return (
    <div className={"animated-grid"} aria-hidden="true">
      <svg className={"animated-grid__grid"} width="100%" height="100%">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(13,148,136,0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
