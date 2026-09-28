import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.resolve('public');

// 1. Master High-Resolution SVG (512x512)
const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Automotive Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <!-- Metallic Gold Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="20%" stop-color="#fef08a" />
      <stop offset="55%" stop-color="#facc15" />
      <stop offset="90%" stop-color="#ca8a04" />
      <stop offset="100%" stop-color="#854d0e" />
    </linearGradient>

    <!-- Border Ring Gradient -->
    <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff" />
      <stop offset="30%" stop-color="#facc15" />
      <stop offset="70%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#a16207" />
    </linearGradient>

    <!-- Center Badge Gradient -->
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1d4ed8" />
      <stop offset="50%" stop-color="#1e3a8a" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Drop Shadow Filter -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <!-- Inner Glow -->
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#facc15" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Base Squircle Container for Home Screen Icons -->
  <rect x="16" y="16" width="480" height="480" rx="104" fill="url(#bgGrad)" stroke="url(#rimGrad)" stroke-width="12" />

  <!-- Speed / Automotive Performance Lines -->
  <path d="M 38 180 L 110 180 M 32 216 L 90 216 M 44 252 L 105 252" stroke="#facc15" stroke-width="5" stroke-linecap="round" opacity="0.35" />
  <path d="M 474 252 L 405 252 M 480 288 L 420 288 M 468 324 L 400 324" stroke="#facc15" stroke-width="5" stroke-linecap="round" opacity="0.35" />

  <!-- Central Oval Shield -->
  <g filter="url(#shadow)">
    <ellipse cx="256" cy="226" rx="176" ry="122" fill="url(#badgeGrad)" stroke="url(#goldGrad)" stroke-width="14" />
    <!-- Inner dashed race track line -->
    <ellipse cx="256" cy="226" rx="160" ry="106" fill="none" stroke="#60a5fa" stroke-width="2.5" opacity="0.6" stroke-dasharray="8 5" />
  </g>

  <!-- Monogram "BS" in bold racing italic font -->
  <g transform="skewX(-10) translate(40, 0)" filter="url(#shadow)">
    <!-- Letter B -->
    <path d="M 170 148 
             L 242 148 
             C 272 148 290 162 290 185 
             C 290 202 278 214 262 220 
             C 284 226 298 242 298 266 
             C 298 293 274 310 240 310 
             L 170 310 Z 
             M 205 178 
             L 205 214 
             L 238 214 
             C 250 214 258 208 258 196 
             C 258 184 250 178 238 178 Z 
             M 205 244 
             L 205 280 
             L 242 280 
             C 256 280 265 273 265 262 
             C 265 251 256 244 242 244 Z" 
          fill="url(#goldGrad)" stroke="#78350f" stroke-width="3.5" stroke-linejoin="round" />

    <!-- Letter S -->
    <path d="M 395 182 
             L 362 195 
             C 358 185 348 177 334 177 
             C 320 177 312 184 312 194 
             C 312 206 322 212 344 219 
             C 378 229 398 243 398 271 
             C 398 298 374 314 336 314 
             C 298 314 274 294 268 267 
             L 302 254 
             C 306 270 318 281 336 281 
             C 350 281 361 273 361 263 
             C 361 251 350 245 328 237 
             C 296 226 278 212 278 188 
             C 278 164 302 145 336 145 
             C 368 145 388 161 395 182 Z" 
          fill="url(#goldGrad)" stroke="#78350f" stroke-width="3.5" stroke-linejoin="round" />
  </g>

  <!-- Banner for "CAR CENTER" -->
  <g filter="url(#shadow)">
    <rect x="86" y="360" width="340" height="66" rx="20" fill="url(#rimGrad)" stroke="#fef08a" stroke-width="4" />
    <rect x="92" y="366" width="328" height="54" rx="16" fill="#0f172a" />
  </g>

  <!-- CAR CENTER Text -->
  <g fill="url(#goldGrad)" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-style="italic">
    <text x="256" y="405" font-size="33" letter-spacing="4">CAR CENTER</text>
  </g>

  <!-- Subtitle Accent: CURITIBA • PR -->
  <g fill="#93c5fd" text-anchor="middle" font-family="sans-serif" font-weight="700">
    <text x="256" y="445" font-size="14" letter-spacing="6" opacity="0.95">CURITIBA • PR</text>
  </g>
</svg>`;

// 2. Tab Bar Favicon SVG (Clean oval badge with high contrast for small browser tab bars)
const tabFaviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="tabBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="tabGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#facc15" />
      <stop offset="100%" stop-color="#ca8a04" />
    </linearGradient>
  </defs>

  <!-- Rounded Squircle / Circle Badge -->
  <circle cx="256" cy="256" r="240" fill="url(#tabBg)" stroke="url(#tabGold)" stroke-width="28" />

  <!-- Center Oval -->
  <ellipse cx="256" cy="256" rx="205" ry="155" fill="#1e3a8a" stroke="url(#tabGold)" stroke-width="16" />

  <!-- "BS" Monogram (Bold, Racing Italic) -->
  <g transform="skewX(-10) translate(40, 30)">
    <!-- Letter B -->
    <path d="M 170 148 
             L 242 148 
             C 272 148 290 162 290 185 
             C 290 202 278 214 262 220 
             C 284 226 298 242 298 266 
             C 298 293 274 310 240 310 
             L 170 310 Z 
             M 205 178 
             L 205 214 
             L 238 214 
             C 250 214 258 208 258 196 
             C 258 184 250 178 238 178 Z 
             M 205 244 
             L 205 280 
             L 242 280 
             C 256 280 265 273 265 262 
             C 265 251 256 244 242 244 Z" 
          fill="url(#tabGold)" stroke="#78350f" stroke-width="4" stroke-linejoin="round" />

    <!-- Letter S -->
    <path d="M 395 182 
             L 362 195 
             C 358 185 348 177 334 177 
             C 320 177 312 184 312 194 
             C 312 206 322 212 344 219 
             C 378 229 398 243 398 271 
             C 398 298 374 314 336 314 
             C 298 314 274 294 268 267 
             L 302 254 
             C 306 270 318 281 336 281 
             C 350 281 361 273 361 263 
             C 361 251 350 245 328 237 
             C 296 226 278 212 278 188 
             C 278 164 302 145 336 145 
             C 368 145 388 161 395 182 Z" 
          fill="url(#tabGold)" stroke="#78350f" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`;

// 3. Safari Pinned Tab Mask Icon (Pure monochrome black on transparent)
const safariMaskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M 256 16 C 123.45 16 16 123.45 16 256 C 16 388.55 123.45 496 256 496 C 388.55 496 496 388.55 496 256 C 496 123.45 388.55 16 256 16 Z M 256 460 C 143.33 460 52 368.67 52 256 C 52 143.33 143.33 52 256 52 C 368.67 52 460 143.33 460 256 C 460 368.67 368.67 460 256 460 Z" fill="black" />
  <g transform="skewX(-10) translate(40, 30)">
    <path d="M 170 148 L 242 148 C 272 148 290 162 290 185 C 290 202 278 214 262 220 C 284 226 298 242 298 266 C 298 293 274 310 240 310 L 170 310 Z M 205 178 L 205 214 L 238 214 C 250 214 258 208 258 196 C 258 184 250 178 238 178 Z M 205 244 L 205 280 L 242 280 C 256 280 265 273 265 262 C 265 251 256 244 242 244 Z" fill="black" />
    <path d="M 395 182 L 362 195 C 358 185 348 177 334 177 C 320 177 312 184 312 194 C 312 206 322 212 344 219 C 378 229 398 243 398 271 C 398 298 374 314 336 314 C 298 314 274 294 268 267 L 302 254 C 306 270 318 281 336 281 C 350 281 361 273 361 263 C 361 251 350 245 328 237 C 296 226 278 212 278 188 C 278 164 302 145 336 145 C 368 145 388 161 395 182 Z" fill="black" />
  </g>
</svg>`;

async function buildAll() {
  console.log('Generating RealFaviconGenerator suite...');

  // Save SVGs
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), tabFaviconSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), safariMaskSvg, 'utf8');
  console.log('✓ Saved favicon.svg and safari-pinned-tab.svg');

  // Generate PNGs using Sharp
  const masterBuffer = Buffer.from(masterSvg);
  const tabBuffer = Buffer.from(tabFaviconSvg);

  // 16x16 and 32x32 from tabBuffer for max clarity in browser tabs
  await sharp(tabBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(tabBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(tabBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('✓ Generated favicon-16x16.png and favicon-32x32.png');

  // Apple Touch Icon: 180x180
  await sharp(masterBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // Android Chrome: 192x192 and 512x512
  await sharp(masterBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(masterBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ Generated android-chrome-192x192.png and android-chrome-512x512.png');

  // Windows Tile: 150x150
  await sharp(masterBuffer).resize(150, 150).png().toFile(path.join(publicDir, 'mstile-150x150.png'));
  console.log('✓ Generated mstile-150x150.png (150x150)');

  // Social Share Card / OG Image: 1200x630
  await sharp(masterBuffer).resize(1200, 630, { fit: 'contain', background: '#0a1128' }).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('✓ Generated og-image.png (1200x630)');

  // favicon.ico (multi-resolution 16, 32, 48) using ImageMagick
  const p16 = path.join(publicDir, 'favicon-16x16.png');
  const p32 = path.join(publicDir, 'favicon-32x32.png');
  const p48 = path.join(publicDir, 'favicon-48x48.png');
  const pIco = path.join(publicDir, 'favicon.ico');
  execSync(`convert "${p16}" "${p32}" "${p48}" "${pIco}"`);
  console.log('✓ Generated multi-size favicon.ico');

  // Clean up temporary 48x48
  if (fs.existsSync(p48)) fs.unlinkSync(p48);

  // 4. site.webmanifest
  const manifest = {
    name: "BS CAR CENTER - Auto Center em Curitiba",
    short_name: "BS CAR CENTER",
    description: "Auto Center e Manutenção Automotiva no Novo Mundo, Curitiba - PR",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#1e3a8a",
    background_color: "#0f172a",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('✓ Created site.webmanifest');

  // 5. browserconfig.xml
  const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <final>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#1e3a8a</TileColor>
        </final>
    </msapplication>
</browserconfig>
`;
  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserconfig, 'utf8');
  console.log('✓ Created browserconfig.xml');

  console.log('All RealFaviconGenerator assets successfully created!');
}

buildAll().catch(err => {
  console.error(err);
  process.exit(1);
});
