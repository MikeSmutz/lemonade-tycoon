/**
 * Poki SDK Integration for Lemonade Tycoon
 * Replace the placeholder showAd() function with real Poki rewarded ads.
 *
 * Revenue: Poki pays 70% rev-share, eCPM $4-10 for rewarded ads.
 * Submit at: https://developers.poki.com
 *
 * INSTRUCTIONS:
 * 1. Sign up at developers.poki.com
 * 2. Add your game, get a game ID
 * 3. Include this script + Poki SDK in your HTML:
 *    <script src="https://game-cdn.poki.com/scripts/v2/poki-sdk.js"></script>
 * 4. Replace window.showAd calls with pokiRewardedAd()
 */

// Initialize Poki SDK
let pokiReady = false;

async function initPoki() {
  if (typeof PokiSDK === 'undefined') {
    console.warn('PokiSDK not loaded — ads disabled');
    return;
  }
  try {
    await PokiSDK.init();
    pokiReady = true;
    console.log('Poki SDK ready');
  } catch (e) {
    console.error('Poki init failed:', e);
  }
}

// Rewarded ad wrapper — replaces the placeholder showAd()
async function pokiRewardedAd(onReward) {
  if (!pokiReady || typeof PokiSDK === 'undefined') {
    // Fallback: simulate ad for testing
    console.log('Poki not ready — simulating ad');
    setTimeout(onReward, 1500);
    return;
  }

  // Pause game audio/animation
  // gamePause();

  try {
    const success = await PokiSDK.rewardedBreak();
    if (success) {
      onReward();
    }
  } catch (e) {
    console.error('Rewarded ad error:', e);
  }

  // Resume game
  // gameResume();
}

// Commercial break (between levels/screens — optional)
async function pokiCommercialBreak() {
  if (!pokiReady) return;
  try {
    await PokiSDK.commercialBreak();
  } catch (e) {
    console.error('Commercial break error:', e);
  }
}

// Gameplay start/stop tracking (required for Poki analytics)
function pokiGameplayStart() {
  if (pokiReady) PokiSDK.gameplayStart();
}
function pokiGameplayStop() {
  if (pokiReady) PokiSDK.gameplayStop();
}

// Happy moment tracking (improves ad timing)
function pokiHappyMoment() {
  if (pokiReady) PokiSDK.happyTime(0.5);
}

// Auto-init on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPoki);
} else {
  initPoki();
}
