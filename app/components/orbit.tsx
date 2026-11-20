export function Orbit() {
  return (
    <div className="orbit-scene" aria-hidden="true">
      <div className="orbit-coordinates">
        <span>IDEAS → SYSTEMS → EXPERIENCES</span>
        <span>FIG. 01 / THE INTERSECTION</span>
      </div>
      <div className="orbit-glow" />
      <div className="orbit-geometry">
        <svg viewBox="0 0 600 600" fill="none" className="orbit-svg">
          <defs>
            <linearGradient
              id="orbit-blue"
              x1="100"
              y1="80"
              x2="490"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6be9ff" />
              <stop offset=".45" stopColor="#3686ff" />
              <stop offset="1" stopColor="#1b3472" />
            </linearGradient>
            <radialGradient id="core">
              <stop stopColor="#172d4c" />
              <stop offset="1" stopColor="#091421" />
            </radialGradient>
          </defs>
          <circle
            cx="300"
            cy="300"
            r="243"
            stroke="#1c2a39"
            strokeDasharray="2 10"
          />
          <circle cx="300" cy="300" r="198" stroke="#1d3045" />
          <path d="M300 32v32m0 472v32M32 300h32m472 0h32" stroke="#477592" />
          <g className="orbit-lines" stroke="url(#orbit-blue)">
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <ellipse
                key={angle}
                cx="300"
                cy="300"
                rx="212"
                ry="81"
                transform={`rotate(${angle} 300 300)`}
                opacity={angle % 60 === 0 ? ".8" : ".4"}
              />
            ))}
            <circle cx="300" cy="300" r="152" strokeOpacity=".25" />
          </g>
          <circle
            cx="300"
            cy="300"
            r="76"
            fill="url(#core)"
            stroke="#4f9ed5"
            strokeOpacity=".6"
          />
          <circle
            cx="300"
            cy="300"
            r="66"
            stroke="#2f506d"
            strokeDasharray="2 6"
          />
          <path
            d="m278 283-17 17 17 17m44-34 17 17-17 17m-14-42-16 50"
            stroke="#a5e9ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="154" cy="146" r="5" fill="#72e3ff" />
          <circle cx="468" cy="435" r="5" fill="#4b93ff" />
          <path d="M154 146H94m374 289h51" stroke="#356081" />
        </svg>
      </div>
      <div className="orbit-label orbit-label-web">
        <span className="orbit-label-symbol">&lt;/&gt;</span>
        <div>
          Web development<small>REACT · NEXT.JS</small>
        </div>
        <span className="node-dot" />
      </div>
      <div className="orbit-label orbit-label-mobile">
        <span className="orbit-label-symbol">▯</span>
        <div>
          Mobile experiences<small>REACT NATIVE · EXPO</small>
        </div>
        <span className="node-dot" />
      </div>
      <div className="orbit-caption">
        <span className="crosshair">+</span>
        <span>Where curiosity meets craft.</span>
        <span className="crosshair">+</span>
      </div>
    </div>
  );
}
