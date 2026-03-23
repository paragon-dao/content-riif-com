# content.riif.com

Research, technical documentation, and articles from the [RIIF](https://riif.com) ecosystem.

## What is RIIF?

RIIF (Univault Technologies LLC) builds open health and environmental monitoring infrastructure. Our systems process biosignals on-device using the General Learning Encoder (GLE) — a shared DCT-II encoding front-end that works across respiratory audio, voice, and neural signals.

## Projects

| Project | Description | Link |
|---------|-------------|------|
| **Haven Phone** | Multimodal biosignal clinical decision support tool for frontline health workers. Breathing analysis via smartphone microphone. | [haven.riif.com](https://haven.riif.com) |
| **ParagonDAO** | Environmental monitoring platform. Great Salt Lake dust consensus system serving 1.2M people. | [paragondao.org](https://paragondao.org) |

## Content Standards

All articles published on this site adhere to the following standards:

- **Technical accuracy** — claims are supported by cited data, public datasets, or clearly marked as hypotheses
- **Transparency** — limitations, conflicts of interest, and regulatory status are disclosed
- **Reproducibility** — benchmark results reference publicly available datasets with documented evaluation protocols
- **No unsourced claims** — if a number appears, its source is cited; if a claim is made, it is substantiated

Articles based on academic work link to the corresponding publication (e.g., ResearchGate, arXiv).

## Architecture

Static site built with [Astro](https://astro.build). Content authored in Markdown with YAML frontmatter. Deployed to [GitHub Pages](https://pages.github.com) at `content.riif.com`.

```
src/
├── content/         # Markdown articles with frontmatter
│   └── blog/        # Blog posts and research articles
├── pages/           # Astro page templates
├── layouts/         # Shared layouts with SEO metadata
└── styles/          # Global styles (Tailwind CSS)
```

## Development

```bash
pnpm install
pnpm dev          # Local dev server at localhost:4321
pnpm build        # Build static site to dist/
```

## License

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution: Univault Technologies LLC.

Code is licensed under [MIT](LICENSE).

---

Univault Technologies LLC — Salt Lake City, Utah
