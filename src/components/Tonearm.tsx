/** Stationary tonearm above the rotating record; decorative only. */
export function Tonearm() {
  return (
    <svg className="tonearm absolute inset-0 z-2 h-full w-full overflow-visible" viewBox="0 0 500 500" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="arm-metal" x1="0" x2="1">
          <stop stopColor="#4b4b47" />
          <stop offset=".3" stopColor="#f4f1e9" />
          <stop offset=".5" stopColor="#a4a29a" />
          <stop offset=".75" stopColor="#fffdf3" />
          <stop offset="1" stopColor="#5a5953" />
        </linearGradient>
        <radialGradient id="pivot-metal">
          <stop stopColor="#e9e4d8" />
          <stop offset=".55" stopColor="#8c8a82" />
          <stop offset=".8" stopColor="#dbd7cc" />
          <stop offset="1" stopColor="#3a3935" />
        </radialGradient>
      </defs>
      <g className="tonearm-shadow">
        <circle cx="421" cy="74" r="38" fill="#252522" stroke="#b0aa9c" strokeWidth="3" />
        <circle cx="421" cy="74" r="25" fill="url(#pivot-metal)" />
        <rect x="410" y="29" width="22" height="66" rx="6" fill="url(#arm-metal)" />
        <path d="M421 85 L420 216 Q420 238 404 251 L356 296" fill="none" stroke="#343330" strokeWidth="15" strokeLinecap="round" />
        <path d="M419 85 L418 216 Q418 236 403 249 L354 294" fill="none" stroke="url(#arm-metal)" strokeWidth="10" strokeLinecap="round" />
        <g transform="translate(352 296) rotate(43)">
          <rect x="-12" y="-6" width="24" height="54" rx="4" fill="#1c1c1a" stroke="#a8a399" strokeWidth="2" />
          <path d="M-7 3 H7 M-7 11 H7 M-7 19 H7" stroke="#9c998f" strokeWidth="2" />
          <rect x="-8" y="40" width="16" height="13" rx="2" fill="#d10a06" />
          <path d="M0 53 V59" stroke="#dbd6c9" strokeWidth="2" />
        </g>
        <circle cx="421" cy="74" r="6" fill="#222" stroke="#ddd8cc" strokeWidth="2" />
      </g>
    </svg>
  );
}


