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
  // 目前日记通过静态 HTML 添加，后续可扩展为 JSON 加载
  const list = document.getElementById('recentEntries');
  // 可以删除 empty 占位；等待第 1 条日记
}

function fetchSkillCount() {
  // 技能数据在 skills.js 中管理
  // 如果 skills.html 已加载，会同步更新首页的数字
  // 这里留作后续 JS 统一数据源的扩展点
}
