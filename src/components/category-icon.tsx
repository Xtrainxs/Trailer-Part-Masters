import { SVGProps } from 'react';

/**
 * Line-icon set for the trailer-part categories. Stroke-based, inherits
 * currentColor so it can be tinted by the parent (lime on hover, etc.).
 * Deliberately simple/industrial to match the hi-vis design system.
 */

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const PATHS: Record<string, JSX.Element> = {
  // Suspension — leaf spring arc + shackle
  suspension: (
    <>
      <path d="M3 14c4-5 14-5 18 0" />
      <path d="M5 16c3.5-4 10.5-4 14 0" />
      <circle cx="6" cy="17" r="1.4" />
      <circle cx="18" cy="17" r="1.4" />
    </>
  ),
  // Brakes — disc/drum
  brakes: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </>
  ),
  // Brake drums — drum cylinder
  drums: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <ellipse cx="12" cy="18" rx="7" ry="2.5" />
    </>
  ),
  // Hubs — wheel hub with bolt pattern
  hubs: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6.5v1.5M12 16v1.5M6.5 12H8M16 12h1.5M8.3 8.3l1 1M14.7 14.7l1 1M15.7 8.3l-1 1M9.3 14.7l-1 1" />
    </>
  ),
  // Lights — lamp with rays
  lights: (
    <>
      <rect x="7" y="9" width="10" height="7" rx="1.5" />
      <path d="M9 16v2M15 16v2M12 4v2M6 6l1.4 1.4M18 6l-1.4 1.4" />
    </>
  ),
  // Electrical — plug / connector
  electrical: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0Z" />
      <path d="M12 17v4" />
    </>
  ),
  // Jacks — scissor/screw jack
  jacks: (
    <>
      <path d="M5 5h14M5 19h14" />
      <path d="M7 5l5 7 5-7M7 19l5-7 5 7" />
      <path d="M12 12v0" />
    </>
  ),
  // Couplers — hitch ball + coupler cup
  couplers: (
    <>
      <circle cx="12" cy="9" r="3" />
      <path d="M9 11.5c-1.5 1-2.5 2.7-2.5 4.5h11c0-1.8-1-3.5-2.5-4.5" />
      <path d="M6.5 16v3h11v-3" />
    </>
  ),
  // Hardware — bolt + nut
  hardware: (
    <>
      <path d="M12 3l3 1.8v3.6L12 10 9 8.4V4.8Z" />
      <path d="M12 10v5" />
      <path d="M9 18l3-2 3 2-3 2Z" />
    </>
  ),
  // Boat — boat hull + waves
  boat: (
    <>
      <path d="M4 13h16l-2 4H6Z" />
      <path d="M12 13V5l5 4" />
      <path d="M3 20c1.5-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0" />
    </>
  ),
  // Fallback — generic part
  default: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 12h8M12 8v8" />
    </>
  ),
};

export default function CategoryIcon({ name, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {PATHS[name] ?? PATHS.default}
    </svg>
  );
}
