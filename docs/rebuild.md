# Astro rebuild

Marketing pages use Astro static output with no React hydration. Only `/leads` loads a React island and Firebase authentication, reusing the existing leads UI. Proposal links remain on-demand, with noindex and sitemap exclusion. Old Next source stays in Git for reference and rollback; Astro builds only `src/pages`.

Vercel configuration uses the Astro framework and Node 24. Preserve existing SendGrid, OpenAI and Firebase environment variables. The config maps the six existing `NEXT_PUBLIC_FIREBASE_*` values explicitly to public Astro values; private keys are not exposed.

The contact endpoint accepts HTML form and JSON submissions. Mail delivery must succeed before a success response. Validation, configuration and delivery failures are tested with a mock sender. Tests send no real email; production delivery still needs a deliberate test.

Existing service, contact, guide and portfolio URLs have redirects. Old speculative portfolio examples redirect to the curated portfolio rather than being presented as verified client work. Founder and business links describe actual engagement context. No customer metrics or testimonials were invented.

The old advertising script and newsletter/chat popups are not loaded on public marketing pages. Configure measurement separately with appropriate consent and conversion settings. This rebuild does not launch a paid campaign.

Run `npm run build` then `npm test`. Tests inspect built HTML, metadata, links and sitemap exclusions without browser JavaScript. Astro generates WebP thumbnails for the portrait and engagement images.

SEO improvements do not guarantee rankings or establish indexing. Follow up in Search Console: verify the correct domain, submit `/sitemap-index.xml`, inspect key service pages and review queries and genuine enquiries.
