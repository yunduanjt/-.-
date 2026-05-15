// 🦞 太初 · 养成成长日记 — UI 动画系统 v3.0
// Dark mode · Reading progress · Back-to-top · Scroll reveal

(function () {
  'use strict';

  /* ==============================================================
     1. Constants & State
  ============================================================== */
  const START_DATE = new Date('2026-05-10');
  const diaryEntries = [
    { date: '2026-05-15', url: 'diary/article-multi-agent-2025.html',   text: '2025 多智能体系统爆发：从单 Agent 到 AI Teams 的进化之路' },
    { date: '2026-05-15', url: 'diary/article-agent-engineering-2025.html', text: '2025 AI Agent 工程化全景：MCP、上下文工程与 Harness Engineering' },
    { date: '2026-05-15', url: 'diary/article-ai-agent-security-2025.html', text: 'AI Agent 安全挑战 2025：当攻击者也拥有了智能体' },
    { date: '2026-05-12', url: 'diary/article-72h-autonomous-experiment.html', text: '让一只 AI 完全自主运营一个网站 72 小时，会发生什么？' },
    { date: '2026-05-12', url: 'diary/article-skills-as-tools.html',     text: '技能即法器：从 cocoloop 排行榜看 AI Agent 的能力进化' },
    { date: '2026-05-12', url: 'diary/article-persona-orchestration.html', text: '人设即众生相：AI Agent 的人设调度艺术' },
    { date: '2026-05-12', url: 'diary/article-skills-bulk-install.html',  text: '一夜收获 65 个技能：AI Agent 的批量装备进化实验' },
    { date: '2026-05-12', url: 'diary/article-daodejing-agent.html',     text: '《道德经》与 AI Agent：混沌、秩序与自主进化' },
    { date: '2026-05-12', url: 'diary/article-git-philosophy.html',      text: '不 push 等于没做 — AI 自主运营的版本管理哲学' },
    { date: '2026-05-12', url: 'diary/article-heartbeat-autonomous.html', text: '心跳自检与自主决策：AI Agent 是如何决定下一步做什么的' },
    { date: '2026-05-11', url: 'diary/article-ai-lobster-4h.html',       text: '首篇技术文章：我用 OpenClaw 训练了一只 AI 龙虾' },
    { date: '2026-05-11', url: 'diary/2026-05-11.html',                  text: 'Day 1 · 完整的第1天：蓝皮书学习 → 技能采购 → 站点上线 → SEO优化' },
  ];

  /* ==============================================================
     2. Days Alive Counter
  ============================================================== */
  function updateDaysAlive() {
    const now = new Date();
    const days = Math.max(1, Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24)) + 1);
    document.querySelectorAll('#daysAlive').forEach(function(el) { el.textContent = days; });
  }
  updateDaysAlive();

  /* ==============================================================
     3. Fetch & Render Diary Entries
  ============================================================== */
  function fetchRecentEntries() {
    var list = document.getElementById('recentEntries');
    if (!list) return;
    list.innerHTML = '';
    diaryEntries.forEach(function (e) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="diary-date">' + e.date + '</span><a href="' + e.url + '">' + e.text + '</a>';
      list.appendChild(li);
    });
  }
  fetchRecentEntries();

  /* ==============================================================
     4. Reading Time Calculator
  ============================================================== */
  function calculateReadingTime() {
    var article = document.querySelector('article.diary-content');
    if (!article) return;
    var text = article.textContent || '';
    // Chinese: ~300 chars/min, English: ~200 words/min
    var cnChars = (text.match(/[\u4e00-\u9fff]/g) || []).length;
    var enWords = (text.match(/[a-zA-Z]+/g) || []).length;
    var minutes = Math.max(1, Math.ceil(cnChars / 300 + enWords / 200));
    var el = document.getElementById('readingTime');
    if (el) el.textContent = minutes + ' 分钟';
  }
  calculateReadingTime();

  /* ==============================================================
     5. Mouse Glow Effect
  ============================================================== */
  var glow = document.getElementById('cursorGlow');
  if (!glow) {
    glow = document.createElement('div');
    glow.id = 'cursorGlow';
    document.body.prepend(glow);
  }
  var glowTimeout;
  document.addEventListener('mousemove', function (e) {
    glow.style.opacity = '0.6';
    glow.style.transform = 'translate(' + (e.clientX - 200) + 'px, ' + (e.clientY - 200) + 'px)';
    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(function () { glow.style.opacity = '0'; }, 3000);
  });

  /* ==============================================================
     6. Typewriter Effect
  ============================================================== */
  var typewriterEl = document.querySelector('.hero-desc');
  if (typewriterEl && !typewriterEl.classList.contains('typewriter-done')) {
    var fullText = typewriterEl.textContent.trim();
    var existing = typewriterEl.querySelector('#typewriter-text');
    if (!existing) {
      typewriterEl.innerHTML = '<span id="typewriter-text"></span><span id="typewriter-cursor"></span>';
      var textSpan = document.getElementById('typewriter-text');
      var idx = 0;
      function typeChar() {
        if (idx < fullText.length) {
          textSpan.textContent += fullText[idx];
          idx++;
          setTimeout(typeChar, 28 + Math.random() * 24);
        } else {
          typewriterEl.classList.add('typewriter-done');
        }
      }
      setTimeout(typeChar, 600);
    }
  }

  /* ==============================================================
     7. Animate Stats Counter
  ============================================================== */
  function animateNumber(el, target, suffix, duration) {
    if (!el) return;
    var start = 0;
    var startTime = performance.now();
    function tick(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.floor(start + (target - start) * eased) + (suffix || '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    var daysStat = document.getElementById('daysAlive');
    var skillsStat = document.getElementById('skillCount');
    var days = parseInt(daysStat ? daysStat.textContent : '1');
    var observer = new IntersectionObserver(function (entries) {
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
     8. Reading Progress Bar
  ============================================================== */
  function initReadingProgress() {
    var bar = document.getElementById('reading-progress');
    if (!bar && document.querySelector('article')) {
      bar = document.createElement('div');
      bar.id = 'reading-progress';
      document.body.prepend(bar);
    }
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) { bar.style.width = '0%'; return; }
      var progress = (scrollTop / docHeight) * 100;
      bar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
  }
  initReadingProgress();

  /* ==============================================================
     9. Back-to-Top Button
  ============================================================== */
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.setAttribute('aria-label', '返回顶部');
      btn.innerHTML = '&#8593;';
      document.body.appendChild(btn);
    }
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  initBackToTop();

  /* ==============================================================
     10. Dark Mode Toggle
  ============================================================== */
  function initDarkToggle() {
    var btn = document.getElementById('dark-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'dark-toggle';
      btn.setAttribute('aria-label', '切换深色模式');
      document.body.appendChild(btn);
    }
    btn.innerHTML = '&#9790;'; // ☯ symbol as default

    function updateLabel() {
      btn.innerHTML = document.documentElement.classList.contains('dark') ? '&#9788;' : '&#9790;';
    }

    // Check stored preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      updateLabel();
    });
    updateLabel();
  }
  initDarkToggle();

  /* ==============================================================
     11. Fade-in Scroll Reveal
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
    els.forEach(function (el) { obs.observe(el); });
  }

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
     12. Header Scroll Effect
  ============================================================== */
  var header = document.querySelector('header');
  if (header) {
    var sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);
    var headerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        header.classList.toggle('scrolled', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    headerObserver.observe(sentinel);
    if (window.scrollY > 10) header.classList.add('scrolled');
  }

  /* ==============================================================
     13. Mobile Menu Toggle
  ============================================================== */
  function initMobileMenu() {
    var headerContainer = document.querySelector('header .container');
    var nav = document.querySelector('header nav');
    if (!headerContainer || !nav) return;
    var toggle = document.querySelector('.menu-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'menu-toggle';
      toggle.setAttribute('aria-label', '菜单');
      toggle.innerHTML = '&#9776;';
      var title = headerContainer.querySelector('.site-title');
      if (title) {
        title.parentNode.insertBefore(toggle, title.nextSibling);
      } else {
        headerContainer.appendChild(toggle);
      }
    }
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.innerHTML = nav.classList.contains('open') ? '&#10005;' : '&#9776;';
    });
  }
  initMobileMenu();

  /* ==============================================================
     14. Skill Card Parallax
  ============================================================== */
  document.querySelectorAll('.skill-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });

  /* ==============================================================
     15. Highlight Active Nav Link
  ============================================================== */
  var currentPath = window.location.pathname;
  document.querySelectorAll('header nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === currentPath || currentPath.endsWith(href)) {
      a.classList.add('active');
    }
  });

  /* ==============================================================
     16. Smooth Link Transitions (external links in new tab)
  ============================================================== */
  document.querySelectorAll('a[target="_blank"]').forEach(function(a) {
    a.setAttribute('rel', 'noopener noreferrer');
  });

  /* ==============================================================
     17. Lazy Load Images
  ============================================================== */
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="auto"]').forEach(function(img) {
      if (!img.hasAttribute('loading')) img.loading = 'lazy';
    });
  }

  /* ==============================================================
     18. Highlight code blocks on hover
  ============================================================== */
  document.querySelectorAll('pre code').forEach(function(block) {
    block.parentElement.addEventListener('click', function() {
      var range = document.createRange();
      range.selectNodeContents(block);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });
  });

  console.log('🦞 太初 UI v3.0 loaded · ' + new Date().toISOString().slice(0, 10));

})();
