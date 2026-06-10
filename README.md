# 🍋 Lemonade Tycoon

**Live URL:** https://mikesmutz.github.io/lemonade-tycoon/

A revenue-first idle/clicker web game designed to generate passive income with zero audience and zero ad budget. Built as a single HTML5 file with no dependencies.

---

## 🎮 How to Play

1. **Tap the 🍋 button** to earn cash
2. **Buy businesses** — Lemonade Stand, Food Cart, Food Truck, Cafe, Diner, BBQ Pit, Bistro, Steakhouse
3. **Upgrade** to increase passive income
4. **Watch ads** for 2x boosts and time skips
5. **Prestige** to reset for permanent gem multipliers
6. **Buy premium** to remove ads and get permanent 2x income

---

## 💰 Monetization

### Already Built In
- **Rewarded ads** — 2x income boost (30 min), skip 4 hours, double offline earnings
- **IAP hooks** — No Ads + 2x ($4.99), Gem Pack ($2.99), Starter Pack ($9.99)
- **Offline earnings** — 4-hour cap creates FOMO, drives return sessions
- **Prestige loop** — Infinite replayability, gem = permanent power

### Revenue Potential
| DAU | Monthly Ad Revenue | 1% IAP | **Total/Month** |
|-----|-------------------|--------|-----------------|
| 500 | ~$190 | $15 | **~$205** |
| 2,000 | ~$750 | $60 | **~$810** |
| 10,000 | ~$5,400 | $300 | **~$5,700** |

---

## 🚀 Distribution Checklist

### Phase 1: Passive Traffic (Free)
- [x] **GitHub Pages** — Live at https://mikesmutz.github.io/lemonade-tycoon/
- [ ] **itch.io** — Upload ZIP, tag: idle, clicker, tycoon, incremental
- [ ] **Poki.com** — Highest revenue potential (50M users, 70% rev share)
- [ ] **CrazyGames.com** — 20M users, 70% rev share
- [ ] **GameDistribution.com** — Auto-distributes to 1000+ sites
- [ ] **Y8.com / Kongregate** — Legacy portals with idle game audiences

### Phase 2: Mobile Wrapper
- [ ] **PWA** — Add service worker, "Add to Home Screen"
- [ ] **Cordova/Capacitor** — Wrap for iOS/Android app stores
- [ ] **Unity WebView** — Load HTML5 inside Unity with Unity Ads

### Phase 3: Ad Integration
- [ ] **Poki SDK** — See `poki-integration.js`
- [ ] **CrazyGames SDK** — Similar rewarded ad integration
- [ ] **Stripe/Paddle** — Real checkout for web IAP
- [ ] **AdMob/Unity Ads** — For mobile wrapper

---

## 📁 Files

| File | Description |
|------|-------------|
| `index.html` | Full game — single file, no build step |
| `manifest.json` | PWA manifest |
| `poki-integration.js` | Poki SDK integration template |
| `MONETIZATION_PLAYBOOK.md` | Complete revenue guide |
| `screenshot.png` | Game preview image |

---

## 🛠️ Tech Stack

- Pure HTML5 + CSS + JavaScript
- No frameworks, no build step
- LocalStorage for save games
- Mobile-responsive, touch-optimized
- ~20KB total

---

## 📄 License

MIT — Fork it, monetize it, make money.
