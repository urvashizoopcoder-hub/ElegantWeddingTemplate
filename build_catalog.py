import os
from generate_templates import TEMPLATES_60

GH_BASE = "https://urvashizoopcoder-hub.github.io/ElegantWeddingTemplate"

collection_names = {
    'royal': ('🏰 Royal Collection', '#d4af37'),
    'floral': ('🌸 Floral Collection', '#ff758c'),
    'fairytale': ('🧚 Fairytale Collection', '#a18cd1'),
    'cinematic': ('🎬 Cinematic Collection', '#f6d365'),
    'cosmic': ('🌌 Cosmic Collection', '#4facfe'),
    'destination': ('✈️ Destination Collection', '#43e97b')
}

cards_html = []
for tid in range(1, 61):
    t = TEMPLATES_60[tid]
    col = t['collection']
    col_label, col_color = collection_names.get(col, (col.capitalize(), '#d4af37'))
    scratch_label = t['scratch'].replace('-', ' ').title()
    opening_label = t['opening'].capitalize()
    
    direct_url = f"{GH_BASE}/template-{tid}.html"
    customizer_url = f"template-{tid}.html"
    invite_url = f"template-{tid}-invite.html"
    
    card = f'''
    <div class="template-card" data-collection="{col}" data-tid="{tid}" data-title="{t['name'].lower()}" data-scratch="{t['scratch']}">
      <div class="card-header">
        <span class="card-id">#{tid:02d}</span>
        <span class="card-badge" style="border-color: {col_color}; color: {col_color};">{col_label}</span>
      </div>
      <div class="card-body">
        <div class="card-icon">{t['icon']}</div>
        <h3 class="card-title">{t['name']}</h3>
        <p class="card-desc">{t['desc']}</p>
        <div class="card-meta">
          <span class="meta-tag">✨ Foil: {scratch_label}</span>
          <span class="meta-tag">🎬 Opening: {opening_label}</span>
          <span class="meta-tag">🎨 Palette: {t['theme'].replace('-', ' ').title()}</span>
        </div>
        <div class="card-url-box">
          <code>template-{tid}.html</code>
        </div>
      </div>
      <div class="card-actions">
        <a href="{customizer_url}" class="btn btn-primary" target="_blank" rel="noopener">✏️ Customize Form</a>
        <a href="{invite_url}" class="btn btn-secondary" target="_blank" rel="noopener">👁️ Live 3D Invite</a>
        <button class="btn btn-copy" onclick="copyLink('{direct_url}', this)" title="Copy separate public URL">📋 Copy URL</button>
      </div>
    </div>
    '''
    cards_html.append(card)

catalog_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>60 Bespoke Luxury Wedding Invitation Templates | Separate URLs & Catalog</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {{
      --gold: #d4af37;
      --gold-light: #f3e5ab;
      --gold-dark: #aa820a;
      --bg: #0d0609;
      --bg-card: rgba(26, 14, 20, 0.85);
      --border-gold: rgba(212, 175, 55, 0.35);
      --text: #fdfaf6;
      --text-muted: #c9b8ab;
      --transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      background: radial-gradient(circle at 50% 0%, #2a111a 0%, #0d0609 70%, #050204 100%);
      color: var(--text);
      font-family: 'Montserrat', sans-serif;
      min-height: 100vh;
      padding-bottom: 80px;
      line-height: 1.6;
    }}
    a {{
      color: inherit;
      text-decoration: none;
    }}
    .container {{
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }}
    /* Top Header */
    header {{
      text-align: center;
      padding: 50px 20px 30px;
      position: relative;
    }}
    .header-badge {{
      display: inline-block;
      padding: 6px 18px;
      border: 1px solid var(--border-gold);
      border-radius: 30px;
      font-size: 0.8rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
      background: rgba(212, 175, 55, 0.08);
    }}
    h1 {{
      font-family: 'Cinzel', serif;
      font-size: clamp(2rem, 5vw, 3.4rem);
      font-weight: 700;
      background: linear-gradient(135deg, #fff 20%, var(--gold-light) 60%, var(--gold) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 14px;
      letter-spacing: 1px;
    }}
    .header-subtitle {{
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.15rem, 2.5vw, 1.45rem);
      color: var(--text-muted);
      max-width: 820px;
      margin: 0 auto 24px;
      font-style: italic;
    }}
    .nav-bar-btns {{
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }}
    .nav-pill {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      background: rgba(212, 175, 55, 0.15);
      border: 1px solid var(--border-gold);
      border-radius: 50px;
      color: var(--gold-light);
      font-size: 0.88rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: var(--transition);
      cursor: pointer;
    }}
    .nav-pill:hover {{
      background: var(--gold);
      color: #0d0609;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }}

    /* Filter & Search Bar */
    .filter-section {{
      position: sticky;
      top: 0;
      z-index: 99;
      background: rgba(13, 6, 9, 0.92);
      backdrop-filter: blur(16px);
      border-top: 1px solid rgba(212, 175, 55, 0.15);
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      padding: 16px 0;
      margin-bottom: 36px;
    }}
    .filter-wrapper {{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }}
    .filter-tabs {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }}
    .filter-btn {{
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      color: var(--text-muted);
      font-size: 0.82rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }}
    .filter-btn:hover, .filter-btn.active {{
      background: var(--gold);
      color: #0d0609;
      border-color: var(--gold);
      font-weight: 600;
      box-shadow: 0 4px 14px rgba(212, 175, 55, 0.35);
    }}
    .search-box {{
      position: relative;
      min-width: 280px;
      flex-grow: 1;
      max-width: 360px;
    }}
    .search-input {{
      width: 100%;
      padding: 10px 16px 10px 38px;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid var(--border-gold);
      border-radius: 30px;
      color: #fff;
      font-size: 0.88rem;
      outline: none;
      transition: var(--transition);
    }}
    .search-input:focus {{
      background: rgba(255, 255, 255, 0.12);
      border-color: var(--gold);
      box-shadow: 0 0 16px rgba(212, 175, 55, 0.4);
    }}
    .search-icon {{
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.95rem;
      opacity: 0.6;
    }}

    /* Template Cards Grid */
    .template-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 26px;
    }}
    .template-card {{
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      border-radius: 16px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }}
    .template-card::before {{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      opacity: 0;
      transition: var(--transition);
    }}
    .template-card:hover {{
      transform: translateY(-5px);
      border-color: var(--gold);
      box-shadow: 0 16px 36px rgba(212, 175, 55, 0.18);
    }}
    .template-card:hover::before {{
      opacity: 1;
    }}
    .card-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }}
    .card-id {{
      font-family: 'Cinzel', serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--gold);
      letter-spacing: 1px;
    }}
    .card-badge {{
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 12px;
      border: 1px solid;
      background: rgba(0, 0, 0, 0.4);
    }}
    .card-icon {{
      font-size: 2.2rem;
      margin-bottom: 10px;
      display: inline-block;
      filter: drop-shadow(0 4px 8px rgba(212, 175, 55, 0.25));
    }}
    .card-title {{
      font-family: 'Cinzel', serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
      line-height: 1.35;
    }}
    .card-desc {{
      font-size: 0.87rem;
      color: var(--text-muted);
      margin-bottom: 16px;
      line-height: 1.55;
    }}
    .card-meta {{
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 16px;
    }}
    .meta-tag {{
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 3px 8px;
      border-radius: 8px;
      font-size: 0.74rem;
      color: #eee;
    }}
    .card-url-box {{
      background: rgba(0, 0, 0, 0.5);
      border: 1px dashed rgba(212, 175, 55, 0.3);
      padding: 7px 12px;
      border-radius: 8px;
      margin-bottom: 18px;
    }}
    .card-url-box code {{
      font-family: monospace;
      font-size: 0.8rem;
      color: var(--gold-light);
    }}
    .card-actions {{
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 8px;
      align-items: center;
    }}
    .btn {{
      padding: 9px 12px;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      text-align: center;
      transition: var(--transition);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border: none;
    }}
    .btn-primary {{
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
      color: #0d0609;
      font-weight: 700;
    }}
    .btn-primary:hover {{
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(212, 175, 55, 0.35);
      filter: brightness(1.1);
    }}
    .btn-secondary {{
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--border-gold);
      color: var(--gold-light);
    }}
    .btn-secondary:hover {{
      background: rgba(212, 175, 55, 0.2);
      transform: translateY(-2px);
    }}
    .btn-copy {{
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #eee;
      padding: 9px 12px;
    }}
    .btn-copy:hover {{
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }}
    .btn-copy.copied {{
      background: #27ae60 !important;
      color: #fff !important;
      border-color: #27ae60 !important;
    }}

    /* Quick stats banner */
    .stats-banner {{
      background: rgba(212, 175, 55, 0.06);
      border: 1px solid var(--border-gold);
      border-radius: 12px;
      padding: 16px 24px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 30px;
      text-align: center;
    }}
    .stat-item h4 {{
      font-family: 'Cinzel', serif;
      font-size: 1.6rem;
      color: var(--gold);
    }}
    .stat-item p {{
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
    }}

    /* Toast Notification */
    .toast {{
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #27ae60;
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
      z-index: 9999;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      pointer-events: none;
    }}
    .toast.show {{
      opacity: 1;
      transform: translateY(0);
    }}

    @media (max-width: 768px) {{
      .template-grid {{
        grid-template-columns: 1fr;
      }}
      .card-actions {{
        grid-template-columns: 1fr 1fr;
      }}
      .btn-copy {{
        grid-column: span 2;
      }}
      .search-box {{
        max-width: 100%;
      }}
    }}
  </style>
</head>
<body>

  <header>
    <div class="container">
      <span class="header-badge">Grand Wedding Showcase</span>
      <h1>60 Bespoke Luxury Wedding Templates</h1>
      <p class="header-subtitle">
        Every invitation is a cinematic masterpiece featuring custom 3D storytelling, 10 tactile scratch foils, hidden Save The Date reveals, ambient audio, and instant separate URLs.
      </p>

      <div class="nav-bar-btns">
        <a href="index.html" class="nav-pill">✏️ Open Royal Invitation Editor</a>
        <a href="template-1.html" class="nav-pill" target="_blank">👑 Experience Template #01</a>
        <a href="template-60.html" class="nav-pill" target="_blank">🌟 Experience Flagship Multi-Scene (#60)</a>
      </div>

      <div class="stats-banner">
        <div class="stat-item">
          <h4>60</h4>
          <p>Unique Templates</p>
        </div>
        <div class="stat-item">
          <h4>6</h4>
          <p>Thematic Collections</p>
        </div>
        <div class="stat-item">
          <h4>10</h4>
          <p>Tactile Scratch Foils</p>
        </div>
        <div class="stat-item">
          <h4>60</h4>
          <p>Separate Standalone URLs</p>
        </div>
      </div>
    </div>
  </header>

  <section class="filter-section">
    <div class="container filter-wrapper">
      <div class="filter-tabs">
        <button class="filter-btn active" data-filter="all">All (60)</button>
        <button class="filter-btn" data-filter="royal">🏰 Royal (10)</button>
        <button class="filter-btn" data-filter="floral">🌸 Floral (10)</button>
        <button class="filter-btn" data-filter="fairytale">🧚 Fairytale (10)</button>
        <button class="filter-btn" data-filter="cinematic">🎬 Cinematic (10)</button>
        <button class="filter-btn" data-filter="cosmic">🌌 Cosmic (10)</button>
        <button class="filter-btn" data-filter="destination">✈️ Destination (10)</button>
      </div>

      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" class="search-input" placeholder="Search templates by title, foil, or keyword...">
      </div>
    </div>
  </section>

  <main class="container">
    <div class="template-grid" id="templateGrid">
      {"".join(cards_html)}
    </div>
  </main>

  <div id="toast" class="toast">URL copied to clipboard!</div>

  <script>
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.template-card');
    const searchInput = document.getElementById('searchInput');
    const toast = document.getElementById('toast');

    let currentFilter = 'all';

    function filterCards() {{
      const query = searchInput.value.toLowerCase().trim();

      cards.forEach(card => {{
        const matchesFilter = (currentFilter === 'all') || (card.dataset.collection === currentFilter);
        const textContent = (card.dataset.title + ' ' + card.dataset.scratch + ' ' + card.innerText).toLowerCase();
        const matchesSearch = query === '' || textContent.includes(query);

        if (matchesFilter && matchesSearch) {{
          card.style.display = 'flex';
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    filterBtns.forEach(btn => {{
      btn.addEventListener('click', () => {{
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterCards();
      }});
    }});

    searchInput.addEventListener('input', filterCards);

    function copyLink(url, btn) {{
      navigator.clipboard.writeText(url).then(() => {{
        const origText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.classList.add('copied');
        showToast('Direct URL copied: ' + url);
        setTimeout(() => {{
          btn.innerHTML = origText;
          btn.classList.remove('copied');
        }}, 2000);
      }}).catch(err => {{
        prompt("Copy URL:", url);
      }});
    }}

    function showToast(msg) {{
      toast.innerText = msg;
      toast.classList.add('show');
      setTimeout(() => {{
        toast.classList.remove('show');
      }}, 2500);
    }}
  </script>
</body>
</html>
'''

with open('templates.html', 'w', encoding='utf-8') as f:
    f.write(catalog_html)

with open('catalog.html', 'w', encoding='utf-8') as f:
    f.write(catalog_html)

print("Created templates.html and catalog.html successfully!")
