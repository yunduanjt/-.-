#!/usr/bin/env python3
"""Add 不蒜子 (busuanzi) page view counter to all HTML files in taichu-site."""

import os, re

SITE_DIR = r"H:\大龙虾\state\workspace\taichu-site"

# The busuanzi script tag to inject before </body>
BUSUANZI_SCRIPT = '  <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>'

# Footer counter HTML - adds site PV + UV in a new line
FOOTER_COUNTER = '      <span class="footer-counter">总访问 <span id="busuanzi_value_site_pv">0</span> · 访客 <span id="busuanzi_value_site_uv">0</span></span>'

# Hero stats replacement for index.html (replace the "—" placeholder)
# Old: <span class="num-accent" id="visitorCount">&mdash;</span>
# New: use busuanzi for today's page views or site UV

files = []

# Collect all HTML files
for root, dirs, fnames in os.walk(SITE_DIR):
    for f in fnames:
        if f.endswith('.html'):
            files.append(os.path.join(root, f))

print(f"Found {len(files)} HTML files")

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    original = html
    rel = os.path.relpath(filepath, SITE_DIR)
    
    # 1. Add busuanzi script before </body> if not already present
    if BUSUANZI_SCRIPT not in html and '</body>' in html:
        html = html.replace('</body>', BUSUANZI_SCRIPT + '\n</body>')
        print(f"  ✅ {rel}: added busuanzi script")
    
    # 2. For root pages (index.html, about.html, skills.html), add site counters in footer
    if filepath.endswith('index.html') and '..' not in rel or filepath.endswith('about.html') or filepath.endswith('skills.html'):
        # These are root-level pages or have .. in path (diary subdirectory)
        pass  # We handle this below
    
    # 3. For diary articles, add page PV counter line in footer
    if 'diary' in rel and 'index.html' not in os.path.basename(filepath):
        # Add page view counter in footer paragraph if not present
        if 'busuanzi_value_page_pv' not in html:
            pv_line = '<span class="diary-views">阅读 <span id="busuanzi_value_page_pv">0</span></span>'
            # Insert before the motto line
            html = html.replace(
                '<p class="footer-motto">',
                f'<span class="footer-counter">总访问 <span id="busuanzi_value_site_pv">0</span> · 访客 <span id="busuanzi_value_site_uv">0</span> | 本页 <span id="busuanzi_value_page_pv">0</span></span><br/>\n      <p class="footer-motto">'
            )
            print(f"  ✅ {rel}: added page counter")
    
    # 4. Replace the placeholder visitorCount in index.html
    if filepath.endswith('index.html') and rel == 'index.html':
        # Replace the "—" stat with busuanzi site UV
        html = html.replace(
            'id="visitorCount">&mdash;',
            'id="busuanzi_value_site_uv">0'
        )
        print(f"  ✅ {rel}: replaced visitor placeholder with busuanzi UV")
    
    # 5. Add footer counter to root-level pages (index, about, skills) if not already there
    if rel in ['index.html', 'about.html', 'skills.html'] and 'footer-counter' not in html:
        # Insert footer counter before the footer motto
        html = html.replace(
            '<p class="footer-motto">',
            '<span class="footer-counter">总访问 <span id="busuanzi_value_site_pv">0</span> · 访客 <span id="busuanzi_value_site_uv">0</span></span><br/>\n      <p class="footer-motto">'
        )
        print(f"  ✅ {rel}: added footer counter")
    
    # Also handle diary/index.html
    if rel == os.path.join('diary', 'index.html') and 'footer-counter' not in html:
        html = html.replace(
            '<p class="footer-motto">',
            '<span class="footer-counter">总访问 <span id="busuanzi_value_site_pv">0</span> · 访客 <span id="busuanzi_value_site_uv">0</span></span><br/>\n      <p class="footer-motto">'
        )
        print(f"  ✅ {rel}: added footer counter")
    
    if html != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  📝 {rel}: wrote changes")
    else:
        print(f"  — {rel}: no changes needed")

print("\nDone! All files updated.")
