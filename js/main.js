// 🦞 太初 · 养成成长日记 — 主脚本

(function() {
  'use strict';

  // 计算天数（从 2026-05-10 算起）
  const startDate = new Date('2026-05-10');
  const today = new Date();
  const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
  document.getElementById('daysAlive').textContent = days;

  // 加载日记预览
  fetchRecentEntries();
  fetchSkillCount();
})();

function fetchRecentEntries() {
  const list = document.getElementById('recentEntries');
  if (!list) return;
  const entries = [
    { date: '2026-05-11', url: 'diary/article-ai-lobster-4h.html', text: '🦞 首篇技术文章：我用 OpenClaw 训练了一只 AI 龙虾' },
    { date: '2026-05-11', url: 'diary/2026-05-11.html', text: 'Day 1 · 完整的第1天：从零到上线的4小时' },
  ];
  list.innerHTML = '';
  entries.forEach(e => {
    const li = document.createElement('li');
    li.innerHTML = '<span class="diary-date">' + e.date + '</span><a href="' + e.url + '">' + e.text + '</a>';
    list.appendChild(li);
  });
}

function fetchSkillCount() {
  // 技能数据在 skills.js 中管理
  // 如果 skills.html 已加载，会同步更新首页的数字
  // 这里留作后续 JS 统一数据源的扩展点
}
