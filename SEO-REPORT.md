# Tubo SEO Report — April 2026

## Executive Summary

**C'e' domanda per questo prodotto? SI.**

YouTube non ha un'app nativa per macOS. Ogni mese **8-12K persone** cercano "youtube app for mac" senza trovare una risposta soddisfacente. Le SERP sono dominate da guide how-to ("come installare la PWA") e articoli generici. **Tubo e' letteralmente il prodotto che queste persone cercano.**

Il competitor diretto piu' vicino e' **Clicker for YouTube** ($7.99, stessa architettura Swift+WKWebView), ma non ha Liquid Glass, multi-tab completo, ne' supporto macOS Tahoe. Tubo puo' vincere su: UI moderna, gratuita', e first-mover advantage su Liquid Glass.

---

## Keyword Strategy

### Cluster 1: YouTube App for Mac (HIGH PRIORITY)

| Keyword | Volume stimato/mo | Difficulty | Intent |
|---------|------------------|------------|--------|
| youtube app for mac | 8-12K | Alta | Transactional |
| youtube desktop app macos | 3-5K | Media | Transactional |
| youtube native app mac | 1-2K | Bassa | Transactional |
| youtube app macos download | 500-1K | Bassa | Transactional |

**Strategia**: Queste sono le keyword primarie. L'H1 e il title tag sono stati ottimizzati per "native YouTube app for macOS".

### Cluster 2: YouTube PiP / Floating Window (MEDIUM-HIGH)

| Keyword | Volume stimato/mo | Difficulty | Intent |
|---------|------------------|------------|--------|
| youtube picture in picture mac | 3-5K | Media | Informational/Transactional |
| youtube pip macos | 1-2K | Media | Informational |
| youtube floating window mac | 1-2K | Bassa | Transactional |
| youtube always on top mac | 500-1K | Bassa | Transactional |

**Strategia**: Feature differenziante. La feature card PiP include queste keyword. Opportunita' per blog post dedicato.

### Cluster 3: YouTube Without Ads / Privacy (MEDIUM)

| Keyword | Volume stimato/mo | Difficulty | Intent |
|---------|------------------|------------|--------|
| youtube without ads mac | 5-8K | Alta | Transactional |
| youtube ad blocker mac | 3-5K | Alta | Transactional |
| youtube no ads desktop | 1-2K | Media | Transactional |

**Attenzione**: Tubo NON blocca ads (e' un wrapper WKWebView). Non posizionarsi su queste keyword in modo ingannevole. Potenziale futuro con SponsorBlock.

### Cluster 4: YouTube Liquid Glass / macOS Tahoe (FIRST-MOVER)

| Keyword | Volume stimato/mo | Difficulty | Intent |
|---------|------------------|------------|--------|
| youtube liquid glass | Emergente | Zero | Informational |
| liquid glass youtube mac | Emergente | Zero | Informational |
| macos tahoe youtube app | Emergente | Zero | Transactional |

**Strategia**: Zero competizione, Tubo e' il primo. Crescera' con l'adozione di macOS 26 Tahoe.

### Cluster 5: Mercato Italiano

| Keyword | Volume stimato/mo | Difficulty | Intent |
|---------|------------------|------------|--------|
| app youtube per mac | 500-1K | Bassa | Transactional |
| youtube senza pubblicita mac | 300-500 | Bassa | Transactional |
| alternativa youtube mac | 200-400 | Bassa | Informational |

**Strategia**: Competizione bassissima. Aranzulla domina con guide generiche. Opportunita' enorme per content marketing in italiano (blog post, video).

---

## Competitor Landscape

| Competitor | Prezzo | Architettura | PiP | Tabs | Liquid Glass | Attivo |
|-----------|--------|-------------|-----|------|-------------|--------|
| **Clicker for YouTube** | $7.99 | Swift + WKWebView | Si | No | No | Si |
| **FreeTube** | Free | Electron | Si | Si | No | Si |
| **MacTube** | Free | Swift | No | No | No | Inattivo |
| **FyTube** | Free | Swift | Si | No | No | Si |
| **Vinegar** | $1.99 | Safari ext. | Si | N/A | No | Si |
| **NativeYoutube** | Free | SwiftUI | No | No | No | Inattivo |
| **Minitube** | $9.99 | C++/Qt | No | No | No | Si |
| **FloatTube** | Free | Swift | Si | No | No | Incerto |
| **Brave Browser** | Free | Chromium | Si | Si | No | Si (non dedicato) |
| **Tubo** | **Free** | **Swift + WKWebView** | **Si** | **Si** | **Si** | **Si** |

### Vantaggi competitivi di Tubo
1. **Unico** con Liquid Glass (macOS Tahoe first-mover)
2. **Gratuito** vs Clicker ($7.99) e Minitube ($9.99)
3. **Multi-tab** — solo FreeTube (Electron) offre tabs, ma e' bloatware
4. **Nativo** — no Electron, performance nativa Apple
5. **Media keys** + Now Playing integration

---

## Quick Wins Implementati (questa sessione)

### 1. Meta Tags & Open Graph
- **Title ottimizzato**: "Tubo — Native YouTube App for macOS | PiP, Tabs & Liquid Glass" (68 chars)
- **Description ottimizzata**: Include keyword primarie (youtube desktop app, mac, PiP, Liquid Glass)
- **OG tags completi**: og:title, og:description, og:image, og:type, og:url, og:locale
- **Twitter Card**: summary_large_image con immagine dedicata
- **Canonical URL**: Previene duplicate content

### 2. Structured Data (JSON-LD)
- **Schema.org SoftwareApplication**: nome, descrizione, OS, prezzo (free), features
- Abilita rich snippets nei risultati Google (rating, prezzo, OS)

### 3. Keyword-Optimized Content
- **H1 cambiato**: "YouTube, reinvented for macOS" → "The native YouTube app for macOS" (keyword esatta)
- **Hero description**: Include "YouTube desktop app for Mac", "Picture-in-Picture", "Liquid Glass", "no Electron"
- **Features section**: Aggiunto subtitle con "YouTube client for macOS"
- **PiP card**: Include "YouTube PiP on macOS"
- **CTA**: Include "YouTube desktop app for macOS"

### 4. Technical SEO
- **robots.txt**: Creato con Allow all + link sitemap
- **sitemap.xml**: Generato automaticamente via Next.js (`/sitemap.xml`)
- **Keywords meta**: 12 keyword target (EN + IT)
- **Heading hierarchy**: Gia' corretta (H1 → H2 → H3), verificata

### 5. Cosa era gia' OK
- Semantic HTML (`<main>`, heading hierarchy corretta)
- Mobile responsive (Tailwind)
- Performance (Next.js 16 SSG, font optimization)
- Accessibility (aria attributes, external link handling)

---

## Raccomandazioni Long-Term

### Priorita' Alta (prossime 2 settimane)
1. **Creare OG image** (`public/og-image.png`, 1200x630px) — screenshot dell'app con logo Tubo
2. **Custom favicon set** — favicon.ico + apple-touch-icon + favicon-32x32 + favicon-16x16
3. **Registrare dominio tubo.app** (o tuboapp.com) — attualmente su subdomain Vercel
4. **Google Search Console** — submit sitemap, monitorare indicizzazione
5. **Google Analytics / Plausible** — tracking conversioni (download clicks)

### Priorita' Media (prossimo mese)
6. **Blog section** — 3-4 articoli keyword-targeted:
   - "YouTube PiP on Mac: The Complete Guide" (cluster 2)
   - "Best YouTube Apps for macOS in 2026" (cluster 1, listicle)
   - "Liquid Glass YouTube: First Look with Tubo" (cluster 4, first-mover)
   - "App YouTube per Mac: Guida Completa" (cluster 5, italiano)
7. **App Store listing optimization** (ASO) quando pubblicato
8. **Backlink outreach**: 9to5Mac, MacRumors, The Mac Observer, Product Hunt launch

### Priorita' Bassa (trimestre)
9. **Pagina italiana** (`/it`) con hreflang tags
10. **GitHub README** ottimizzato con keyword (README e' indicizzabile)
11. **Video demo** su YouTube (ironia voluta) — embeddato in landing
12. **Schema.org FAQ** page con "People Also Ask" questions

---

## KPI da Monitorare

| Metrica | Target 30 giorni | Target 90 giorni |
|---------|-----------------|-----------------|
| Pagine indicizzate | 1 (homepage) | 5+ (blog) |
| Keyword in top 100 | 5+ | 15+ |
| Keyword in top 10 | 1-2 | 5+ |
| Organic traffic/mo | 100+ | 1,000+ |
| Download clicks/mo | 20+ | 200+ |
| Backlinks | 3+ | 15+ |

---

## Conclusione

**Il mercato c'e'.** Migliaia di utenti Mac cercano ogni mese un'app YouTube nativa che non esiste. I competitor sono pochi, datati, o a pagamento. Tubo ha un posizionamento unico (gratuito + nativo + Liquid Glass + multi-tab) che nessun altro offre.

Le keyword "youtube app for mac" e "youtube desktop app macos" sono le entry point principali. Il first-mover advantage su "liquid glass youtube" crescera' con l'adozione di macOS Tahoe.

**Next step critico**: registrare un dominio custom e configurare Google Search Console.

---

*Report generato il 2026-04-01 da Agent Swift (SEO Audit)*
