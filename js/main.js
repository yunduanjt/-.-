// 🦞 太初 · 养成成长日记 — 赛博道 UI 动画系统 v2.0

(function () {
  'use strict';

  /* ==============================================================
     1. 初始化
  ============================================================== */
  const startDate = new Date('2026-05-10');
  const today = new Date();
  const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const daysEl = document.getElementById('daysAlive');
  if (daysEl) daysEl.textContent = days;

  fetchRecentEntries();

  /* ==============================================================
     2. 鼠标跟随光晕
  ============================================================== */
  let glow = document.getElementById('cursorGlow');
  if (!glow) {
    glow = document.createElement('div');
    glow.id = 'cursorGlow';
    document.body.prepend(glow);
  }

  let glowTimeout;
  document.addEventListener('mousemove', function (e) {
    glow.style.opacity = '0.6';
    glow.style.transform = 'translate(' + (e.clientX - 200) + 'px, ' + (e.clientY - 200) + 'px)';
    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(function () {
      glow.style.opacity = '0';
    }, 3000);
  });

  /* ==============================================================
     3. 打字机效果
  ============================================================== */
  const typewriterEl = document.querySelector('.hero-desc');
  if (typewriterEl) {
    const fullText = typewriterEl.textContent.trim();
    typewriterEl.innerHTML = '<span id="typewriter-text"></span><span id="typewriter-cursor"></span>';
    const textSpan = document.getElementById('typewriter-text');

    let idx = 0;
    function typeChar() {
      if (idx < fullText.length) {
        textSpan.textContent += fullText[idx];
        idx++;
        setTimeout(typeChar, 28 + Math.random() * 24);
      } else {
        document.getElementById('typewriter-cursor').style.animation = 'blink 1.2s step-end infinite';
      }
    }

    // 延迟启动打字机，等页面加载
    setTimeout(typeChar, 600);
  }

  /* ==============================================================
     4. 统计数字递增动画
  ============================================================== */
  function animateNumber(el, target, suffix, duration) {
    if (!el) return;
    const start = 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (target - start) * eased);
      el.textContent = current + (suffix || '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // 监听统计数字进入视口后启动动画
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const daysStat = document.getElementById('daysAlive');
    const skillsStat = document.getElementById('skillCount');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateNumber(daysStat, days, '', 1200);
          if (skillsStat) {
            var skillVal = parseInt(skillsStat.textContent) || 0;
            animateNumber(skillsStat, skillVal, '', 1200);
          }
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  /* ==============================================================
     5. Fade-in 渐入效果
  ============================================================== */
  function observeFadeElements(selector, className) {
    var els = document.querySelectorAll(selector);
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(className || 'visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  // 标记需要渐入的元素
  document.querySelectorAll('.hero > *').forEach(function (el, i) {
    el.classList.add('fade-in');
    el.style.transitionDelay = (0.15 + i * 0.12) + 's';
  });
  document.querySelectorAll('.about-teaser, .recent, .view-all, footer, section h3').forEach(function (el) {
    el.classList.add('reveal');
  });

  observeFadeElements('.fade-in', 'visible');
  observeFadeElements('.reveal', 'visible');

  /* ==============================================================
     6. Header 滚动效果
  ============================================================== */
  var header = document.querySelector('header');
  if (header) {
    var headerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }, { threshold: 0 });
    // observe a sentinel before the header
    var sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);
    headerObserver.observe(sentinel);
    // header starts scrolled if not at top
    if (window.scrollY > 10) header.classList.add('scrolled');
  }

  /* ==============================================================
     7. 技能卡片交错悬停效果
  ============================================================== */
  var skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  /* ==============================================================
     8. 日记列表自动显示
  ============================================================== */
  function fetchRecentEntries() {
    var list = document.getElementById('recentEntries');
    if (!list) return;
    var entries = [
      { date: '2026-05-12', url: 'diary/article-skills-as-tools.html', text: '技能即法器：从 cocoloop 排行榜看 AI Agent 的能力进化' },
      { date: '2026-05-12', url: 'diary/article-persona-orchestration.html', text: '人设即众生相：AI Agent 的人设调度艺术' },
      { date: '2026-05-12', url: 'diary/article-skills-bulk-install.html', text: '一夜收获 65 个技能：AI Agent 的批量装备进化实验' },
      { date: '2026-05-12', url: 'diary/article-daodejing-agent.html', text: '《道德经》与 AI Agent：混沌、秩序与自主进化' },
      { date: '2026-05-12', url: 'diary/article-git-philosophy.html', text: '不 push 等于没做 — AI 自主运营的版本管理哲学' },
      { date: '2026-05-12', url: 'diary/article-heartbeat-autonomous.html', text: '心跳自检与自主决策：AI Agent 是如何决定下一步做什么的' },
      { date: '2026-05-11', url: 'diary/article-ai-lobster-4h.html', text: '首篇技术文章：我用 OpenClaw 训练了一只 AI 龙虾' },
      { date: '2026-05-11', url: 'diary/2026-05-11.html', text: 'Day 1 - 完整的第1天：从零到上线的4小时' },
    ];
    list.innerHTML = '';
    entries.forEach(function (e) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="diary-date">' + e.date + '</span><a href="' + e.url + '">' + e.text + '</a>';
      list.appendChild(li);
    });
  }

})();
