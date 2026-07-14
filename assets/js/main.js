/* ================================================================
   FCR Vedbæk Padel — Main JS
   ================================================================ */

/* ----- Sponsor data -----
   Rediger denne liste for at tilføje/opdatere sponsorer.
   Når du får rigtige logo-billeder:
   1. Læg PNG/SVG i assets/img/sponsors/ (fx gf-hovedstaden.png)
   2. Sæt logo-feltet til filnavnet: logo: 'gf-hovedstaden.png'
   3. Behold navn og tag som fallback
   Tier: 'founding' | 'network' | 'local'
*/
const SPONSORS = [
  // ---------- FOUNDING PARTNERS (~22.500 kr.) ----------
  {
    name: 'Medidyne',
    tag: 'Medicinsk udstyr',
    url: 'https://medidyne.dk',
    logo: null,   // fx 'medidyne.png'
    tier: 'founding'
  },
  {
    name: 'Tokara Ventures',
    tag: 'Venture-selskab',
    url: 'https://www.tokara.dk',
    logo: null,
    tier: 'founding'
  },
  {
    name: 'Ivan Eltoft Nielsen',
    tag: 'Ejendomsmægler',
    url: 'https://eltoftnielsen.dk',
    logo: null,
    tier: 'founding'
  },

  // ---------- NETVÆRKSPARTNERE (~10.000–11.250 kr.) ----------
  {
    name: 'GF Hovedstaden',
    tag: 'Forsikring',
    url: 'https://www.gfforsikring.dk/klub/gf-hovedstaden-klub-157/',
    logo: null,
    tier: 'network'
  },
  {
    name: 'RealMæglerne Hanne Løye',
    tag: 'Ejendomsmægler',
    url: 'https://www.realmaeglerne.dk',
    logo: null,
    tier: 'network'
  },
  {
    name: 'Chumhum ApS',
    tag: 'Investering',
    url: null,
    logo: null,
    tier: 'network'
  },
  {
    name: 'T.O. Holding',
    tag: 'Investering',
    url: null,
    logo: null,
    tier: 'network'
  },
  {
    name: 'IT-Trade',
    tag: 'IT-udstyr',
    url: 'https://www.it-trade.dk',
    logo: null,
    tier: 'network'
  },
  {
    name: 'Hyggi',
    tag: 'Designede legemåtter',
    url: 'https://www.hyggi.dk',
    logo: null,
    tier: 'network'
  },
  {
    name: 'The Kitchen',
    tag: 'Catering, Trørød',
    url: 'https://thekitchen.dk',
    logo: null,
    tier: 'network'
  },
  {
    name: 'MS2 Holding',
    tag: 'Investering',
    url: 'https://www.ms2invest.dk',
    logo: null,
    tier: 'network'
  },

  // ---------- LOKALPARTNERE (~4.000 kr.) ----------
  {
    name: 'Liebhaveradvokaten',
    tag: 'Advokat',
    url: 'https://www.liebhaveradvokaten.dk',
    logo: null,
    tier: 'local'
  }
];

/* ----- Sponsor rendering ----- */
function renderSponsorCard(sponsor) {
  const inner = sponsor.logo
    ? `<img src="assets/img/sponsors/${sponsor.logo}" alt="${sponsor.name}">`
    : `<div class="sponsor-logo-text">
         <span class="name">${sponsor.name}</span>
         ${sponsor.tag ? `<span class="tag">${sponsor.tag}</span>` : ''}
       </div>`;

  const cls = `sponsor-card ${sponsor.tier}`;
  if (sponsor.url) {
    return `<a href="${sponsor.url}" class="${cls}" target="_blank" rel="noopener" aria-label="${sponsor.name}">${inner}</a>`;
  }
  return `<div class="${cls}" aria-label="${sponsor.name}">${inner}</div>`;
}

function renderSponsors() {
  const founding = SPONSORS.filter(s => s.tier === 'founding');
  const network = SPONSORS.filter(s => s.tier === 'network');
  const local = SPONSORS.filter(s => s.tier === 'local');

  const container = document.getElementById('sponsorsContainer');
  if (!container) return;

  const tiers = [
    { key: 'founding', label: 'Founding partner', desc: 'Klubbens grundlæggende partnere', items: founding, gridCls: 'sponsor-grid-founding' },
    { key: 'network',  label: 'Netværkspartner', desc: 'Løftende partnere i klubbens netværk', items: network,  gridCls: 'sponsor-grid-network'  },
    { key: 'local',    label: 'Lokalpartner',    desc: 'Lokale støtter af klubben',           items: local,    gridCls: 'sponsor-grid-local'    }
  ];

  container.innerHTML = tiers
    .filter(t => t.items.length > 0)
    .map(t => `
      <div class="sponsor-tier">
        <div class="sponsor-tier-header">
          <span class="tier-badge ${t.key}">${t.label}</span>
          <h3>${t.desc}</h3>
        </div>
        <div class="${t.gridCls}">
          ${t.items.map(renderSponsorCard).join('')}
        </div>
      </div>
    `)
    .join('');
}

/* ----- Nav scroll state ----- */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ----- Mobile nav toggle ----- */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

/* ----- Init on DOM ready ----- */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initNavToggle();
  renderSponsors();
});
