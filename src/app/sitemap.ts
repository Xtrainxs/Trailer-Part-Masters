import type { MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import path from 'path';

const BASE = 'https://trailerpartmasters.vercel.app';

/**
 * Walk the app/ directory and collect every static route that has a page.tsx,
 * so the sitemap stays complete as the catalog grows (no hand-maintained list
 * to drift out of sync). Route groups, private folders, dynamic segments, and
 * the noindex thank-you page are excluded.
 */
function collectRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const routes = new Set<string>(['/']);

  function walk(dir: string, urlPath: string) {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    if (entries.some((e) => e.isFile() && e.name === 'page.tsx') && urlPath) {
      routes.add(urlPath);
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('(') || entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
      walk(path.join(dir, entry.name), `${urlPath}/${entry.name}`);
    }
  }

  walk(appDir, '');
  routes.delete('/request-form/thanks');
  return Array.from(routes);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return collectRoutes()
    .sort()
    .map((route) => {
      const depth = route === '/' ? 0 : route.split('/').filter(Boolean).length;
      return {
        url: `${BASE}${route === '/' ? '' : route}`,
        lastModified: now,
        changeFrequency: depth === 0 ? ('weekly' as const) : ('monthly' as const),
        priority: depth === 0 ? 1 : depth <= 2 ? 0.8 : depth === 3 ? 0.7 : 0.6,
      };
    });
}
