/**
 * ROYAL PALACE & ZAREQIA INVITATION ENGINE
 * High-performance, fast 60fps animations
 * Synchronized with live customizer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Master Catalog of 60 Unique Premium Wedding Templates
  const TEMPLATES_60 = {
    1: { name: "Royal Rajasthan Palace Gates", collection: "royal", icon: "🏰", scratch: "gold-leaf", desc: "Massive royal palace gates swing open with gilded elephants welcoming guests as crimson carpets automatically unfurl into the mandap." },
    2: { name: "Udaipur Floating Palace", collection: "royal", icon: "🏰", scratch: "crystal-layer", desc: "Invitation emerges from a shimmering palace reflection in Lake Pichola with ripples parting into the celebration." },
    3: { name: "Sheesh Mahal", collection: "royal", icon: "🏰", scratch: "crystal-layer", desc: "Crystal mirror reflections and dancing prismatic light rays converge to reveal the royal mandate." },
    4: { name: "Golden Maharaja Scroll", collection: "royal", icon: "📜", scratch: "royal-scroll", desc: "Ancient handmade royal scroll unrolls with golden tassels, sliding the invitation from within." },
    5: { name: "Royal Baraat Experience", collection: "royal", icon: "🎺", scratch: "palace-seal", desc: "Guests follow an animated royal baraat procession with vintage motorcars leading into the sacred mandap." },
    6: { name: "Palace Courtyard Lantern Night", collection: "royal", icon: "🏮", scratch: "silk-curtain", desc: "Glowing 3D lanterns float into the twilight sky revealing pathways to the palace courtyard." },
    7: { name: "Ancient Haveli", collection: "royal", icon: "🚪", scratch: "mehendi", desc: "Carved antique teakwood haveli doors unlock to reveal heritage courtyards with fountains." },
    8: { name: "Peacock Kingdom", collection: "royal", icon: "🦚", scratch: "saree-fabric", desc: "Iridescent emerald and royal blue peacock plumes gracefully spread to reveal the celebration." },
    9: { name: "Lotus Kingdom", collection: "royal", icon: "🪷", scratch: "flower-layer", desc: "Sacred lotus blossoms bloom one-by-one across tranquil waters, unveiling the wedding sanctum." },
    10: { name: "Royal Elephant Procession", collection: "royal", icon: "🐘", scratch: "gold-leaf", desc: "Caparisoned royal elephants bring a jewel-encrusted casket that opens to reveal the invitation." },

    11: { name: "Rose Garden", collection: "floral", icon: "🌹", scratch: "rose-petal", desc: "The entire digital sanctuary unfolds from a blooming velvet crimson rosebud." },
    12: { name: "Cherry Blossom", collection: "floral", icon: "🌸", scratch: "flower-layer", desc: "Gentle sakura blossom breezes shower across the screen, parting into the couple's story." },
    13: { name: "Lavender Valley", collection: "floral", icon: "🪻", scratch: "flower-layer", desc: "Rolling purple Provence lavender fields sway in soft wind as the invitation rises." },
    14: { name: "Flower Tunnel", collection: "floral", icon: "🌺", scratch: "silk-curtain", desc: "Guests scroll through an endless 3D floral archway tunnel wrapped in jasmine and orchids." },
    15: { name: "Secret Garden", collection: "floral", icon: "🗝️", scratch: "rose-petal", desc: "An ornate wrought-iron locked garden gate unlocks and swings open into an enchanted arbor." },
    16: { name: "Jasmine Night", collection: "floral", icon: "🌙", scratch: "silk-curtain", desc: "Fragrant star jasmine glows under moonlight with night-blooming botanicals." },
    17: { name: "Butterfly Paradise", collection: "floral", icon: "🦋", scratch: "flower-layer", desc: "Flocks of shimmering blue Morpho butterflies assemble the invitation pieces together." },
    18: { name: "Sunflower Dreams", collection: "floral", icon: "🌻", scratch: "gold-leaf", desc: "Golden sunflowers rotate toward the sunlight as golden rays illuminate the wedding details." },
    19: { name: "Botanical Luxury", collection: "floral", icon: "🌿", scratch: "crystal-layer", desc: "A majestic Victorian glasshouse conservatory with exotic palms and gilded ironwork." },
    20: { name: "Floating Petals Fantasy", collection: "floral", icon: "🌸", scratch: "rose-petal", desc: "A kinetic whirlwind of flower petals gathers and crystallizes into the wedding card." },

    21: { name: "Disney Castle", collection: "fairytale", icon: "🏰", scratch: "gold-leaf", desc: "Magical fairy-tale castle with midnight fireworks bursting across a starry sky." },
    22: { name: "Enchanted Forest", collection: "fairytale", icon: "🌲", scratch: "flower-layer", desc: "Bioluminescent moss, glowing crystal flora, and guiding fireflies light the way." },
    23: { name: "Magic Book", collection: "fairytale", icon: "📖", scratch: "royal-scroll", desc: "A leatherbound fairy-tale tome opens with gilded 3D pop-up scenes and turning pages." },
    24: { name: "Crystal Castle", collection: "fairytale", icon: "💎", scratch: "crystal-layer", desc: "Shimmering crystal palace spires refracting rainbow prism light across the screen." },
    25: { name: "Magic Portal", collection: "fairytale", icon: "🌀", scratch: "moon-surface", desc: "A swirling interdimensional love stargate warps guests directly into the celebration." },
    26: { name: "Moon Princess Theme", collection: "fairytale", icon: "🌙", scratch: "moon-surface", desc: "A glowing silver crescent moon throne resting above pastel twilight clouds." },
    27: { name: "Fairy Queen Theme", collection: "fairytale", icon: "🧚", scratch: "silk-curtain", desc: "Delicate gossamer wings and shimmering pixie gold dust illuminating sacred vows." },
    28: { name: "Floating Island Kingdom", collection: "fairytale", icon: "🏝️", scratch: "crystal-layer", desc: "Majestic floating sky islands with waterfalls cascading into infinity." },
    29: { name: "Unicorn Fantasy", collection: "fairytale", icon: "🦄", scratch: "rose-petal", desc: "Pastel rainbow clouds, aurora borealis ribbons, and celestial starlight." },
    30: { name: "Golden Magic Tree", collection: "fairytale", icon: "🌳", scratch: "gold-leaf", desc: "Ancient tree of eternal love whose branches sprout golden leaves inscribed with vows." },

    31: { name: "Bollywood Movie Trailer", collection: "cinematic", icon: "🎬", scratch: "palace-seal", desc: "High-octane Bollywood clapperboard, orchestral brass fanfare, and dramatic cinematic title reveals." },
    32: { name: "Netflix Wedding Trailer", collection: "cinematic", icon: "📺", scratch: "saree-fabric", desc: "Iconic N-sting sound and streaming UI queue introducing the greatest love blockbuster." },
    33: { name: "Movie Premiere", collection: "cinematic", icon: "🎞️", scratch: "gold-leaf", desc: "Hollywood spotlights sweep the night sky with paparazzi flashbulbs welcoming VIP guests." },
    34: { name: "Vintage Cinema Hall", collection: "cinematic", icon: "🎟️", scratch: "royal-scroll", desc: "Flickering 35mm projector beam, vintage sepia film grain, and perforated golden ticket stubs." },
    35: { name: "Film Reel Experience", collection: "cinematic", icon: "📽️", scratch: "gold-leaf", desc: "Unspooling celluloid 35mm film strips showcasing couple memories in motion." },
    36: { name: "Blockbuster Reveal", collection: "cinematic", icon: "💥", scratch: "palace-seal", desc: "Massive 3D golden titles shatter onto the screen with billowing cinematic gold smoke." },
    37: { name: "Love Story Documentary", collection: "cinematic", icon: "🎙️", scratch: "silk-curtain", desc: "Cinematic widescreen letterbox aesthetic with documentary narration and heartfelt vows." },
    38: { name: "Award Show Theme", collection: "cinematic", icon: "🏆", scratch: "gold-leaf", desc: "Golden statuette pedestals and an Oscar-style sealed golden envelope unsealing." },
    39: { name: "Luxury Fashion Show", collection: "cinematic", icon: "👠", scratch: "saree-fabric", desc: "Haute couture Vogue-style cover layout with runway strobe lights and bold typography." },
    40: { name: "Red Carpet Walk", collection: "cinematic", icon: "🚶", scratch: "saree-fabric", desc: "VIP velvet ropes unclip as guests walk the crimson carpet into the grand ballroom." },

    41: { name: "Galaxy Love Story", collection: "cosmic", icon: "🌌", scratch: "moon-surface", desc: "A spinning spiral galaxy converges as cosmic dust aligns the two lovers into celestial orbit." },
    42: { name: "Moonlight Romance", collection: "cosmic", icon: "🌕", scratch: "moon-surface", desc: "A luminous supermoon glowing above calm nocturnal waves with silver water trails." },
    43: { name: "Constellation Journey", collection: "cosmic", icon: "✨", scratch: "moon-surface", desc: "Golden stellar lines connect stars across the night sky, drawing the couple's monogram." },
    44: { name: "Aurora Wedding", collection: "cosmic", icon: "💫", scratch: "crystal-layer", desc: "Emerald, magenta, and violet Northern Lights dancing across a star-dusted tundra sky." },
    45: { name: "Planetary Wedding", collection: "cosmic", icon: "🪐", scratch: "moon-surface", desc: "Golden rings of Saturn orbiting interlocked golden wedding bands in zero gravity." },
    46: { name: "Milky Way Theme", collection: "cosmic", icon: "🌠", scratch: "moon-surface", desc: "An arch of billions of glowing stars forming an infinite celestial wedding mandap." },
    47: { name: "Shooting Star Theme", collection: "cosmic", icon: "⭐", scratch: "moon-surface", desc: "A vibrant meteor shower across the screen; tap a shooting star to make a sacred wish." },
    48: { name: "Astronaut Love Story", collection: "cosmic", icon: "🚀", scratch: "moon-surface", desc: "Deep space telescope viewport with nebulae, satellite solar panels, and floating rings." },
    49: { name: "Black Hole Portal Reveal", collection: "cosmic", icon: "🕳️", scratch: "crystal-layer", desc: "Gravitational lensing photon rings warp space and time, unleashing the wedding sanctuary." },
    50: { name: "Celestial Kingdom", collection: "cosmic", icon: "☀️", scratch: "moon-surface", desc: "A total solar eclipse with a diamond-ring corona crowning the couple's union." },

    51: { name: "Venice Romance", collection: "destination", icon: "🛶", scratch: "silk-curtain", desc: "A sunset gondola journey along Venice's Grand Canal with historic palazzo reflections." },
    52: { name: "Paris Love Story", collection: "destination", icon: "🗼", scratch: "rose-petal", desc: "The Eiffel Tower sparkling under Parisian twilight with accordion strings and café charm." },
    53: { name: "Swiss Alps Wedding", collection: "destination", icon: "🏔️", scratch: "crystal-layer", desc: "Glacier Express panoramic mountain train gliding past snowcapped Alpine peaks." },
    54: { name: "Santorini Wedding", collection: "destination", icon: "🏛️", scratch: "silk-curtain", desc: "Iconic whitewashed caldera cliffside villas, cobalt-blue domes, and Aegean vistas." },
    55: { name: "Maldives Beach Wedding", collection: "destination", icon: "🏖️", scratch: "flower-layer", desc: "Overwater thatch bungalows over turquoise crystalline lagoons and soft sunset waves." },
    56: { name: "Luxury Cruise Wedding", collection: "destination", icon: "🚢", scratch: "gold-leaf", desc: "A gleaming superyacht gliding toward a golden horizon sunset with celebratory horn." },
    57: { name: "Dubai Royal Wedding", collection: "destination", icon: "🏙️", scratch: "gold-leaf", desc: "Burj Khalifa laser projections and dancing choreographed fountain gala under starlight." },
    58: { name: "Japanese Sakura Wedding", collection: "destination", icon: "⛩️", scratch: "flower-layer", desc: "Traditional scarlet Torii gate, weeping cherry blossoms, and a serene koi water garden." },
    59: { name: "Arabian Nights Palace", collection: "destination", icon: "🕌", scratch: "mehendi", desc: "Flying magic carpet over golden desert sand dunes toward an oasis palace of brass lanterns." },
    60: { name: "Ultimate Luxury Multi-Scene Invitation", collection: "destination", icon: "👑", scratch: "gold-leaf", desc: "Flagship experience: Seamless cinematic transitions through Palace ➔ Garden ➔ Moonlight ➔ Waterfall ➔ Star Sky ➔ Mandap with heavy Three.js effects." }
  };

  // State Management with Ranveer & Shanaya Default Request Data
  const state = {
    templateId: 1,
    collection: 'royal',
    scratchType: 'gold-leaf',
    theme: 'crimson-gold',
    openingExperience: 'call',
    grandTitle: 'Grand Ballroom Starlight Wedding',
    bride: 'Shanaya',
    groom: 'Ranveer',
    bride_full: 'Shanaya Jindal',
    groom_full: 'Ranveer Mittal',
    bride_parents: 'Daughter of Mr. Navin Jindal & Mrs. Savitri Jindal',
    groom_parents: 'Son of Mr. Sunil Mittal & Mrs. Rekha Mittal',
    dayName: 'Thursday',
    dateNum: '25',
    monthYear: 'November 2027',
    time: '7:00 PM',
    isoDate: '2027-11-25',
    venue: 'The Taj Mahal Palace Ballroom, Mumbai',
    address: 'Apollo Bunder, Colaba, Mumbai, Maharashtra 400001',
    city: 'Mumbai, Maharashtra',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai',
    guestName: 'Dr. Ayan & Family',
    guestPhone: '+971501234567',
    guestEmail: 'guest@example.com',
    soundEnabled: true,
    musicPlaying: false,
    doorsOpened: false,
    quillWritten: false,
    rsvpStatus: 'attending',
    guestCount: 2,
    photos: {},
    ceremonies: [
      {
        name: "The Sangeet Spectacular",
        date: "2027-11-24",
        time: "19:00",
        venue: "The Crystal Ballroom, Taj Mahal Palace",
        map_url: "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai",
        dress: "Diamond Sparkle & Royal Velvet",
        note: "An evening of celebrity artist performances, Broadway choreography and gala banquet."
      },
      {
        name: "Baraat & Varmala Ceremony",
        date: "2027-11-25",
        time: "17:30",
        venue: "Gateway of India Promenade",
        map_url: "https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai",
        dress: "Royal Indian Aristocratic",
        note: "Royal vintage car baraat procession and garland exchange overlooking the harbor."
      },
      {
        name: "Sacred Pheras & Matrimony",
        date: "2027-11-25",
        time: "19:30",
        venue: "Grand Mandap Hall, Taj Mahal Palace",
        map_url: "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai",
        dress: "Gold Zardozi & Pure Silk",
        note: "Sacred seven circumambulations around the sacred fire."
      },
      {
        name: "Royal Governors Reception",
        date: "2027-11-26",
        time: "20:00",
        venue: "The Ballroom, Taj Mahal Palace",
        map_url: "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai",
        dress: "Ultra Formal Black Tie",
        note: "Grand banquet, champagne fountains, live 40-piece orchestra, and dancing."
      }
    ]
  };

  // DOM Elements
  const callScreen = document.getElementById('callScreen');
  const callCoupleName = document.getElementById('callCoupleName');
  const sliderTrack = document.getElementById('sliderTrack');
  const sliderHandle = document.getElementById('sliderHandle');
  const sliderText = document.getElementById('sliderText');
  const magicTapPill = document.getElementById('magicTapPill');
  const callRemindBtn = document.getElementById('callRemindBtn');
  const callMessageBtn = document.getElementById('callMessageBtn');

  const vaultSection = document.getElementById('vaultSection');
  const ringsClasp = document.getElementById('ringsClasp');
  const waxInitials = document.getElementById('waxInitials');
  const waxSealContainer = document.getElementById('waxSealContainer');
  const waxSealStamp = document.getElementById('waxSealStamp');
  const doorLeft = document.getElementById('doorLeft');
  const doorRight = document.getElementById('doorRight');
  const skipOpeningBtn = document.getElementById('skipOpeningBtn');
  const vaultSoundBtn = document.getElementById('vaultSoundBtn');
  const vaultSoundText = document.getElementById('vaultSoundText');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
  const bgMusic = document.getElementById('bgMusic');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicIcon = document.getElementById('musicIcon');
  const pillMusic = document.getElementById('pillMusic');
  const pillSound = document.getElementById('pillSound');

  const heroGroomName = document.getElementById('heroGroomName');
  const heroBrideName = document.getElementById('heroBrideName');
  const heroGroomParents = document.getElementById('heroGroomParents');
  const heroBrideParents = document.getElementById('heroBrideParents');
  const displayGrandTitle = document.getElementById('displayGrandTitle');
  const welcomeMessageText = document.getElementById('welcomeMessageText');
  const welcomeSignoff = document.getElementById('welcomeSignoff');
  const sanctuaryMonogram = document.getElementById('sanctuaryMonogram');

  // Section 3: Scratch-to-Reveal Card & 4 Heart Countdown Elements
  const scratchStage = document.getElementById('scratchStage');
  const scratchCanvas = document.getElementById('scratchCanvas');
  const scratchRibbonOverlay = document.getElementById('scratchRibbonOverlay');
  const scratchHint = document.getElementById('scratchHint');
  const scratchSealMonogram = document.getElementById('scratchSealMonogram');
  const scratchVenueName = document.getElementById('scratchVenueName');
  const scratchCouplePhotoWrap = document.getElementById('scratchCouplePhotoWrap');
  const scratchCoupleImg = document.getElementById('scratchCoupleImg');
  const scratchCardPrompt = document.getElementById('scratchCardPrompt');
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');
  const displayFooterDate = document.getElementById('displayFooterDate');
  const displayFooterVenue = document.getElementById('displayFooterVenue');
  const dispatchQrImg = document.getElementById('dispatchQrImg');
  const dockQrBtn = document.getElementById('dockQrBtn');

  const displayFullDateLine = document.getElementById('displayFullDateLine');
  const displayDayName = document.getElementById('displayDayName');
  const displayEventTime = document.getElementById('displayEventTime');
  const addToCalendarBtn = document.getElementById('addToCalendarBtn');
  const timelineContainer = document.getElementById('timelineContainer');

  const displayVenueName = document.getElementById('displayVenueName');
  const displayVenueAddress = document.getElementById('displayVenueAddress');
  const displayVenueCity = document.getElementById('displayVenueCity');
  const displayVenueDateTime = document.getElementById('displayVenueDateTime');
  const directionsBtn = document.getElementById('directionsBtn');

  const featherQuill = document.getElementById('featherQuill');
  const quillTextNames = document.getElementById('quillTextNames');
  const writeNamesBtn = document.getElementById('writeNamesBtn');
  const writeBtnText = document.getElementById('writeBtnText');
  const quillStatusText = document.getElementById('quillStatusText');

  const displayGuestSalutation = document.getElementById('displayGuestSalutation');
  const rsvpJoyfully = document.getElementById('rsvpJoyfully');
  const rsvpRegretfully = document.getElementById('rsvpRegretfully');
  const guestMinusBtn = document.getElementById('guestMinusBtn');
  const guestPlusBtn = document.getElementById('guestPlusBtn');
  const guestCountDisplay = document.getElementById('guestCountDisplay');
  const submitRsvpBtn = document.getElementById('submitRsvpBtn');
  const replayVaultBtn = document.getElementById('replayVaultBtn');

  // Dispatch Elements
  const dispatchModal = document.getElementById('dispatchModal');
  const openDispatchBtn = document.getElementById('openDispatchBtn');
  const dockWhatsAppBtn = document.getElementById('dockWhatsAppBtn');
  const dockEmailBtn = document.getElementById('dockEmailBtn');
  const dockCopyLinkBtn = document.getElementById('dockCopyLinkBtn');
  const closeDispatchModalBtn = document.getElementById('closeDispatchModalBtn');
  const dispatchRecName = document.getElementById('dispatchRecName');
  const dispatchRecPhone = document.getElementById('dispatchRecPhone');
  const dispatchRecEmail = document.getElementById('dispatchRecEmail');
  const waMessagePreview = document.getElementById('waMessagePreview');
  const btnWaNumber = document.getElementById('btnWaNumber');
  const btnEmailAddr = document.getElementById('btnEmailAddr');
  const sendDirectWhatsAppBtn = document.getElementById('sendDirectWhatsAppBtn');
  const sendDirectEmailBtn = document.getElementById('sendDirectEmailBtn');
  const shareableUrlInput = document.getElementById('shareableUrlInput');
  const copyShareUrlBtn = document.getElementById('copyShareUrlBtn');
  const copyToast = document.getElementById('copyToast');

  /* ==========================================================
     WEB AUDIO API - SYNTHESIZED ROYAL CHIMES
     ========================================================== */
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playGoldenChime() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.9);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.9);
      });
    } catch (e) {}
  }

  function startMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.55;
    bgMusic.play().then(() => {
      state.musicPlaying = true;
      updateMusicUI();
    }).catch(err => {});
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      bgMusic.play();
      state.musicPlaying = true;
    } else {
      bgMusic.pause();
      state.musicPlaying = false;
    }
    updateMusicUI();
  }

  function updateMusicUI() {
    if (state.musicPlaying) {
      if (musicIcon) musicIcon.style.color = '#e6c875';
      if (pillMusic) pillMusic.textContent = 'Music on';
    } else {
      if (musicIcon) musicIcon.style.color = 'rgba(255,255,255,0.6)';
      if (pillMusic) pillMusic.textContent = 'Music paused';
    }
  }

  if (musicToggleBtn) musicToggleBtn.addEventListener('click', toggleMusic);
  if (pillMusic) pillMusic.addEventListener('click', toggleMusic);

  if (vaultSoundBtn) {
    vaultSoundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      if (state.soundEnabled) {
        vaultSoundText.textContent = 'Sound on';
        if (pillSound) pillSound.textContent = 'Sound on';
        toggleMusic();
      } else {
        vaultSoundText.textContent = 'Sound off';
        if (pillSound) pillSound.textContent = 'Sound off';
        if (bgMusic) bgMusic.pause();
        state.musicPlaying = false;
        updateMusicUI();
      }
    });
  }

  function playWaxCrackSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.14);
    } catch(e) {}
  }

  /* ==========================================================
     OPENING EXPERIENCE: 3D DOORS / WAX SEAL / INCOMING CALL
     ========================================================== */
  function openVaultDoors() {
    if (state.doorsOpened) return;
    state.doorsOpened = true;
    playWaxCrackSound();
    vaultSection.classList.add('doors-open');
    playGoldenChime();
    startMusic();

    let confettiColors = ['#d4af37', '#fdfbf7', '#ffd700', '#2d4a3e'];
    if (state.theme === 'crimson-gold') confettiColors = ['#8a1220', '#d4af37', '#ffd700', '#f7e096'];
    if (state.theme === 'silver-diamond') confettiColors = ['#ffffff', '#cbd5e1', '#94a3b8', '#e2e8f0'];

    if (window.confetti) {
      window.confetti({
        particleCount: 45,
        spread: 68,
        origin: { y: 0.4 },
        colors: confettiColors
      });
    }

    setTimeout(() => {
      if (scrollDownBtn) scrollDownBtn.classList.add('pulse');
    }, 1500);
  }

  if (ringsClasp) ringsClasp.addEventListener('click', openVaultDoors);
  if (waxSealStamp) waxSealStamp.addEventListener('click', openVaultDoors);
  if (doorLeft) doorLeft.addEventListener('click', openVaultDoors);
  if (doorRight) doorRight.addEventListener('click', openVaultDoors);
  if (skipOpeningBtn) skipOpeningBtn.addEventListener('click', openVaultDoors);

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      const welcomeSec = document.getElementById('welcomeSection');
      if (welcomeSec) welcomeSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ==========================================================
  // iOS SLIDE TO ANSWER CALL LOGIC (Matching User Reference)
  // ==========================================================
  let isDragging = false;
  let startX = 0;
  let currentTranslateX = 0;
  let callAnswered = false;

  function getMaxSlide() {
    if (!sliderTrack || !sliderHandle) return 240;
    return Math.max(80, sliderTrack.offsetWidth - sliderHandle.offsetWidth - 8);
  }

  function answerCallWithAnimation() {
    if (callAnswered) return;
    callAnswered = true;
    const maxSlide = getMaxSlide();
    if (sliderHandle) {
      sliderHandle.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      sliderHandle.style.transform = `translateX(${maxSlide}px)`;
    }
    if (sliderText) sliderText.style.opacity = '0';
    playGoldenChime();
    
    setTimeout(() => {
      if (callScreen) callScreen.classList.add('call-accepted');
      setTimeout(() => {
        if (callScreen) callScreen.hidden = true;
        openVaultDoors();
      }, 480);
    }, 280);
  }

  function startDrag(clientX) {
    if (callAnswered || state.doorsOpened) return;
    isDragging = true;
    startX = clientX;
    if (sliderHandle) sliderHandle.style.transition = 'none';
  }

  function moveDrag(clientX) {
    if (!isDragging || callAnswered) return;
    const maxSlide = getMaxSlide();
    const deltaX = clientX - startX;
    currentTranslateX = Math.max(0, Math.min(deltaX, maxSlide));
    if (sliderHandle) sliderHandle.style.transform = `translateX(${currentTranslateX}px)`;
    if (sliderText) {
      sliderText.style.opacity = Math.max(0, 1 - (currentTranslateX / (maxSlide * 0.75)));
    }
  }

  function endDrag() {
    if (!isDragging || callAnswered) return;
    isDragging = false;
    const maxSlide = getMaxSlide();
    if (currentTranslateX >= maxSlide * 0.55) {
      answerCallWithAnimation();
    } else {
      if (sliderHandle) {
        sliderHandle.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        sliderHandle.style.transform = 'translateX(0px)';
      }
      if (sliderText) {
        sliderText.style.transition = 'opacity 0.3s ease';
        sliderText.style.opacity = '1';
      }
      currentTranslateX = 0;
    }
  }

  if (sliderHandle && sliderTrack) {
    // Mouse events
    sliderHandle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });
    window.addEventListener('mousemove', (e) => { if (isDragging) moveDrag(e.clientX); });
    window.addEventListener('mouseup', () => { if (isDragging) endDrag(); });

    // Touch events (Mobile)
    sliderHandle.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) startDrag(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches && e.touches[0]) moveDrag(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend', () => { if (isDragging) endDrag(); });
    window.addEventListener('touchcancel', () => { if (isDragging) endDrag(); });

    // Click on track to auto-answer
    sliderTrack.addEventListener('click', (e) => {
      if (!isDragging && !callAnswered) {
        answerCallWithAnimation();
      }
    });
  }

  // "Tap to feel the magic" Pill Click
  if (magicTapPill) {
    magicTapPill.addEventListener('click', () => {
      if (!callAnswered) answerCallWithAnimation();
    });
  }

  // Remind Me Action
  if (callRemindBtn) {
    callRemindBtn.addEventListener('click', () => {
      alert(`⏰ Reminder set for ${state.groom} & ${state.bride}'s Royal Wedding on ${state.dayName}, ${state.dateNum} ${state.monthYear}!`);
    });
  }

  // Message Action (Scrolls to RSVP)
  if (callMessageBtn) {
    callMessageBtn.addEventListener('click', () => {
      answerCallWithAnimation();
      setTimeout(() => {
        const rsvpSec = document.getElementById('rsvpSection');
        if (rsvpSec) rsvpSec.scrollIntoView({ behavior: 'smooth' });
      }, 850);
    });
  }

  if (replayVaultBtn) {
    replayVaultBtn.addEventListener('click', () => {
      vaultSection.classList.remove('doors-open');
      state.doorsOpened = false;
      callAnswered = false;
      if (sliderHandle) {
        sliderHandle.style.transition = 'none';
        sliderHandle.style.transform = 'translateX(0px)';
      }
      if (sliderText) {
        sliderText.style.transition = 'none';
        sliderText.style.opacity = '1';
      }
      if (state.openingExperience === 'call') {
        callScreen.hidden = false;
        callScreen.classList.remove('call-accepted');
      }
      const invScroll = document.getElementById('invitationScrollArea');
      if (invScroll) invScroll.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     PHOTO GALLERY CAROUSEL
     ========================================================== */
  const decorSlider = document.getElementById('decorSlider');
  const carouselDots = document.getElementById('carouselDots');
  let currentSlide = 0;
  let carouselInterval = null;

  function initCarousel() {
    if (!decorSlider || !carouselDots) return;
    const slides = decorSlider.querySelectorAll('.slide');
    const dots = carouselDots.querySelectorAll('.dot');

    function goToSlide(idx) {
      currentSlide = (idx + slides.length) % slides.length;
      decorSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartCarousel();
      });
    });

    function restartCarousel() {
      clearInterval(carouselInterval);
      carouselInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 3500);
    }
    restartCarousel();
  }
  initCarousel();

  /* ==========================================================
     INTERACTIVE SCRATCH-TO-REVEAL SAVE THE DATE (10 STYLES)
     ========================================================== */
  let isScratching = false;
  let scratchRevealed = false;
  let scratchStrokeCount = 0;

  const SCRATCH_PROMPTS = {
    'gold-leaf': '✨ Scratch 24K Gold Leaf to Reveal ✨',
    'rose-petal': '🌹 Scratch Rose Petals to Reveal 🌹',
    'mehendi': '🌿 Scratch Mehendi Design to Reveal 🌿',
    'palace-seal': '👑 Break Palace Seal to Reveal 👑',
    'royal-scroll': '📜 Unroll Royal Scroll to Reveal 📜',
    'saree-fabric': '🥻 Scratch Zardozi Silk to Reveal 🥻',
    'silk-curtain': '💫 Part Silk Veil to Reveal 💫',
    'moon-surface': '🌙 Scratch Moonlight to Reveal 🌙',
    'crystal-layer': '💎 Scratch Sheesh Mahal Crystal to Reveal 💎',
    'flower-layer': '🌸 Clear Floral Garland to Reveal 🌸'
  };

  function drawScratchTexture(ctx, type, width, height) {
    ctx.save();
    type = type || 'gold-leaf';

    if (type === 'rose-petal') {
      // 🌹 Velvet Rose Petal Layer
      const grad = ctx.createRadialGradient(width * 0.4, height * 0.3, 10, width * 0.5, height * 0.5, width * 0.7);
      grad.addColorStop(0, '#f43f5e');
      grad.addColorStop(0.5, '#be123c');
      grad.addColorStop(1, '#881337');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Rose Petal Silhouettes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 24; i++) {
        const px = (i * 37) % width;
        const py = (i * 29) % height;
        ctx.beginPath();
        ctx.ellipse(px, py, 14, 8, (i * 45 * Math.PI) / 180, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = 'rgba(254, 205, 211, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'mehendi') {
      // 🌿 Intricate Zardozi Mehendi
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#7c2d12');
      grad.addColorStop(0.5, '#9a3412');
      grad.addColorStop(1, '#431407');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Paisley / Henna Mandala Lines
      ctx.strokeStyle = 'rgba(254, 240, 138, 0.45)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 25, 0, Math.PI * 2);
      ctx.stroke();

      for (let a = 0; a < 360; a += 30) {
        const rad = (a * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(width / 2 + Math.cos(rad) * 25, height / 2 + Math.sin(rad) * 25);
        ctx.lineTo(width / 2 + Math.cos(rad) * 45, height / 2 + Math.sin(rad) * 45);
        ctx.stroke();
      }
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'palace-seal') {
      // 👑 Sovereign Palace Seal
      const grad = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, width * 0.6);
      grad.addColorStop(0, '#9d174d');
      grad.addColorStop(0.6, '#831843');
      grad.addColorStop(1, '#500724');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(254, 240, 138, 0.55)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 50, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'royal-scroll') {
      // 📜 Ancient Maharaja Scroll
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#fef3c7');
      grad.addColorStop(0.5, '#fde68a');
      grad.addColorStop(1, '#d97706');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(120, 53, 15, 0.35)';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, width - 12, height - 12);
      ctx.strokeStyle = 'rgba(180, 83, 9, 0.2)';
      ctx.strokeRect(10, 10, width - 20, height - 20);

    } else if (type === 'saree-fabric') {
      // 🥻 Banarasi Zardozi Brocade
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#701a75');
      grad.addColorStop(0.5, '#86198f');
      grad.addColorStop(1, '#4a044e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(253, 224, 71, 0.25)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 12) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }
      for (let x = -height; x < width; x += 12) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x + height, 0);
        ctx.stroke();
      }
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'silk-curtain') {
      // 💫 Sheer Silk Curtain
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, '#e2e8f0');
      grad.addColorStop(0.3, '#f8fafc');
      grad.addColorStop(0.6, '#cbd5e1');
      grad.addColorStop(1, '#f1f5f9');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(203, 213, 225, 0.55)';
      ctx.lineWidth = 2;
      for (let x = 16; x < width; x += 22) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'moon-surface') {
      // 🌙 Celestial Moon Surface
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.4, 15, width * 0.5, height * 0.5, width * 0.6);
      grad.addColorStop(0, '#334155');
      grad.addColorStop(0.5, '#1e293b');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 40; i++) {
        const sx = (i * 47) % width;
        const sy = (i * 31) % height;
        ctx.fillStyle = (i % 2 === 0) ? 'rgba(255, 255, 255, 0.9)' : 'rgba(148, 163, 184, 0.5)';
        ctx.beginPath();
        ctx.arc(sx, sy, (i % 3 === 0) ? 2 : 1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'crystal-layer') {
      // 💎 Sheesh Mahal Crystal
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#f8fafc');
      grad.addColorStop(0.3, '#e0f2fe');
      grad.addColorStop(0.6, '#bae6fd');
      grad.addColorStop(1, '#93c5fd');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 35) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(width - x, height);
        ctx.stroke();
      }
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else if (type === 'flower-layer') {
      // 🌸 Fresh Floral Garland
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#fef08a');
      grad.addColorStop(0.5, '#fed7aa');
      grad.addColorStop(1, '#fbcfe8');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 35; i++) {
        const px = (i * 41) % width;
        const py = (i * 33) % height;
        ctx.fillStyle = (i % 3 === 0) ? '#ea580c' : (i % 3 === 1 ? '#e11d48' : '#eab308');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(6, 6, width - 12, height - 12);

    } else {
      // ✨ 24K Gold Leaf Foil (Default)
      const foilGrad = ctx.createLinearGradient(0, 0, width, height);
      foilGrad.addColorStop(0.0, '#f9df90');
      foilGrad.addColorStop(0.2, '#fdeeb3');
      foilGrad.addColorStop(0.4, '#d4af37');
      foilGrad.addColorStop(0.6, '#f7e7a9');
      foilGrad.addColorStop(0.8, '#b8860b');
      foilGrad.addColorStop(1.0, '#efd07b');
      ctx.fillStyle = foilGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.5;
      for (let x = -height; x < width + height; x += 18) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }

      for (let i = 0; i < 40; i++) {
        const sx = Math.random() * width;
        const sy = Math.random() * height;
        const sr = Math.random() * 2 + 0.5;
        ctx.fillStyle = (i % 2 === 0) ? 'rgba(255, 255, 255, 0.85)' : 'rgba(184, 134, 11, 0.45)';
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, width - 12, height - 12);
    }

    ctx.restore();
  }

  function initScratchCard() {
    if (!scratchCanvas || !scratchStage) return;
    const ctx = scratchCanvas.getContext('2d');
    if (!ctx) return;

    scratchRevealed = false;
    scratchStrokeCount = 0;
    scratchStage.classList.remove('scratched');
    scratchCanvas.style.opacity = '1';
    scratchCanvas.style.pointerEvents = 'auto';
    if (scratchRibbonOverlay) {
      scratchRibbonOverlay.style.opacity = '1';
      scratchRibbonOverlay.style.transform = 'scale(1)';
    }
    if (scratchHint) {
      scratchHint.innerHTML = '<span class="hand-icon">👆</span> Tap or scratch the card to reveal our date!';
    }
    if (scratchCardPrompt) {
      scratchCardPrompt.textContent = SCRATCH_PROMPTS[state.scratchType] || '✨ Scratch or Tap to Reveal ✨';
    }

    const width = scratchCanvas.width || 315;
    const height = scratchCanvas.height || 215;

    // Draw active premium scratch texture
    drawScratchTexture(ctx, state.scratchType, width, height);

    function revealScratchCard() {
      if (scratchRevealed) return;
      scratchRevealed = true;
      scratchStage.classList.add('scratched');
      scratchCanvas.style.transition = 'opacity 0.6s ease';
      scratchCanvas.style.opacity = '0';
      scratchCanvas.style.pointerEvents = 'none';

      if (scratchRibbonOverlay) {
        scratchRibbonOverlay.style.transition = 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        scratchRibbonOverlay.style.opacity = '0';
        scratchRibbonOverlay.style.transform = 'scale(1.15)';
      }

      if (scratchHint) {
        scratchHint.innerHTML = '✨ <strong style="color:var(--gold-accent)">Date Revealed!</strong> Save the sacred date 💍';
      }

      playGoldenChime();

      if (window.confetti) {
        window.confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.55 },
          colors: ['#d4af37', '#ffd700', '#f472b6', '#ffffff']
        });
      }
    }

    function getCoords(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const scaleX = scratchCanvas.width / rect.width;
      const scaleY = scratchCanvas.height / rect.height;
      let clientX, clientY;
      if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    function scratchAt(pos) {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      scratchStrokeCount++;
      if (scratchStrokeCount > 15 && !scratchRevealed) {
        revealScratchCard();
      }
    }

    scratchCanvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      scratchAt(getCoords(e));
    });
    window.addEventListener('mousemove', (e) => {
      if (isScratching && !scratchRevealed) scratchAt(getCoords(e));
    });
    window.addEventListener('mouseup', () => { isScratching = false; });

    scratchCanvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      scratchAt(getCoords(e));
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (isScratching && !scratchRevealed) scratchAt(getCoords(e));
    }, { passive: true });
    window.addEventListener('touchend', () => { isScratching = false; });

    if (scratchRibbonOverlay) {
      scratchRibbonOverlay.addEventListener('click', () => {
        revealScratchCard();
      });
    }
    scratchStage.addEventListener('click', (e) => {
      if (!scratchRevealed) {
        scratchStrokeCount += 6;
        if (scratchStrokeCount >= 10 || e.target.closest('#scratchRibbonOverlay')) {
          revealScratchCard();
        }
      }
    });
  }

  /* ==========================================================
     4 3D GLOSSY HEART LIVE COUNTDOWN TIMERS (IMAGE 3)
     ========================================================== */
  let countdownTimerId = null;

  function updateHeartCountdown() {
    if (!countDays || !countHours || !countMinutes || !countSeconds) return;

    let targetTime = '19:00:00';
    if (state.time) {
      const match = state.time.match(/(\d{1,2}):(\d{2})/);
      if (match) {
        let hrs = parseInt(match[1], 10);
        const mins = match[2];
        if (state.time.toUpperCase().includes('PM') && hrs < 12) hrs += 12;
        if (state.time.toUpperCase().includes('AM') && hrs === 12) hrs = 0;
        targetTime = `${String(hrs).padStart(2, '0')}:${mins}:00`;
      }
    }

    const iso = state.isoDate || '2027-11-25';
    let target = new Date(`${iso}T${targetTime}`);
    if (isNaN(target.getTime())) {
      target = new Date('2027-11-25T19:00:00');
    }

    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countDays.textContent = String(days).padStart(2, '0');
    countHours.textContent = String(hours).padStart(2, '0');
    countMinutes.textContent = String(minutes).padStart(2, '0');
    countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  function startHeartCountdown() {
    if (countdownTimerId) clearInterval(countdownTimerId);
    updateHeartCountdown();
    countdownTimerId = setInterval(updateHeartCountdown, 1000);
  }

  /* ==========================================================
     ADD TO CALENDAR (.ICS)
     ========================================================== */
  if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', () => {
      const title = `Wedding of ${state.bride} & ${state.groom}`;
      const desc = `${state.grandTitle}\\nVenue: ${state.venue}, ${state.address}`;
      const location = `${state.venue}, ${state.address}`;
      const isoClean = state.isoDate ? state.isoDate.replace(/-/g, '') : '20271125';
      
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//RoyalPalace//WeddingInvitation//EN',
        'BEGIN:VEVENT',
        `SUMMARY:${title}`,
        `DESCRIPTION:${desc}`,
        `LOCATION:${location}`,
        `DTSTART:${isoClean}T190000Z`,
        `DTEND:${isoClean}T235900Z`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\\r\\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `Wedding-${state.bride}-${state.groom}.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (window.confirm("Invitation calendar file downloaded! Open Google Calendar to add?")) {
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(location)}&dates=${isoClean}T190000Z/${isoClean}T235900Z`;
        window.open(gcalUrl, '_blank');
      }
    });
  }

  /* ==========================================================
     FEATHER QUILL CALLIGRAPHY WRITING
     ========================================================== */
  function writeNamesWithQuill() {
    if (state.quillWritten) {
      quillTextNames.classList.remove('written');
      state.quillWritten = false;
      writeBtnText.textContent = 'Write our names';
      quillStatusText.textContent = 'Guide the pen across the paper.';
      return;
    }

    playGoldenChime();
    quillStatusText.textContent = 'Writing with love...';
    writeBtnText.textContent = 'Inscribing...';

    if (featherQuill) {
      featherQuill.style.transition = 'transform 1.0s cubic-bezier(0.25, 1, 0.5, 1)';
      featherQuill.style.transform = 'translate(-60px, 35px) rotate(-15deg)';
    }

    setTimeout(() => {
      quillTextNames.classList.add('written');
      state.quillWritten = true;
      writeBtnText.textContent = 'Write it again ↺';
      quillStatusText.textContent = 'Written in gold.';

      if (window.confetti) {
        window.confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.75 },
          colors: ['#d4af37', '#ffd700']
        });
      }

      if (featherQuill) {
        setTimeout(() => {
          featherQuill.style.transition = 'transform 0.8s ease-out';
          featherQuill.style.transform = 'translate(10px, -10px) rotate(0deg)';
        }, 300);
      }
    }, 500);
  }

  if (writeNamesBtn) writeNamesBtn.addEventListener('click', writeNamesWithQuill);

  /* ==========================================================
     RSVP INTERACTION
     ========================================================== */
  if (rsvpJoyfully) {
    rsvpJoyfully.addEventListener('click', () => {
      state.rsvpStatus = 'attending';
      rsvpJoyfully.classList.add('active');
      rsvpRegretfully.classList.remove('active');
    });
  }
  if (rsvpRegretfully) {
    rsvpRegretfully.addEventListener('click', () => {
      state.rsvpStatus = 'declined';
      rsvpRegretfully.classList.add('active');
      rsvpJoyfully.classList.remove('active');
    });
  }
  if (guestMinusBtn) {
    guestMinusBtn.addEventListener('click', () => {
      if (state.guestCount > 1) {
        state.guestCount--;
        guestCountDisplay.textContent = state.guestCount;
      }
    });
  }
  if (guestPlusBtn) {
    guestPlusBtn.addEventListener('click', () => {
      if (state.guestCount < 10) {
        state.guestCount++;
        guestCountDisplay.textContent = state.guestCount;
      }
    });
  }
  if (submitRsvpBtn) {
    submitRsvpBtn.addEventListener('click', () => {
      const statusText = state.rsvpStatus === 'attending' 
        ? `✨ Joyfully Attending (${state.guestCount} Guest${state.guestCount > 1 ? 's' : ''})` 
        : '🕊️ Regretfully Cannot Attend, but sending all our warmest blessings!';
      
      const rsvpMsg = `*RSVP for Wedding of ${state.bride} & ${state.groom}*\n\nGuest: *${state.guestName}*\nStatus: ${statusText}\n\nLooking forward to celebrating!`;
      const cleanPhone = state.guestPhone.replace(/[^0-9]/g, '');
      const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(rsvpMsg)}`;
      window.open(waUrl, '_blank');
    });
  }

  /* ==========================================================
     RENDER TEMPLATE STATE & CEREMONIES
     ========================================================== */
  function renderAllTemplateData() {
    // Apply Color Palette Theme Class to Body
    document.body.className = `theme-${state.theme || 'emerald-gold'} standalone-invite` + 
      (window.self !== window.top ? ' in-iframe' : '');

    // Opening Experience mode
    if (callScreen) {
      if (state.openingExperience === 'call') {
        callScreen.hidden = false;
        if (callCoupleName) callCoupleName.textContent = `${state.groom} & ${state.bride}`;
      } else {
        callScreen.hidden = true;
      }
    }

    // Hero Sanctuary
    if (heroGroomName) heroGroomName.textContent = state.groom;
    if (heroBrideName) heroBrideName.textContent = state.bride;
    if (heroGroomParents) heroGroomParents.textContent = state.groom_parents || '';
    if (heroBrideParents) heroBrideParents.textContent = state.bride_parents || '';
    if (displayGrandTitle) displayGrandTitle.textContent = state.grandTitle;

    // Royal Sanctuary Monogram (Fills top canopy void)
    if (sanctuaryMonogram) {
      const gInit = state.groom ? state.groom.trim()[0] : 'R';
      const bInit = state.bride ? state.bride.trim()[0] : 'S';
      sanctuaryMonogram.textContent = `${gInit} & ${bInit}`;
    }

    // Welcome Letter
    if (welcomeMessageText) {
      welcomeMessageText.innerHTML = `We are honored to welcome you to the Wedding ceremony of <strong>${state.groom} &amp; ${state.bride}</strong>. As they begin their journey together in faith and love, we thank you for being part of this blessed occasion 🤍`;
    }
    if (welcomeSignoff) {
      welcomeSignoff.textContent = `With love & blessings, The ${state.groom_full.split(' ').pop()} & ${state.bride_full.split(' ').pop()} Families`;
    }

    // Save the Date / Scratch Card Revealed Dates
    if (displayFullDateLine) displayFullDateLine.textContent = `${state.monthYear.split(' ')[0]} ${state.dateNum}, ${state.monthYear.split(' ')[1] || '2027'}`;
    if (displayDayName) displayDayName.textContent = state.dayName;
    if (displayEventTime) displayEventTime.textContent = state.time;

    // Section 3: Scratch Ribbon Monogram & Footer Meta (Matching Image 3)
    if (scratchSealMonogram) {
      const gInit = state.groom ? state.groom.trim()[0] : 'R';
      const bInit = state.bride ? state.bride.trim()[0] : 'S';
      scratchSealMonogram.textContent = `${gInit} & ${bInit}`;
    }
    if (scratchVenueName) {
      scratchVenueName.textContent = state.venue;
    }
    if (displayFooterDate) {
      const monthShort = state.monthYear ? state.monthYear.split(' ')[0].substring(0, 3) : 'Nov';
      const year = state.monthYear && state.monthYear.split(' ')[1] ? state.monthYear.split(' ')[1] : '2027';
      const dayNum = parseInt(state.dateNum, 10) || 25;
      const nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };
      displayFooterDate.textContent = `${state.dayName || 'Thursday'} | ${dayNum}${nth(dayNum)} ${monthShort} ${year}`;
    }
    if (displayFooterVenue) {
      displayFooterVenue.textContent = state.venue;
    }

    // Template Specification Banner Updates
    const badgeTemplateId = document.getElementById('badgeTemplateId');
    const badgeTemplateTitle = document.getElementById('badgeTemplateTitle');
    const badgeTemplateCollection = document.getElementById('badgeTemplateCollection');
    const badgeTemplateScratch = document.getElementById('badgeTemplateScratch');
    const openFormBtn = document.getElementById('openFormBtn');

    const tDef = TEMPLATES_60[state.templateId] || TEMPLATES_60[1];
    if (tDef) {
      if (badgeTemplateId) badgeTemplateId.textContent = `Template ${state.templateId}`;
      if (badgeTemplateTitle) badgeTemplateTitle.textContent = tDef.name;
      if (badgeTemplateCollection) {
        const colMap = {
          royal: '🏰 Royal Collection',
          floral: '🌸 Floral Collection',
          fairytale: '🧚 Fairytale Collection',
          cinematic: '🎬 Cinematic Collection',
          cosmic: '🌌 Cosmic Collection',
          destination: '✈️ Destination Collection'
        };
        badgeTemplateCollection.textContent = colMap[tDef.collection] || tDef.collection;
      }
      if (badgeTemplateScratch) {
        badgeTemplateScratch.textContent = SCRATCH_PROMPTS[state.scratchType] || '✨ Scratch Card';
      }
      if (openFormBtn) {
        openFormBtn.href = `index.html?template=${state.templateId}`;
      }
    }

    // Section 3: Scratch Prompt & Revealed Couple Portrait (Mandatory Requirement)
    if (scratchCardPrompt) {
      scratchCardPrompt.textContent = SCRATCH_PROMPTS[state.scratchType] || '✨ Scratch or Tap to Reveal ✨';
    }
    if (scratchCoupleImg) {
      if (state.photos && (state.photos.bride_photo || state.photos.groom_photo)) {
        scratchCoupleImg.src = state.photos.bride_photo || state.photos.groom_photo;
      } else {
        scratchCoupleImg.src = 'assets/portal_arch_clean.png';
      }
    }
    updateHeartCountdown();

    // Venue Sanctuary
    if (displayVenueName) displayVenueName.textContent = state.venue;
    if (displayVenueAddress) displayVenueAddress.textContent = state.address;
    if (displayVenueCity) displayVenueCity.textContent = state.city;
    if (displayVenueDateTime) {
      displayVenueDateTime.innerHTML = `<i data-lucide="calendar" class="mini-icon"></i> <span>${state.dayName}, ${state.dateNum} ${state.monthYear.split(' ')[0]} · ${state.time}</span>`;
    }
    if (directionsBtn) {
      const mapLink = state.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(state.venue + ' ' + state.city)}`;
      directionsBtn.href = mapLink;
    }

    // Render Sacred Ceremonies Timeline
    if (timelineContainer && state.ceremonies) {
      timelineContainer.innerHTML = '';
      state.ceremonies.forEach(c => {
        const card = document.createElement('div');
        card.className = 'ceremony-timeline-card';
        
        let dateFmt = c.date || state.isoDate;
        try {
          const dObj = new Date(dateFmt + 'T12:00:00');
          if (!isNaN(dObj.getTime())) {
            dateFmt = dObj.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
          }
        } catch (e) {}

        const mapBtn = c.map_url ? `<a href="${c.map_url}" target="_blank" rel="noopener" class="ceremony-card-map-btn"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> Directions ↗</a>` : '';
        const dressPill = c.dress ? `<div class="ceremony-card-dress">👗 Dress: ${c.dress}</div>` : '';
        const noteText = c.note ? `<p class="ceremony-card-note">${c.note}</p>` : '';

        card.innerHTML = `
          <h3 class="ceremony-card-name">${c.name}</h3>
          <div class="ceremony-card-datetime">📅 ${dateFmt} · ⏰ ${c.time || state.time}</div>
          <div class="ceremony-card-venue">📍 ${c.venue || state.venue}</div>
          ${dressPill}
          ${noteText}
          ${mapBtn}
        `;
        timelineContainer.appendChild(card);
      });
    }

    // Quill names
    if (quillTextNames) quillTextNames.textContent = `${state.groom} & ${state.bride}`;

    // Wax Seal Monogram initials
    if (waxInitials) {
      const gInit = state.groom ? state.groom.trim()[0] : 'R';
      const bInit = state.bride ? state.bride.trim()[0] : 'S';
      waxInitials.textContent = `${gInit} & ${bInit}`;
    }

    // RSVP Guest
    if (displayGuestSalutation) {
      displayGuestSalutation.textContent = state.guestName 
        ? `Dear ${state.guestName}, we would be deeply honored by your presence.`
        : 'Honoured Guest, we look forward to having you with us.';
    }

    updateDispatchModalPreview();
    if (window.lucide) window.lucide.createIcons();
  }

  /* ==========================================================
     WHATSAPP & EMAIL DISPATCH
     ========================================================== */
  function generateShareableLink() {
    const jsonStr = JSON.stringify(state);
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
    return `${window.location.origin}${window.location.pathname}#data=${b64}`;
  }

  function updateDispatchModalPreview() {
    if (dispatchRecName) dispatchRecName.textContent = state.guestName;
    if (dispatchRecPhone) dispatchRecPhone.textContent = state.guestPhone;
    if (dispatchRecEmail) dispatchRecEmail.textContent = state.guestEmail;
    if (btnWaNumber) btnWaNumber.textContent = state.guestPhone;
    if (btnEmailAddr) btnEmailAddr.textContent = state.guestEmail;

    const shareUrl = generateShareableLink();
    if (shareableUrlInput) shareableUrlInput.value = shareUrl;

    // Dynamic QR Code generation for instant phone camera scan (Mandatory Requirement)
    if (dispatchQrImg) {
      dispatchQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`;
    }

    const message = [
      `✨ *ROYAL WEDDING INVITATION* ✨`,
      ``,
      `Dearest ${state.guestName},`,
      ``,
      `Together with our families, we cordially invite you to celebrate the royal union of`,
      `💍 *${state.bride} & ${state.groom}* 💍`,
      ``,
      `*${state.grandTitle}*`,
      `📅 *Date:* ${state.dayName}, ${state.dateNum} ${state.monthYear}`,
      `⏰ *Time:* ${state.time}`,
      `📍 *Sanctuary:* ${state.venue}`,
      ``,
      `🕊️ *Open your private, 3D animated invitation here:*`,
      `👉 ${shareUrl}`,
      ``,
      `With all our love and blessings,`,
      `*${state.bride_full} & ${state.groom_full}*`,
      `${state.bride_parents}`,
      `${state.groom_parents}`
    ].join('\n');

    if (waMessagePreview) waMessagePreview.textContent = message;
  }

  if (sendDirectWhatsAppBtn) {
    sendDirectWhatsAppBtn.addEventListener('click', () => {
      const cleanPhone = state.guestPhone.replace(/[^0-9]/g, '');
      const message = waMessagePreview.textContent;
      const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (sendDirectEmailBtn) {
    sendDirectEmailBtn.addEventListener('click', () => {
      const subject = `Royal Wedding Invitation: ${state.bride} & ${state.groom}`;
      const body = waMessagePreview.textContent;
      const mailUrl = `mailto:${state.guestEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailUrl, '_blank');
    });
  }

  if (copyShareUrlBtn) {
    copyShareUrlBtn.addEventListener('click', () => {
      if (!shareableUrlInput) return;
      shareableUrlInput.select();
      navigator.clipboard.writeText(shareableUrlInput.value).then(() => {
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 2500);
      });
    });
  }

  if (openDispatchBtn) openDispatchBtn.addEventListener('click', () => dispatchModal.classList.add('open'));
  if (dockWhatsAppBtn) dockWhatsAppBtn.addEventListener('click', () => dispatchModal.classList.add('open'));
  if (dockEmailBtn) dockEmailBtn.addEventListener('click', () => dispatchModal.classList.add('open'));
  if (dockQrBtn) {
    dockQrBtn.addEventListener('click', () => {
      if (dispatchModal) {
        dispatchModal.classList.add('open');
        const qrEl = document.querySelector('.qr-share-section');
        if (qrEl) qrEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (closeDispatchModalBtn) closeDispatchModalBtn.addEventListener('click', () => dispatchModal.classList.remove('open'));
  if (dispatchModal) {
    dispatchModal.addEventListener('click', (e) => {
      if (e.target === dispatchModal) dispatchModal.classList.remove('open');
    });
  }

  if (dockCopyLinkBtn) {
    dockCopyLinkBtn.addEventListener('click', () => {
      const url = generateShareableLink();
      navigator.clipboard.writeText(url).then(() => {
        alert('Personalized Invitation Link copied to clipboard!\nYou can paste and share it directly with your guests.');
      });
    });
  }

  /* ==========================================================
     LISTEN TO MESSAGES FROM ROYAL PALACE EDITOR
     ========================================================== */
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SET_INVITATION_DATA') {
      const incoming = event.data.data;
      Object.assign(state, incoming);
      renderAllTemplateData();
    }
  });

  /* ==========================================================
     LOAD URL PARAMETERS / HASH DATA (#data=...)
     ========================================================== */
  function loadUrlParameters() {
    if (window.TEMPLATE_CONFIG) {
      Object.assign(state, window.TEMPLATE_CONFIG);
    }

    try {
      const hash = window.location.hash;
      if (hash && hash.includes('data=')) {
        const b64 = hash.split('data=')[1].split('&')[0];
        const jsonStr = decodeURIComponent(escape(atob(b64)));
        const obj = JSON.parse(jsonStr);
        Object.assign(state, obj);
      }
    } catch (e) {}

    const params = new URLSearchParams(window.location.search);
    if (params.has('template')) {
      const tId = parseInt(params.get('template'), 10);
      if (tId && TEMPLATES_60[tId]) {
        state.templateId = tId;
        const t = TEMPLATES_60[tId];
        state.collection = t.collection;
        state.scratchType = t.scratch;
        state.grandTitle = t.name + ' · Royal Wedding';
      }
    }
    if (params.has('scratch')) state.scratchType = params.get('scratch');
    if (params.has('theme')) state.theme = params.get('theme');
    if (params.has('bride')) state.bride = params.get('bride');
    if (params.has('groom')) state.groom = params.get('groom');
    if (params.has('venue')) state.venue = params.get('venue');
    if (params.has('guest')) state.guestName = params.get('guest');
  }

  /* ==========================================================
     AMBIENT CELEBRATORY FLORAL PETALS (BACKGROUND CANVAS)
     ========================================================== */
  const ambientCanvas = document.getElementById('ambientCanvas');
  let ambCtx = null;
  let particles = [];
  function getThemeEmojis() {
    if (state.theme === 'crimson-gold') return ['🌹', '✨', '🥀', '💛', '🌸'];
    if (state.theme === 'silver-diamond') return ['💎', '✨', '❄️', '🤍', '⭐'];
    return ['🌸', '✨', '🌹', '🌿'];
  }

  function initAmbientParticles() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
    ambCtx = ambientCanvas.getContext('2d');
    particles = [];
    const activeEmojis = getThemeEmojis();

    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * ambientCanvas.width,
        y: Math.random() * ambientCanvas.height,
        emoji: activeEmojis[Math.floor(Math.random() * activeEmojis.length)],
        size: Math.random() * 10 + 12,
        speedY: Math.random() * 0.7 + 0.3,
        speedX: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }
    requestAnimationFrame(renderAmbientParticles);
  }

  function renderAmbientParticles() {
    if (!ambCtx) return;
    ambCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
    
    for (let p of particles) {
      ambCtx.save();
      ambCtx.translate(p.x, p.y);
      ambCtx.rotate((p.rotation * Math.PI) / 180);
      ambCtx.font = `${p.size}px serif`;
      ambCtx.textAlign = 'center';
      ambCtx.textBaseline = 'middle';
      ambCtx.fillText(p.emoji, 0, 0);
      ambCtx.restore();

      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > ambientCanvas.height + 20) p.y = -20;
      if (p.x < -20) p.x = ambientCanvas.width + 20;
      if (p.x > ambientCanvas.width + 20) p.x = -20;
    }
    requestAnimationFrame(renderAmbientParticles);
  }

  window.addEventListener('resize', () => {
    if (ambientCanvas) {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    }
  });

  // Init
  loadUrlParameters();
  renderAllTemplateData();
  initScratchCard();
  startHeartCountdown();
  initAmbientParticles();
});
