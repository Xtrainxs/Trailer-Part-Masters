'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const labelOverrides: Record<string, string> = {
  // Top-level
  categories: 'Categories',
  about: 'About Us',
  'request-form': 'Request a Quote',
  thanks: 'Thank You',
  'shipping-policy': 'Shipping Policy',

  // Top-level product categories
  'trailer-suspension-parts': 'Trailer Suspension Parts',
  'trailer-lights': 'Trailer Lights',
  'trailer-electrical-parts': 'Trailer Electrical Parts',
  'trailer-jacks': 'Trailer Jacks',
  'trailer-couplers': 'Trailer Couplers',
  'idler-hubs': 'Idler Hubs',
  'brake-drums': 'Brake Drums',
  'brake-assemblies': 'Brake Assemblies',
  'trailer-hardware': 'Trailer Hardware',
  'boat-trailer-parts': 'Boat Trailer Parts',

  // Suspension sub-groups
  'u-bolt-kits': 'U-Bolt Kits',
  'hangers-kits': 'Hanger Kits',
  'shackles-bushings': 'Shackles & Bushings',
  'trailer-leaf-springs': 'Trailer Leaf Springs',
  'trailer-equalizers': 'Trailer Equalizers',
  'spring-seats': 'Spring Seats',
  'suspension-fasteners': 'Suspension Fasteners',

  // U-Bolt sub-types
  'round-u-bolt-kits': 'Round U-Bolt Kits',
  'square-u-bolt-kits': 'Square U-Bolt Kits',
  'bolt-diameters': 'Bolt Diameters',

  // Light sub-types
  'led-tail-lights': 'LED Tail Lights',
  'incandescent-tail-lights': 'Incandescent Tail Lights',
  'marker-clearance-lights': 'Marker & Clearance Lights',
  'license-plate-lights': 'License Plate Lights',
  'utility-work-lights': 'Utility & Work Lights',
  'warning-strobe-lights': 'Warning & Strobe Lights',
  'wiring-connector-kits': 'Wiring & Connector Kits',

  // Electrical sub-types
  adapters: 'Adapters',
  connectors: 'Connectors',
  'wiring-harnesses': 'Wiring Harnesses',
  'junction-boxes': 'Junction Boxes',
  'breakaway-kits': 'Breakaway Kits',
  'battery-boxes': 'Battery Boxes',

  // Jack sub-types
  'a-frame-jacks': 'A-Frame Jacks',
  'side-wind-jacks': 'Side-Wind Jacks',
  'top-wind-jacks': 'Top-Wind Jacks',
  'drop-leg-jacks': 'Drop-Leg Jacks',
  'swivel-jacks': 'Swivel Jacks',
  'electric-jacks': 'Electric Jacks',
  'stabilizer-jacks': 'Stabilizer Jacks',
  'jack-accessories': 'Jack Accessories',

  // Coupler sub-types
  'straight-tongue-couplers': 'Straight Tongue Couplers',
  'a-frame-couplers': 'A-Frame Couplers',
  'channel-style-couplers': 'Channel Style Couplers',
  'gooseneck-couplers': 'Gooseneck Couplers',
  'adjustable-couplers': 'Adjustable Couplers',

  // Brake assembly sub-types
  '10in-hydraulic': '10" Hydraulic',
  '10in-electric': '10" Electric',
  '12in-hydraulic': '12" Hydraulic',
  '12in-electric': '12" Electric',
};

function slugToLabel(slug: string): string {
  if (labelOverrides[slug]) return labelOverrides[slug];
  return slug
    .split('-')
    .map((part) => (part.length === 0 ? '' : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const items = segments.map((segment, idx) => ({
    label: slugToLabel(segment),
    href: '/' + segments.slice(0, idx + 1).join('/'),
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-line"
    >
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-wrap gap-x-2 gap-y-1 text-xs uppercase tracking-wide font-medium text-slate-500">
        <li>
          <Link href="/" className="hover:text-lime-dark transition">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-x-2">
            <span className="text-lime" aria-hidden="true">
              /
            </span>
            {idx === items.length - 1 ? (
              <span className="text-ink font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-lime-dark transition">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
