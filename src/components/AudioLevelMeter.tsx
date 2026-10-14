import type { CSSProperties } from 'react';
import './AudioLevelMeter.css';

const rhythms = [0.83, 1.17, 0.94, 1.31, 1.06, 0.77, 1.23, 0.91, 1.13, 1.39, 0.87, 1.02];

/** Decorative levels, synchronized with playback; not a frequency measurement. */
export function AudioLevelMeter({ active }: { active: boolean }) {
  return (
    <div
      className="audio-level-meter mr-auto h-[30px] w-[38%] rounded-[5px] border-[3px] border-[#c4b89d]"
      data-active={active}
      aria-hidden="true"
    >
      {rhythms.map((duration, index) => (
        <span
          className="audio-level-meter__column"
          key={index}
          style={{
            '--meter-duration': `${duration}s`,
            '--meter-delay': `${index * -0.19}s`,
            '--meter-peak': `${8 + (index % 4) * 12}%`,
          } as CSSProperties}
        >
          <span className="audio-level-meter__lights" />
        </span>
      ))}
    </div>
  );
}
