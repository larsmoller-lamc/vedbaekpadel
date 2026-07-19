# Vedbæk Padel — hjemmeside

One-page website + separat vedtægter-side.

## Struktur

```
vedbaek-padel/
├── index.html              ← Forsiden
├── vedtaegter.html         ← Selvstændig vedtægter-side
├── assets/
│   ├── css/styles.css      ← Al styling
│   ├── js/main.js          ← Sponsor-data + nav
│   ├── dokumenter/         ← PDF'er (referater osv.)
│   ├── site.webmanifest    ← iOS/Android app-manifest
│   └── img/
│       ├── logo-vedbaek-padel.png
│       ├── icons/          ← Favicons + apple-touch + android-chrome
│       └── sponsors/       ← Sponsor-logoer lægges her
└── README.md
```

## Fonte

- **Montserrat** (800/900) til headings, taldisplays og logo-mimende elementer
- **Inter** til brødtekst
- Loades fra Google Fonts

## Rediger sponsorer

Åbn `assets/js/main.js` og find `SPONSORS`-listen. Redigér eller tilføj sponsorer.

**Tier-værdier:**
- `'founding'` — Founding partners (~22.500 kr., store logoer, øverst)
- `'network'` — Netværkspartnere (~10.000-11.250 kr., mellem)
- `'local'` — Lokalpartnere (~4.000 kr., nederst)

**Eksempel — tilføj sponsor:**
```javascript
{
  name: 'Sponsor Navn',
  tag: 'Beskrivelse',          // fx 'Advokat' eller 'Ejendomsmægler'
  url: 'https://sponsor.dk',   // eller null hvis ingen hjemmeside
  logo: null,                  // eller 'sponsor.png' hvis logo er lagt i sponsors-mappen
  tier: 'network'
}
```

## Swap tekst-fallback med rigtige logoer

Når du har et rigtigt logo-billede:

1. Læg PNG eller SVG i `assets/img/sponsors/` — fx `gf-hovedstaden.png`
2. Åbn `assets/js/main.js`
3. Find sponsoren, og skift `logo: null` til `logo: 'gf-hovedstaden.png'`
4. Gem — filen viser nu billedet i stedet for tekstversionen

**Tips til logo-billeder:**
- SVG er bedst (skarp på alle skærme)
- Ellers PNG med transparent baggrund
- Ca. 300-500px bredde er rigeligt
- Undgå meget lange logoer — de rendes uskarpe i grid'et

## Opdatér vedtægter

Vedtægterne er i `vedtaegter.html`. Rediger direkte i HTML — hver paragraf har sit eget `<h2 id="pN">`-tag så TOC'en i venstre kolonne stadig virker.

## Referat af seneste generalforsamling

I `index.html` findes en knap "Referat, seneste generalforsamling" i bestyrelses-sektionen. Skift `href="#"` ud med URL'en til referatet (fx PDF på FCR's hjemmeside).

## Test lokalt

Åbn `index.html` direkte i browseren — alt virker uden server.

## Farver, font, tokens

Alt kan tilpasses via CSS-variabler i toppen af `assets/css/styles.css` (`:root { --navy: ...; }`).
