import { readdir } from "fs/promises";
import RangeDisclaimer from '@/components/range-disclaimer';
import path from "path";

export const metadata = {
  title: 'Wholesale Boat Trailer Parts — Winches, Rollers, Jacks & Marine Hardware',
  description: 'Wholesale boat trailer parts: hand and electric winches, rollers, keel and bow rollers, jacks, guides, bunks, safety chains, and marine hardware. Factory-direct pricing for marine trailer manufacturers.',
};

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

async function getBoatTrailerPartImages() {
  const baseDir = path.join(process.cwd(), "public", "images", "Boat Trailer Parts");

  async function walk(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const results: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const nested = await walk(fullPath);
        results.push(...nested);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (!imageExtensions.has(ext)) {
        continue;
      }

      const rel = path.relative(baseDir, fullPath);
      const encoded = rel
        .split(path.sep)
        .map((segment) => encodeURIComponent(segment))
        .join("/");

      results.push(encoded);
    }

    return results;
  }

  try {
    const images = await walk(baseDir);
    return images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

export default async function BoatTrailerPartsPage() {
  const images = await getBoatTrailerPartImages();

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Boat Trailer Parts</h1>
      <p className="text-lg text-slate-700 mb-4">
        We carry all kinds of boat trailer parts and marine trailer accessories — pictures below
        are for reference only and represent a small sample of what is available.
      </p>
      <RangeDisclaimer
        intro="Our boat trailer parts range includes:"
        items={["Hand & Electric Winches","Winch Straps & Cables","Trailer Rollers","Roller Brackets","Boat Trailer Jacks","Swivel Jacks","Keel Rollers","Bow Rollers","Side Rollers","Roller Bunk Brackets","Trailer Guides & Guide Posts","Safety Chains","Swivel Eye Hooks (SS)","Lights & Wiring Kits","SS Fittings & Hardware","Trailer Couplers","Trailer Axles","Bunks & Bunk Brackets","Marine-Grade U-Bolts","Winch Stands","Bow Stops","Hull Protectors"]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((img, idx) => {
          const imageSrc = `/images/Boat%20Trailer%20Parts/${img}`;
          const label = decodeURIComponent(img.split("/").pop() || img).replace(/\.(png|jpg|jpeg|webp|avif|gif)$/i, "");

          return (
            <div key={img} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center w-full">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-md p-2 mb-3 overflow-hidden">
                <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="block h-full w-full" title="Open full-size image">
                  <img
                    src={imageSrc}
                    alt={`Boat trailer part ${idx + 1}`}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </a>
              </div>
              <span className="text-slate-700 text-sm text-center break-words font-medium">{label}</span>
            </div>
          );
        })}
      </div>

      {images.length === 0 && <p className="text-gray-700 font-semibold">No images found in /public/images/Boat Trailer Parts.</p>}
    </main>
  );
}
