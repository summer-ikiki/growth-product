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
  title: "Zhe Chen | 内容社区增长产品作品集",
  description: "陈喆的内容社区增长产品作品集：内容平台洞察、创作者生态、北美校园/社群增长、AI-native 工作流与增长产品决策。",
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
    zh: ["匹配点", "优势", "增长路径", "案例", "证据", "方法", "联系"],
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
    zh: "内容社区增长产品概览",
  },
  {
    selector: ".hero .eyebrow",
    mode: "text",
    zh: "内容社区增长产品作品集",
  },
  {
    selector: ".hero h1",
    mode: "text",
    zh: "内容社区增长产品搭建者",
  },
  {
    selector: ".hero .lede",
    mode: "html",
    zh: "我擅长把 <strong>内容平台洞察</strong>、<strong>创作者生态</strong>、北美校园/社群获客、<strong>0 到 1 产品定义</strong>和 <strong>AI-native 工作流</strong>，拆成可测试、可追踪、可复用的增长闭环。",
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
      '<i data-lucide="chart-no-axes-combined"></i> 内容社区增长',
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
    zh: "把内容洞察、创作者渠道、AI 工作流和产品判断连成增长闭环。",
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
      '在 DITTO 通过 <strong>校园、社群、合作与线下到线上渠道</strong>推动用户增长。',
      '<strong>活动报名/注册</strong>覆盖 733 所美国高校，证明校园增长的规模化能力。',
      '<strong>RED 曝光</strong>转化为 1,000 个精准报名，证明内容到转化的判断力。',
      '沉淀 RED、TikTok、Instagram 上的 <strong>创作者/KOL 资源</strong>，能直接服务内容平台增长。',
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
    zh: "如果内容平台要找一个既懂内容、又能把增长落地的人，我的证据主要在这四类。",
  },
  {
    selector: ".fit-grid article h3",
    mode: "text",
    zh: ["能做增长判断", "能从 0 到 1 定义产品", "懂内容驱动增长", "能用 AI 搭工作流"],
  },
  {
    selector: ".fit-grid article p",
    mode: "html",
    zh: [
      '做过校园增长系统、品牌合作、<strong>UTM 渠道质量追踪</strong>和高转化社群渠道，不只是做曝光，也能判断哪里值得继续投入。',
      '从 PandaPal 的 <strong>BP/PRD/BRD</strong>、<strong>500+ 调研反馈</strong>到小程序早期体验路径，能把模糊需求收敛成可启动的产品方案。',
      'RED 账号从 <strong>0 到 7K+</strong>，首篇笔记 <strong>1M 曝光</strong>，<strong>100K+ 社群触达</strong>，证明我对 RED/TikTok/知乎/微博的内容机制有实战体感。',
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
    zh: "我的优势不是单点做营销活动，而是把内容、渠道、产品路径和数据复盘连成闭环。",
  },
  {
    selector: "#why .section-heading.split > p:last-child",
    mode: "html",
    zh: "我适合做那些增长高度依赖 <strong>内容发现、社区信任、创作者供给和用户激活</strong> 的产品。",
  },
  {
    selector: ".why-grid h3",
    mode: "html",
    zh: [
      '<i data-lucide="compass"></i> 真正懂平台语感',
      '<i data-lucide="route"></i> 熟悉北美获客场景',
      '<i data-lucide="workflow"></i> 能把营销动作产品化',
    ],
  },
  {
    selector: ".why-grid p",
    mode: "text",
    zh: [
      "我既做过创作者，也做过运营和产品搭建，理解 RED/TikTok 式分发里的选题、钩子、信任信号、评论、收藏、社群转化和创意迭代。",
      "我做过校园网络、学生社群、创作者/KOL 资源、品牌合作、本地活动、付费媒体和线下到线上漏斗，知道北美年轻用户从哪里被触达。",
      "我能把看起来零散的增长动作拆成用户路径、MVP 取舍、新用户引导 CTA、生命周期触达、渠道质量追踪和可复用 AI 工作流。",
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
    zh: "我不是只会投放或发内容，而是真的理解内容为什么会被看见、被信任、被转化。",
  },
  {
    selector: ".platform-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些平台成绩说明我对 <strong>内容机制</strong> 的理解不是旁观者视角，而是来自真实创作、真实运营和真实增长结果。",
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
    zh: "DITTO 北美校园增长：从线下注意力到产品激活。",
  },
  {
    selector: "#journey .section-heading.split > p:last-child",
    mode: "html",
    zh: "这个案例最能说明我的工作方式：不只是做活动，而是把品牌合作、校园注意力、<strong>线下曝光</strong>、移动端新用户引导、社群激活、<strong>生命周期触达</strong>和数据追踪连成一套增长产品系统。",
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
      '校园海报、本地活动、合作渠道和学生社群不是单纯做声量，而是在真实场景里制造 <strong>需求信号</strong>。',
      '<strong>学校定制页面</strong>和 `Message Ditto` CTA 降低用户进入 iMessage/SMS 新用户引导前的理解成本。',
      '通过邮箱验证、头像/资料设置、<strong>每周匹配推送</strong>和分层召回，把用户推向第一次感知产品价值。',
      '<strong>UTM 和渠道质量追踪</strong>帮助判断哪些社群和触点更高意图，并把重复活动沉淀成增长打法。',
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
    zh: "我希望面试官看到的是：我不只会执行，还会看 <strong>用户状态</strong>、摩擦点、渠道质量和首次价值时刻，再把它转化成产品路径与工作流决策。",
  },
  {
    selector: ".decision-card h3",
    mode: "text",
    zh: ["把线下注意力转成可衡量激活", "把分散学生需求收敛成 MVP 范围"],
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
    zh: "这些经历证明我能从内容、产品、渠道和 AI 工作流四个方向做增长。",
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
      "付费与本地增长",
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
    zh: "证据墙",
  },
  {
    selector: "#proof h2",
    mode: "text",
    zh: "不只讲经历，也给出能被点开的作品证据。",
  },
  {
    selector: "#proof .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些证据帮助面试官快速判断：我做过真实产品、真实增长、真实内容平台成绩，也能用 <strong>AI 工作流</strong>把方法沉淀下来。",
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
      '调研证据、<strong>BP/PRD/BRD</strong>、原型方向、小程序早期体验，以及生活方式/社交产品模块规划。',
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
    zh: "我的工作方式：先判断用户为什么动，再设计增长动作怎么持续。",
  },
  {
    selector: "#systems .section-heading.split > p:last-child",
    mode: "html",
    zh: "DITTO、PandaPal、SWAP 和 ENCMOBILE 背后的共同方法是：先 <strong>定义用户状态</strong>，识别 <strong>转化时刻</strong>，再设计渠道、创意、产品路径和数据复盘，最后沉淀成 <strong>可复用工作流</strong>。",
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
      '从 RED 评论、<strong>创作者质量</strong>、校园扫码、学校级转化、社群问题、付费媒体表现和线下社交证明里找增长信号。',
      '把信号转成 <strong>用户路径</strong>、MVP 模块、新用户引导 CTA、创作者评分表、UTM 系统、PostHog 事件、DPU 文档和 <strong>AI 辅助内部工具</strong>。',
      '通过实验记录、分层跟进、活动报告、<strong>单个报名成本</strong>、内容质量和续约决策，反向输入产品路线图。',
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
    zh: "内容审美和镜头判断，是我区别于普通增长候选人的地方。",
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
    zh: "我适合需要内容判断、增长落地和 AI 工作流能力的内容平台团队。",
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
    zh: ["Zhe Chen | 内容社区增长产品作品集", "洛杉矶 / Los Angeles, CA"],
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
