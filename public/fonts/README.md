# Licensed splash-screen fonts

Mirava and Clean Fragile are paid/personal-use fonts from Din Studio, not available
on a font CDN. The splash screen's `@font-face` rules (in `src/index.css`) already
point at the filenames below — once you drop the licensed files in here with these
exact names, they'll load automatically, no code changes needed.

Drop in:

- `Mirava-Regular.woff2` — headline "Mridula's Portfolio"
- `CleanFragile-Regular.woff2` — subtext "Choose your theme"

If you only have `.otf`/`.ttf`, convert to `.woff2` (e.g. via https://cloudconvert.com/otf-to-woff2)
for smaller file size and broad browser support, or add a second `src` entry in the
`@font-face` rule pointing at the `.otf`/`.ttf` file directly — either works.

Until these are added, the site falls back to Bricolage Grotesque / Caveat (already
loaded) so the splash still looks intentional rather than broken.
