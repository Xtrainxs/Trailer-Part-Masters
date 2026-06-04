import CategoryCard from "@/components/category-card";

export const metadata = {
  title: 'Wholesale Trailer Lights — LED & Incandescent, Tail, Marker & Work Lights',
  description: 'Wholesale trailer lights: LED and incandescent tail lights, marker lights, license plate lights, work lights, and wiring kits. Factory-direct pricing for trailer manufacturers and stockists. Min. order CAD $5,000.',
};

const subcategories = [
  { name: "LED Tail Lights", description: "Round and oval submersible LED tail lights, DOT compliant.", href: "/categories/trailer-lights/led-tail-lights" },
  { name: "Incandescent Tail Lights", description: "Traditional stop/turn/tail lights for standard trailer applications.", href: "/categories/trailer-lights/incandescent-tail-lights" },
  { name: "Marker / Clearance Lights", description: "Amber and red LED side markers; grommet and surface-mount.", href: "/categories/trailer-lights/marker-clearance-lights" },
  { name: "License Plate Lights", description: "LED and incandescent plate lights with stainless or plastic housing.", href: "/categories/trailer-lights/license-plate-lights" },
  { name: "Utility / Work Lights", description: "Flood and spot work lights for job-site and loading applications.", href: "/categories/trailer-lights/utility-work-lights" },
  { name: "Warning / Strobe Lights", description: "Amber and red LED strobes and warning lights.", href: "/categories/trailer-lights/warning-strobe-lights" },
  { name: "Wiring & Connector Kits", description: "4-way, 5-way, and 7-way connector kits with wiring harnesses.", href: "/categories/trailer-lights/wiring-connector-kits" },
];


export default function TrailerLightsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Trailer Lights
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        LED and incandescent tail lights, marker and clearance lights, plate and work
        lights, plus the wiring and connector kits to tie it all together. All BTP
        parts meet North American standards.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}


