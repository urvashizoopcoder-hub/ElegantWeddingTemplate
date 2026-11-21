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
      theme: selectedThemeInput.value || 'emerald-gold',
      openingExperience: openingExperienceSelect.value || 'doors',
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
