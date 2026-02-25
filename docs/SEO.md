# SEO Guide — Nilton Paes Resume (Vue 3 + Quasar SPA)

## Context & Honest Expectations

This project is a **Single-Page Application (SPA)**. SPAs are not ideal for SEO because most content is rendered via JavaScript — search engine crawlers may not fully execute JS, or may see a mostly empty page. That said, Google's crawler has improved its JS rendering significantly over the years, and for a personal resume/portfolio this is usually acceptable.

The recommendations below focus on **low-hanging fruit** — things that are high-impact, low-effort, and don't require switching to SSR or a different framework.

---

## Current SEO State

| Item | Status |
|---|---|
| `<title>` tag | Static hardcoded in `index.html` — present in initial HTML |
| `<meta description>` | Present (Quasar template variable) |
| Open Graph tags | Added to `index.html` with `og-banner.png` (1200×630) |
| Twitter Card tags | Intentionally omitted (no Twitter/X presence) |
| Canonical URL | Added to `index.html` |
| `hreflang` (EN/PT) | Added to `index.html` |
| JSON-LD Structured Data | Added Person schema to `index.html` |
| `robots.txt` | Added to `public/` |
| `sitemap.xml` | Added to `public/` |
| Router mode | `history` — clean URLs, Apache `.htaccess` redirect in place |
| Favicon | Full set generated from `MeuAvatar.png` (ico, 16, 32, 180, 192, 512) |
| PWA Manifest | Configured (generated at build) |

---

## Recommendations — Prioritized by Impact vs. Effort

### 1. Switch Router Mode from `hash` to `history` (High Impact)

**Why:** Hash-based URLs (`/#/page1`) are generally ignored or poorly handled by search engines. History mode URLs (`/page1`) are clean and indexable.

**Effort:** Low (but requires server configuration).

**How:**

In `quasar.config.js`, change:
```js
vueRouterMode: 'hash'
```
to:
```js
vueRouterMode: 'history'
```

**Server configuration required** — When deploying, the server must redirect all routes to `index.html`. For common setups:

- **Netlify**: Create a `public/_redirects` file:
  ```
  /*  /index.html  200
  ```

- **Apache**: Add to `public/.htaccess`:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

- **Nginx**:
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

- **GitHub Pages**: Requires a `404.html` workaround (see [spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

> Since this is a single-page resume, the benefit here is mainly ensuring the root URL `/` is properly indexed with a clean canonical URL.

---

### 2. Comprehensive Meta Tags in `index.html` (High Impact, Low Effort)

**Why:** Open Graph (OG) and Twitter Card tags control how your resume appears when shared on LinkedIn, Twitter/X, WhatsApp, Slack, etc. These are also used by some search engines for rich previews.

**How:** Edit `index.html`. Replace the existing minimal head with:

```html
<head>
  <meta charset="utf-8" />
  <title>Nilton Paes — Senior Full-Stack Developer</title>
  <meta name="description" content="Nilton Paes is a Senior Full-Stack Developer with expertise in Vue.js, Node.js, and cloud technologies. Available for remote opportunities worldwide." />
  <meta name="author" content="Nilton Paes" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://YOUR-DOMAIN.com/" />

  <!-- Language alternates -->
  <link rel="alternate" hreflang="en" href="https://YOUR-DOMAIN.com/" />
  <link rel="alternate" hreflang="pt" href="https://YOUR-DOMAIN.com/" />
  <link rel="alternate" hreflang="x-default" href="https://YOUR-DOMAIN.com/" />

  <!-- Open Graph (LinkedIn, Facebook, WhatsApp, Slack) -->
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="Nilton Paes — Senior Full-Stack Developer" />
  <meta property="og:description" content="Senior Full-Stack Developer with expertise in Vue.js, Node.js, and cloud technologies. Available for remote opportunities worldwide." />
  <meta property="og:url" content="https://YOUR-DOMAIN.com/" />
  <meta property="og:image" content="https://YOUR-DOMAIN.com/icons/MeuAvatar.png" />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="400" />
  <meta property="og:image:alt" content="Nilton Paes — Senior Full-Stack Developer" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="pt_BR" />
  <meta property="og:site_name" content="Nilton Paes — Resume" />
  <meta property="profile:first_name" content="Nilton" />
  <meta property="profile:last_name" content="Paes" />

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Nilton Paes — Senior Full-Stack Developer" />
  <meta name="twitter:description" content="Senior Full-Stack Developer with expertise in Vue.js, Node.js, and cloud technologies." />
  <meta name="twitter:image" content="https://YOUR-DOMAIN.com/icons/MeuAvatar.png" />
  <!-- If you have a Twitter/X handle: -->
  <!-- <meta name="twitter:site" content="@yourhandle" /> -->
  <!-- <meta name="twitter:creator" content="@yourhandle" /> -->

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="icons/MeuAvatar.png" />
  <link rel="apple-touch-icon" href="icons/MeuAvatar.png" />

  <!-- ... rest of existing tags ... -->
</head>
```

> Replace `https://YOUR-DOMAIN.com/` with your actual deployed URL throughout.

**Note on the OG image:** The current avatar (`MeuAvatar.png`) works, but an ideal social sharing image is `1200×630px`. Consider creating a branded banner (e.g., name + title + avatar on a dark background) and placing it in `public/icons/` or `public/assets/`.

---

### 3. JSON-LD Structured Data — Person Schema (High Impact, Low Effort)

**Why:** JSON-LD tells Google explicitly who you are, what you do, and how to contact you. This can trigger rich results (Knowledge Panel) in search and dramatically improves how Google understands your page.

**How:** Add this `<script>` block inside `<head>` in `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nilton Paes",
  "jobTitle": "Senior Full-Stack Developer",
  "url": "https://YOUR-DOMAIN.com/",
  "image": "https://YOUR-DOMAIN.com/icons/MeuAvatar.png",
  "description": "Senior Full-Stack Developer with expertise in Vue.js, Node.js, and cloud technologies.",
  "email": "mailto:YOUR-EMAIL@example.com",
  "sameAs": [
    "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE",
    "https://github.com/YOUR-GITHUB-HANDLE"
  ],
  "knowsAbout": [
    "Vue.js", "Node.js", "JavaScript", "TypeScript",
    "Full-Stack Development", "Cloud Computing"
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "English" },
    { "@type": "Language", "name": "Portuguese" }
  ]
}
</script>
```

Fill in your actual email, LinkedIn, and GitHub URLs. You can validate the JSON-LD at [schema.org validator](https://validator.schema.org/) or [Google Rich Results Test](https://search.google.com/test/rich-results).

---

### 4. Add `robots.txt` (Medium Impact, Minimal Effort)

**Why:** Without `robots.txt`, crawlers operate blind. A minimal file signals that your site is open to indexing.

**How:** Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

> The `public/` folder is copied as-is to the build output, so files placed there are served at the root URL.

---

### 5. Add `sitemap.xml` (Medium Impact, Minimal Effort)

**Why:** A sitemap helps crawlers discover and prioritize your pages. For a single-page resume, this is trivial to write manually.

**How:** Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://YOUR-DOMAIN.com/</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://YOUR-DOMAIN.com/" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://YOUR-DOMAIN.com/" />
  </url>
</urlset>
```

Update `<lastmod>` whenever you make significant content changes.

---

### 6. Better Favicon Set (Low Impact, Low Effort)

**Why:** Proper favicons improve brand trust and recognition in browser tabs, bookmarks, and PWA installs.

**Current state:** Single `MeuAvatar.png` (72×72). This is fine but not optimal.

**Recommended sizes to add to `public/icons/`:**
- `favicon.ico` — legacy fallback (16×16, 32×32, 48×48 multi-size)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` — 180×180 for iOS
- `android-chrome-192x192.png` — for Android/PWA
- `android-chrome-512x512.png` — for PWA splash screens

Tool: [RealFaviconGenerator.net](https://realfavicongenerator.net/) — upload your avatar and it generates the full set + HTML tags.

---

### 7. Google Search Console (No Code Required)

**Why:** This is the single most impactful thing you can do for free. It lets you:
- Submit your sitemap
- See what queries bring traffic
- Monitor crawl errors
- Request indexing

**How:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property — **important:** since the resume is on a subdomain (`niltonpaes-resume.swtas.com`), choose **"URL prefix"** and enter `https://niltonpaes-resume.swtas.com/` exactly. Do NOT use the "Domain" property type — that targets the root `swtas.com` and a DNS TXT record added with `@` will verify `swtas.com`, not the subdomain.
3. Choose **"HTML tag"** as the verification method. Google will give you a tag like:
   ```html
   <meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxx" />
   ```
   Add it to `index.html` right after the `<meta charset>` line, then build and deploy.
4. Click "Verify" in GSC — it checks the live deployed page for the meta tag.
5. Submit your sitemap: `https://niltonpaes-resume.swtas.com/sitemap.xml`

> **DNS alternative:** If you prefer DNS verification, the TXT record **Name** must be `niltonpaes-resume` (not `@`). The `@` root only covers `swtas.com` itself.

---

### 8. LinkedIn Profile Optimization (No Code Required, High Impact for a Resume)

**Why:** For a personal resume/portfolio, LinkedIn consistently outranks personal sites in search results for name-based queries. Your LinkedIn profile is itself a high-authority SEO asset.

**Actions:**
- Ensure your LinkedIn URL is clean (e.g., `linkedin.com/in/niltonpaes`)
- Add your resume site URL to your LinkedIn profile
- Make sure your LinkedIn headline matches your resume title

---

### 9. Semantic HTML Improvements in `Page1.vue` (Low Impact, Worth Doing)

**Why:** Even in an SPA, using proper semantic HTML improves accessibility and helps crawlers understand content hierarchy.

**Recommendations:**
- Use `<h1>` for your name (once, above the fold)
- Use `<h2>` for section titles (Core Skills, Work Experience, etc.)
- Use `<article>` for job entries
- Use `<section>` for logical content groups
- Add `aria-label` attributes to sections

Example structure:
```html
<main>
  <header>
    <h1>Nilton Paes</h1>
    <p>Senior Full-Stack Developer</p>
  </header>
  <section aria-label="Core Skills">
    <h2>Core Skills</h2>
    <!-- ... -->
  </section>
  <section aria-label="Work Experience">
    <h2>Work Experience</h2>
    <article>
      <h3>Job Title at Company</h3>
      <!-- ... -->
    </article>
  </section>
</main>
```

---

### 10. Page Performance — Core Web Vitals (Medium Impact)

**Why:** Google uses Core Web Vitals as a ranking signal. A fast resume site with a good score makes a good impression on both Google and human visitors.

**Audit:** Run [PageSpeed Insights](https://pagespeed.web.dev/) on your deployed site.

**Quick wins:**
- Ensure the avatar image has explicit `width` and `height` attributes (prevents layout shift)
- Use `loading="lazy"` on images below the fold
- Preload the avatar image: `<link rel="preload" as="image" href="icons/MeuAvatar.png" />`
- Check that Lottie animations (already in the project) don't block the initial render

---

## Summary — Recommended Implementation Order

| Priority | Action | Effort | Impact | Status |
|---|---|---|---|---|
| 1 | Add OG + Twitter meta tags to `index.html` | 15 min | High | Done |
| 2 | Add JSON-LD Person schema to `index.html` | 15 min | High | Done |
| 3 | Add `robots.txt` to `public/` | 5 min | Medium | Done |
| 4 | Add `sitemap.xml` to `public/` | 10 min | Medium | Done |
| 5 | Set up Google Search Console | 15 min | High | Pending (manual) |
| 6 | Switch router mode to `history` + server config | 30 min | Medium | Done |
| 7 | Generate a proper favicon set | 20 min | Low–Medium | Done |
| 8 | Improve semantic HTML in `Page1.vue` | 1–2 h | Low–Medium | Done |
| 9 | LinkedIn profile optimization | 15 min | High | Pending (manual) |
| 10 | Run PageSpeed Insights audit | 5 min | Diagnostic | Pending |

---

## What Won't Fully Work Without SSR

The following SEO techniques require server-side rendering (SSR) or static site generation (SSG) to work reliably, because they depend on content being present in the initial HTML response — not rendered by JavaScript:

- **Per-page dynamic meta tags** — Currently the title changes via JS, but crawlers see the initial HTML title. Quasar supports SSR mode (`quasar.config.js` → `ssr`) or you could use `quasar build -m ssr`.
- **Per-language canonical URLs** — Since language switching happens client-side, you can't truly serve `/en/` and `/pt/` as separate URLs without SSR.
- **Fully crawlable content** — While Googlebot renders JS, other crawlers (Bing, LinkedIn preview, Slack unfurl, etc.) may not.

For a personal resume, the improvements above are likely sufficient. If you ever want to maximize SEO, consider migrating to **Quasar SSR mode** or exporting to a static site.

---

## Resources

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Person type](https://schema.org/Person)
- [Open Graph Protocol](https://ogp.me/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Quasar SSR Docs](https://quasar.dev/quasar-cli-vite/developing-ssr/introduction)
- [LinkedIn URL customization](https://www.linkedin.com/help/linkedin/answer/a542685)
