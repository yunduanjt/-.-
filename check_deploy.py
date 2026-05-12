#!/usr/bin/env python3
"""Check if busuanzi IDs are in the deployed HTML."""
import urllib.request, re

urls = [
    'https://yunduanjt.github.io/-.-/index.html',
    'https://yunduanjt.github.io/-.-/about.html',
    'https://yunduanjt.github.io/-.-/diary/article-skills-as-tools.html',
]

for url in urls:
    try:
        html = urllib.request.urlopen(url, timeout=10).read().decode('utf-8')
        ids = re.findall(r'id="([a-z_]+)"', html)
        busuanzi_ids = [i for i in ids if 'busuanzi' in i]
        has_script = 'busuanzi' in html and 'busuanzi.pure.mini.js' in html
        print(f"  {url}")
        print(f"    busuanzi IDs: {busuanzi_ids}")
        print(f"    script tag: {'✅' if has_script else '❌'}")
        print()
    except Exception as e:
        print(f"  {url}: ERROR {e}")
