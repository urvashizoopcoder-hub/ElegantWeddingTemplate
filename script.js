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

  // State Management with Ranveer & Shanaya Default Request Data
  const state = {
    theme: 'emerald-gold',
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

  /* ==========================================================
     OPENING EXPERIENCE: 3D DOORS VS INCOMING CALL
     ========================================================== */
  function openVaultDoors() {
    if (state.doorsOpened) return;
    state.doorsOpened = true;
    vaultSection.classList.add('doors-open');
    playGoldenChime();
    startMusic();

    if (window.confetti) {
      window.confetti({
        particleCount: 40,
        spread: 65,
        origin: { y: 0.4 },
        colors: ['#d4af37', '#fdfbf7', '#ffd700', '#2d4a3e']
      });
    }

    setTimeout(() => {
      if (scrollDownBtn) scrollDownBtn.classList.add('pulse');
    }, 1500);
  }

  if (ringsClasp) ringsClasp.addEventListener('click', openVaultDoors);
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

    // Welcome Letter
    if (welcomeMessageText) {
      welcomeMessageText.innerHTML = `We are honored to welcome you to the Wedding ceremony of <strong>${state.groom} &amp; ${state.bride}</strong>. As they begin their journey together in faith and love, we thank you for being part of this blessed occasion 🤍`;
    }
    if (welcomeSignoff) {
      welcomeSignoff.textContent = `With love & blessings, The ${state.groom_full.split(' ').pop()} & ${state.bride_full.split(' ').pop()} Families`;
    }

    // Save the Date Arched Card
    if (displayFullDateLine) displayFullDateLine.textContent = `${state.monthYear.split(' ')[0]} ${state.dateNum}, ${state.monthYear.split(' ')[1] || '2027'}`;
    if (displayDayName) displayDayName.textContent = state.dayName;
    if (displayEventTime) displayEventTime.textContent = state.time;

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
  const petalEmojis = ['🌸', '✨', '🌹', '🌿'];

  function initAmbientParticles() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
    ambCtx = ambientCanvas.getContext('2d');
    particles = [];

    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * ambientCanvas.width,
        y: Math.random() * ambientCanvas.height,
        emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
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
  initAmbientParticles();
});
