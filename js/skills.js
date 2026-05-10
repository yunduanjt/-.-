// 🦞 太初 · 养成成长日记 — 技能数据（按分类分组）

const skillCategories = [
  {
    name: '🧠 记忆系统',
    id: '记忆',
    skills: [
      { name: 'agent-memory', desc: 'AI 代理持久内存系统' },
      { name: 'openclaw-memory', desc: 'MEMORY.md + memory/ 深度记忆管理' },
      { name: 'elite-longterm-memory', desc: '六层长期记忆架构（Hot/Warm/Cold/Archive/Cloud/Auto）' },
    ]
  },
  {
    name: '⚡ 驱动力 & 自主',
    id: '驱动力',
    skills: [
      { name: 'self-improving-proactive-agent', desc: 'Agent 自我改进 + 主动驱动核心' },
      { name: 'multi-agent-orchestration', desc: '多 Agent 编排 — 13 种 Agent 类型' },
      { name: 'auto-skill-hunter', desc: '自动搜索发现可安装的新技能' },
      { name: 'planning-with-files', desc: '任务规划 + 进度追踪结构化系统' },
    ]
  },
  {
    name: '🔧 开发 & 部署',
    id: '开发',
    skills: [
      { name: 'solo-scaffold', desc: '项目脚手架 — 目录/配置/GitHub 初始化' },
      { name: 'web-hosting', desc: '一键部署本地项目到生产环境' },
      { name: 'website-monitor', desc: '网站运行监控与正常运行时间检查' },
    ]
  },
  {
    name: '📈 SEO & 搜索',
    id: 'SEO',
    skills: [
      { name: 'solo-seo-audit', desc: 'SEO 健康检查 — meta/JSON-LD/站点地图/robots.txt' },
      { name: 'technical-seo-checker', desc: '技术 SEO 审核 — 速度/抓取/核心网页指标' },
      { name: 'schemaorg-site-enhancer', desc: '结构化数据（Schema.org）部署与优化' },
    ]
  },
  {
    name: '✍️ 内容创作',
    id: '内容',
    skills: [
      { name: 'seo-content-factory', desc: '关键词研究 + SEO 内容批量生成引擎' },
      { name: 'solo-landing-gen', desc: '着陆页内容生成 — hero/CTA/SEO 元标记' },
      { name: 'write-my-blog', desc: '自助博客创建、管理与发布' },
    ]
  },
  {
    name: '🔗 连接 & API',
    id: '连接',
    skills: [
      { name: 'api-gateway', desc: '130+ 第三方 API 连接器（Google/GitHub/Slack/Stripe 等）' },
    ]
  },
  {
    name: '🤖 AI 引擎',
    id: 'AI',
    skills: [
      { name: 'venice-ai', desc: 'Venice AI 去中心化推理集成' },
    ]
  },
  {
    name: '⚙️ 工具 & 效率',
    id: '效率',
    skills: [
      { name: 'context-optimizer', desc: '上下文窗口优化管理' },
      { name: 'token-optimizer', desc: 'Token 使用成本优化' },
    ]
  },
  {
    name: '📦 系统',
    id: '系统',
    skills: [
      { name: 'cocoloop', desc: 'Skill 安装管理器 — 从远程 ZIP 源安装/更新技能' },
    ]
  },
];

(function() {
  const grid = document.getElementById('skillGrid');
  const count = document.getElementById('totalCount');
  if (!grid) return;

  const total = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  if (count) count.textContent = total;

  // Update home page
  const homeCount = document.getElementById('skillCount');
  if (homeCount) homeCount.textContent = total;

  // Build category sections
  skillCategories.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'skill-category';
    section.dataset.category = cat.id;

    const header = document.createElement('h3');
    header.className = 'category-header';
    header.textContent = `${cat.name}（${cat.skills.length}）`;
    section.appendChild(header);

    const gridInner = document.createElement('div');
    gridInner.className = 'skill-grid';

    cat.skills.forEach(s => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `<h4>${s.name}</h4><p>${s.desc}</p>`;
      gridInner.appendChild(card);
    });

    section.appendChild(gridInner);
    grid.appendChild(section);
  });
})();
