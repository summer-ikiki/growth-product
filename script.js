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
  title: "Zhe Chen | 增长产品与内容社区增长作品集",
  description: "陈喆的增长产品作品集：内容社区增长、北美用户增长、渠道归因、创作者生态与 AI 工作流落地。",
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
    zh: ["能力", "优势", "路径", "案例", "作品", "方法", "联系"],
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
    zh: "增长产品与内容社区增长概览",
  },
  {
    selector: ".hero .eyebrow",
    mode: "text",
    zh: "增长产品 | 内容社区增长 | 渠道归因",
  },
  {
    selector: ".hero h1",
    mode: "html",
    zh: "增长产品与<br />内容社区增长",
  },
  {
    selector: ".hero .lede",
    mode: "html",
    zh: "我擅长把 <strong>小红书/抖音内容机制</strong>、<strong>创作者生态</strong>、北美校园/社群获客、<strong>0 到 1 产品定义</strong>、<strong>渠道归因与 ROI 复盘</strong>、<strong>AI 工作流</strong>落到可追踪、可复用、可规模化的增长系统里。",
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
      '<i data-lucide="scan-line"></i> 渠道归因 / 数据复盘',
      '<i data-lucide="sparkles"></i> AI 工作流落地',
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
    zh: "把内容洞察、创作者渠道、渠道归因、AI 工作流和产品决策连成增长系统。",
  },
  {
    selector: ".mini-funnel",
    attr: "aria-label",
    zh: "从校园海报到激活漏斗",
  },
  {
    selector: ".mini-funnel div span",
    mode: "text",
    zh: ["海报 / 二维码", "CTA / 私信入口", "资料设置", "UTM / 事件"],
  },
  {
    selector: ".mini-funnel div strong",
    mode: "text",
    zh: ["线下触点", "转化入口", "用户激活", "归因复盘"],
  },
  {
    selector: ".signal-band span",
    mode: "html",
    zh: [
      '在 DITTO 通过 <strong>校园、社群、品牌合作和线下到线上路径</strong>推动用户增长。',
      '<strong>活动注册 / 报名</strong>覆盖 733 所美国高校，验证大规模校园增长能力。',
      '高意向社群渠道的 <strong>邮箱验证率</strong>，约为平台平均值 20 倍。',
      '通过付费投放、本地合作、渠道看板和 ROI 复盘推动 <strong>用户与营收增长</strong>。',
    ],
  },
  {
    selector: "#fit .section-kicker",
    mode: "text",
    zh: "能力匹配",
  },
  {
    selector: "#fit h2",
    mode: "text",
    zh: "这四类能力，能直接对应内容平台全球增长团队的需求。",
  },
  {
    selector: ".fit-grid article h3",
    mode: "text",
    zh: ["增长系统与渠道测量", "0 到 1 产品定义", "内容驱动获客", "AI 工作流落地"],
  },
  {
    selector: ".fit-grid article p",
    mode: "html",
    zh: [
      '搭建校园增长、品牌合作、<strong>UTM 渠道追踪</strong>、邮箱验证与 ROI 复盘体系，把曝光、激活、留存和投入产出放到同一套增长判断里。',
      '基于 <strong>500+ 调研反馈</strong>、BP/PRD/BRD 和小程序早期路径，完成 PandaPal 从需求拆解到 MVP 范围收敛。',
      '小红书从 <strong>0 到 7K+</strong>，首篇笔记 <strong>1M 曝光</strong>，<strong>100K+ 社群触达</strong>；熟悉内容分发、用户兴趣和内容到社群转化。',
      '通过 InfluencerOps、小红书文案 Agent、知识库和活动工作流，把重复增长动作沉淀成 <strong>AI 辅助系统</strong>。',
    ],
  },
  {
    selector: "#why .section-kicker",
    mode: "text",
    zh: "复合优势",
  },
  {
    selector: "#why h2",
    mode: "text",
    zh: "内容、渠道、产品路径和增长测量可以放进同一套闭环。",
  },
  {
    selector: "#why .section-heading.split > p:last-child",
    mode: "html",
    zh: "过去项目长期集中在内容社区增长的交叉地带：内容如何被看见，用户如何被激活，渠道如何被归因，团队如何复用经验。",
  },
  {
    selector: ".why-grid h3",
    mode: "html",
    zh: [
      '<i data-lucide="compass"></i> 内容平台语感',
      '<i data-lucide="route"></i> 熟悉北美获客场景',
      '<i data-lucide="workflow"></i> 增长动作产品化',
    ],
  },
  {
    selector: ".why-grid p",
    mode: "text",
    zh: [
      "兼具创作者、运营和产品视角，熟悉小红书/抖音的选题、钩子、信任信号、评论收藏和社群承接。",
      "覆盖校园网络、学生社群、KOL/创作者、品牌合作、本地活动、付费媒体和线下到线上转化路径。",
      "将增长动作拆成用户路径、MVP 取舍、CTA、新用户引导、生命周期触达、UTM 追踪和 AI 工作流。",
    ],
  },
  {
    selector: ".platform-section .section-kicker",
    mode: "text",
    zh: "平台实战",
  },
  {
    selector: ".platform-section h2",
    mode: "text",
    zh: "内容平台判断来自真实创作、运营转化和产品化实践。",
  },
  {
    selector: ".platform-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "这些成绩覆盖短内容、长内容、社区转化和热点传播，可直接服务内容平台的增长判断。",
  },
  {
    selector: ".platform-grid span",
    mode: "html",
    zh: [
      '小红书首篇笔记 <strong>1M 曝光</strong>，带来 <strong>14 倍同类平均收入</strong>和 <strong>1,000 个精准报名</strong>。',
      'TikTok <strong>24K+ 粉丝</strong>、<strong>400K+ 点赞</strong>，来自创作者型心理健康内容。',
      '知乎 <strong>30M+ 累计阅读</strong>，来自长内容知识表达和社交内容分发。',
      '单条微博 <strong>6M 阅读</strong>，体现跨平台热点敏感度。',
    ],
  },
  {
    selector: "#journey .section-kicker",
    mode: "text",
    zh: "核心案例",
  },
  {
    selector: "#journey h2",
    mode: "text",
    zh: "DITTO 北美校园增长：从线下触点到产品激活",
  },
  {
    selector: "#journey .section-heading.split > p:last-child",
    mode: "html",
    zh: "这套增长系统连接品牌合作、校园曝光、落地页 / 私信入口、用户资料设置、社群激活、生命周期触达、UTM 追踪和渠道质量复盘。",
  },
  {
    selector: ".journey-map h3",
    mode: "text",
    zh: ["建立线下触点", "降低转化门槛", "推动首次激活", "沉淀渠道判断"],
  },
  {
    selector: ".journey-map p",
    mode: "html",
    zh: [
      '校园海报、本地活动、合作渠道和学生社群提供真实的用户兴趣与需求信号。',
      '<strong>学校定制页</strong>与“给 Ditto 发消息”入口降低用户从看到产品到进入新用户引导的成本。',
      '邮箱验证、头像/资料设置、<strong>每周匹配推送</strong>和分层召回，推动用户尽快体验产品价值。',
      '<strong>UTM 和渠道质量追踪</strong>用于识别高意向社群和触点，把可复用打法沉淀下来。',
    ],
  },
  {
    selector: ".journey-proof span",
    mode: "html",
    zh: [
      '累计用户规模，来自校园和社群增长系统。',
      '高意向社群渠道邮箱验证率，约为平台平均值 20 倍。',
      '通过可复用活动与激活手册，缩短合作方启动时间。',
    ],
  },
  {
    selector: ".decision-section .section-kicker",
    mode: "text",
    zh: "产品判断",
  },
  {
    selector: ".decision-section h2",
    mode: "text",
    zh: "把增长问题拆成产品判断",
  },
  {
    selector: ".decision-section .section-heading.split > p:last-child",
    mode: "html",
    zh: "核心思路是先判断用户处在哪个状态、卡在哪个环节、哪个渠道质量更高，再决定产品路径、追踪逻辑和下一轮增长动作。",
  },
  {
    selector: ".decision-card h3",
    mode: "text",
    zh: ["线下触点如何转成产品激活", "分散需求如何收敛成 MVP", "付费 / 本地渠道如何指导获客决策"],
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
      "学生通过校园海报或合作渠道第一次接触 DITTO，但还没有形成明确使用动机。",
      "需要降低理解和进入成本，并让用户尽快完成资料设置、看到产品价值。",
      "串联学校定制页、消息入口、资料设置、分层触达和 UTM 追踪。",
      "渠道质量和社群意图比单纯流量规模更能指导后续投入。",
      "海外学生的本地发现、租房、二手、服务和社区信任需求高度分散。",
      "第一版产品必须同时考虑信任门槛、内容供给、社区密度和商业化路径。",
      "优先收敛 Panda Map、Panda Digest、Panda Mall、早期小程序路径和私域转化。",
      "先用小红书/抖音内容验证需求，再扩展完整产品体验。",
      "学生市场需求来自付费搜索/社媒、官网触点、线下合作方和校园组织。",
      "渠道复盘需要同时看预算节奏、创意质量、转化信号和本地合作背景。",
      "搭建覆盖付费媒体、官网触点、线下合作和 Tableau 看板的渠道复盘体系。",
      "把 ROI、转化质量和本地场景放到同一套获客系统里，提升增长决策质量。",
    ],
  },
  {
    selector: "#cases .section-kicker",
    mode: "text",
    zh: "代表案例",
  },
  {
    selector: "#cases h2",
    mode: "text",
    zh: "覆盖内容增长、产品定义、渠道测量和 AI 工作流落地。",
  },
  {
    selector: "#cases .case-card h3",
    mode: "text",
    zh: [
      "北美校园增长系统",
      "0 到 1 海外学生生活产品",
      "AI 创作者增长工作流",
      "小红书爆款文案 Agent",
      "社交产品冷启动",
      "付费与本地增长测量",
    ],
  },
  {
    selector: "#cases .case-card p",
    mode: "html",
    zh: [
      '搭建可复制的校园增长模型，覆盖 <strong>战略品牌合作</strong>、校园海报、校园大使、学生社群、本地活动、新用户引导、UTM 追踪和渠道质量复盘。',
      '围绕海外学生高频生活需求定义 PandaPal：<strong>产品模块</strong>、用户调研、MVP 范围、小红书/抖音获客和社区 / 商业闭环。',
      '<strong>AI 从 0 到 1 搭建</strong>创作者增长工作流原型，覆盖创作者筛选、评分、触达、内容审核、CPM、报名转化、报告和 <strong>续约决策</strong>。',
      '将 <strong>小红书内容规律</strong>沉淀为 Coze 工作流，覆盖标题、钩子、角度、语气和迭代，并登上小红书文案工具榜 <strong>#1</strong>。',
      '联合创立技能交换社交产品，通过官网、产品演示视频、<strong>社交视频素材</strong>和线下活动，完成产品教育与冷启动。',
      '通过 <strong>付费媒体</strong>、本地合作、官网触点、校园获客、<strong>Tableau KPI 看板</strong>、预算节奏和 ROI 复盘，推动学生市场增长。',
    ],
  },
  {
    selector: "#cases .case-card ul li",
    mode: "text",
    zh: [
      "用户增长 800%，累计用户 150K+。",
      "活动注册 / 报名 100K+，覆盖 733 所美国高校。",
      "高意向社群渠道邮箱验证率 26.8%。",
      "Panda Map、Panda Digest、Panda Mall。",
      "500+ 调研反馈，BP/PRD/BRD，原型和小程序早期体验材料。",
      "100K+ 社群触达，2,000+ 创作者/KOL 资源。",
    ],
  },
  {
    selector: "#cases .text-link",
    mode: "text",
    zh: ["查看 Playbook", "查看 SWAP"],
  },
  {
    selector: "#cases .stat-line span",
    mode: "text",
    zh: ["用户", "对话", "用户", "营收"],
  },
  {
    selector: "#proof .section-kicker",
    mode: "text",
    zh: "作品成果",
  },
  {
    selector: "#proof h2",
    mode: "text",
    zh: "真实产出的产品、增长与内容平台成果。",
  },
  {
    selector: "#proof .section-heading.split > p:last-child",
    mode: "html",
    zh: "以下材料对应真实项目产出：产品资料、增长系统、内容平台成绩、AI 工作流和渠道复盘。",
  },
  {
    selector: "#proof .proof-card h3",
    mode: "text",
    zh: [
      "InfluencerOps 增长工作流",
      "PandaPal 产品材料",
      "SWAP 产品冷启动",
      "小红书文案 AI Agent",
      "内容平台影响力",
      "ENCMOBILE 增长系统",
    ],
  },
  {
    selector: "#proof .proof-card p",
    mode: "html",
    zh: [
      '<strong>AI 从 0 到 1 搭建的创作者增长工作流</strong>，覆盖创作者筛选、评分、触达、内容审核、活动报告和续约决策。',
      '调研材料、<strong>BP/PRD/BRD</strong>、原型方向、小程序早期体验和生活方式 / 社交产品模块。',
      '技能交换社交产品的公开官网、<strong>产品教育</strong>、演示素材、社交视频素材和线下活动材料。',
      '将 <strong>小红书内容规律</strong>沉淀为 Coze 工作流，并登上小红书文案工具榜 <strong>#1</strong>。',
      '小红书首篇笔记 <strong>1M 曝光</strong>，TikTok <strong>24K+ 粉丝</strong>，知乎 <strong>30M+ 阅读</strong>，单条微博 <strong>6M 阅读</strong>。',
      '通过 <strong>付费媒体</strong>、本地合作、校园渠道、官网触点、<strong>Tableau 看板</strong>、预算节奏和 ROI 复盘推动学生市场获客。',
    ],
  },
  {
    selector: "#proof .text-link",
    mode: "text",
    zh: ["查看项目", "查看材料", "查看 SWAP", "查看官网"],
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
      "小红书 Agent",
      "SWAP",
      "ENCMOBILE",
      "AI 工作流",
      "0 到 1 产品",
      "社交产品",
      "小红书 Agent",
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
    zh: "从用户状态出发，搭建可测量、可复用的增长系统。",
  },
  {
    selector: "#systems .section-heading.split > p:last-child",
    mode: "html",
    zh: "我通常先定义用户状态和关键转化时刻，再设计渠道、创意、产品路径、ROI / 渠道质量复盘，最后沉淀成团队可复用的工作流。",
  },
  {
    selector: ".system-column h3",
    mode: "html",
    zh: [
      '<i data-lucide="search-check"></i> 用户与渠道信号',
      '<i data-lucide="workflow"></i> 增长动作产品化',
      '<i data-lucide="repeat-2"></i> 复盘与决策闭环',
    ],
  },
  {
    selector: ".system-column p",
    mode: "html",
    zh: [
      '从小红书评论、<strong>创作者质量</strong>、校园扫码、学校级转化、邮箱验证、社群问题、付费媒体表现和线下社交反馈中提取增长信号。',
      '把信号转成 <strong>用户路径</strong>、MVP 模块、新用户引导 CTA、创作者评分表、UTM 系统、事件 / 追踪逻辑、知识库 / 复盘文档和 <strong>AI 辅助内部工具</strong>。',
      '通过实验记录、分层跟进、活动报告、<strong>单个报名成本</strong>、ROI 复盘、渠道质量分析和续约决策，反向输入下一轮增长判断。',
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
    zh: "内容审美与镜头判断，可直接支持内容平台的创意测试和增长实验。",
  },
  {
    selector: ".creative-layout > div:first-child p",
    mode: "html",
    zh: [
      '导演和视频制作背景让我能更快判断内容是否有传播潜力：<strong>故事钩子</strong>、视觉节奏、镜头语言、<strong>创作者 brief</strong>、场景设计、包装、剪辑模板和反馈闭环。',
      'Legend Co-Shooting 将创作流程产品化：剧本 / 分镜导入、场景拆解、shot list、拍摄日程、运镜指导、剪辑模板和 <strong>创作者协作系统</strong>。',
    ],
  },
  {
    selector: ".creative-stats span",
    mode: "text",
    zh: [
      "《山海》上线首周 Bilibili 播放量。",
      "腾讯视频编剧综艺作品累计播放量。",
      "专业创作者社群规模。",
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
    zh: "面向内容平台、全球增长和 AI 工作流落地相关团队。",
  },
  {
    selector: "#contact > p:not(.section-kicker)",
    mode: "html",
    zh: "核心能力组合：<strong>增长产品</strong>、整合营销、<strong>小红书/抖音内容机制</strong>、北美校园 / 社群渠道、创作者生态、<strong>渠道归因 / 增长测量</strong>、<strong>AI-native 工作流</strong>和创意判断。",
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
    zh: ["Zhe Chen | 增长产品与内容社区增长作品集", "洛杉矶 / Los Angeles, CA"],
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
