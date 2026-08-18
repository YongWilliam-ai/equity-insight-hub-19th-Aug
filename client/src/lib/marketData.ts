/**
 * Equity Insight Hub localisation layer — every visible phrase is selected from the active language pack.
 */
export type Language = "TW" | "CN" | "EN";
export type ViewMode = "education" | "analysis";
export type Direction = "up" | "down" | "neutral";

export type MarketSignal = {
  id: number;
  category: string;
  signal: string;
  move: string;
  direction: Direction;
  thesis: string;
  lesson: string;
  watch: string;
  invalidation: string;
  detail: string;
};

type PreMarketRow = {
  event: string;
  exposure: string;
  educationObserve: string;
  educationMistake: string;
  analysisPositive: string;
  analysisNegative: string;
};

type MarketStat = { label: string; value: string; change: string; tone: "up" | "down"; note: string };

type Ui = {
  locale: string;
  researchEdition: string;
  brandTop: string;
  brandBottom: string;
  edition: string;
  sidebarThesis: string;
  nav: [string, string, string, string];
  sourceAware: string;
  sourceNote: string;
  asOf: string;
  openNav: string;
  closeNav: string;
  openOverview: string;
  languageSwitcher: string;
  imageAltHero: string;
  imageAltMacro: string;
  imageAltResearch: string;
  heroLedger: string;
  heroDataCut: string;
  heroStrap: string;
  heroTitleA: string;
  heroTitleEm: string;
  heroTitleB: string;
  heroDescription: string;
  openDesk: string;
  openPremarket: string;
  thesisLabel: string;
  thesis: string;
  keyPoints: [string, string, string];
  keyDescriptions: [string, string, string];
  snapshotKicker: string;
  snapshotTitle: string;
  snapshotDescription: string;
  breadthKicker: string;
  breadthTitle: string;
  breadthDescription: string;
  breadthAxisLabel: string;
  breadthSource: string;
  whyKicker: string;
  whyTitle: string;
  whyItems: [string, string, string];
  whyDescriptions: [string, string, string];
  signalsKicker: string;
  signalsTitle: string;
  signalsDescription: string;
  categories: [string, string, string, string, string];
  allSignals: string;
  signalsLabel: string;
  learningLens: string;
  analystLens: string;
  howToRead: string;
  emptySignals: string;
  teachingNote: string;
  researchDrawer: string;
  whyItMatters: string;
  nextRead: string;
  invalidates: string;
  premarketKicker: string;
  premarketEducationTitle: string;
  premarketAnalysisTitle: string;
  premarketEducationDescription: string;
  premarketAnalysisDescription: string;
  education: string;
  analysis: string;
  readingMode: string;
  observe: string;
  shortcut: string;
  positive: string;
  negative: string;
  learningMode: string;
  researchMode: string;
  learningTitle: string;
  researchTitle: string;
  learningBody: string;
  researchBody: string;
  readingStandard: string;
  briefingStandard: string;
  learningQuote: string;
  researchQuote: string;
  learningStandardBody: string;
  researchStandardBody: string;
  sourcesKicker: string;
  sourcesTitle: string;
  sourcesBody: string;
  sourcesCut: string;
  sourceLabels: [string, string, string, string];
  footerLeft: string;
  footerRight: string;
  searchPlaceholder: string;
};

const urls = [
  "https://www.reuters.com/business/nasdaq-futures-gain-tech-stocks-climb-2026-08-17/",
  "https://news.futunn.com/t/post/77801289/Inryj7uqib",
  "https://www.federalreserve.gov/newsevents/2026-august.htm",
  "https://ir.homedepot.com/news-releases/2026",
] as const;

const sharedStats = [
  ["S&P 500", "7,745.06", "−0.52%", "down"],
  ["NASDAQ", "26,644.91", "−0.32%", "down"],
  ["DOW", "53,459.78", "−0.51%", "down"],
  ["VIX", "15.19", "+6.60%", "up"],
] as const;

export const breadthData = [
  { market: "NYSE", ratio: 1.76, advance: 36.2, decline: 63.8 },
  { market: "NASDAQ", ratio: 1.68, advance: 37.3, decline: 62.7 },
];

export const breadthMetrics = {
  averageDecline: 63.3,
  actualVolume: 14.74,
  averageVolume: 16.95,
  volumeParticipation: 87.0,
  volumeShortfall: 2.21,
  energySectorMove: 0.87,
};

type BreadthDetail = {
  compositionTitle: string;
  compositionDescription: string;
  advances: string;
  declines: string;
  volumeTitle: string;
  volumeActual: string;
  volumeAverage: string;
  volumeDelta: string;
  participationTitle: string;
  participationBody: string;
  riskTitle: string;
  riskBody: string;
  sectorTitle: string;
  sectorBody: string;
  chartNote: string;
  sourceNote: string;
};

export const breadthDetailContent: Record<Language, BreadthDetail> = {
  TW: {
    compositionTitle: "交易所參與度", compositionDescription: "根據上漲／下跌家數比例換算為相對參與度；黃金代表上漲、珊瑚色代表下跌。", advances: "上漲", declines: "下跌", volumeTitle: "成交量參與度", volumeActual: "當日全美成交量", volumeAverage: "20 日平均成交量", volumeDelta: "較 20 日均量少 2.21 億股", participationTitle: "63.3% 平均為下跌股", participationBody: "紐約證交所及納斯達克均呈現約三分之二下跌、三分之一上漲的結構。", riskTitle: "風險訊號：內部偏弱", riskBody: "廣度與成交量同步走弱，支持『風格分化』而非單純指數雜訊的判讀。", sectorTitle: "板塊交叉檢查", sectorBody: "標普 500 十一個主要板塊中，能源是唯一上升者（+0.87%）。", chartNote: "比率並非直接的交易所總家數；此圖把每 1 隻上漲股對應的下跌股比例標準化為 100% 參與度。", sourceNote: "資料：Reuters 8 月 17 日美股收市；成交量 147.4 億股，20 日均量 169.5 億股。" },
  CN: {
    compositionTitle: "交易所参与度", compositionDescription: "根据上涨／下跌家数比例换算为相对参与度；金色代表上涨、珊瑚色代表下跌。", advances: "上涨", declines: "下跌", volumeTitle: "成交量参与度", volumeActual: "当日全美成交量", volumeAverage: "20 日平均成交量", volumeDelta: "较 20 日均量少 2.21 亿股", participationTitle: "63.3% 平均为下跌股", participationBody: "纽约证交所及纳斯达克均呈现约三分之二下跌、三分之一上涨的结构。", riskTitle: "风险信号：内部偏弱", riskBody: "广度与成交量同步走弱，支持“风格分化”而非单纯指数噪音的判断。", sectorTitle: "板块交叉检查", sectorBody: "标普 500 十一个主要板块中，能源是唯一上涨者（+0.87%）。", chartNote: "比率并非直接的交易所总家数；此图把每 1 只上涨股对应的下跌股比例标准化为 100% 参与度。", sourceNote: "数据：Reuters 8 月 17 日美股收盘；成交量 147.4 亿股，20 日均量 169.5 亿股。" },
  EN: {
    compositionTitle: "Exchange participation", compositionDescription: "Relative participation translated from advance/decline ratios; gold is advancing, coral is declining.", advances: "Advancing", declines: "Declining", volumeTitle: "Volume participation", volumeActual: "Total U.S. volume", volumeAverage: "20-day average volume", volumeDelta: "2.21bn shares below the 20-day average", participationTitle: "63.3% average decliners", participationBody: "Both NYSE and Nasdaq showed roughly two decliners for every one advancer in the session.", riskTitle: "Risk flag: weak internals", riskBody: "Breadth and volume softened together, supporting a style-split read rather than simple index noise.", sectorTitle: "Sector cross-check", sectorBody: "Energy was the only S&P 500 sector higher among the eleven major sectors (+0.87%).", chartNote: "Ratios are not exchange totals; the chart normalises the number of decliners per advancer to 100% participation.", sourceNote: "Data: Reuters, U.S. close 17 Aug; 14.74bn shares versus a 16.95bn 20-day average." },
};

const ui: Record<Language, Ui> = {
  TW: {
    locale: "美股 08.17 收市 · 08.18 盤前", researchEdition: "研究版", brandTop: "權益", brandBottom: "洞察中心", edition: "第 02 期 / 2026", sidebarThesis: "看市場，\n不看雜訊。", nav: ["市場主線", "訊號研究台", "盤前情境", "資料來源"], sourceAware: "來源可追溯", sourceNote: "這是研究框架，不是交易指令。每份簡報都標示資料截點及來源信心。", asOf: "資料截至美股 08.17 收市", openNav: "開啟導覽", closeNav: "關閉導覽", openOverview: "前往市場總覽", languageSwitcher: "切換語言", imageAltHero: "金融研究工作桌面", imageAltMacro: "宏觀風險研究圖像", imageAltResearch: "市場研究背景圖像", heroLedger: "市場帳本 / 2026 年 8 月 18 日", heroDataCut: "資料截點 · 美股收市", heroStrap: "美股收市 · 盤後脈絡 · 盤前問題", heroTitleA: "先讀懂市場，", heroTitleEm: "再", heroTitleB: "讓市場讀懂你。", heroDescription: "這不是全面風險撤退，而是地緣政治、長端收益率與 AI 曝險的重新定價；零售財報將測試美國消費者的真正韌性。", openDesk: "查看今日訊號研究台", openPremarket: "查看盤前情境地圖", thesisLabel: "今日主線", thesis: "宏觀風險推高成本與折現率；AI 硬件保留局部需求能見度。", keyPoints: ["宏觀", "AI 硬件", "消費"], keyDescriptions: ["油價與長端收益率是共同風險因子。", "記憶體與光通信需求維持選擇性買盤。", "零售指引比單季 EPS 更值得重視。"], snapshotKicker: "市場快照", snapshotTitle: "用證據回看收市。", snapshotDescription: "所有價格均來自已引用的 8 月 17 日美股收市；網站刻意區分已公布事實、市場預期與分析判斷。", breadthKicker: "市場廣度檢查", breadthTitle: "盤面內部比指數標題更弱。", breadthDescription: "兩大交易所的下跌家數均多於上漲家數，而成交量低於 20 日均值。這提醒我們檢查市場內部，並不等於系統性壓力已確立。", breadthAxisLabel: "每 1 隻上漲股對應的下跌股", breadthSource: "資料：每 1 隻上漲股對應的下跌股 · 來源：Reuters，8 月 17 日收市", whyKicker: "為何重要", whyTitle: "指數點數只是封面。", whyItems: ["市場廣度", "成交量", "趨勢結構"], whyDescriptions: ["0.5% 的指數變化仍可能包含廣泛的個股轉弱。", "低於平均的參與度，令單日訊號不宜過度延伸。", "標普 500 與納斯達克仍高於 20 日和 50 日均線。"], signalsKicker: "訊號研究台 / 前十熱點", signalsTitle: "下一個決策真正要追問的問題。", signalsDescription: "搜尋主題、篩選市場傳導線，再開啟任一訊號查看它如何由事件傳至盈利、估值與價格，以及甚麼條件會改變結論。", categories: ["全部", "宏觀", "AI 硬件", "消費", "跨資產"], allSignals: "全部訊號", signalsLabel: "個訊號", learningLens: "投教視角", analystLens: "分析視角", howToRead: "怎樣閱讀：", emptySignals: "找不到相符訊號。請以更寬泛的市場關鍵字再試。", teachingNote: "投教筆記", researchDrawer: "研究抽屜", whyItMatters: "為何重要：", nextRead: "下一次應如何閱讀", invalidates: "此觀點的推翻條件", premarketKicker: "08.18 / 盤前情境地圖", premarketEducationTitle: "開市前，先學怎樣讀取證據。", premarketAnalysisTitle: "開市前，盯緊證據而非敘事。", premarketEducationDescription: "把這張表當作可重複使用的閱讀清單：看甚麼、可能代表甚麼，以及應避免哪一種捷徑。", premarketAnalysisDescription: "盤前變動只是開始調查的邀請；表中列出可強化或削弱每一個市場敘事的證據。", education: "投教閱讀", analysis: "分析閱讀", readingMode: "閱讀模式", observe: "應觀察甚麼", shortcut: "應避免的捷徑", positive: "正面確認", negative: "負面確認", learningMode: "投教模式", researchMode: "研究模式", learningTitle: "知道如何證明之前，市場故事還不是訊號。", researchTitle: "這是一個有條件的觀點，不是預言。", learningBody: "每天使用同一套次序：辨識宏觀驅動、檢查市場廣度、拆分板塊、測試資料品質，最後說出甚麼證據會改變你的看法。", researchBody: "目前框架：長端收益率與油價是全市場風險開關；AI 硬件保留局部需求能見度；零售指引將決定消費壓力是分層還是擴散。", readingStandard: "閱讀準則", briefingStandard: "簡報準則", learningQuote: "「比較數據、價格反應與解釋，不要只看標題。」", researchQuote: "「不是全面風險撤退，而是由長端利率與地緣風險主導的風格分化。」", learningStandardBody: "目標是建立可重複的方法：知道該看甚麼、可能代表甚麼，以及要避免哪一個捷徑。", researchStandardBody: "向決策者匯報時，先說明框架，再提出證據，最後指出甚麼情況會推翻觀點。", sourcesKicker: "檔案備註 / 稽核軌跡", sourcesTitle: "每個主張都需要可追溯的線索。", sourcesBody: "這是根據 Version 2 報告建立的靜態閱讀介面，不顯示即時行情。引用來源協助讀者分辨已核實收市數據、官方事件時間、二手報道與研究推論。", sourcesCut: "來源截點 · 2026 年 8 月 18 日 · 已引用收市數據具較高信心", sourceLabels: ["Reuters", "Futunn 研究摘要", "聯邦儲備局日曆", "Home Depot 投資人關係"], footerLeft: "© 2026 權益洞察中心 · 靜態研究版 · 美股 2026 年 8 月 17 日收市", footerRight: "僅供研究與投資教育用途，不構成個人化財務建議。市場資料、來源時間及假設已於原始 Version 2 報告披露。", searchPlaceholder: "例如：長端收益率、Home Depot、Fabrinet" },
  CN: {
    locale: "美股 08.17 收盘 · 08.18 盘前", researchEdition: "研究版", brandTop: "权益", brandBottom: "洞察中心", edition: "第 02 期 / 2026", sidebarThesis: "看市场，\n不看噪音。", nav: ["市场主线", "信号研究台", "盘前情景", "资料来源"], sourceAware: "来源可追溯", sourceNote: "这是研究框架，不是交易指令。每份简报都标注数据截点及来源信心。", asOf: "数据截至美股 08.17 收盘", openNav: "打开导航", closeNav: "关闭导航", openOverview: "前往市场总览", languageSwitcher: "切换语言", imageAltHero: "金融研究工作桌面", imageAltMacro: "宏观风险研究图像", imageAltResearch: "市场研究背景图像", heroLedger: "市场账本 / 2026 年 8 月 18 日", heroDataCut: "数据截点 · 美股收盘", heroStrap: "美股收盘 · 盘后脉络 · 盘前问题", heroTitleA: "先读懂市场，", heroTitleEm: "再", heroTitleB: "让市场读懂你。", heroDescription: "这不是全面风险撤退，而是地缘政治、长端收益率与 AI 敞口的重新定价；零售财报将测试美国消费者的真实韧性。", openDesk: "查看今日信号研究台", openPremarket: "查看盘前情景地图", thesisLabel: "今日主线", thesis: "宏观风险推高成本与折现率；AI 硬件保留局部需求能见度。", keyPoints: ["宏观", "AI 硬件", "消费"], keyDescriptions: ["油价与长端收益率是共同风险因子。", "内存与光通信需求维持选择性买盘。", "零售指引比单季 EPS 更值得关注。"], snapshotKicker: "市场快照", snapshotTitle: "用证据回看收盘。", snapshotDescription: "所有价格均来自已引用的 8 月 17 日美股收盘；网站刻意区分已公布事实、市场预期与分析判断。", breadthKicker: "市场广度检查", breadthTitle: "盘面内部比指数标题更弱。", breadthDescription: "两大交易所的下跌家数均多于上涨家数，而成交量低于 20 日均值。这提醒我们检查市场内部，并不等于系统性压力已经确立。", breadthAxisLabel: "每 1 只上涨股对应的下跌股", breadthSource: "数据：每 1 只上涨股对应的下跌股 · 来源：Reuters，8 月 17 日收盘", whyKicker: "为何重要", whyTitle: "指数点数只是封面。", whyItems: ["市场广度", "成交量", "趋势结构"], whyDescriptions: ["0.5% 的指数变化仍可能包含广泛的个股转弱。", "低于平均的参与度，使单日信号不宜过度延伸。", "标普 500 与纳斯达克仍高于 20 日和 50 日均线。"], signalsKicker: "信号研究台 / 前十热点", signalsTitle: "下一个决策真正该追问的问题。", signalsDescription: "搜索主题、筛选市场传导线，再打开任一信号查看它如何由事件传至盈利、估值与价格，以及什么条件会改变结论。", categories: ["全部", "宏观", "AI 硬件", "消费", "跨资产"], allSignals: "全部信号", signalsLabel: "个信号", learningLens: "投教视角", analystLens: "分析视角", howToRead: "怎样阅读：", emptySignals: "找不到匹配信号。请用更宽泛的市场关键词再试。", teachingNote: "投教笔记", researchDrawer: "研究抽屉", whyItMatters: "为何重要：", nextRead: "下一次应如何阅读", invalidates: "此观点的推翻条件", premarketKicker: "08.18 / 盘前情景地图", premarketEducationTitle: "开市前，先学怎样读取证据。", premarketAnalysisTitle: "开市前，盯紧证据而非叙事。", premarketEducationDescription: "把这张表当作可重复使用的阅读清单：看什么、可能代表什么，以及应避免哪一种捷径。", premarketAnalysisDescription: "盘前变动只是开始调查的邀请；表中列出可强化或削弱每一个市场叙事的证据。", education: "投教阅读", analysis: "分析阅读", readingMode: "阅读模式", observe: "应观察什么", shortcut: "应避免的捷径", positive: "正面确认", negative: "负面确认", learningMode: "投教模式", researchMode: "研究模式", learningTitle: "知道如何证明之前，市场故事还不是信号。", researchTitle: "这是一个有条件的观点，不是预言。", learningBody: "每天使用同一套顺序：识别宏观驱动、检查市场广度、拆分板块、测试数据质量，最后说出什么证据会改变你的看法。", researchBody: "当前框架：长端收益率与油价是全市场风险开关；AI 硬件保留局部需求能见度；零售指引将决定消费压力是分层还是扩散。", readingStandard: "阅读准则", briefingStandard: "简报准则", learningQuote: "“比较数据、价格反应与解释，不要只看标题。”", researchQuote: "“不是全面风险撤退，而是由长端利率与地缘风险主导的风格分化。”", learningStandardBody: "目标是建立可重复的方法：知道该看什么、可能代表什么，以及要避免哪一个捷径。", researchStandardBody: "向决策者汇报时，先说明框架，再提出证据，最后指出什么情况会推翻观点。", sourcesKicker: "档案备注 / 稽核轨迹", sourcesTitle: "每个主张都需要可追溯的线索。", sourcesBody: "这是根据 Version 2 报告建立的静态阅读界面，不显示实时行情。引用来源帮助读者分辨已核实收盘数据、官方事件时间、二手报道与研究推论。", sourcesCut: "来源截点 · 2026 年 8 月 18 日 · 已引用收盘数据具较高信心", sourceLabels: ["Reuters", "Futunn 研究摘要", "美联储日历", "Home Depot 投资者关系"], footerLeft: "© 2026 权益洞察中心 · 静态研究版 · 美股 2026 年 8 月 17 日收盘", footerRight: "仅供研究与投资教育用途，不构成个性化财务建议。市场数据、来源时间及假设已在原始 Version 2 报告披露。", searchPlaceholder: "例如：长端收益率、Home Depot、Fabrinet" },
  EN: {
    locale: "U.S. close 08.17 · pre-market 08.18", researchEdition: "Research edition", brandTop: "Equity", brandBottom: "Insight Hub", edition: "Edition 02 / 2026", sidebarThesis: "The market,\nnot the noise.", nav: ["Market thesis", "Signal desk", "Pre-market", "Sources"], sourceAware: "Source-aware", sourceNote: "Research framing, not a trading instruction. Every brief discloses its time cut and source confidence.", asOf: "As of U.S. close 08.17", openNav: "Open navigation", closeNav: "Close navigation", openOverview: "Go to market overview", languageSwitcher: "Switch language", imageAltHero: "Financial research desk", imageAltMacro: "Macro-risk research illustration", imageAltResearch: "Market research background", heroLedger: "The Market Ledger / 18 Aug 2026", heroDataCut: "Data cut · U.S. close", heroStrap: "U.S. close · after-hours context · pre-market questions", heroTitleA: "Read the market", heroTitleEm: "before", heroTitleB: "it reads you.", heroDescription: "Not a broad risk exit. A repricing of geopolitics, long-end yields and AI exposure — with retail earnings about to test how resilient the U.S. consumer really is.", openDesk: "Open today’s signal desk", openPremarket: "Open pre-market scenario map", thesisLabel: "Today’s thesis", thesis: "Macro risk is lifting costs and discount rates; AI hardware retains pockets of visible demand.", keyPoints: ["Macro", "AI hardware", "Consumer"], keyDescriptions: ["Oil and long-end yields are the joint risk factor.", "Memory and optical demand retain the selective bid.", "Retail guidance matters more than a headline EPS beat."], snapshotKicker: "Market snapshot", snapshotTitle: "The close, in evidence.", snapshotDescription: "All prices are from the cited 17 Aug U.S. close. The site separates reported facts, consensus expectations and analytical interpretations.", breadthKicker: "Breadth check", breadthTitle: "The tape was weaker than the index headlines.", breadthDescription: "Decliners outnumbered advancers on both exchanges while volume stayed below the 20-day average. That calls for an internal market check, not a conclusion of systemic stress.", breadthAxisLabel: "Decliners per advancer", breadthSource: "Data: decliners per advancer · source: Reuters, 17 Aug close", whyKicker: "Why this matters", whyTitle: "Index points are only the cover page.", whyItems: ["Breadth", "Volume", "Structure"], whyDescriptions: ["A 0.5% index move can still contain broad individual-stock weakness.", "Below-average participation makes a single session less definitive.", "The S&P 500 and Nasdaq remain above their 20-day and 50-day averages."], signalsKicker: "Signal desk / top 10", signalsTitle: "The questions that move the next decision.", signalsDescription: "Search a theme, filter the market transmission channel, then open any signal to see the cause-to-earnings, valuation and price chain — plus the condition that would change the view.", categories: ["All", "Macro", "AI hardware", "Consumer", "Cross-asset"], allSignals: "All signals", signalsLabel: "signals", learningLens: "Learning lens", analystLens: "Analyst lens", howToRead: "How to read:", emptySignals: "No matching signal. Try a broader market term.", teachingNote: "Teaching note", researchDrawer: "Research drawer", whyItMatters: "Why it matters:", nextRead: "How to read the next print", invalidates: "View invalidates if", premarketKicker: "08.18 / pre-market map", premarketEducationTitle: "Learn the read before the opening move.", premarketAnalysisTitle: "Before the open, watch the proof — not the pitch.", premarketEducationDescription: "Use this as a repeatable reading checklist: what to observe, what it can mean and which shortcut to avoid.", premarketAnalysisDescription: "A pre-market move is an invitation to investigate. The table shows the evidence that would strengthen or weaken each market narrative.", education: "Education view", analysis: "Analysis view", readingMode: "Reading mode", observe: "What to observe", shortcut: "Common shortcut to avoid", positive: "Positive confirmation", negative: "Negative confirmation", learningMode: "Learning mode", researchMode: "Research mode", learningTitle: "A market story is not a signal until you know what would prove it.", researchTitle: "This is a view with conditions, not a prediction.", learningBody: "Use the same sequence every day: identify the macro driver, inspect market breadth, separate sectors, test data quality, then name the evidence that would change your mind.", researchBody: "Our current frame: long-end yields and oil are the market-wide risk switches; AI hardware retains selective demand visibility; retail guidance will determine whether consumer pressure is segmented or broadening.", readingStandard: "Reading standard", briefingStandard: "Briefing standard", learningQuote: "“Compare the data, the reaction and the explanation — never only the headline.”", researchQuote: "“Not broad risk-off — a style split led by long-end rates and geopolitics.”", learningStandardBody: "The goal is a repeatable method: know what to observe, what it may mean and which shortcut to avoid.", researchStandardBody: "For a decision-maker conversation, state the frame, identify the evidence, then say what would invalidate the view.", sourcesKicker: "File notes / audit trail", sourcesTitle: "Every claim needs a trail.", sourcesBody: "This is a static reading experience based on the Version 2 brief, not a live-price interface. Sources help readers distinguish verified close data, official event timing, secondary reporting and research inference.", sourcesCut: "Source cut · 18 Aug 2026 · high confidence for cited close data", sourceLabels: ["Reuters", "Futunn research brief", "Federal Reserve calendar", "Home Depot investor relations"], footerLeft: "© 2026 Equity Insight Hub · Static research edition · U.S. close 17 Aug 2026", footerRight: "Research and investor education only. Not personalised financial advice. Market data, source timing and assumptions are disclosed in the original Version 2 brief.", searchPlaceholder: "e.g. long-end yields, Home Depot, Fabrinet" },
};

const signalSets: Record<Language, MarketSignal[]> = {
  TW: [
    ["宏觀", "油價變成通膨稅", "霍爾木茲風險同時推高燃料、運費與家庭成本。", "把油價視為成本傳導線，而不只是能源股標題。", "談判消息、運輸中斷、汽油成本轉嫁", "若可信談判令運輸正常化及油價回落，風險溢價會消退。", "關鍵不只是能源股能否受惠；油價亦可能壓縮消費毛利、推高運輸成本及通膨預期。"],
    ["宏觀", "長端收益率是估值開關", "2007 年以來的長端收益率高位，挑戰長久期股票、房市和耐用品需求。", "不要只用『增長上升、收益率上升』解讀長端；供給與期限溢價同樣重要。", "期限溢價、國債供給、通膨預期", "若期限溢價收窄並令長端收益率回落，估值壓力會減輕。", "長端收益率不只受增長數據影響；財政發債、AI 企業融資與通膨風險都會影響它。"],
    ["宏觀", "指數標題掩蓋偏弱內部", "指數跌幅有限，但兩大交易所下跌家數均多於上漲家數。", "在判斷盤面健康或轉弱前，將收市與市場廣度、成交量一併比較。", "市場廣度回升、新高新低、成交量確認", "若市場廣度配合更強成交量回復，狹窄市場的擔憂會減弱。", "小幅指數下跌不代表盤面健康；市場廣度能揭示少數大型股是否掩蓋更廣泛的賣壓。"],
    ["AI 硬件", "AI 正在輪動，並非消失", "較高收益率壓抑大型科技久期，但記憶體與設備仍具需求能見度。", "不要把 AI 當作單一板塊；應拆分軟件、雲、算力、記憶體、光通信與融資。", "記憶體價格、雲端資本支出、訂單能見度", "若記憶體價格、資本支出意向或訂單能見度轉弱，輪動將受挑戰。", "目前資金偏向供需較可見的硬件子板塊，而非所有 AI 曝險同步受惠。"],
    ["AI 硬件", "存儲與光通信成為擁擠領漲", "頻寬與記憶體需求令存儲和光通信股在大盤下跌時仍走強。", "強勢熱力圖只是線索，不是證明；下一步看訂單、庫存與毛利證據。", "量價延續、供應缺口、指引確認", "若高成交量反轉或供需評論轉弱，領漲地位將受質疑。", "主題具基本面支撐，但短線漲速令交易擁擠，後續需由產業數據驗證。"],
    ["AI 硬件", "Fabrinet：超預期後重新估值", "強勁營收與 EPS 超預期，仍不足以滿足市場對毛利、資本支出與估值的追問。", "財報要同時讀四件事：已公布結果、指引、估值和股價反應。", "現金流、資本支出、盤前價格接受度", "若股價穩定且市場接受現金流與資本支出敘事，負面解讀會減弱。", "公司 Q4 營收與 EPS 高於公開預期，盤後卻轉跌，說明市場的焦點已由需求轉向預期差和資本效率。"],
    ["消費", "零售財報是消費壓力測試", "本週零售業績將檢驗消費轉弱是暫時、分層還是全面。", "EPS 超預期並不完整；應讀客流、客單價、庫存、毛利與全年指引。", "同店銷售、客流、客單價、全年指引", "若多家零售商同時呈現韌性需求和建設性指引，消費壓力觀點會減弱。", "Home Depot、Lowe’s、Target 和 Walmart 的管理層用詞，將比單一財報標題更能說明家庭需求。"],
    ["消費", "同一消費板塊，有多種現實", "家居、折扣與綜合零售面向不同收入層、購物籃與毛利模型。", "不要由單一股票推論整體消費者；比較客群、品類組合與毛利模式。", "市佔變化、促銷強度、住房敏感需求", "若不同收入層的公司呈現一致結果，消費訊號才更具普遍性。", "Home Depot 的房市敏感度、Target 的可選消費組合和 Walmart 的價值定位，不能混為一談。"],
    ["消費", "Nike 與 Expedia 呈現兩類風險", "Nike 更接近品牌與需求重估；Expedia 則在測試高位後的獲利回吐。", "兩隻消費股下跌原因可完全不同；成交量和趨勢位置決定應追問的問題。", "弱勢成交量、趨勢支撐、前瞻評論", "若公司評論與價格行為開始指向同一需求模式，差異才會縮窄。", "Nike 的放量下跌與 Expedia 在均線上方回吐，對消費的含義不同。"],
    ["跨資產", "防禦資產不是同一筆交易", "黃金、油價、美元與 Bitcoin 都在重估風險，但傳導渠道不同。", "不要把黃金、油價、美元和 Bitcoin 放進同一個『避險』籃子。", "實質收益率、美元流動性、地緣政治消息", "若美元普遍反彈或實質收益率上升，看似一致的防禦資產走勢可被打破。", "即使收益率走高，避險需求仍可令黃金上升；不同資產需以各自驅動拆解。"],
  ].map((row, index) => ({ id: index + 1, category: row[0], signal: row[1], move: ["Brent $90.87 · WTI $84.50", "美國 30 年期 5.31%", "NYSE 1.76:1 · Nasdaq 1.68:1", "SOX +1.6% · MSFT −3.04%", "SNDK +8.88% · MU +4.13%", "Q4 EPS $4.10 · 盤後 −6.92%", "HD → LOW/TGT → WMT", "HD 5日 −3.68% · WMT 5日 +1.48%", "NKE 5日 −7.17% · EXPE 接近 $335", "黃金 ↑ · 美元 ↓ · BTC > $64K"][index], direction: (["up", "up", "down", "neutral", "up", "down", "neutral", "neutral", "neutral", "neutral"] as Direction[])[index], thesis: row[2], lesson: row[3], watch: row[4], invalidation: row[5], detail: row[6] })),
  CN: [
    ["宏观", "油价变成通胀税", "霍尔木兹风险同时推高燃料、运费与家庭成本。", "把油价视为成本传导线，而不只是能源股标题。", "谈判消息、运输中断、汽油成本转嫁", "若可信谈判令运输正常化且油价回落，风险溢价会消退。", "关键不只是能源股能否受益；油价也可能压缩消费毛利、推高运输成本及通胀预期。"],
    ["宏观", "长端收益率是估值开关", "2007 年以来的长端收益率高位，挑战长久期股票、房市和耐用品需求。", "不要只用“增长上升、收益率上升”解读长端；供给与期限溢价同样重要。", "期限溢价、国债供给、通胀预期", "若期限溢价收窄并让长端收益率回落，估值压力会减轻。", "长端收益率不只受增长数据影响；财政发债、AI 企业融资与通胀风险都会影响它。"],
    ["宏观", "指数标题掩盖偏弱内部", "指数跌幅有限，但两大交易所下跌家数均多于上涨家数。", "判断盘面健康或转弱前，应把收盘与市场广度、成交量一起比较。", "市场广度回升、新高新低、成交量确认", "若市场广度配合更强成交量恢复，狭窄市场的担忧会减弱。", "小幅指数下跌不代表盘面健康；市场广度能揭示少数大盘股是否掩盖更广泛的卖压。"],
    ["AI 硬件", "AI 正在轮动，并非消失", "较高收益率压制大型科技久期，但内存与设备仍具需求能见度。", "不要把 AI 当作单一板块；应拆分软件、云、算力、内存、光通信与融资。", "内存价格、云端资本开支、订单能见度", "若内存价格、资本开支意向或订单能见度转弱，轮动将受挑战。", "当前资金偏向供需更可见的硬件子板块，而非所有 AI 敞口同步受益。"],
    ["AI 硬件", "存储与光通信成为拥挤领涨", "带宽与内存需求令存储和光通信股在大盘下跌时仍走强。", "强势热力图只是线索，不是证明；下一步看订单、库存与毛利证据。", "量价延续、供应缺口、指引确认", "若高成交量反转或供需评论转弱，领涨地位将受质疑。", "主题具基本面支撑，但短线涨速令交易拥挤，后续需由产业数据验证。"],
    ["AI 硬件", "Fabrinet：超预期后重新估值", "强劲营收与 EPS 超预期，仍不足以满足市场对毛利、资本开支与估值的追问。", "财报要同时读四件事：已公布结果、指引、估值和股价反应。", "现金流、资本开支、盘前价格接受度", "若股价稳定且市场接受现金流与资本开支叙事，负面解读会减弱。", "公司 Q4 营收与 EPS 高于公开预期，盘后却转跌，说明市场焦点已由需求转向预期差和资本效率。"],
    ["消费", "零售财报是消费压力测试", "本周零售业绩将检验消费转弱是暂时、分层还是全面。", "EPS 超预期并不完整；应读客流、客单价、库存、毛利与全年指引。", "同店销售、客流、客单价、全年指引", "若多家零售商同时呈现韧性需求和建设性指引，消费压力观点会减弱。", "Home Depot、Lowe’s、Target 和 Walmart 的管理层措辞，将比单一财报标题更能说明家庭需求。"],
    ["消费", "同一消费板块，有多种现实", "家居、折扣与综合零售面对不同收入层、购物篮与毛利模型。", "不要由单一股票推论整体消费者；比较客群、品类组合与毛利模式。", "份额变化、促销强度、住房敏感需求", "若不同收入层的公司呈现一致结果，消费信号才更具普遍性。", "Home Depot 的房市敏感度、Target 的可选消费组合和 Walmart 的价值定位，不能混为一谈。"],
    ["消费", "Nike 与 Expedia 呈现两类风险", "Nike 更接近品牌与需求重估；Expedia 则在测试高位后的获利回吐。", "两只消费股下跌原因可完全不同；成交量和趋势位置决定应追问的问题。", "弱势成交量、趋势支撑、前瞻评论", "若公司评论与价格行为开始指向同一需求模式，差异才会缩窄。", "Nike 的放量下跌与 Expedia 在均线上方回吐，对消费的含义不同。"],
    ["跨资产", "防御资产不是同一笔交易", "黄金、油价、美元与 Bitcoin 都在重估风险，但传导渠道不同。", "不要把黄金、油价、美元和 Bitcoin 放进同一个“避险”篮子。", "实际收益率、美元流动性、地缘政治消息", "若美元普遍反弹或实际收益率上升，看似一致的防御资产走势可能被打破。", "即使收益率走高，避险需求仍可令黄金上涨；不同资产需按各自驱动拆解。"],
  ].map((row, index) => ({ id: index + 1, category: row[0], signal: row[1], move: ["Brent $90.87 · WTI $84.50", "美国 30 年期 5.31%", "NYSE 1.76:1 · Nasdaq 1.68:1", "SOX +1.6% · MSFT −3.04%", "SNDK +8.88% · MU +4.13%", "Q4 EPS $4.10 · 盘后 −6.92%", "HD → LOW/TGT → WMT", "HD 5日 −3.68% · WMT 5日 +1.48%", "NKE 5日 −7.17% · EXPE 接近 $335", "黄金 ↑ · 美元 ↓ · BTC > $64K"][index], direction: (["up", "up", "down", "neutral", "up", "down", "neutral", "neutral", "neutral", "neutral"] as Direction[])[index], thesis: row[2], lesson: row[3], watch: row[4], invalidation: row[5], detail: row[6] })),
  EN: [
    ["Macro", "Oil turns into an inflation tax", "Hormuz risk is raising fuel, freight and household-cost pressure at the same time.", "Read oil as a cost-transmission channel, not only as an energy-stock headline.", "Negotiation headlines · freight disruption · gasoline pass-through", "Risk premium fades if shipping normalises and oil falls on credible negotiations.", "Oil can support energy shares while still pressuring consumer margins, transport costs and inflation expectations."],
    ["Macro", "The long-end yield is the valuation switch", "A 2007-era long-end yield challenges long-duration equities, housing and big-ticket demand.", "Separate long-end yields from the simple growth-and-rates story; supply and term premium matter too.", "Term premium · Treasury supply · inflation expectations", "Valuation pressure eases if long-end yields retrace with a narrower term premium.", "Fiscal issuance, AI corporate financing and inflation risk can move the long end alongside growth data."],
    ["Macro", "Headline indexes hid weaker internals", "The index drawdown was modest, but decliners outnumbered advancers across both exchanges.", "Compare an index close with breadth and volume before calling the tape healthy or broken.", "Breadth recovery · new highs/lows · volume confirmation", "A breadth recovery with stronger volume would weaken the narrow-market concern.", "Breadth reveals whether a small group of large names is masking wider selling pressure."],
    ["AI hardware", "AI is rotating, not disappearing", "Higher yields weighed on mega-cap duration while memory and equipment retained demand visibility.", "Do not treat AI as one sector; split the chain into software, cloud, compute, memory, optical and financing.", "Memory pricing · hyperscaler capex · order visibility", "The rotation weakens if memory prices, capex intent or order visibility roll over.", "Capital is favouring hardware sub-segments with visible supply-demand rather than every form of AI exposure."],
    ["AI hardware", "Storage & optical are the crowded leaders", "Bandwidth and memory demand pushed storage and optical names higher even as the market fell.", "A strong heat map is a clue, not proof; look for orders, inventory and margin evidence next.", "Volume follow-through · supply gaps · guidance confirmation", "A high-volume reversal or weaker supply-demand commentary would challenge leadership.", "The theme has a fundamental case, but its rapid move makes follow-through evidence essential."],
    ["AI hardware", "Fabrinet: beat, then re-rate", "A strong revenue and EPS beat still failed to satisfy a market asking harder questions about margins, capex and valuation.", "Read the four-part earnings set: reported result, guide, valuation and price reaction.", "Cash flow · capex · pre-market price acceptance", "The negative read softens if the stock stabilises and cash-flow / capex quality is accepted.", "The after-hours reversal shows that market focus has shifted from demand alone to expectation gap and capital efficiency."],
    ["Consumer", "Retail earnings are the consumer stress test", "This week’s retail reports test whether spending weakness is temporary, segmented or broad-based.", "An EPS beat is incomplete; use traffic, ticket, inventory, gross margin and guidance to read the consumer.", "Same-store sales · traffic · ticket · full-year guide", "The consumer-pressure view weakens if several retailers show resilient demand and constructive guidance.", "Management language from Home Depot, Lowe’s, Target and Walmart matters more than one earnings headline."],
    ["Consumer", "One consumer sector, several realities", "Home improvement, discount and broad retail reflect different income tiers, baskets and margin models.", "Do not infer the consumer from one ticker; compare customer, category mix and margin model.", "Share gains · promo intensity · housing-sensitive demand", "A consistent set of results across income tiers would make the signal more generalisable.", "Home Depot’s housing sensitivity, Target’s discretionary mix and Walmart’s value proposition are not interchangeable."],
    ["Consumer", "Nike and Expedia show two kinds of risk", "Nike reflects a brand-and-demand reset; Expedia is testing profit-taking after momentum.", "Two consumer stocks can fall for different reasons; volume and trend position tell you what to ask.", "Volume on weakness · trend support · forward commentary", "The split narrows if company commentary and price action point to the same demand pattern.", "Nike’s volume-backed weakness and Expedia’s pullback above its averages carry different consumer implications."],
    ["Cross-asset", "Defensive assets are not one trade", "Gold, oil, the dollar and Bitcoin are all repricing risk, but through distinct transmission channels.", "Never place gold, oil, the dollar and Bitcoin in one generic safe-haven basket.", "Real yields · dollar liquidity · geopolitical headlines", "A broad dollar rebound or higher real yields can break the apparent defensive-asset alignment.", "Gold can rise with yields if safe-haven demand dominates; each asset needs its own driver map."],
  ].map((row, index) => ({ id: index + 1, category: row[0], signal: row[1], move: ["Brent $90.87 · WTI $84.50", "U.S. 30Y 5.31%", "NYSE 1.76:1 · Nasdaq 1.68:1", "SOX +1.6% · MSFT −3.04%", "SNDK +8.88% · MU +4.13%", "Q4 EPS $4.10 · AH −6.92%", "HD → LOW/TGT → WMT", "HD 5D −3.68% · WMT 5D +1.48%", "NKE 5D −7.17% · EXPE near $335", "Gold ↑ · dollar ↓ · BTC > $64K"][index], direction: (["up", "up", "down", "neutral", "up", "down", "neutral", "neutral", "neutral", "neutral"] as Direction[])[index], thesis: row[2], lesson: row[3], watch: row[4], invalidation: row[5], detail: row[6] })),
};

const premarketSets: Record<Language, PreMarketRow[]> = {
  TW: [
    ["Home Depot", "消費 / XLY", "把同店銷售、專業客戶、毛利及全年指引一起閱讀，而非只看 EPS。", "因單一數字超過市場預期，就直接說消費強勁。", "同店銷售、專業客戶、毛利及全年指引同步改善。", "指引保守，或促銷導致毛利受壓。"],
    ["油價與霍爾木茲", "宏觀 / 通膨", "比較原油、運費、汽油和能源股反應，理解衝擊如何傳導。", "只因能源股上升就把油價走高視為正面。", "新談判令風險溢價收窄，油價回落。", "Brent 維持 90 美元以上且運輸受阻。"],
    ["長端收益率", "估值 / 久期", "檢查 10 年、30 年及曲線形狀；政策利率未變，長端仍可改變估值。", "假設疲弱消費數據必然立刻壓低長端收益率。", "曲線壓力減輕，收益率回落。", "30 年期再創高位，期限溢價擴大。"],
    ["Fabrinet", "AI 硬件", "將盤後反應與指引、現金流、資本支出和估值比較，而非只看 EPS 超預期。", "停在『超預期但下跌』，卻不問市場預期改變了甚麼。", "市場接受現金流及指引質素，盤前獲得支持。", "毛利或資本支出憂慮令盤後跌勢延續。"],
  ].map(([event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative]) => ({ event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative })),
  CN: [
    ["Home Depot", "消费 / XLY", "把同店销售、专业客户、毛利和全年指引一起阅读，而非只看 EPS。", "因为单一数字超过市场预期，就直接说消费强劲。", "同店销售、专业客户、毛利和全年指引同步改善。", "指引保守，或促销导致毛利承压。"],
    ["油价与霍尔木兹", "宏观 / 通胀", "比较原油、运费、汽油和能源股反应，理解冲击如何传导。", "只因能源股上涨就把油价走高视为正面。", "新谈判令风险溢价收窄，油价回落。", "Brent维持90美元以上且运输受阻。"],
    ["长端收益率", "估值 / 久期", "检查10年、30年及曲线形状；政策利率不变，长端仍可改变估值。", "假设疲弱消费数据必然立刻压低长端收益率。", "曲线压力减轻，收益率回落。", "30年期再创高位，期限溢价扩大。"],
    ["Fabrinet", "AI 硬件", "将盘后反应与指引、现金流、资本开支和估值比较，而非只看 EPS 超预期。", "停在“超预期但下跌”，却不问市场预期改变了什么。", "市场接受现金流及指引质量，盘前获得支持。", "毛利或资本开支担忧令盘后跌势延续。"],
  ].map(([event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative]) => ({ event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative })),
  EN: [
    ["Home Depot", "Consumer / XLY", "Read same-store sales, pro demand, margin and full-year guidance together — not EPS in isolation.", "Calling the consumer strong because one headline number beats consensus.", "Same-store sales, pro demand, margin and full-year guide improve together.", "A cautious guide or promotion-led gross-margin pressure."],
    ["Oil & Hormuz", "Macro / inflation", "Compare crude, freight, gasoline and energy-equity reaction to see how the shock travels.", "Treating higher oil as positive only because energy shares are rising.", "New talks and a narrower risk premium pull crude lower.", "Brent stays above $90 with visible shipping disruption."],
    ["Long-end yields", "Valuation / duration", "Check the 10Y, 30Y and curve shape; higher long yields change valuation even when policy rates are unchanged.", "Assuming softer consumer data must immediately push long-end yields lower.", "Curve pressure eases and yields retrace.", "30Y makes fresh highs as term premium widens."],
    ["Fabrinet", "AI hardware", "Read the after-hours move against guidance, cash flow, capex and valuation rather than EPS alone.", "Stopping at ‘beat but fell’ without identifying what expectation changed.", "Cash-flow and guidance quality win acceptance in pre-market.", "The after-hours decline persists on margin or capex concern."],
  ].map(([event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative]) => ({ event, exposure, educationObserve, educationMistake, analysisPositive, analysisNegative })),
};

const statNotes: Record<Language, string[]> = {
  TW: ["高於 20 日 / 50 日均線", "RSI 72.58", "5 日 −0.96%", "低於 20 日 / 50 日均線"],
  CN: ["高于 20 日 / 50 日均线", "RSI 72.58", "5 日 −0.96%", "低于 20 日 / 50 日均线"],
  EN: ["Above 20D / 50D", "RSI 72.58", "5D −0.96%", "Below 20D / 50D"],
};

export function getMarketContent(language: Language) {
  const copy = ui[language];
  const marketStats: MarketStat[] = sharedStats.map(([label, value, change, tone], index) => ({ label, value, change, tone, note: statNotes[language][index] }));
  const sources = copy.sourceLabels.map((label, index) => ({ label, href: urls[index] }));
  return { copy, signals: signalSets[language], premarketRows: premarketSets[language], marketStats, sources };
}
