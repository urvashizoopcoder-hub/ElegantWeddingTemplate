/**
 * ROYAL PALACE INVITATION EDITOR SCRIPT
 * Manages full bespoke wedding customization & ceremonies
 * Real-time synchronization with live 3D invitation
 */

(function () {
  'use strict';

  const form = document.getElementById('ed');
  const iframe = document.getElementById('pv');
  const errEl = document.getElementById('err');
  const sheet = document.getElementById('sheet');
  const sheetX = document.getElementById('sheetX');
  const shareUrlInput = document.getElementById('shareUrl');
  const copyBtn = document.getElementById('copyBtn');
  const waShare = document.getElementById('waShare');
  const emailShare = document.getElementById('emailShare');
  const openLink = document.getElementById('openLink');
  const sheetWaNum = document.getElementById('sheetWaNum');
  const sheetEmailAddr = document.getElementById('sheetEmailAddr');
  const sheetQrImg = document.getElementById('sheetQrImg');

  const collectionSelect = document.getElementById('collectionSelect');
  const templateSelect = document.getElementById('templateSelect');
  const scratchTypeSelect = document.getElementById('scratchTypeSelect');
  const conceptCard = document.getElementById('templateConceptCard');
  const conceptTitle = document.getElementById('conceptTitle');
  const conceptDesc = document.getElementById('conceptDesc');

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

  function updateTemplateUI(tId) {
    const t = TEMPLATES_60[tId];
    if (!t) return;
    if (conceptTitle) conceptTitle.textContent = `Template ${tId}: ${t.name}`;
    if (conceptDesc) conceptDesc.textContent = t.desc;
    if (conceptCard) {
      const iconEl = conceptCard.querySelector('.concept-icon');
      if (iconEl) iconEl.textContent = t.icon;
    }
    if (scratchTypeSelect && t.scratch) {
      scratchTypeSelect.value = t.scratch;
    }
    if (collectionSelect && t.collection) {
      collectionSelect.value = t.collection;
    }
  }

  if (templateSelect) {
    templateSelect.addEventListener('change', () => {
      const tId = parseInt(templateSelect.value, 10);
      updateTemplateUI(tId);
      updatePreview();
    });
  }

  if (collectionSelect && templateSelect) {
    collectionSelect.addEventListener('change', () => {
      const col = collectionSelect.value;
      const firstOpt = templateSelect.querySelector(`optgroup[label*="${col.toUpperCase()}"] option`);
      if (firstOpt) {
        templateSelect.value = firstOpt.value;
        updateTemplateUI(parseInt(firstOpt.value, 10));
        updatePreview();
      }
    });
  }

  const themeGrid = document.getElementById('themeGrid');
  const selectedThemeInput = document.getElementById('selectedTheme');
  const openingExperienceSelect = document.getElementById('openingExperienceSelect');
  const ceremoniesList = document.getElementById('ceremoniesList');
  const ceremonyCardTemplate = document.getElementById('ceremonyCardTemplate');
  const addCeremonyBtn = document.getElementById('addCeremonyBtn');
  const quickCeremonyPreset = document.getElementById('quickCeremonyPreset');
  const resetToPresetBtn = document.getElementById('resetToPresetBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');

  // Pre-configured Default Ceremonies from User Request
  const DEFAULT_CEREMONIES = [
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
  ];

  let uploadedPhotos = {};

  // Color Theme Selector Handlers
  if (themeGrid) {
    const swatches = themeGrid.querySelectorAll('.theme-pill-btn');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        selectedThemeInput.value = swatch.getAttribute('data-theme');
        updatePreview();
      });
    });
  }

  // Add Ceremony to UI
  function addCeremonyCard(data = {}) {
    if (!ceremonyCardTemplate || !ceremoniesList) return;
    const clone = ceremonyCardTemplate.content.firstElementChild.cloneNode(true);
    
    const nameInp = clone.querySelector('[data-k=name]');
    const dateInp = clone.querySelector('[data-k=date]');
    const timeInp = clone.querySelector('[data-k=time]');
    const venueInp = clone.querySelector('[data-k=venue]');
    const mapInp = clone.querySelector('[data-k=map_url]');
    const dressInp = clone.querySelector('[data-k=dress]');
    const noteInp = clone.querySelector('[data-k=note]');
    const removeBtn = clone.querySelector('.ceremony-remove-btn');

    if (nameInp) nameInp.value = data.name || '';
    if (dateInp) dateInp.value = data.date || form.elements.event_date.value || '2027-11-25';
    if (timeInp) timeInp.value = data.time || '19:00';
    if (venueInp) venueInp.value = data.venue || '';
    if (mapInp) mapInp.value = data.map_url || '';
    if (dressInp) dressInp.value = data.dress || '';
    if (noteInp) noteInp.value = data.note || '';

    removeBtn.addEventListener('click', () => {
      clone.remove();
      renumberCeremonies();
      updatePreview();
    });

    ceremoniesList.appendChild(clone);
    renumberCeremonies();
    return clone;
  }

  function renumberCeremonies() {
    const cards = ceremoniesList.querySelectorAll('.ceremony-card');
    cards.forEach((card, idx) => {
      const label = card.querySelector('.ceremony-title-label');
      if (label) label.textContent = `Ceremony ${idx + 1}`;
    });
  }

  if (addCeremonyBtn) {
    addCeremonyBtn.addEventListener('click', () => {
      const card = addCeremonyCard({ name: '' });
      const firstInput = card.querySelector('input');
      if (firstInput) firstInput.focus();
      updatePreview();
    });
  }

  if (quickCeremonyPreset) {
    quickCeremonyPreset.addEventListener('change', () => {
      const val = quickCeremonyPreset.value;
      if (!val) return;
      addCeremonyCard({ name: val, date: form.elements.event_date.value });
      quickCeremonyPreset.value = '';
      updatePreview();
    });
  }

  // Populate Default Ceremonies
  function loadCeremonies(ceremonies) {
    ceremoniesList.innerHTML = '';
    ceremonies.forEach(c => addCeremonyCard(c));
  }

  // Photo uploads
  document.querySelectorAll('[data-photo]').forEach(inp => {
    inp.addEventListener('change', () => {
      const file = inp.files && inp.files[0];
      if (!file) return;
      const key = inp.getAttribute('data-photo');
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadedPhotos[key] = e.target.result;
        const slot = inp.closest('.photo-slot');
        if (slot) slot.classList.add('has-file');
        updatePreview();
      };
      reader.readAsDataURL(file);
    });
  });

  // Collect All Form Data
  function collectData() {
    const f = form.elements;

    // Parse date
    const rawDate = f.event_date.value || '2027-11-25';
    let dayName = 'Thursday';
    let dateNum = '25';
    let monthYear = 'November 2027';
    try {
      const dObj = new Date(rawDate + 'T12:00:00');
      if (!isNaN(dObj.getTime())) {
        dayName = dObj.toLocaleDateString('en-US', { weekday: 'long' });
        dateNum = String(dObj.getDate());
        monthYear = dObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      }
    } catch (e) {}

    // Format time
    let timeFormatted = '7:00 PM';
    if (f.event_time.value) {
      const parts = f.event_time.value.split(':');
      let hour = parseInt(parts[0], 10);
      const min = parts[1] || '00';
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12 || 12;
      timeFormatted = `${hour}:${min} ${ampm}`;
    }

    // Collect ceremonies
    const ceremonyCards = ceremoniesList.querySelectorAll('.ceremony-card');
    const ceremonies = [];
    ceremonyCards.forEach(c => {
      const g = (k) => {
        const el = c.querySelector(`[data-k=${k}]`);
        return el ? el.value.trim() : '';
      };
      const name = g('name');
      if (name) {
        ceremonies.push({
          name: name,
          date: g('date'),
          time: g('time'),
          venue: g('venue'),
          map_url: g('map_url'),
          dress: g('dress'),
          note: g('note')
        });
      }
    });

    return {
      templateId: f.template_id ? parseInt(f.template_id.value || '1', 10) : 1,
      collection: f.template_collection ? f.template_collection.value : 'royal',
      scratchType: f.scratch_type ? f.scratch_type.value : 'gold-leaf',
      theme: selectedThemeInput.value || 'crimson-gold',
      openingExperience: openingExperienceSelect.value || 'call',
      grandTitle: (f.grand_title.value || 'Grand Ballroom Starlight Wedding').trim(),
      groom: (f.groom_name.value || 'Ranveer').trim(),
      bride: (f.bride_name.value || 'Shanaya').trim(),
      groom_full: (f.groom_full_name.value || 'Ranveer Mittal').trim(),
      bride_full: (f.bride_full_name.value || 'Shanaya Jindal').trim(),
      groom_parents: (f.groom_parents.value || 'Son of Mr. Sunil Mittal & Mrs. Rekha Mittal').trim(),
      bride_parents: (f.bride_parents.value || 'Daughter of Mr. Navin Jindal & Mrs. Savitri Jindal').trim(),
      isoDate: rawDate,
      dayName: dayName,
      dateNum: dateNum,
      monthYear: monthYear,
      time: timeFormatted,
      venue: (f.venue.value || 'The Taj Mahal Palace Ballroom, Mumbai').trim(),
      address: (f.venue_address.value || 'Apollo Bunder, Colaba, Mumbai, Maharashtra 400001').trim(),
      city: 'Mumbai, Maharashtra',
      mapsUrl: (f.venue_map_url.value || 'https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai').trim(),
      guestName: (f.guest_name.value || 'Dr. Ayan & Family').trim(),
      guestPhone: (f.rsvp_whatsapp.value || '+971501234567').trim(),
      guestEmail: (f.guest_email.value || 'guest@example.com').trim(),
      musicEnabled: f.music_enabled ? f.music_enabled.checked : true,
      ceremonies: ceremonies,
      photos: uploadedPhotos
    };
  }

  // Live Preview Sync
  let debounceTimer = null;
  function updatePreview() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const data = collectData();
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          type: 'SET_INVITATION_DATA',
          data: data
        }, '*');
      }
    }, 60);
  }

  form.addEventListener('input', updatePreview);
  form.addEventListener('change', updatePreview);

  // Encode data for URL share
  function buildShareLink(data) {
    const jsonStr = JSON.stringify(data);
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
    const baseUrl = new URL('invite.html', window.location.href);
    baseUrl.search = '';
    baseUrl.hash = 'data=' + b64;
    return baseUrl.toString();
  }

  function showErr(msg) {
    if (msg) {
      errEl.textContent = msg;
      errEl.hidden = false;
    } else {
      errEl.hidden = true;
    }
  }

  // Create & Finalize Button
  document.getElementById('createBtn').addEventListener('click', () => {
    const data = collectData();
    const missing = [];
    if (!data.groom) missing.push("Groom's name");
    if (!data.bride) missing.push("Bride's name");
    if (!data.isoDate) missing.push("Wedding date");
    if (!data.venue) missing.push("Venue");
    if (!data.guestName) missing.push("Guest name");
    if (!data.guestPhone) missing.push("Guest WhatsApp number");

    if (missing.length > 0) {
      showErr('Please fill: ' + missing.join(', '));
      return;
    }
    showErr('');

    const fullUrl = buildShareLink(data);
    shareUrlInput.value = fullUrl;
    openLink.href = fullUrl;

    const cleanPhone = data.guestPhone.replace(/[^0-9]/g, '');
    if (sheetWaNum) sheetWaNum.textContent = data.guestPhone;
    if (sheetEmailAddr) sheetEmailAddr.textContent = data.guestEmail || 'your guest';

    // Generate dynamic QR code for instant phone scan
    if (sheetQrImg) {
      sheetQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(fullUrl)}`;
    }

    // WhatsApp Invitation Message
    const waMessage = [
      `✨ *ROYAL WEDDING INVITATION* ✨`,
      ``,
      `Dearest ${data.guestName},`,
      ``,
      `Together with our families, we cordially invite you to celebrate the royal union of`,
      `💍 *${data.bride} & ${data.groom}* 💍`,
      ``,
      `*${data.grandTitle}*`,
      `📅 *Date:* ${data.dayName}, ${data.dateNum} ${data.monthYear}`,
      `⏰ *Time:* ${data.time}`,
      `📍 *Venue:* ${data.venue}`,
      ``,
      `🕊️ *Open your private, 3D animated invitation here:*`,
      `👉 ${fullUrl}`,
      ``,
      `With all our love and blessings,`,
      `*${data.bride_full} & ${data.groom_full}*`,
      `${data.bride_parents}`,
      `${data.groom_parents}`
    ].join('\n');

    waShare.href = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(waMessage)}`;
    emailShare.href = `mailto:${data.guestEmail}?subject=${encodeURIComponent('Royal Wedding Invitation: ' + data.bride + ' & ' + data.groom)}&body=${encodeURIComponent(waMessage)}`;

    sheet.hidden = false;
  });

  // Copy button
  copyBtn.addEventListener('click', () => {
    shareUrlInput.select();
    navigator.clipboard.writeText(shareUrlInput.value).then(() => {
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
    });
  });

  sheetX.addEventListener('click', () => {
    sheet.hidden = true;
  });

  // Mobile Tabs (✎ Edit vs 👁 Preview)
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      const view = tab.getAttribute('data-view');
      if (view === 'preview') {
        document.body.classList.add('v-preview');
        updatePreview();
      } else {
        document.body.classList.remove('v-preview');
      }
    });
  });

  // Reset to Default Preset
  if (resetToPresetBtn) {
    resetToPresetBtn.addEventListener('click', () => {
      form.elements.grand_title.value = "Grand Ballroom Starlight Wedding";
      form.elements.groom_name.value = "Ranveer";
      form.elements.bride_name.value = "Shanaya";
      form.elements.groom_full_name.value = "Ranveer Mittal";
      form.elements.bride_full_name.value = "Shanaya Jindal";
      form.elements.groom_parents.value = "Son of Mr. Sunil Mittal & Mrs. Rekha Mittal";
      form.elements.bride_parents.value = "Daughter of Mr. Navin Jindal & Mrs. Savitri Jindal";
      form.elements.event_date.value = "2027-11-25";
      form.elements.event_time.value = "19:00";
      form.elements.venue.value = "The Taj Mahal Palace Ballroom, Mumbai";
      form.elements.venue_address.value = "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001";
      form.elements.venue_map_url.value = "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Mumbai";
      loadCeremonies(DEFAULT_CEREMONIES);
      updatePreview();
    });
  }

  // Clear All
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      form.reset();
      ceremoniesList.innerHTML = '';
      updatePreview();
    });
  }

  // Initial Load
  loadCeremonies(DEFAULT_CEREMONIES);
  if (iframe) {
    iframe.addEventListener('load', () => {
      setTimeout(updatePreview, 250);
    });
  }
  setTimeout(updatePreview, 500);

})();
