import { MetadataRoute } from 'next';

const base = 'https://trailerpartmasters.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'yearly' },
    { url: `${base}/request-form`, priority: 0.9, changeFrequency: 'yearly' },
    { url: `${base}/shipping-policy`, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${base}/categories`, priority: 0.9, changeFrequency: 'monthly' },

    // Suspension
    { url: `${base}/categories/trailer-suspension-parts`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs/double-eye-leaf-springs`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs/heavy-duty-multi-leaf-springs`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs/parabolic-leaf-springs`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs/slipper-leaf-springs`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-leaf-springs/single-axle-hanger-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-e1`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-e2`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-e3`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-rub6-8`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-sl12`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/trailer-equalizers/eq-sl14-16-18`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits/single-axle-hanger-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits/tandem-axle-hanger-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits/triple-axle-hanger-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits/heavy-duty-cast-equalizer-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/hangers-kits/specialty-hanger-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/standard-shackles`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/hd-shackles`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/wet-bolt-shackles`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/nylon-bushings`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/rubber-bushings`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/bronze-bushings`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/shackles-bushings/steel-bushings`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/2k-round-u-bolt-kit`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/1-3-4-tube-2k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/2-3-8-tube-3-5k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-tube-5-2k-7k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-5-tube-8k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/4-tube-9k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/5-tube-10k-12k`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/1-3-4-square`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-square`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits/2-1-2-3-square`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/3-8-light-duty`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/1-2-standard`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/9-16-heavy-duty`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters/5-8-extra-heavy-duty`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/spring-seats`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-suspension-parts/suspension-fasteners`, priority: 0.6, changeFrequency: 'monthly' },

    // Brake drums
    { url: `${base}/categories/brake-drums`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/7in-2000-5x45`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/10in-3500-5x45`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/10in-3500-5x475`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/10in-3500-5x5`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/10in-3500-5x55`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/12in-5200-6000-6x55`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-drums/12in-7000-8x65`, priority: 0.7, changeFrequency: 'monthly' },

    // Brake assemblies
    { url: `${base}/categories/brake-assemblies`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-assemblies/10in-electric`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-assemblies/10in-hydraulic`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-assemblies/12in-electric`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/brake-assemblies/12in-hydraulic`, priority: 0.7, changeFrequency: 'monthly' },

    // Idler hubs
    { url: `${base}/categories/idler-hubs`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-hub-2000-4x4`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-hub-3500-5x45`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-hub-3500-5x475`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-hub-3500-5x5`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-hub-3500-5x55`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-2000-4x4`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-2000-4x5`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-3500-5x45`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-3500-5x475`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-3500-5x5`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-3500-5x55`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-5200-6000-6x55`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/idler-hubs/idler-kit-7000-8x65`, priority: 0.7, changeFrequency: 'monthly' },

    // Couplers
    { url: `${base}/categories/trailer-couplers`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-couplers/a-frame-couplers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-couplers/adjustable-couplers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-couplers/channel-style-couplers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-couplers/gooseneck-couplers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-couplers/straight-tongue-couplers`, priority: 0.7, changeFrequency: 'monthly' },

    // Electrical
    { url: `${base}/categories/trailer-electrical-parts`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/adapters`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/battery-boxes`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/breakaway-kits`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/connectors`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/junction-boxes`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-electrical-parts/wiring-harnesses`, priority: 0.7, changeFrequency: 'monthly' },

    // Hardware
    { url: `${base}/categories/trailer-hardware`, priority: 0.8, changeFrequency: 'monthly' },

    // Jacks
    { url: `${base}/categories/trailer-jacks`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/a-frame-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/drop-leg-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/electric-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/jack-accessories`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/side-wind-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/stabilizer-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/swivel-jacks`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-jacks/top-wind-jacks`, priority: 0.7, changeFrequency: 'monthly' },

    // Lights
    { url: `${base}/categories/trailer-lights`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/led-tail-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/incandescent-tail-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/license-plate-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/marker-clearance-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/utility-work-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/warning-strobe-lights`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/categories/trailer-lights/wiring-connector-kits`, priority: 0.7, changeFrequency: 'monthly' },

    // Boat trailer parts
    { url: `${base}/categories/boat-trailer-parts`, priority: 0.8, changeFrequency: 'monthly' },
  ];
}
