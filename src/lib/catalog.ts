// Single source of truth for the BTP catalog navigation tree.
// Consumed by the header mega-menu and the /categories landing page so the
// structure stays consistent and a client can reach any subcategory in 1 click.

export type SubCategory = { name: string; href: string };
export type Category = {
  name: string;
  href: string;
  icon: string; // emoji marker used as a lightweight visual cue
  blurb: string;
  subcategories: SubCategory[];
};

const C = '/categories';

export const catalog: Category[] = [
  {
    name: 'Suspension Parts',
    href: `${C}/trailer-suspension-parts`,
    icon: '🔩',
    blurb: 'Leaf springs, hangers, equalizers, shackles, bushings, U-bolt kits.',
    subcategories: [
      { name: 'Trailer Leaf Springs', href: `${C}/trailer-suspension-parts/trailer-leaf-springs` },
      { name: 'Hanger Kits', href: `${C}/trailer-suspension-parts/hangers-kits` },
      { name: 'Trailer Equalizers', href: `${C}/trailer-suspension-parts/trailer-equalizers` },
      { name: 'Shackles & Bushings', href: `${C}/trailer-suspension-parts/shackles-bushings` },
      { name: 'U-Bolt Kits', href: `${C}/trailer-suspension-parts/u-bolt-kits` },
      { name: 'Spring Seats', href: `${C}/trailer-suspension-parts/spring-seats` },
      { name: 'Suspension Fasteners', href: `${C}/trailer-suspension-parts/suspension-fasteners` },
    ],
  },
  {
    name: 'Brake Assemblies',
    href: `${C}/brake-assemblies`,
    icon: '🛑',
    blurb: '10" and 12" hydraulic and electric brake assemblies.',
    subcategories: [
      { name: '10" Electric', href: `${C}/brake-assemblies/10in-electric` },
      { name: '10" Hydraulic', href: `${C}/brake-assemblies/10in-hydraulic` },
      { name: '12" Electric', href: `${C}/brake-assemblies/12in-electric` },
      { name: '12" Hydraulic', href: `${C}/brake-assemblies/12in-hydraulic` },
    ],
  },
  {
    name: 'Brake Drums',
    href: `${C}/brake-drums`,
    icon: '⚙️',
    blurb: 'Drum kits for 2,000–7,000 lb axles in common bolt patterns.',
    subcategories: [
      { name: '7" — 2,000 lb (5×4.5)', href: `${C}/brake-drums/7in-2000-5x45` },
      { name: '10" — 3,500 lb (5×4.5)', href: `${C}/brake-drums/10in-3500-5x45` },
      { name: '10" — 3,500 lb (5×4.75)', href: `${C}/brake-drums/10in-3500-5x475` },
      { name: '10" — 3,500 lb (5×5)', href: `${C}/brake-drums/10in-3500-5x5` },
      { name: '10" — 3,500 lb (5×5.5)', href: `${C}/brake-drums/10in-3500-5x55` },
      { name: '12" — 5,200–6,000 lb (6×5.5)', href: `${C}/brake-drums/12in-5200-6000-6x55` },
      { name: '12" — 7,000 lb (8×6.5)', href: `${C}/brake-drums/12in-7000-8x65` },
    ],
  },
  {
    name: 'Idler Hubs',
    href: `${C}/idler-hubs`,
    icon: '🛞',
    blurb: 'Hub and bearing kits sized to your axle rating and bolt pattern.',
    subcategories: [
      { name: 'Idler Hub — 2,000 lb (4×4)', href: `${C}/idler-hubs/idler-hub-2000-4x4` },
      { name: 'Idler Hub — 3,500 lb (5×4.5)', href: `${C}/idler-hubs/idler-hub-3500-5x45` },
      { name: 'Idler Hub — 3,500 lb (5×4.75)', href: `${C}/idler-hubs/idler-hub-3500-5x475` },
      { name: 'Idler Hub — 3,500 lb (5×5)', href: `${C}/idler-hubs/idler-hub-3500-5x5` },
      { name: 'Idler Hub — 3,500 lb (5×5.5)', href: `${C}/idler-hubs/idler-hub-3500-5x55` },
      { name: 'Idler Kit — 2,000 lb (4×4)', href: `${C}/idler-hubs/idler-kit-2000-4x4` },
      { name: 'Idler Kit — 2,000 lb (4×5)', href: `${C}/idler-hubs/idler-kit-2000-4x5` },
      { name: 'Idler Kit — 3,500 lb (5×4.5)', href: `${C}/idler-hubs/idler-kit-3500-5x45` },
      { name: 'Idler Kit — 3,500 lb (5×4.75)', href: `${C}/idler-hubs/idler-kit-3500-5x475` },
      { name: 'Idler Kit — 3,500 lb (5×5)', href: `${C}/idler-hubs/idler-kit-3500-5x5` },
      { name: 'Idler Kit — 3,500 lb (5×5.5)', href: `${C}/idler-hubs/idler-kit-3500-5x55` },
      { name: 'Idler Kit — 5,200–6,000 lb (6×5.5)', href: `${C}/idler-hubs/idler-kit-5200-6000-6x55` },
      { name: 'Idler Kit — 7,000 lb (8×6.5)', href: `${C}/idler-hubs/idler-kit-7000-8x65` },
    ],
  },
  {
    name: 'Trailer Lights',
    href: `${C}/trailer-lights`,
    icon: '💡',
    blurb: 'LED and incandescent tail, marker, license plate, and work lights.',
    subcategories: [
      { name: 'LED Tail Lights', href: `${C}/trailer-lights/led-tail-lights` },
      { name: 'Incandescent Tail Lights', href: `${C}/trailer-lights/incandescent-tail-lights` },
      { name: 'Marker & Clearance Lights', href: `${C}/trailer-lights/marker-clearance-lights` },
      { name: 'License Plate Lights', href: `${C}/trailer-lights/license-plate-lights` },
      { name: 'Utility & Work Lights', href: `${C}/trailer-lights/utility-work-lights` },
      { name: 'Warning & Strobe Lights', href: `${C}/trailer-lights/warning-strobe-lights` },
      { name: 'Wiring & Connector Kits', href: `${C}/trailer-lights/wiring-connector-kits` },
    ],
  },
  {
    name: 'Electrical Parts',
    href: `${C}/trailer-electrical-parts`,
    icon: '🔌',
    blurb: 'Adapters, connectors, harnesses, junction and battery boxes.',
    subcategories: [
      { name: 'Adapters', href: `${C}/trailer-electrical-parts/adapters` },
      { name: 'Connectors', href: `${C}/trailer-electrical-parts/connectors` },
      { name: 'Wiring Harnesses', href: `${C}/trailer-electrical-parts/wiring-harnesses` },
      { name: 'Junction Boxes', href: `${C}/trailer-electrical-parts/junction-boxes` },
      { name: 'Breakaway Kits', href: `${C}/trailer-electrical-parts/breakaway-kits` },
      { name: 'Battery Boxes', href: `${C}/trailer-electrical-parts/battery-boxes` },
    ],
  },
  {
    name: 'Trailer Jacks',
    href: `${C}/trailer-jacks`,
    icon: '🔧',
    blurb: 'A-frame, side-wind, top-wind, swivel, electric, stabilizer jacks.',
    subcategories: [
      { name: 'A-Frame Jacks', href: `${C}/trailer-jacks/a-frame-jacks` },
      { name: 'Side-Wind Jacks', href: `${C}/trailer-jacks/side-wind-jacks` },
      { name: 'Top-Wind Jacks', href: `${C}/trailer-jacks/top-wind-jacks` },
      { name: 'Drop-Leg Jacks', href: `${C}/trailer-jacks/drop-leg-jacks` },
      { name: 'Swivel Jacks', href: `${C}/trailer-jacks/swivel-jacks` },
      { name: 'Electric Jacks', href: `${C}/trailer-jacks/electric-jacks` },
      { name: 'Stabilizer Jacks', href: `${C}/trailer-jacks/stabilizer-jacks` },
      { name: 'Jack Accessories', href: `${C}/trailer-jacks/jack-accessories` },
    ],
  },
  {
    name: 'Couplers',
    href: `${C}/trailer-couplers`,
    icon: '🔗',
    blurb: 'Straight tongue, A-frame, channel, gooseneck, adjustable couplers.',
    subcategories: [
      { name: 'Straight Tongue Couplers', href: `${C}/trailer-couplers/straight-tongue-couplers` },
      { name: 'A-Frame Couplers', href: `${C}/trailer-couplers/a-frame-couplers` },
      { name: 'Channel Style Couplers', href: `${C}/trailer-couplers/channel-style-couplers` },
      { name: 'Gooseneck Couplers', href: `${C}/trailer-couplers/gooseneck-couplers` },
      { name: 'Adjustable Couplers', href: `${C}/trailer-couplers/adjustable-couplers` },
    ],
  },
  {
    name: 'Trailer Hardware',
    href: `${C}/trailer-hardware`,
    icon: '🪝',
    blurb: 'E-tracks, D-rings, hinges, latches, chains, bolts, ramps, chocks.',
    subcategories: [],
  },
  {
    name: 'Boat Trailer Parts',
    href: `${C}/boat-trailer-parts`,
    icon: '🚤',
    blurb: 'Winches, rollers, bunks, guides, safety chains, marine hardware.',
    subcategories: [],
  },
];
