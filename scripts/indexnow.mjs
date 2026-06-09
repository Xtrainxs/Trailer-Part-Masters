// IndexNow submitter for Trailer Part Masters.
//
// Pings IndexNow (consumed by Bing, Yandex, and others) so search engines
// re-crawl changed/new pages almost immediately.
//
// Usage:
//   node scripts/indexnow.mjs                 -> submits the whole sitemap
//   node scripts/indexnow.mjs /about /categories/trailer-jacks   -> specific paths
//
// Key file must stay live at:
//   https://trailerpartmasters.vercel.app/fcf58db73016baa623867de427265b3f.txt

const HOST = 'trailerpartmasters.vercel.app';
const KEY = 'fcf58db73016baa623867de427265b3f';
const ORIGIN = `https://${HOST}`;

async function getSitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { headers: { 'Cache-Control': 'no-cache' } });
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith('http') ? p : `${ORIGIN}${p.startsWith('/') ? '' : '/'}${p}`))
    : await getSitemapUrls();

  if (!urlList.length) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`Submitted ${urlList.length} URL(s) to IndexNow -> HTTP ${res.status}`);
  if (res.status !== 200 && res.status !== 202) {
    console.log('Response:', await res.text());
  }
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err);
  process.exit(1);
});
