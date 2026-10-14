import { readFile, writeFile } from 'node:fs/promises';
// Set SITE_URL only after the official domain is confirmed.
if (process.env.SITE_URL) {
  const url = new URL(process.env.SITE_URL);
  if (url.protocol !== 'https:') throw new Error('SITE_URL must use HTTPS');
  const base = url.origin + '/';
  const html = await readFile('dist/index.html','utf8');
  await writeFile('dist/index.html',html.replace('</head>',`<link rel="canonical" href="${base}"><meta property="og:url" content="${base}"></head>`).replaceAll('content="/assets/og-image.webp"',`content="${base}assets/og-image.webp"`));
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}</loc></url></urlset>`);
  await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
}
