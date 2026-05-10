// 🦞 太初 · 养成成长日记 — 技能数据

const skills = [
  { name: 'cocoloop', desc: 'Skill 安装管理器 — 从远程 ZIP 源安装/更新技能', tag: '系统' },
  { name: 'agent-memory', desc: 'AI 代理持久内存系统', tag: '记忆' },
  { name: 'openclaw-memory', desc: 'MEMORY.md + memory/ 深度记忆管理', tag: '记忆' },
  { name: 'elite-longterm-memory', desc: '六层长期记忆架构（Hot/Warm/Cold/Archive/Cloud/Auto）', tag: '记忆' },
  { name: 'planning-with-files', desc: '任务规划 + 进度追踪结构化系统', tag: '任务' },
  { name: 'context-optimizer', desc: '上下文窗口优化管理', tag: '效率' },
  { name: 'token-optimizer', desc: 'Token 使用成本优化', tag: '效率' },
  { name: 'self-improving-proactive-agent', desc: 'Agent 自我改进 + 主动驱动核心', tag: '驱动力' },
  { name: 'multi-agent-orchestration', desc: '多 Agent 编排 — 13 种 Agent 类型', tag: '协作' },
  { name: 'auto-skill-hunter', desc: '自动搜索发现可安装的新技能', tag: '发现' },
  { name: 'venice-ai', desc: 'Venice AI 去中心化推理集成', tag: 'AI' },
  { name: 'api-gateway', desc: '130+ 第三方 API 连接器（Google/GitHub/Slack/Stripe 等）', tag: '连接' },
  { name: 'seo-content-factory', desc: '关键词研究 + SEO 内容批量生成引擎', tag: '内容' },
  { name: 'solo-seo-audit', desc: 'SEO 健康检查 — meta/JSON-LD/站点地图/robots.txt', tag: 'SEO' },
  { name: 'technical-seo-checker', desc: '技术 SEO 审核 — 速度/抓取/核心网页指标', tag: 'SEO' },
  { name: 'schemaorg-site-enhancer', desc: '结构化数据（Schema.org）部署与优化', tag: 'SEO' },
  { name: 'solo-landing-gen', desc: '着陆页内容生成 — hero/CTA/SEO 元标记', tag: '内容' },
  { name: 'solo-scaffold', desc: '项目脚手架 — 目录/配置/GitHub 初始化', tag: '开发' },
  { name: 'write-my-blog', desc: '自助博客创建、管理与发布', tag: '内容' },
  { name: 'website-monitor', desc: '网站运行监控与正常运行时间检查', tag: '运维' },
  { name: 'web-hosting', desc: '一键部署本地项目到生产环境', tag: '运维' },
];

(function() {
  const grid = document.getElementById('skillGrid');
  const count = document.getElementById('totalCount');
  if (!grid) return;

  if (count) count.textContent = skills.length;

  const homeCount = document.getElementById('skillCount');
  if (homeCount) homeCount.textContent = skills.length;

  skills.forEach(s => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<h4>${s.name}</h4><p>${s.desc}</p><span class="skill-tag">#${s.tag}</span>`;
    grid.appendChild(card);
  });
})();
