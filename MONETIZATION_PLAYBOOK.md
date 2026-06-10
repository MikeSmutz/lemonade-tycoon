# 🍋 Lemonade Tycoon — Monetization Playbook
## Zero Audience, Zero Ad Budget — Revenue-First Launch Guide

---

## 💰 WHY THIS GAME PRINTS MONEY

Idle/clicker games have the **highest ad inventory per session** of any casual genre. A player in your game for 10 minutes will see 3-5 rewarded ad opportunities *willingly* — because they get something in return. That's not interruption; that's value exchange.

**Revenue math (conservative):**
- Web rewarded ad eCPM: **$3-8**
- If 1,000 players/day watch 3 ads each = **$9-24/day**
- Scale to 10K DAU = **$90-240/day**
- Add IAP at 1-2% conversion = **+$50-200/day**

**No audience needed.** These platforms bring the traffic TO you.

---

## 🚀 PHASE 1: PASSIVE DISTRIBUTION (Do This First — Free Traffic)

### 1. Poki.com (HIGHEST PRIORITY)
- **Why:** 50M+ monthly users, pays rev-share on ads, no upfront cost
- **Revenue share:** 70% to you, 30% to Poki
- **Action:** Submit at [developers.poki.com](https://developers.poki.com)
- **Integration:** Add Poki SDK for ads (replaces placeholder `showAd()` function)
- **Time to first $:** 2-4 weeks after approval
- **Expected CPM:** $4-10

### 2. CrazyGames.com
- **Why:** 20M+ users, strong idle game category
- **Revenue share:** 70% to you
- **Action:** Submit at [developer.crazygames.com](https://developer.crazygames.com)
- **Integration:** CrazyGames SDK for rewarded ads
- **Time to first $:** 1-3 weeks

### 3. itch.io
- **Why:** Instant upload, built-in audience, tip jar feature
- **Monetization:** Set price ($0.99-$2.99) or "Name your price"
- **Action:** Upload ZIP at [itch.io](https://itch.io)
- **Pro tip:** Tag with "idle", "clicker", "tycoon", "incremental"

### 4. GameDistribution.com
- **Why:** Distributes to 1000+ game sites automatically
- **Revenue:** Ad revenue share across network
- **Action:** Submit at [gamedistribution.com](https://gamedistribution.com)

### 5. Y8.com / AddictingGames / Kongregate
- **Why:** Legacy portals with built-in idle game audiences
- **Revenue:** Lower CPM but volume makes up for it
- **Action:** Email submissions or partner portals

---

## 📱 PHASE 2: MOBILE WRAPPER (Bigger Money)

Wrap the HTML5 game for instant mobile distribution:

### Option A: Cordova / Capacitor (Free)
```bash
npm install -g @capacitor/core @capacitor/cli
npx cap init LemonadeTycoon com.yourname.lemonade
npx cap add ios
npx cap add android
npx cap copy
# Build in Xcode / Android Studio
```

### Option B: PWA (Instant, No Store)
- Add `manifest.json` and service worker
- Host on Vercel/Netlify (free)
- Users "Add to Home Screen" — works like an app
- Monetize with Google AdSense for Games

### Option C: Unity WebView Wrapper
- Load HTML5 game inside Unity WebView
- Export to iOS/Android with Unity Ads / AdMob
- Upload to App Store / Google Play

---

## 🎯 PHASE 3: MONETIZATION INTEGRATION

### Ad Networks (Replace Placeholder `showAd()`)

**For Web (Poki, CrazyGames, etc.):**
```javascript
// Poki SDK
PokiSDK.rewardedBreak().then((success) => {
  if (success) giveReward();
});

// CrazyGames SDK
crazygames.requestAd('rewarded').then(() => {
  giveReward();
});
```

**For Mobile (AdMob, Unity Ads):**
- Rewarded ads: $5-15 eCPM
- Interstitial: $2-6 eCPM (use sparingly)
- Banner: $0.50-2 eCPM (avoid — hurts retention)

### Payment Processors (Replace IAP Stubs)

**For Web:**
- **Stripe** — One-click checkout, 2.9% + $0.30
- **Paddle** — Handles taxes globally, 5% fee
- **Gumroad** — Simplest setup, 10% fee

**For Mobile:**
- Apple In-App Purchase (30% fee, drops to 15% after $1M)
- Google Play Billing (15-30%)

---

## 📊 REVENUE OPTIMIZATION TACTICS

### 1. Ad Placement Psychology
| Location | Type | Expected Fill Rate |
|----------|------|-------------------|
| Offline earnings claim | Rewarded | 60-80% |
| 2x income boost | Rewarded | 50-70% |
| Skip 4 hours | Rewarded | 40-60% |
| Every 5th prestige | Rewarded | 70-85% |

**Rule:** Never show an ad without giving the player something they WANT.

### 2. IAP Pricing Psychology
- **$2.99 Gem Pack** — Impulse buy, low friction
- **$4.99 No Ads** — High value perception, ~3-5% conversion
- **$9.99 Starter Pack** — Anchor price, makes $4.99 look cheap

### 3. Retention Hooks (More Sessions = More Ad Views)
- **Offline earnings cap** — Creates FOMO, brings players back
- **Daily reward streak** — 7-day escalating rewards
- **Prestige loop** — Resets progress but feels like progress
- **Push notifications** (mobile) — "Your lemonade stand earned $50K!"

---

## 🔥 FASTEST PATH TO FIRST DOLLAR

1. **Today:** Upload to itch.io (free, instant)
2. **This week:** Submit to Poki + CrazyGames
3. **Next week:** Add real ad SDK integration
4. **Week 3:** Wrap for mobile PWA
5. **Week 4:** First payout (Poki pays monthly)

---

## 📈 SCALING MATH

| DAU | Avg Ads/Day | eCPM | Monthly Ad Revenue | 1% IAP Conv | Monthly Total |
|-----|------------|------|-------------------|------------|---------------|
| 500 | 2.5 | $5 | ~$190 | $15 | ~$205 |
| 2,000 | 2.5 | $5 | ~$750 | $60 | ~$810 |
| 10,000 | 3 | $6 | ~$5,400 | $300 | ~$5,700 |
| 50,000 | 3 | $7 | ~$31,500 | $1,500 | ~$33,000 |

**Reality check:** Most games plateau at 1K-5K DAU. But that's still $500-2,000/month passively.

---

## 🛠️ NEXT STEPS CHECKLIST

- [ ] Replace `showAd()` with Poki SDK
- [ ] Replace `iapNoAds()` etc. with Stripe/Paddle checkout
- [ ] Add Google Analytics / Firebase for retention tracking
- [ ] Submit to Poki (highest revenue potential)
- [ ] Submit to CrazyGames
- [ ] Upload to itch.io
- [ ] Create PWA with manifest + service worker
- [ ] Set up Vercel/Netlify hosting
- [ ] Post to Reddit r/incremental_games (free marketing)
- [ ] Post to r/WebGames, r/playmygame

---

## 🎮 GAME FILES

- `index.html` — Full game (single file, no build step)
- Open in any browser, works offline after first load
- Mobile-responsive, touch-optimized

**Host it anywhere:** GitHub Pages, Netlify, Vercel, S3 — all free.
