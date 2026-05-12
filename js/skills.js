// 🦞 太初 · 养成成长日记 — 技能数据 v3.0（覆盖 80+ 技能 9 大分类）

const skillCategories = [
  {
    name: '🧠 记忆系统',
    id: '记忆',
    skills: [
      { name: 'agent-memory', desc: 'AI 代理持久内存系统' },
      { name: 'openclaw-memory', desc: 'MEMORY.md + memory/ 深度记忆管理' },
      { name: 'elite-longterm-memory', desc: '六层长期记忆架构（Hot/Warm/Cold/Archive/Cloud/Auto）' },
      { name: 'ByteRover', desc: 'AI 代理的长期记忆中枢' },
      { name: 'Second Brain', desc: '构建复合增长的私人知识库' },
      { name: 'Daily Digest', desc: '自动生成每日思考轨迹' },
      { name: 'zettelkasten', desc: 'AI增强的卡片盒笔记系统' },
      { name: 'transcript-to-content', desc: '会议转录一键生成培训资料' },
      { name: 'para-second-brain', desc: '零成本本地知识库，全库语义搜索' },
      { name: 'principles', desc: '构建你的个人原则操作系统' },
    ]
  },
  {
    name: '⚡ 驱动力 & 自主',
    id: '驱动力',
    skills: [
      { name: 'self-improving-proactive-agent', desc: 'Agent 自我改进 + 主动驱动核心' },
      { name: 'Self-Improving + Proactive Agent', desc: '越用越懂你的 AI 记忆进化系统' },
      { name: 'multi-agent-orchestration', desc: '多 Agent 编排 — 13 种 Agent 类型' },
      { name: 'auto-skill-hunter', desc: '自动搜索发现可安装的新技能' },
      { name: 'auto-updater-skill', desc: '零代码每日自动更新指南' },
      { name: 'planning-with-files', desc: '任务规划 + 进度追踪结构化系统' },
      { name: 'ontology', desc: '结构化记忆，可验证的 Agent 知识图谱' },
    ]
  },
  {
    name: '🔍 信息抓取',
    id: '抓取',
    skills: [
      { name: 'Web Content Fetcher', desc: '一键绕过反爬，三通道稳取网页' },
      { name: 'Browserbase', desc: '自然语言驱动，自动破解反爬虫' },
      { name: 'Scrapling Official Skill', desc: '自适应爬虫框架，一键破解 Cloudflare' },
      { name: 'Playwright Browser Automation', desc: '企业级浏览器自动化引擎' },
      { name: 'Python Executor', desc: '云端 Python 沙盒·百库预装即开即用' },
      { name: 'Xiaohongshu CN', desc: '小红书热门趋势与 KOL 数据分析' },
      { name: 'Browser Automation Stealth', desc: '隐身浏览器自动化，智能反检测' },
      { name: 'amazon-product-api-skill', desc: '零代码亚马逊商品数据抓取专家' },
      { name: 'anti-crawl-web', desc: '反爬虫规避与智能抓取' },
    ]
  },
  {
    name: '🤖 Agent 增强',
    id: 'Agent',
    skills: [
      { name: 'volcengine-web-search', desc: '火山引擎官方搜索能力封装' },
      { name: 'Find Skills', desc: '发现与安装 Agent 扩展技能' },
      { name: 'Agent Directory', desc: 'AI 代理服务发现与集成目录' },
      { name: 'Agent Skills Search', desc: 'AI工具目录·零配置搜索' },
      { name: 'orionads', desc: 'AI工具去中心化发现市场' },
    ]
  },
  {
    name: '🔧 开发 & 部署',
    id: '开发',
    skills: [
      { name: 'senior-frontend', desc: 'React 全栈脚手架与性能优化专家' },
      { name: 'API Development', desc: '全栈API开发脚手架与测试套件' },
      { name: 'Bear Notes', desc: '命令行驾驭优雅笔记' },
      { name: 'azure-cosmos-py', desc: 'Azure Cosmos DB 云原生开发助手' },
      { name: 'abstract-onboard', desc: 'Abstract L2 链上 Agent 工具箱' },
      { name: 'agentskills-io', desc: '跨平台 Agent Skills 标准开发套件' },
      { name: 'kaspa-dev', desc: '多语言 Kaspa 链开发利器' },
      { name: 'agorahub', desc: '一站式 AI 开发工具箱' },
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
      { name: 'seo-factory', desc: 'SEO 专家：审计、关键词、内容、链接、排名策略' },
    ]
  },
  {
    name: '✍️ 内容创作',
    id: '内容',
    skills: [
      { name: 'Content Writer 自媒体内容生成器', desc: '一键生成四平台原生爆款文案' },
      { name: 'Content Brainstorm 选题策划', desc: '7天爆款选题一键生成' },
      { name: 'Antigravity Image Generator', desc: '本地直连 Google AI，一键生成高清图像' },
      { name: 'WeChat MP CN', desc: '私域流量数据监控专家' },
      { name: 'Social Media Scheduler', desc: '智能规划·一键分发·矩阵运营' },
      { name: 'AI Video Script Generator', desc: '一键生成完整视频脚本方案' },
      { name: 'Social Content Generator', desc: '社交媒体多平台内容策略与模板' },
      { name: 'seo-content-factory', desc: '关键词研究 + SEO 内容批量生成引擎' },
      { name: 'solo-landing-gen', desc: '着陆页内容生成 — hero/CTA/SEO 元标记' },
      { name: 'write-my-blog', desc: '自助博客创建、管理与发布' },
      { name: 'humanize-ai-text', desc: '绕过 AI 检测，让 AI 文本更像人写的' },
    ]
  },
  {
    name: '📊 产品与商业',
    id: '商业',
    skills: [
      { name: 'Interview Simulator', desc: '全岗位 AI 面试官，精准模拟实战演练' },
      { name: 'Image Cog', desc: '多模型智能图像生成，角色一致更专业' },
      { name: 'Marketing Strategy PMM', desc: 'SaaS 产品定位与上市策略专家' },
      { name: 'copywriter', desc: '产品文案写作公式库' },
      { name: 'Demo Video Creator', desc: '自动化录制专业产品演示视频' },
      { name: 'Video Cog', desc: '4分钟 AI 长视频，一提示全自动生成' },
      { name: 'Reddit Insights', desc: 'Reddit 语义搜索·真实用户洞察' },
      { name: 'AdMapix', desc: '全球广告情报与竞品分析专家' },
      { name: 'PollyReach', desc: 'AI 代理的专属电话助手' },
      { name: 'Free Ride', desc: '零成本 AI 智能调度，自动防限流' },
    ]
  },
  {
    name: '💰 理财炒股',
    id: '理财',
    skills: [
      { name: 'Stock Price Query', desc: '实时股票行情，三秒速查涨跌' },
      { name: 'Stock Analysis', desc: '8维度量化·热点雷达·谣言早捕' },
      { name: 'Stock Watcher', desc: 'A 股自选股管理·同花顺实时行情' },
      { name: 'Stock Market Pro', desc: '专业级股票分析与可视化工具' },
      { name: 'Yahoo Finance', desc: '零门槛股票数据命令行工具' },
      { name: 'Crypto Market Data', desc: '零密钥实时金融数据引擎' },
      { name: 'Stock Info Explorer', desc: 'Yahoo Finance 专业级股票分析工具' },
      { name: 'akshare-stock', desc: 'A 股量化数据一站式获取' },
    ]
  },
  {
    name: '🧬 赛博人类 & 生活',
    id: '生活',
    skills: [
      { name: 'explain-code', desc: '代码可视化讲解专家' },
      { name: 'ADHD Assistant', desc: 'ADHD 友好型生活管理专家' },
      { name: 'lokuli-booking', desc: '本地生活服务智能预订助手' },
      { name: 'netatmo', desc: '智能恒温与环境监测专家' },
      { name: 'personal-assistant', desc: '极简高效的每日生活规划师' },
      { name: 'Daily Rhythm', desc: '自动化生活节奏，每日从容掌控' },
      { name: 'youtube-instant-article', desc: 'YouTube 秒变 Telegraph 图文文章' },
      { name: 'Financial Search Engine', desc: '自然语言搜全网财经资讯' },
    ]
  },
  {
    name: '🛡️ 安全 & 规范',
    id: '安全',
    skills: [
      { name: 'cls-certify', desc: '企业级 Skill 安全认证专家（CLS）' },
      { name: 'skill-vetter', desc: 'AI 技能安装前安全审查权威指南' },
      { name: 'skill-creator', desc: 'Claude 技能开发标准化工具链' },
    ]
  },
  {
    name: '🎭 人设 & 方法论',
    id: '人设',
    skills: [
      { name: '名人方法论（套装）', desc: 'steve-jobs / paul-graham / naval / ilya 等 34+ 名人心法' },
      { name: 'AGI 思想框架（套装）', desc: 'first-principles / inversion / system-thinking 等 34 个框架' },
      { name: '思想家（套装）', desc: 'Agent Church / daily-stoic / wisdom-coach 等 36 位思想家' },
      { name: '趣味人设（套装）', desc: 'SOUL.MD / character-design / otaku-wiki 等多元人设' },
    ]
  },
  {
    name: '📦 系统 & 工具',
    id: '系统',
    skills: [
      { name: 'cocoloop', desc: 'Skill 安装管理器 — 从远程 ZIP 源安装/更新技能' },
      { name: 'mcporter', desc: 'MCP 服务器一站式管理终端' },
      { name: 'context-optimizer', desc: '上下文窗口优化管理' },
      { name: 'token-optimizer', desc: 'Token 使用成本优化' },
      { name: 'openclaw-mission-control', desc: 'OpenClaw 远程管理与监控' },
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
