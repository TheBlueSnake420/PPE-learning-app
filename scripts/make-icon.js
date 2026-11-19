// Builds the PPE Study app icon (an owl in front of a sun, with a red-and-white shield and a
// "PPE" banner) as SVG and renders every PNG the app needs. Not part of the app build.
// Usage: install @resvg/resvg-js in a temporary folder (npm install @resvg/resvg-js), then
//   node scripts/make-icon.js <that folder>/node_modules <output dir>
// and copy icon.png, favicon.png and android-icon-*.png to assets/, apple-touch-icon.png to public/.
// Text uses Segoe UI Black from C:\Windows\Fonts. Changing the icon needs a new APK build.
const fs = require('fs');
const path = require('path');
const { Resvg } = require(path.join(process.argv[2], '@resvg', 'resvg-js'));
const out = process.argv[3];
fs.mkdirSync(out, { recursive: true });

const C = {
  navyLight: '#2A4C8C',
  navy: '#12224A',
  sun: '#FFCD00',
  red: '#C8102E',
  redDark: '#8E0B22',
  owl: '#7A4B2A',
  owlDark: '#5A341B',
  owlLine: '#3D2312',
  belly: '#A86F3E',
  mask: '#F7E6C4',
  iris: '#FFB300',
  pupil: '#1E1E1E',
  beak: '#F28C28',
  beakLine: '#C46A12',
  white: '#FFFFFF',
};

const SUN = { x: 512, y: 430, r: 262 };

function rays() {
  const n = 32;
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n;
    const long = i % 2 === 0;
    const r1 = SUN.r - 6;
    const r2 = long ? 342 : 306;
    const w = (long ? 3.4 : 3.0) * (Math.PI / 180);
    const p = (r, t) => `${(SUN.x + r * Math.sin(t)).toFixed(1)} ${(SUN.y - r * Math.cos(t)).toFixed(1)}`;
    d += `M ${p(r1, a - w)} L ${p(r2, a)} L ${p(r1, a + w)} Z `;
  }
  return d;
}

const OWL_BODY =
  'M 352 205 C 330 290 305 380 310 490 C 316 620 400 705 512 705 C 624 705 708 620 714 490 ' +
  'C 719 380 694 290 672 205 C 625 250 570 268 512 270 C 454 268 399 250 352 205 Z';
const WING_L = 'M 318 440 C 296 540 318 640 404 700 C 396 620 382 520 318 440 Z';
const WING_R = 'M 706 440 C 728 540 706 640 620 700 C 628 620 642 520 706 440 Z';
const SHIELD = 'M 452 545 H 572 V 605 C 572 650 545 676 512 690 C 479 676 452 650 452 605 Z';
const BEAK = 'M 512 452 L 540 482 L 512 528 L 484 482 Z';
const EYES = [
  { x: 438, y: 392 },
  { x: 586, y: 392 },
];
const BANNER = { x: 262, y: 700, w: 500, h: 140 };
const TAIL_L = 'M 196 725 L 300 725 L 300 865 L 196 865 L 230 795 Z';
const TAIL_R = 'M 828 725 L 724 725 L 724 865 L 828 865 L 794 795 Z';
const TEXT = `<text x="512" y="817" text-anchor="middle" font-family="Segoe UI Black" font-weight="900" font-size="132" letter-spacing="10"`;

function feet() {
  let s = '';
  for (const fx of [468, 556]) {
    for (const dx of [-17, 0, 17]) {
      s += `<ellipse cx="${fx + dx}" cy="706" rx="10" ry="17" fill="${C.beak}" stroke="${C.beakLine}" stroke-width="3"/>`;
    }
  }
  return s;
}

function bellyFeathers() {
  // Small chevrons on both sides of the shield.
  let s = '';
  const rows = [
    [400, 560],
    [406, 610],
    [420, 655],
  ];
  for (const [x, y] of rows) {
    for (const mx of [x, 1024 - x]) {
      s += `<path d="M ${mx - 16} ${y} Q ${mx} ${y + 16} ${mx + 16} ${y}" fill="none" stroke="${C.owlDark}" stroke-width="6" stroke-linecap="round"/>`;
    }
  }
  return s;
}

/** Sun, owl and banner, in the 1024 frame before centering. */
function content() {
  return `
  <path d="${rays()}" fill="${C.sun}"/>
  <circle cx="${SUN.x}" cy="${SUN.y}" r="${SUN.r}" fill="${C.sun}"/>
  <path d="${TAIL_L}" fill="${C.redDark}"/>
  <path d="${TAIL_R}" fill="${C.redDark}"/>
  <path d="${OWL_BODY}" fill="${C.owl}" stroke="${C.owlLine}" stroke-width="8" stroke-linejoin="round"/>
  <ellipse cx="512" cy="612" rx="140" ry="92" fill="${C.belly}"/>
  ${bellyFeathers()}
  <path d="${WING_L}" fill="${C.owlDark}"/>
  <path d="${WING_R}" fill="${C.owlDark}"/>
  ${EYES.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="96" fill="${C.mask}" stroke="${C.owlLine}" stroke-width="8"/>`).join('')}
  ${EYES.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="92" fill="${C.mask}"/>`).join('')}
  ${EYES.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="62" fill="${C.iris}" stroke="${C.owlLine}" stroke-width="5"/>`).join('')}
  ${EYES.map((e, i) => {
    const px = e.x + (i === 0 ? 5 : -5);
    const py = e.y + 5;
    return `<circle cx="${px}" cy="${py}" r="35" fill="${C.pupil}"/>` +
      `<circle cx="${px - 12}" cy="${py - 13}" r="12" fill="${C.white}"/>` +
      `<circle cx="${px + 13}" cy="${py + 12}" r="5" fill="${C.white}"/>`;
  }).join('')}
  <path d="${BEAK}" fill="${C.beak}" stroke="${C.beakLine}" stroke-width="4" stroke-linejoin="round"/>
  <clipPath id="shieldClip"><path d="${SHIELD}"/></clipPath>
  <g clip-path="url(#shieldClip)">
    <rect x="440" y="535" width="150" height="170" fill="${C.white}"/>
    <path d="M 572 545 L 600 545 L 600 710 L 440 710 L 452 690 Z" fill="${C.red}"/>
  </g>
  <path d="${SHIELD}" fill="none" stroke="${C.owlLine}" stroke-width="7" stroke-linejoin="round"/>
  <rect x="${BANNER.x}" y="${BANNER.y}" width="${BANNER.w}" height="${BANNER.h}" rx="20" fill="${C.red}"/>
  ${feet()}
  ${TEXT} fill="${C.white}">PPE</text>`;
}

function background() {
  return `
  <defs>
    <radialGradient id="bg" cx="512" cy="430" r="760" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${C.navyLight}"/>
      <stop offset="1" stop-color="${C.navy}"/>
    </radialGradient>
  </defs>
  <rect width="1024" height="1024" fill="url(#bg)"/>`;
}

function glow() {
  return `
  <defs>
    <radialGradient id="glow" cx="${SUN.x}" cy="${SUN.y}" r="470" gradientUnits="userSpaceOnUse">
      <stop offset="0.5" stop-color="#9DBBFF" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#9DBBFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="${SUN.x}" cy="${SUN.y}" r="470" fill="url(#glow)"/>`;
}

// Content is moved down 35px so the whole drawing (rays to banner tails) is centred.
const CENTER = 'translate(0 35)';
// Android adaptive icons only show the middle of the image for sure (a circle of 66/108 of
// the width), so the foreground is scaled into that zone.
const ADAPTIVE = 'translate(512 512) scale(0.68) translate(-512 -512) translate(0 35)';

function monochrome() {
  // Android 13+ themed icon: one colour; only the alpha channel counts.
  return `
  <defs>
    <mask id="m">
      <path d="${OWL_BODY}" fill="#fff"/>
      ${EYES.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="70" fill="#000"/>`).join('')}
      ${EYES.map((e, i) => `<circle cx="${e.x + (i === 0 ? 5 : -5)}" cy="${e.y + 5}" r="34" fill="#fff"/>`).join('')}
      <path d="${BEAK}" fill="#000"/>
      <rect x="${BANNER.x}" y="${BANNER.y}" width="${BANNER.w}" height="${BANNER.h}" rx="20" fill="#fff"/>
      ${TEXT} fill="#000">PPE</text>
    </mask>
  </defs>
  <rect width="1024" height="1024" fill="#fff" mask="url(#m)"/>`;
}

const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">${body}</svg>`;

const variants = {
  'icon.svg': svg(`${background()}<g transform="${CENTER}">${glow()}${content()}</g>`),
  'android-icon-foreground.svg': svg(`<g transform="${ADAPTIVE}">${content()}</g>`),
  'android-icon-background.svg': svg(`${background()}<g transform="${ADAPTIVE}">${glow()}</g>`),
  'android-icon-monochrome.svg': svg(`<g transform="${ADAPTIVE}">${monochrome()}</g>`),
};

const font = { fontFiles: ['C:\\Windows\\Fonts\\seguibl.ttf'], loadSystemFonts: false, defaultFontFamily: 'Segoe UI Black' };
function render(svgText, size, file) {
  const png = new Resvg(svgText, { fitTo: { mode: 'width', value: size }, font }).render().asPng();
  fs.writeFileSync(path.join(out, file), png);
  console.log(file, size, png.length, 'bytes');
}

for (const [name, text] of Object.entries(variants)) fs.writeFileSync(path.join(out, name), text);
render(variants['icon.svg'], 1024, 'icon.png');
render(variants['icon.svg'], 180, 'apple-touch-icon.png');
render(variants['icon.svg'], 48, 'favicon.png');
render(variants['icon.svg'], 128, 'preview-128.png');
render(variants['android-icon-foreground.svg'], 1024, 'android-icon-foreground.png');
render(variants['android-icon-background.svg'], 1024, 'android-icon-background.png');
render(variants['android-icon-monochrome.svg'], 1024, 'android-icon-monochrome.png');
// Preview of the adaptive icon as a launcher shows it: only the middle 72/108 is visible,
// here with a circle mask.
const inner = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="171 171 682 682">`;
render(
  `${inner}<defs><clipPath id="c"><circle cx="512" cy="512" r="341"/></clipPath></defs><g clip-path="url(#c)">${background()}<g transform="${ADAPTIVE}">${glow()}${content()}</g></g></svg>`,
  192,
  'preview-adaptive-circle.png',
);
render(
  `${inner}<defs><clipPath id="c"><circle cx="512" cy="512" r="341"/></clipPath></defs><g clip-path="url(#c)"><rect width="1024" height="1024" fill="#33415C"/><g transform="${ADAPTIVE}"><g fill="#DCE6FF">${monochrome()}</g></g></g></svg>`,
  192,
  'preview-monochrome.png',
);
