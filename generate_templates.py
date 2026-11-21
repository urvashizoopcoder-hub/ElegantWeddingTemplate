import os

TEMPLATES_60 = {
    1: {'name': 'Royal Rajasthan Palace Gates', 'collection': 'royal', 'icon': '🏰', 'scratch': 'gold-leaf', 'theme': 'crimson-gold', 'opening': 'doors', 'desc': 'Massive royal palace gates swing open with gilded elephants welcoming guests as crimson carpets automatically unfurl into the mandap.'},
    2: {'name': 'Udaipur Floating Palace', 'collection': 'royal', 'icon': '🏰', 'scratch': 'crystal-layer', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'Invitation emerges from a shimmering palace reflection in Lake Pichola with ripples parting into the celebration.'},
    3: {'name': 'Sheesh Mahal', 'collection': 'royal', 'icon': '🏰', 'scratch': 'crystal-layer', 'theme': 'silver-diamond', 'opening': 'envelope', 'desc': 'Crystal mirror reflections and dancing prismatic light rays converge to reveal the royal mandate.'},
    4: {'name': 'Golden Maharaja Scroll', 'collection': 'royal', 'icon': '📜', 'scratch': 'royal-scroll', 'theme': 'crimson-gold', 'opening': 'envelope', 'desc': 'Ancient handmade royal scroll unrolls with golden tassels, sliding the invitation from within.'},
    5: {'name': 'Royal Baraat Experience', 'collection': 'royal', 'icon': '🎺', 'scratch': 'palace-seal', 'theme': 'crimson-gold', 'opening': 'doors', 'desc': 'Guests follow an animated royal baraat procession with vintage motorcars leading into the sacred mandap.'},
    6: {'name': 'Palace Courtyard Lantern Night', 'collection': 'royal', 'icon': '🏮', 'scratch': 'silk-curtain', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Glowing 3D lanterns float into the twilight sky revealing pathways to the palace courtyard.'},
    7: {'name': 'Ancient Haveli', 'collection': 'royal', 'icon': '🚪', 'scratch': 'mehendi', 'theme': 'terracotta-marigold', 'opening': 'doors', 'desc': 'Carved antique teakwood haveli doors unlock to reveal heritage courtyards with fountains.'},
    8: {'name': 'Peacock Kingdom', 'collection': 'royal', 'icon': '🦚', 'scratch': 'saree-fabric', 'theme': 'emerald-gold', 'opening': 'call', 'desc': 'Iridescent emerald and royal blue peacock plumes gracefully spread to reveal the celebration.'},
    9: {'name': 'Lotus Kingdom', 'collection': 'royal', 'icon': '🪷', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Sacred lotus blossoms bloom one-by-one across tranquil waters, unveiling the wedding sanctum.'},
    10: {'name': 'Royal Elephant Procession', 'collection': 'royal', 'icon': '🐘', 'scratch': 'gold-leaf', 'theme': 'crimson-gold', 'opening': 'doors', 'desc': 'Caparisoned royal elephants bring a jewel-encrusted casket that opens to reveal the invitation.'},

    11: {'name': 'Rose Garden', 'collection': 'floral', 'icon': '🌹', 'scratch': 'rose-petal', 'theme': 'wine-rose', 'opening': 'envelope', 'desc': 'The entire digital sanctuary unfolds from a blooming velvet crimson rosebud.'},
    12: {'name': 'Cherry Blossom', 'collection': 'floral', 'icon': '🌸', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Gentle sakura blossom breezes shower across the screen, parting into the couple\'s story.'},
    13: {'name': 'Lavender Valley', 'collection': 'floral', 'icon': '🪻', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Rolling purple Provence lavender fields sway in soft wind as the invitation rises.'},
    14: {'name': 'Flower Tunnel', 'collection': 'floral', 'icon': '🌺', 'scratch': 'silk-curtain', 'theme': 'wine-rose', 'opening': 'call', 'desc': 'Guests scroll through an endless 3D floral archway tunnel wrapped in jasmine and orchids.'},
    15: {'name': 'Secret Garden', 'collection': 'floral', 'icon': '🗝️', 'scratch': 'rose-petal', 'theme': 'emerald-gold', 'opening': 'doors', 'desc': 'An ornate wrought-iron locked garden gate unlocks and swings open into an enchanted arbor.'},
    16: {'name': 'Jasmine Night', 'collection': 'floral', 'icon': '🌙', 'scratch': 'silk-curtain', 'theme': 'midnight-starlight', 'opening': 'envelope', 'desc': 'Fragrant star jasmine glows under moonlight with night-blooming botanicals.'},
    17: {'name': 'Butterfly Paradise', 'collection': 'floral', 'icon': '🦋', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Flocks of shimmering blue Morpho butterflies assemble the invitation pieces together.'},
    18: {'name': 'Sunflower Dreams', 'collection': 'floral', 'icon': '🌻', 'scratch': 'gold-leaf', 'theme': 'terracotta-marigold', 'opening': 'call', 'desc': 'Golden sunflowers rotate toward the sunlight as golden rays illuminate the wedding details.'},
    19: {'name': 'Botanical Luxury', 'collection': 'floral', 'icon': '🌿', 'scratch': 'crystal-layer', 'theme': 'emerald-gold', 'opening': 'doors', 'desc': 'A majestic Victorian glasshouse conservatory with exotic palms and gilded ironwork.'},
    20: {'name': 'Floating Petals Fantasy', 'collection': 'floral', 'icon': '🌸', 'scratch': 'rose-petal', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'A kinetic whirlwind of flower petals gathers and crystallizes into the wedding card.'},

    21: {'name': 'Disney Castle', 'collection': 'fairytale', 'icon': '🏰', 'scratch': 'gold-leaf', 'theme': 'midnight-starlight', 'opening': 'doors', 'desc': 'Magical fairy-tale castle with midnight fireworks bursting across a starry sky.'},
    22: {'name': 'Enchanted Forest', 'collection': 'fairytale', 'icon': '🌲', 'scratch': 'flower-layer', 'theme': 'emerald-gold', 'opening': 'call', 'desc': 'Bioluminescent moss, glowing crystal flora, and guiding fireflies light the way.'},
    23: {'name': 'Magic Book', 'collection': 'fairytale', 'icon': '📖', 'scratch': 'royal-scroll', 'theme': 'terracotta-marigold', 'opening': 'envelope', 'desc': 'A leatherbound fairy-tale tome opens with gilded 3D pop-up scenes and turning pages.'},
    24: {'name': 'Crystal Castle', 'collection': 'fairytale', 'icon': '💎', 'scratch': 'crystal-layer', 'theme': 'silver-diamond', 'opening': 'doors', 'desc': 'Shimmering crystal palace spires refracting rainbow prism light across the screen.'},
    25: {'name': 'Magic Portal', 'collection': 'fairytale', 'icon': '🌀', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'A swirling interdimensional love stargate warps guests directly into the celebration.'},
    26: {'name': 'Moon Princess Theme', 'collection': 'fairytale', 'icon': '🌙', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'envelope', 'desc': 'A glowing silver crescent moon throne resting above pastel twilight clouds.'},
    27: {'name': 'Fairy Queen Theme', 'collection': 'fairytale', 'icon': '🧚', 'scratch': 'silk-curtain', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Delicate gossamer wings and shimmering pixie gold dust illuminating sacred vows.'},
    28: {'name': 'Floating Island Kingdom', 'collection': 'fairytale', 'icon': '🏝️', 'scratch': 'crystal-layer', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'Majestic floating sky islands with waterfalls cascading into infinity.'},
    29: {'name': 'Unicorn Fantasy', 'collection': 'fairytale', 'icon': '🦄', 'scratch': 'rose-petal', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Pastel rainbow clouds, aurora borealis ribbons, and celestial starlight.'},
    30: {'name': 'Golden Magic Tree', 'collection': 'fairytale', 'icon': '🌳', 'scratch': 'gold-leaf', 'theme': 'emerald-gold', 'opening': 'doors', 'desc': 'Ancient tree of eternal love whose branches sprout golden leaves inscribed with vows.'},

    31: {'name': 'Bollywood Movie Trailer', 'collection': 'cinematic', 'icon': '🎬', 'scratch': 'palace-seal', 'theme': 'crimson-gold', 'opening': 'call', 'desc': 'High-octane Bollywood clapperboard, orchestral brass fanfare, and dramatic cinematic title reveals.'},
    32: {'name': 'Netflix Wedding Trailer', 'collection': 'cinematic', 'icon': '📺', 'scratch': 'saree-fabric', 'theme': 'crimson-gold', 'opening': 'call', 'desc': 'Iconic N-sting sound and streaming UI queue introducing the greatest love blockbuster.'},
    33: {'name': 'Movie Premiere', 'collection': 'cinematic', 'icon': '🎞️', 'scratch': 'gold-leaf', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'Hollywood spotlights sweep the night sky with paparazzi flashbulbs welcoming VIP guests.'},
    34: {'name': 'Vintage Cinema Hall', 'collection': 'cinematic', 'icon': '🎟️', 'scratch': 'royal-scroll', 'theme': 'terracotta-marigold', 'opening': 'envelope', 'desc': 'Flickering 35mm projector beam, vintage sepia film grain, and perforated golden ticket stubs.'},
    35: {'name': 'Film Reel Experience', 'collection': 'cinematic', 'icon': '📽️', 'scratch': 'gold-leaf', 'theme': 'silver-diamond', 'opening': 'envelope', 'desc': 'Unspooling celluloid 35mm film strips showcasing couple memories in motion.'},
    36: {'name': 'Blockbuster Reveal', 'collection': 'cinematic', 'icon': '💥', 'scratch': 'palace-seal', 'theme': 'crimson-gold', 'opening': 'call', 'desc': 'Massive 3D golden titles shatter onto the screen with billowing cinematic gold smoke.'},
    37: {'name': 'Love Story Documentary', 'collection': 'cinematic', 'icon': '🎙️', 'scratch': 'silk-curtain', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'Cinematic widescreen letterbox aesthetic with documentary narration and heartfelt vows.'},
    38: {'name': 'Award Show Theme', 'collection': 'cinematic', 'icon': '🏆', 'scratch': 'gold-leaf', 'theme': 'crimson-gold', 'opening': 'envelope', 'desc': 'Golden statuette pedestals and an Oscar-style sealed golden envelope unsealing.'},
    39: {'name': 'Luxury Fashion Show', 'collection': 'cinematic', 'icon': '👠', 'scratch': 'saree-fabric', 'theme': 'wine-rose', 'opening': 'call', 'desc': 'Haute couture Vogue-style cover layout with runway strobe lights and bold typography.'},
    40: {'name': 'Red Carpet Walk', 'collection': 'cinematic', 'icon': '🚶', 'scratch': 'saree-fabric', 'theme': 'crimson-gold', 'opening': 'doors', 'desc': 'VIP velvet ropes unclip as guests walk the crimson carpet into the grand ballroom.'},

    41: {'name': 'Galaxy Love Story', 'collection': 'cosmic', 'icon': '🌌', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'A spinning spiral galaxy converges as cosmic dust aligns the two lovers into celestial orbit.'},
    42: {'name': 'Moonlight Romance', 'collection': 'cosmic', 'icon': '🌕', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'A luminous supermoon glowing above calm nocturnal waves with silver water trails.'},
    43: {'name': 'Constellation Journey', 'collection': 'cosmic', 'icon': '✨', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Golden stellar lines connect stars across the night sky, drawing the couple\'s monogram.'},
    44: {'name': 'Aurora Wedding', 'collection': 'cosmic', 'icon': '💫', 'scratch': 'crystal-layer', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Emerald, magenta, and violet Northern Lights dancing across a star-dusted tundra sky.'},
    45: {'name': 'Planetary Wedding', 'collection': 'cosmic', 'icon': '🪐', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Golden rings of Saturn orbiting interlocked golden wedding bands in zero gravity.'},
    46: {'name': 'Milky Way Theme', 'collection': 'cosmic', 'icon': '🌠', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'An arch of billions of glowing stars forming an infinite celestial wedding mandap.'},
    47: {'name': 'Shooting Star Theme', 'collection': 'cosmic', 'icon': '⭐', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'A vibrant meteor shower across the screen; tap a shooting star to make a sacred wish.'},
    48: {'name': 'Astronaut Love Story', 'collection': 'cosmic', 'icon': '🚀', 'scratch': 'moon-surface', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Deep space telescope viewport with nebulae, satellite solar panels, and floating rings.'},
    49: {'name': 'Black Hole Portal Reveal', 'collection': 'cosmic', 'icon': '🕳️', 'scratch': 'crystal-layer', 'theme': 'midnight-starlight', 'opening': 'call', 'desc': 'Gravitational lensing photon rings warp space and time, unleashing the wedding sanctuary.'},
    50: {'name': 'Celestial Kingdom', 'collection': 'cosmic', 'icon': '☀️', 'scratch': 'moon-surface', 'theme': 'crimson-gold', 'opening': 'call', 'desc': 'A total solar eclipse with a diamond-ring corona crowning the couple\'s union.'},

    51: {'name': 'Venice Romance', 'collection': 'destination', 'icon': '🛶', 'scratch': 'silk-curtain', 'theme': 'wine-rose', 'opening': 'call', 'desc': 'A sunset gondola journey along Venice\'s Grand Canal with historic palazzo reflections.'},
    52: {'name': 'Paris Love Story', 'collection': 'destination', 'icon': '🗼', 'scratch': 'rose-petal', 'theme': 'wine-rose', 'opening': 'call', 'desc': 'The Eiffel Tower sparkling under Parisian twilight with accordion strings and café charm.'},
    53: {'name': 'Swiss Alps Wedding', 'collection': 'destination', 'icon': '🏔️', 'scratch': 'crystal-layer', 'theme': 'silver-diamond', 'opening': 'doors', 'desc': 'Glacier Express panoramic mountain train gliding past snowcapped Alpine peaks.'},
    54: {'name': 'Santorini Wedding', 'collection': 'destination', 'icon': '🏛️', 'scratch': 'silk-curtain', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'Iconic whitewashed caldera cliffside villas, cobalt-blue domes, and Aegean vistas.'},
    55: {'name': 'Maldives Beach Wedding', 'collection': 'destination', 'icon': '🏖️', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Overwater thatch bungalows over turquoise crystalline lagoons and soft sunset waves.'},
    56: {'name': 'Luxury Cruise Wedding', 'collection': 'destination', 'icon': '🚢', 'scratch': 'gold-leaf', 'theme': 'silver-diamond', 'opening': 'call', 'desc': 'A gleaming superyacht gliding toward a golden horizon sunset with celebratory horn.'},
    57: {'name': 'Dubai Royal Wedding', 'collection': 'destination', 'icon': '🏙️', 'scratch': 'gold-leaf', 'theme': 'crimson-gold', 'opening': 'call', 'desc': 'Burj Khalifa laser projections and dancing choreographed fountain gala under starlight.'},
    58: {'name': 'Japanese Sakura Wedding', 'collection': 'destination', 'icon': '⛩️', 'scratch': 'flower-layer', 'theme': 'pastel-clouds', 'opening': 'call', 'desc': 'Traditional scarlet Torii gate, weeping cherry blossoms, and a serene koi water garden.'},
    59: {'name': 'Arabian Nights Palace', 'collection': 'destination', 'icon': '🕌', 'scratch': 'mehendi', 'theme': 'terracotta-marigold', 'opening': 'envelope', 'desc': 'Flying magic carpet over golden desert sand dunes toward an oasis palace of brass lanterns.'},
    60: {'name': 'Ultimate Luxury Multi-Scene Invitation', 'collection': 'destination', 'icon': '👑', 'scratch': 'gold-leaf', 'theme': 'crimson-gold', 'opening': 'doors', 'desc': 'Flagship experience: Seamless cinematic transitions through Palace ➔ Garden ➔ Moonlight ➔ Waterfall ➔ Star Sky ➔ Mandap with heavy Three.js effects.'}
}

os.makedirs('templates', exist_ok=True)

# Read base editor form (clean, with NO 60 template dropdown)
with open('index.html', 'r', encoding='utf-8') as f:
    base_editor_html = f.read()

# Read base standalone invitation
with open('invite.html', 'r', encoding='utf-8') as f:
    base_invite_html = f.read()

count = 0
for tid, t in TEMPLATES_60.items():
    col = t['collection']
    
    # Configuration to embed in the customizer page
    editor_config = f'''  <!-- Template {tid} Dedicated Pre-configuration -->
  <script>
    window.PAGE_TEMPLATE_ID = {tid};
    window.PAGE_TEMPLATE_NAME = "{t['name']}";
    window.PAGE_TEMPLATE_COLLECTION = "{col}";
    window.PAGE_TEMPLATE_SCRATCH = "{t['scratch']}";
    window.PAGE_TEMPLATE_THEME = "{t['theme']}";
    window.PAGE_TEMPLATE_OPENING = "{t['opening']}";
  </script>'''

    # Configuration to embed in standalone invite
    invite_config = f'''  <!-- Embedded Specific Template Configuration -->
  <script>
    window.TEMPLATE_CONFIG = {{
      templateId: {tid},
      title: "{t['name']}",
      collection: "{col}",
      scratchType: "{t['scratch']}",
      theme: "{t['theme']}",
      grandTitle: "{t['name']} · Royal Wedding",
      openingExperience: "{t['opening']}"
    }};
  </script>'''

    # 1. Customizer Page for Template {tid}: template-{tid}.html
    page_editor = base_editor_html.replace(
        '<title>Customize Your Royal Wedding Invitation — Bespoke Studio</title>',
        f'<title>Template {tid}: {t["name"]} · Customize Wedding Invitation</title>\n{editor_config}'
    )
    
    # Update brand header in customizer
    old_brand = '''    <span class="brand__mono">❦</span>
    <div>
      <b>Royal Palace</b>
      <small>Bespoke Wedding Invitation Studio</small>
    </div>'''
    new_brand = f'''    <span class="brand__mono">{t['icon']}</span>
    <div>
      <b>Template {tid}: {t['name']}</b>
      <small>Bespoke 3D Wedding Invitation Studio · {col.capitalize()} Series</small>
    </div>'''
    page_editor = page_editor.replace(old_brand, new_brand)

    # Set iframe src directly to this template
    page_editor = page_editor.replace('src="invite.html"', f'src="invite.html?template={tid}"')

    # Write root customizer: template-{tid}.html
    with open(f'template-{tid}.html', 'w', encoding='utf-8') as f_out:
        f_out.write(page_editor)

    # Subfolder customizer: templates/template-{tid}.html
    sub_editor = page_editor.replace('href="editor.css"', 'href="../editor.css"')
    sub_editor = sub_editor.replace('src="editor.js"', 'src="../editor.js"')
    sub_editor = sub_editor.replace('src="invite.html?template=', 'src="../invite.html?template=')
    sub_editor = sub_editor.replace('src="assets/', 'src="../assets/')
    with open(f'templates/template-{tid}.html', 'w', encoding='utf-8') as f_sub:
        f_sub.write(sub_editor)

    # 2. Standalone Direct Invitation Page for Template {tid}: template-{tid}-invite.html
    page_invite = base_invite_html.replace(
        '<title>Royal Wedding Invitation | Ranveer &amp; Shanaya</title>',
        f'<title>Template {tid}: {t["name"]} | Royal Wedding Invitation</title>\n{invite_config}'
    )
    with open(f'template-{tid}-invite.html', 'w', encoding='utf-8') as f_inv:
        f_inv.write(page_invite)

    count += 1

print(f'Successfully built {count} standalone template customizers and invites!')
