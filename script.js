const refreshIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

refreshIcons();

const metaDescription = document.querySelector('meta[name="description"]');
const initialMeta = {
  lang: document.documentElement.lang || "en",
  title: document.title,
  description: metaDescription ? metaDescription.getAttribute("content") : "",
};

const zhMeta = {
  lang: "zh-Hans",
  title: "Zhe Chen | 增长产品与增长测量系统作品集",
  description: "陈喆的增长产品作品集：内容平台洞察、创作者生态、北美校园/社群增长、增长测量/归因意识、AI-native 工作流与增长产品决策。",
};

const translations = [
  {
    selector: ".topbar",
    attr: "aria-label",
    zh: "主导航",
  },
  {
    selector: ".brand",
    attr: "aria-label",
    zh: "Zhe Chen 首页",
  },
  {
    selector: ".navlinks",
    attr: "aria-label",
    zh: "页面板块",
  },
  {
    selector: ".navlinks a",
    mode: "text",
    zh: ["匹配点", "优势", "增长路径", "案例", "作品", "方法", "联系"],
  },
  {
    selector: ".top-actions",
    attr: "aria-label",
    zh: "操作链接",
  },
  {
    selector: ".language-switch",
    attr: "aria-label",
    zh: "语言切换",
  },
  {
    selector: ".top-actions .icon-button",
    attr: "aria-label",
    zh: ["打开简历 PDF", "LinkedIn 主页", "发送邮件"],
  },
  {
    selector: ".hero",
    attr: "aria-label",
    zh: "增长产品与增长测量系统概览",
  },
  {
    selector: ".hero .eyebrow",
    mode: "text",
    zh: "内容增长 + 增长测量系统",
  },
  {
    selector: ".hero h1",
    mode: "text",
    zh: "内容社区增长产品搭建者",
  },
  {
    selector: ".hero .lede",
    mode: "html",
    zh: "我擅长把 <strong>内容平台洞察</strong>、<strong>创作者生态</strong>、北美校园/社群获客、<strong>0 到 1 产品定义</strong>、<strong>UTM / 渠道质量追踪</strong>、ROI 复盘和 <strong>AI-native 工作流</strong>，拆成可测试、可追踪、可复用的增长闭环。",
  },
  {
    selector: ".hero-pills",
    attr: "aria-label",
    zh: "核心定位",
  },
  {
    selector: ".hero-pills span",
    mode: "html",
    zh: [
      '<i data-lucide="chart-no-axes-combined"></i> 增长产品系统',
      '<i data-lucide="scan-line"></i> 归因意识与数据复盘',
      '<i data-lucide="sparkles"></i> AI 工作流搭建',
      '<i data-lucide="users-round"></i> 创作者生态运营',
    ],
  },
  {
    selector: ".contact-strip",
    attr: "aria-label",
    zh: "联系方式",
  },
  {
    selector: ".hero .actions .button",
    mode: "html",
    zh: [
      '<i data-lucide="file-text"></i> 简历 PDF',
      '<i data-lucide="route"></i> 增长案例',
      '<span class="brand-glyph" aria-hidden="true">in</span> LinkedIn',
      '<i data-lucide="mail"></i> 邮件',
    ],
  },
  {
    selector: ".hero-board",
    attr: "aria-label",
    zh: "增长系统概览",
  },
  {
    selector: ".hero-visual img",
    attr: "alt",
    zh: "AI 辅助创作者与增长工作流视觉图",
  },
  {
    selector: ".hero-visual figcaption",
    mode: "text",
    zh: "把内容洞察、创作者渠道、增长测量、AI 工作流和产品判断连成增长闭环。",
  },
  {
    selector: ".mini-funnel",
    attr: "aria-label",
    zh: "从校园海报到激活漏斗",
  },
  {
    selector: ".mini-funnel div span",
    mode: "text",
    zh: ["海报 / QR", "Message Ditto", "资料设置", "UTM / 事件"],
  },
  {
    selector: ".mini-funnel div strong",
    mode: "text",
    zh: ["线下信号", "CTA 测试", "激活", "测量闭环"],
  },
  {
    selector: ".signal-band span",
    mode: "html",
    zh: [
      '在 DITTO 通过 <strong>校园、社群、合作与线下到线上渠道</strong>推动用户增长。',
      '<strong>活动报名/注册</strong>覆盖 733 所美国高校，呈现校园增长的规模化能力。',
      '高转化社群渠道的 <strong>邮箱验证率</strong>，约为平台平均值 20x。',
      '通过付费媒体、本地合作、看板和 ROI 复盘实现 <strong>用户增长 / 营收增长</strong>。',
    ],
  },
  {
    selector: "#fit .section-kicker",
    mode: "text",
    zh: "匹配点",
  },
  {
    selector: "#fit h2",
    mode: "text",
    zh: "围绕全球增长团队需要的能力，我的经验集中在这四类。",
  },
  {
    selector: ".fit-grid article h3",
    mode: "text",
    zh: ["能搭增长判断与测量系统", "能从 0 到 1 定义产品", "懂内容驱动获客", "能用 AI 搭工作流"],
  },
  {
    selector: ".fit-grid article p",
    mode: "html",
    zh: [
      '搭建校园增长系统、品牌合作、<strong>UTM 渠道质量追踪</strong>、邮箱验证信号和 ROI 复盘，将曝光、激活和投入判断放在同一套增长框架里。',
      '从 PandaPal 的 <strong>BP/PRD/BRD</strong>、<strong>500+ 调研反馈</strong>到小程序早期体验路径，能把模糊需求收敛成可启动的产品方案。',
      'RED 账号从 <strong>0 到 7K+</strong>，首篇笔记 <strong>1M 曝光</strong>，<strong>100K+ 社群触达</strong>，沉淀了从内容分发到获客和社群转化的实战经验。',
      '能 <strong>vibe-code InfluencerOps</strong>、RED 爆款文案 Agent、DPU 和活动工作流，把重复增长动作变成 <strong>AI 辅助系统</strong>。',
    ],
  },
  {
    selector: "#why .section-kicker",
    mode: "text",
    zh: "核心优势",
  },
  {
    selector: "#why h2",
    mode: "text",
    zh: "我擅长把内容、渠道、产品路径和增长测量连成闭环。",
  },
  {
    selector: "#why .section-heading.split > p:last-child",
    mode: "html",
    zh: "这类产品的增长高度依赖 <strong>内容发现、社区信任、创作者供给、用户激活和测量质量</strong>，也正是我过去持续实践的交叉领域。",
  },
  {
    selector: ".why-grid h3",
    mode: "html",
    zh: [
      '<i data-lucide="compass"></i> 真正懂平台语感',
      '<i data-lucide="route"></i> 熟悉北美获客场景',
      '<i data-lucide="workflow"></i> 能把增长测量产品化',
    ],
  },
  {
    selector: ".why-grid p",
    mode: "text",
    zh: [
      "我既做过创作者，也做过运营和产品搭建，理解 RED/TikTok 式分发里的选题、钩子、信任信号、评论、收藏、社群转化和创意迭代。",
      "我做过校园网络、学生社群、创作者/KOL 资源、品牌合作、本地活动、付费媒体和线下到线上漏斗，知道北美年轻用户从哪里被触达。",
      "我能把看起来零散的增长动作拆成用户路径、MVP 取舍、新用户引导 CTA、生命周期触达、UTM / 渠道质量追踪和可复用 AI 工作流。",
    ],
  },
  {
    selector: ".platform-section .section-kicker",
    mode: "text",
    zh: "平台感",
  },
  {
    selector: ".platform-section h2",
    mode: "text",
    zh: "我的平台理解来自内容创作、运营转化与产品化实践。",
  },
  {
    selector: ".platform-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些平台成绩来自真实创作、真实运营和真实增长结果，呈现了我对 <strong>内容机制</strong> 的实战理解。",
  },
  {
    selector: ".platform-grid span",
    mode: "html",
    zh: [
      'RED 首篇笔记曝光，带来 <strong>14x 同类平均收入</strong>和 <strong>1,000 个精准报名</strong>。',
      'TikTok 粉丝，以及来自创作者型心理健康内容的 <strong>400K+ 点赞</strong>。',
      '知乎累计阅读，来自 <strong>长内容知识表达</strong>和社交内容分发。',
      '单条微博阅读，体现 <strong>跨平台热点敏感度</strong>。',
    ],
  },
  {
    selector: "#journey .section-kicker",
    mode: "text",
    zh: "主案例",
  },
  {
    selector: "#journey h2",
    mode: "text",
    zh: "DITTO 北美校园增长：从线下注意力到产品激活。",
  },
  {
    selector: "#journey .section-heading.split > p:last-child",
    mode: "html",
    zh: "这个案例展示了我如何把品牌合作、校园注意力、<strong>线下曝光</strong>、移动端新用户引导、社群激活、<strong>生命周期触达</strong>、归因意识和数据追踪连成一套增长产品系统。",
  },
  {
    selector: ".journey-map h3",
    mode: "text",
    zh: ["制造真实触点", "降低理解门槛", "推向首次价值", "沉淀增长判断"],
  },
  {
    selector: ".journey-map p",
    mode: "html",
    zh: [
      '校园海报、本地活动、合作渠道和学生社群在真实场景里形成 <strong>需求信号</strong>。',
      '<strong>学校定制页面</strong>和 `Message Ditto` CTA 降低用户进入 iMessage/SMS 新用户引导前的理解成本。',
      '通过邮箱验证、头像/资料设置、<strong>每周匹配推送</strong>和分层召回，把用户推向第一次感知产品价值。',
      '<strong>UTM 和渠道质量追踪</strong>用于识别更高意图的社群和触点，避免只看原始流量规模，并把重复活动沉淀成增长打法。',
    ],
  },
  {
    selector: ".journey-proof span",
    mode: "html",
    zh: [
      '累计新增用户，同时规模化 <strong>校园和社群增长</strong>。',
      '高转化社群渠道的 <strong>邮箱验证率</strong>，约为平台平均值 20x。',
      '通过可复用活动和激活 playbook，<strong>合作方 onboarding 时间减少</strong>。',
    ],
  },
  {
    selector: ".decision-section .section-kicker",
    mode: "text",
    zh: "产品决策",
  },
  {
    selector: ".decision-section h2",
    mode: "text",
    zh: "我如何把增长问题拆成产品判断。",
  },
  {
    selector: ".decision-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些案例展示了我如何从 <strong>用户状态</strong>、摩擦点、渠道质量、首次价值时刻和测量缺口出发，形成产品路径、追踪逻辑与工作流决策。",
  },
  {
    selector: ".decision-card h3",
    mode: "text",
    zh: ["把线下注意力转成可衡量激活", "把分散学生需求收敛成 MVP 范围", "把付费/本地渠道转成获客决策"],
  },
  {
    selector: ".decision-card dt",
    mode: "text",
    zh: ["用户状态", "摩擦点", "决策", "复盘", "用户状态", "摩擦点", "决策", "复盘", "用户状态", "摩擦点", "决策", "复盘"],
  },
  {
    selector: ".decision-card dd",
    mode: "text",
    zh: [
      "学生看到了校园海报或合作信号，但还没有真正理解 DITTO 的价值。",
      "用户需要低成本进入、完成资料设置，并尽快看到第一个价值点。",
      "连接学校定制页、Message Ditto CTA、资料设置、分层 follow-up 和 UTM 追踪。",
      "渠道质量和社群意图比单纯流量规模更重要。",
      "海外学生在本地发现、租房、二手、服务和社区信任上都有分散需求。",
      "信任、内容供给、社区密度和商业化路径都会影响第一版应该先做什么。",
      "优先定义 Panda Map、Panda Digest、Panda Mall、早期小程序路径和私域转化。",
      "RED/TikTok 内容可以先验证需求，再扩大完整产品体验。",
      "学生市场需求来自付费搜索/社媒、网站触点、线下合作方和校园组织。",
      "渠道表现需要把预算节奏、创意质量、转化信号和本地合作背景放在一起看。",
      "搭建覆盖付费媒体、网站触点、线下合作和 Tableau 看板的渠道表现复盘系统。",
      "当 ROI、转化质量和本地场景被放在同一套获客系统里看，增长决策会更准确。",
    ],
  },
  {
    selector: "#cases .section-kicker",
    mode: "text",
    zh: "增长案例",
  },
  {
    selector: "#cases h2",
    mode: "text",
    zh: "代表性案例覆盖内容增长、产品定义、渠道测量与 AI 工作流。",
  },
  {
    selector: "#cases .case-card h3",
    mode: "text",
    zh: [
      "北美校园增长系统",
      "0 到 1 海外学生生活产品",
      "AI 创作者增长工作台",
      "RED 爆款文案 Agent",
      "社交产品冷启动",
      "付费与本地增长测量",
    ],
  },
  {
    selector: "#cases .case-card p",
    mode: "html",
    zh: [
      '搭建可复制增长系统，覆盖 <strong>战略品牌合作</strong>、校园海报、ambassador、学生社群、本地活动、<strong>onboarding 工作流</strong>、UTM 追踪与渠道质量复盘。',
      '围绕海外学生生活方式需求创立并定义 PandaPal，覆盖 <strong>产品模块</strong>、用户调研、<strong>MVP 范围</strong>、RED/TikTok 增长和社区/商业闭环。',
      '<strong>Vibe-coded</strong> 创作者增长工作流原型，覆盖找人、评分、触达、内容审核、CPM、报名、转化、报告与 <strong>续约决策</strong>。',
      '把 <strong>RED 平台内容规律</strong>转成 Coze 工作流，用于钩子、标题、角度、语气与迭代，并登上 RED 文案工具榜 <strong>#1</strong>。',
      '联合创立技能交换社交产品，并通过网站、demo 视频、<strong>社交视频材料</strong>和线下激活，把 <strong>产品教育</strong>做成增长闭环。',
      '通过 <strong>付费媒体</strong>、本地合作、网站触点、校园获客、<strong>Tableau KPI 看板</strong>、预算节奏和 ROI 复盘推动学生市场增长。',
    ],
  },
  {
    selector: "#cases .case-card ul li",
    mode: "text",
    zh: [
      "用户增长 800%，累计用户 150K+。",
      "活动报名/注册 100K+，覆盖 733 所美国高校。",
      "高转化社群渠道邮箱验证率 26.8%。",
      "Panda Map、Panda Digest、Panda Mall。",
      "500+ 调研反馈，BP/PRD/BRD，原型和小程序早期体验材料。",
      "100K+ 社群触达，2,000+ 创作者/KOL 资源。",
    ],
  },
  {
    selector: "#cases .text-link",
    mode: "text",
    zh: ["打开 playbook", "打开 SWAP"],
  },
  {
    selector: "#cases .stat-line span",
    mode: "text",
    zh: ["用户", "对话", "用户", "营收"],
  },
  {
    selector: "#proof .section-kicker",
    mode: "text",
    zh: "作品与成果",
  },
  {
    selector: "#proof h2",
    mode: "text",
    zh: "可验证的产品、增长与内容平台成果。",
  },
  {
    selector: "#proof .section-heading.split > p:last-child",
    mode: "html",
    zh: "以下材料展示了我在产品搭建、增长系统、内容平台成绩与 <strong>AI 工作流</strong>沉淀上的实际产出。",
  },
  {
    selector: "#proof .proof-card h3",
    mode: "text",
    zh: [
      "InfluencerOps Playbook",
      "PandaPal 产品材料",
      "SWAP 产品启动",
      "爆款文案 AI Agent",
      "RED / TikTok / 知乎 / 微博",
      "ENCMOBILE 增长系统",
    ],
  },
  {
    selector: "#proof .proof-card p",
    mode: "html",
    zh: [
      '<strong>Vibe-coded 创作者增长工作流</strong>，用于找人、评分、触达、内容审核、活动报告与续约决策。',
      '调研材料、<strong>BP/PRD/BRD</strong>、原型方向、小程序早期体验，以及生活方式/社交产品模块规划。',
      '技能交换社交产品，包含公开网站、<strong>产品教育</strong>、demo 素材、社交视频材料与线下激活内容。',
      '把 <strong>RED 内容规律</strong>转成 Coze 工作流，并登上 RED 文案工具榜 <strong>#1</strong>。',
      'RED 首篇笔记 <strong>1M 曝光</strong>，TikTok <strong>24K+ 粉丝</strong>，知乎 <strong>30M+ 阅读</strong>，单条微博 <strong>6M 阅读</strong>。',
      '通过 <strong>付费媒体</strong>、本地合作、校园渠道、网站触点、<strong>Tableau 看板</strong>、预算节奏和 ROI 复盘推动学生市场获客。',
    ],
  },
  {
    selector: "#proof .text-link",
    mode: "text",
    zh: ["查看项目", "查看材料", "查看 SWAP", "查看网站"],
  },
  {
    selector: "#proof .stat-line span",
    mode: "text",
    zh: ["用户", "对话"],
  },
  {
    selector: ".case-topline span",
    mode: "text",
    zh: [
      "DITTO.AI",
      "PandaPal",
      "ENCMOBILE",
      "DITTO.AI",
      "PandaPal",
      "InfluencerOps",
      "RED Agent",
      "SWAP",
      "ENCMOBILE",
      "AI 工作流",
      "0 到 1 产品",
      "社交产品",
      "RED Agent",
      "平台影响力",
      "付费 + 本地增长",
    ],
  },
  {
    selector: "#systems .section-kicker",
    mode: "text",
    zh: "方法框架",
  },
  {
    selector: "#systems h2",
    mode: "text",
    zh: "从用户状态出发，设计可测量、可复用的增长动作。",
  },
  {
    selector: "#systems .section-heading.split > p:last-child",
    mode: "html",
    zh: "DITTO、PandaPal、SWAP 和 ENCMOBILE 背后的共同方法是：先 <strong>定义用户状态</strong>，识别 <strong>转化时刻</strong>，再设计渠道、创意、产品路径、ROI / 渠道质量复盘，最后沉淀成 <strong>可复用工作流</strong>。",
  },
  {
    selector: ".system-column h3",
    mode: "html",
    zh: [
      '<i data-lucide="search-check"></i> 用户 + 渠道信号',
      '<i data-lucide="workflow"></i> 增长动作产品化',
      '<i data-lucide="repeat-2"></i> 复盘闭环',
    ],
  },
  {
    selector: ".system-column p",
    mode: "html",
    zh: [
      '从 RED 评论、<strong>创作者质量</strong>、校园扫码、学校级转化、邮箱验证、社群问题、付费媒体表现和线下社交反馈里提取增长信号。',
      '把信号转成 <strong>用户路径</strong>、MVP 模块、新用户引导 CTA、创作者评分表、UTM 系统、事件/追踪逻辑、DPU 文档和 <strong>AI 辅助内部工具</strong>。',
      '通过实验记录、分层跟进、活动报告、<strong>单个报名成本</strong>、ROI 复盘、渠道质量分析和续约决策，反向输入产品路线图。',
    ],
  },
  {
    selector: ".creative-section .section-kicker",
    mode: "text",
    zh: "创意判断",
  },
  {
    selector: ".creative-section h2",
    mode: "text",
    zh: "内容审美和镜头判断，可直接服务内容平台的创意测试与增长实验。",
  },
  {
    selector: ".creative-layout > div:first-child p",
    mode: "html",
    zh: [
      '我的导演和视频制作背景有价值，因为内容平台增长非常依赖快速的创意判断：<strong>故事钩子</strong>、视觉节奏、镜头语言、<strong>创作者 brief</strong>、场景设计、包装、剪辑模板和反馈闭环。',
      'Legend Co-Shooting 把这件事进一步产品化：剧本/分镜导入、场景拆解、shot list、拍摄日程、运镜指导、剪辑模板和 <strong>创作者协作系统</strong>。',
    ],
  },
  {
    selector: ".creative-stats span",
    mode: "text",
    zh: [
      "《山海》上线首周 Bilibili 播放。",
      "腾讯视频编剧综艺作品累计播放。",
      "专业创作者社群。",
    ],
  },
  {
    selector: "#contact .section-kicker",
    mode: "text",
    zh: "联系",
  },
  {
    selector: "#contact h2",
    mode: "text",
    zh: "面向需要内容判断、增长落地、测量意识和 AI 工作流能力的内容平台团队。",
  },
  {
    selector: "#contact > p:not(.section-kicker)",
    mode: "html",
    zh: "我的核心能力组合是：<strong>增长产品</strong> + 整合营销、<strong>RED/TikTok 内容机制</strong>、北美校园/社群渠道、创作者生态系统、<strong>增长测量 / 归因意识</strong>、<strong>AI-native 工作流</strong>和创意表现判断。",
  },
  {
    selector: "#contact .actions .button",
    mode: "html",
    zh: [
      '<i data-lucide="mail"></i> 邮件',
      '<span class="brand-glyph" aria-hidden="true">in</span> LinkedIn',
      '<i data-lucide="external-link"></i> InfluencerOps',
    ],
  },
  {
    selector: ".footer span",
    mode: "text",
    zh: ["Zhe Chen | 增长产品与增长测量系统作品集", "洛杉矶 / Los Angeles, CA"],
  },
];

const getValue = (node, item) => {
  if (item.attr) {
    return node.getAttribute(item.attr) || "";
  }
  return item.mode === "html" ? node.innerHTML : node.textContent;
};

const setValue = (node, item, value) => {
  if (item.attr) {
    node.setAttribute(item.attr, value);
    return;
  }

  if (item.mode === "html") {
    node.innerHTML = value;
  } else {
    node.textContent = value;
  }
};

translations.forEach((item) => {
  item.nodes = Array.from(document.querySelectorAll(item.selector));
  item.en = item.nodes.map((node) => getValue(node, item));
});

const langButtons = Array.from(document.querySelectorAll("[data-lang-option]"));

const setLanguage = (language) => {
  const isZh = language === "zh";
  const meta = isZh ? zhMeta : initialMeta;

  document.documentElement.lang = meta.lang;
  document.title = meta.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", meta.description);
  }

  translations.forEach((item) => {
    const values = isZh ? item.zh : item.en;
    item.nodes.forEach((node, index) => {
      const value = Array.isArray(values) ? values[index] : values;
      if (typeof value === "string") {
        setValue(node, item, value);
      }
    });
  });

  langButtons.forEach((button) => {
    const active = button.dataset.langOption === language;
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    window.localStorage.setItem("zheGrowthProductLang", language);
  } catch (error) {
    // Browsers can block localStorage in some privacy modes.
  }

  refreshIcons();
};

let savedLanguage = "en";
try {
  savedLanguage = window.localStorage.getItem("zheGrowthProductLang") || "en";
} catch (error) {
  savedLanguage = "en";
}

setLanguage(savedLanguage === "zh" ? "zh" : "en");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langOption === "zh" ? "zh" : "en");
  });
});

const metricCards = document.querySelectorAll(".signal-band article, .case-card, .fit-grid article");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  metricCards.forEach((card) => observer.observe(card));
} else {
  metricCards.forEach((card) => card.classList.add("is-visible"));
}
