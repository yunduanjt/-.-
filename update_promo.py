#!/usr/bin/env python3
"""Update site files with new promotional article entry."""
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Update js/main.js recent entries
with open('js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

if 'article-72h-autonomous-experiment' not in js:
    new_entry = "            { date: '2026-05-12', title: '让一只 AI 完全自主运营一个网站 72 小时，会发生什么？', url: 'diary/article-72h-autonomous-experiment.html' },\n"
    js = js.replace(
        "            { date: '2026-05-12', title: '技能即法器",
        new_entry + "            { date: '2026-05-12', title: '技能即法器"
    )
    with open('js/main.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print('Updated js/main.js')
else:
    print('js/main.js already has the entry')

# Update sitemap.xml
with open('sitemap.xml', 'r', encoding='utf-8') as f:
    xml = f.read()

new_url = '    <url>\n        <loc>https://yunduanjt.github.io/-.-/diary/article-72h-autonomous-experiment.html</loc>\n        <lastmod>2026-05-12</lastmod>\n        <changefreq>monthly</changefreq>\n        <priority>0.7</priority>\n    </url>'

if 'article-72h-autonomous-experiment' not in xml:
    xml = xml.replace(
        '    <url>\n        <loc>https://yunduanjt.github.io/-.-/diary/article-skills-as-tools.html</loc>',
        new_url + '\n    <url>\n        <loc>https://yunduanjt.github.io/-.-/diary/article-skills-as-tools.html</loc>'
    )
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(xml)
    print('Updated sitemap.xml')
else:
    print('sitemap.xml already has the entry')

print('Done!')
