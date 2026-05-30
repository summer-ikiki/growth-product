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
  title: "Zhe Chen | 内容型增长产品作品集",
  description: "陈喆的内容型增长产品作品集：0 到 1 产品、创作者生态、AI-native 工作流、创意表现与漏斗分析。",
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
    zh: ["适配", "定位", "路径", "案例", "证据", "方法", "联系"],
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
    zh: "内容型增长产品概览",
  },
  {
    selector: ".hero .eyebrow",
    mode: "text",
    zh: "内容型增长产品作品集",
  },
  {
    selector: ".hero h1",
    mode: "text",
    zh: "内容型社交平台增长产品搭建者",
  },
  {
    selector: ".hero .lede",
    mode: "html",
    zh: "我把 <strong>整合营销</strong>、<strong>RED/TikTok 内容机制</strong>、创作者生态、<strong>0 到 1 产品定义</strong>、北美获客渠道、<strong>AI-native 工作流原型</strong>、创意表现和 <strong>漏斗分析</strong>串成可复用的增长系统。",
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
      '<i data-lucide="sparkles"></i> AI-native 工作流',
      '<i data-lucide="users-round"></i> 创作者生态增长',
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
    zh: "内容洞察、创作者渠道、AI 工作流与产品决策。",
  },
  {
    selector: ".mini-funnel",
    attr: "aria-label",
    zh: "从校园海报到激活漏斗",
  },
  {
    selector: ".mini-funnel div span",
    mode: "text",
    zh: ["海报 / QR", "Message Ditto", "资料设置", "PostHog / UTM"],
  },
  {
    selector: ".mini-funnel div strong",
    mode: "text",
    zh: ["线下信号", "CTA 测试", "激活", "决策闭环"],
  },
  {
    selector: ".signal-band span",
    mode: "html",
    zh: [
      'DITTO 通过 <strong>校园、社群、合作与线下到线上渠道</strong>推动用户增长。',
      '<strong>活动报名/注册</strong>覆盖 733 所美国高校。',
      '<strong>RED 曝光</strong>转化为 1,000 个精准用户。',
      '沉淀 RED、TikTok、Instagram 上的 <strong>创作者/KOL 资源</strong>。',
    ],
  },
  {
    selector: "#fit .section-kicker",
    mode: "text",
    zh: "适配能力",
  },
  {
    selector: "#fit h2",
    mode: "text",
    zh: "内容型社交平台需要什么，我的证据在哪里。",
  },
  {
    selector: ".fit-grid article h3",
    mode: "text",
    zh: ["增长决策系统", "0 到 1 产品所有权", "内容驱动增长", "AI-native 工作流"],
  },
  {
    selector: ".fit-grid article p",
    mode: "html",
    zh: [
      '校园增长系统、战略品牌合作、<strong>UTM 渠道质量追踪</strong>、高转化社群渠道与 <strong>DPU 知识检索</strong>。',
      'PandaPal 产品模块、<strong>BP/PRD/BRD</strong>、<strong>500+ 调研反馈</strong>、早期小程序路径与 SWAP 产品教育闭环。',
      'RED 账号从 <strong>0 到 7K+</strong>，首篇笔记 <strong>1M 曝光</strong>，<strong>100K+ 社群触达</strong>，覆盖 RED、TikTok、知乎、微博等平台。',
      '<strong>Vibe-coded InfluencerOps</strong>、RED 爆款文案 Agent、DPU、活动工作流，以及面向增长团队的 <strong>AI 辅助内部产品</strong>。',
    ],
  },
  {
    selector: "#why .section-kicker",
    mode: "text",
    zh: "为什么是内容型社交增长",
  },
  {
    selector: "#why h2",
    mode: "text",
    zh: "我的优势在于把内容直觉转化为产品增长。",
  },
  {
    selector: "#why .section-heading.split > p:last-child",
    mode: "html",
    zh: "我适合那些由 <strong>内容发现、信任机制、社区行为、创作者供给与激活闭环</strong>共同决定增长的平台。",
  },
  {
    selector: ".why-grid h3",
    mode: "html",
    zh: [
      '<i data-lucide="compass"></i> 平台原生判断',
      '<i data-lucide="route"></i> 北美增长渠道',
      '<i data-lucide="workflow"></i> 产品驱动增长执行',
    ],
  },
  {
    selector: ".why-grid p",
    mode: "text",
    zh: [
      "我从创作者、运营者和产品搭建者三个视角理解 RED/TikTok 式分发：选题、钩子、信任信号、评论、收藏、社群转化和创意迭代。",
      "我做过校园网络、学生社群、创作者/KOL 资源、品牌合作、本地活动、付费媒体和线下到线上的获客漏斗。",
      "我能把混乱的增长工作拆成用户路径、MVP 取舍、onboarding CTA、生命周期触达、渠道质量追踪和可复用的 AI-native 工作流。",
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
    zh: "不是只会管渠道，而是真的懂内容机制。",
  },
  {
    selector: ".platform-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些创作者/平台成绩说明我不是旁观者，而是从用户、创作者、运营者和产品搭建者视角理解 <strong>内容机制</strong>。",
  },
  {
    selector: ".platform-grid span",
    mode: "html",
    zh: [
      'RED 首篇笔记曝光，带来 <strong>14x 同类平均收入</strong>和 <strong>1,000 个精准报名</strong>。',
      'TikTok 粉丝，以及来自创作者型心理健康内容的 <strong>400K+ 点赞</strong>。',
      '知乎累计阅读，来自 <strong>长内容知识表达</strong>和社交内容分发。',
      '单条微博阅读，证明 <strong>跨平台热点敏感度</strong>。',
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
    zh: "DITTO 北美校园增长系统。",
  },
  {
    selector: "#journey .section-heading.split > p:last-child",
    mode: "html",
    zh: "这不是一个普通 campaign，而是一套 <strong>增长产品系统</strong>：把品牌合作、校园注意力、<strong>线下曝光</strong>、移动端 onboarding、社群激活、<strong>生命周期触达</strong>和数据追踪连起来。",
  },
  {
    selector: ".journey-map h3",
    mode: "text",
    zh: ["线下曝光", "落地页 + CTA", "资料设置 + 激活", "复盘闭环"],
  },
  {
    selector: ".journey-map p",
    mode: "html",
    zh: [
      '校园海报、本地活动、合作渠道和学生社群先制造 <strong>真实需求信号</strong>。',
      '<strong>学校定制页面</strong>和 `Message Ditto` CTA 降低用户进入 iMessage/SMS onboarding 前的理解成本。',
      '邮箱验证、头像/资料设置、<strong>每周匹配推送</strong>和分层召回，把用户推向第一次感知价值。',
      '<strong>UTM 和渠道质量追踪</strong>帮助识别更高意图来源，优先投入更强社群，并把重复活动沉淀成 playbook。',
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
    zh: "两个我如何做增长产品判断的快照。",
  },
  {
    selector: ".decision-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "重点不是“我做过活动”，而是我会看 <strong>用户状态</strong>、摩擦点、渠道质量和首次价值时刻，再把它转化成产品与工作流决策。",
  },
  {
    selector: ".decision-card h3",
    mode: "text",
    zh: ["把线下注意力转成可衡量激活", "从分散学生需求收敛到 MVP 范围"],
  },
  {
    selector: ".decision-card dt",
    mode: "text",
    zh: ["用户状态", "摩擦点", "决策", "复盘", "用户状态", "摩擦点", "决策", "复盘"],
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
    zh: "内容型社交增长的核心证据。",
  },
  {
    selector: "#cases .case-card h3",
    mode: "text",
    zh: [
      "北美校园增长系统",
      "0 到 1 生活方式 / 社交产品",
      "AI-native 创作者增长看板",
      "爆款文案 AI Agent",
      "社交产品启动",
      "付费 + 本地增长",
    ],
  },
  {
    selector: "#cases .case-card p",
    mode: "html",
    zh: [
      '搭建可复制增长系统，覆盖 <strong>战略品牌合作</strong>、校园海报、ambassador、学生社群、本地活动、<strong>onboarding 工作流</strong>与渠道质量追踪。',
      '围绕海外学生生活方式需求创立并定义 PandaPal，覆盖 <strong>产品模块</strong>、用户调研、<strong>MVP 范围</strong>、RED/TikTok 增长和社区/商业闭环。',
      '<strong>Vibe-coded</strong> 创作者增长工作流原型，覆盖找人、评分、触达、内容审核、CPM、报名、转化、报告与 <strong>续约决策</strong>。',
      '把 <strong>RED 平台内容规律</strong>转成 Coze 工作流，用于钩子、标题、角度、语气与迭代，并登上 RED 文案工具榜 <strong>#1</strong>。',
      '联合创立技能交换社交产品，并通过网站、demo 视频、<strong>社交视频证据</strong>和线下激活，把 <strong>产品教育</strong>做成增长闭环。',
      '通过 <strong>付费媒体</strong>、本地合作、网站触点、校园获客和 <strong>Tableau KPI 看板</strong>推动学生市场增长。',
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
      "500+ 调研反馈，BP/PRD/BRD，原型和小程序 early-access 材料。",
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
    zh: "证据墙",
  },
  {
    selector: "#proof h2",
    mode: "text",
    zh: "让增长故事变得可验证的作品与材料。",
  },
  {
    selector: "#proof .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些是简历背后的可点击证据：<strong>产品材料</strong>、<strong>在线工作流</strong>、社交产品启动、创作者工具、<strong>平台成绩</strong>和本地增长执行。",
  },
  {
    selector: "#proof .proof-card h3",
    mode: "text",
    zh: [
      "InfluencerOps Playbook",
      "PandaPal 产品材料",
      "SWAP 启动证据",
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
      '调研证据、<strong>BP/PRD/BRD</strong>、原型方向、小程序 early access，以及生活方式/社交产品模块规划。',
      '技能交换社交产品，包含公开网站、<strong>产品教育</strong>、demo 素材、社交视频证据与线下激活材料。',
      '把 <strong>RED 内容规律</strong>转成 Coze 工作流，并登上 RED 文案工具榜 <strong>#1</strong>。',
      'RED 首篇笔记 <strong>1M 曝光</strong>，TikTok <strong>24K+ 粉丝</strong>，知乎 <strong>30M+ 阅读</strong>，单条微博 <strong>6M 阅读</strong>。',
      '通过 <strong>付费媒体</strong>、本地合作、校园渠道、网站触点、<strong>Tableau 看板</strong>和 ROI 复盘推动学生市场获客。',
    ],
  },
  {
    selector: "#proof .text-link",
    mode: "text",
    zh: ["打开证据", "打开材料", "打开 SWAP", "打开网站"],
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
    zh: "我的工作方式",
  },
  {
    selector: "#systems h2",
    mode: "text",
    zh: "从用户状态到可复用增长系统。",
  },
  {
    selector: "#systems .section-heading.split > p:last-child",
    mode: "html",
    zh: "DITTO、PandaPal、SWAP 和 ENCMOBILE 背后的共同方法是：<strong>定义用户状态</strong>，识别 <strong>转化时刻</strong>，埋点渠道，包装创意，再把经验沉淀成 <strong>可复用工作流</strong>。",
  },
  {
    selector: ".system-column h3",
    mode: "html",
    zh: [
      '<i data-lucide="search-check"></i> 用户 + 渠道信号',
      '<i data-lucide="workflow"></i> 产品 / 工作流转译',
      '<i data-lucide="repeat-2"></i> 复盘闭环',
    ],
  },
  {
    selector: ".system-column p",
    mode: "html",
    zh: [
      'RED 评论、<strong>创作者质量</strong>、校园扫码、学校级转化、社群问题、付费媒体表现和线下社交证明。',
      '<strong>用户路径</strong>、MVP 模块、onboarding CTA、创作者评分表、UTM 系统、PostHog 事件、DPU 文档和 <strong>AI 辅助内部工具</strong>。',
      '实验记录、分层 follow-up、活动报告、<strong>cost per signup</strong>、内容质量、续约决策和 <strong>产品路线图输入</strong>。',
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
    zh: "内容审美也是增长产品输入。",
  },
  {
    selector: ".creative-layout > div:first-child p",
    mode: "html",
    zh: [
      '我的导演和视频制作背景有价值，因为内容型增长需要快速的创意判断：<strong>故事钩子</strong>、视觉节奏、镜头语言、<strong>创作者 brief</strong>、场景设计、包装、剪辑模板和反馈闭环。',
      'Legend Co-Shooting 把这件事产品化：剧本/分镜导入、场景拆解、shot list、拍摄日程、运镜指导、剪辑模板和 <strong>创作者协作系统</strong>。',
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
    zh: "面向内容型社交增长的候选人。",
  },
  {
    selector: "#contact > p:not(.section-kicker)",
    mode: "html",
    zh: "我最强的候选人画像是：<strong>增长产品</strong> + 整合营销、<strong>RED/TikTok 内容机制</strong>、北美校园/社群渠道、创作者生态系统、<strong>AI-native 工作流</strong>和创意表现判断。",
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
    zh: ["Zhe Chen | 内容型增长产品作品集", "洛杉矶 / Los Angeles, CA"],
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
