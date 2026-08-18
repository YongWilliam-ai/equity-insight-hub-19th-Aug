/**
 * The Market Ledger data layer — source-backed static content from the cited Version 2 research brief.
 */
export type Language = "TW" | "CN" | "EN";
export type ViewMode = "education" | "analysis";

export type MarketSignal = {
  id: number;
  category: "Macro" | "AI Hardware" | "Consumer" | "Cross-asset";
  signal: string;
  move: string;
  direction: "up" | "down" | "neutral";
  thesis: string;
  watch: string;
  detail: string;
};

export const languageCopy: Record<Language, {
  short: string;
  marketNote: string;
  queryTitle: string;
  queryPrompt: string;
  education: string;
  analysis: string;
  searchPlaceholder: string;
}> = {
  TW: {
    short: "繁中",
    marketNote: "美股 08.17 收市 · 08.18 盤前",
    queryTitle: "今天要追問哪一個訊號？",
    queryPrompt: "搜尋宏觀、AI 硬件、消費或跨資產觀察",
    education: "投教閱讀",
    analysis: "分析閱讀",
    searchPlaceholder: "例如：長端收益率、Home Depot、Fabrinet",
  },
  CN: {
    short: "简中",
    marketNote: "美股 08.17 收盘 · 08.18 盘前",
    queryTitle: "今天该追问哪一个信号？",
    queryPrompt: "搜索宏观、AI硬件、消费或跨资产观察",
    education: "投教阅读",
    analysis: "分析阅读",
    searchPlaceholder: "例如：长端收益率、Home Depot、Fabrinet",
  },
  EN: {
    short: "EN",
    marketNote: "U.S. close 08.17 · pre-market 08.18",
    queryTitle: "What signal deserves your next question?",
    queryPrompt: "Search macro, AI hardware, consumer or cross-asset signals",
    education: "Education view",
    analysis: "Analysis view",
    searchPlaceholder: "e.g. long-end yields, Home Depot, Fabrinet",
  },
};

export const marketStats = [
  { label: "S&P 500", value: "7,745.06", change: "−0.52%", tone: "down", note: "Above 20D / 50D" },
  { label: "NASDAQ", value: "26,644.91", change: "−0.32%", tone: "down", note: "RSI 72.58" },
  { label: "DOW", value: "53,459.78", change: "−0.51%", tone: "down", note: "5D −0.96%" },
  { label: "VIX", value: "15.19", change: "+6.60%", tone: "up", note: "Below 20D / 50D" },
];

export const breadthData = [
  { market: "NYSE", ratio: 1.76 },
  { market: "NASDAQ", ratio: 1.68 },
];

export const signals: MarketSignal[] = [
  {
    id: 1,
    category: "Macro",
    signal: "Oil turns into an inflation tax",
    move: "Brent $90.87 · WTI $84.50",
    direction: "up",
    thesis: "Hormuz risk is raising fuel, freight and household-cost pressure at the same time.",
    watch: "Negotiation headlines · freight disruption · gasoline pass-through",
    detail: "The key read-through is not simply that energy can outperform. Oil is also a possible headwind for consumer margins, transportation costs and inflation expectations. Watch whether crude remains elevated because of a supply-risk premium or because actual physical demand tightens.",
  },
  {
    id: 2,
    category: "Macro",
    signal: "The long-end yield is the valuation switch",
    move: "U.S. 30Y 5.31%",
    direction: "up",
    thesis: "A 2007-era long-end yield challenges long-duration equities, housing and big-ticket demand.",
    watch: "Term premium · Treasury supply · inflation expectations",
    detail: "Long yields do not move only on growth data. Fiscal issuance, term premium, corporate AI financing and inflation risk all matter. The question is whether this becomes a broader financial-conditions tightening rather than a one-day bond move.",
  },
  {
    id: 3,
    category: "Macro",
    signal: "Headline indexes hid weaker internals",
    move: "NYSE 1.76:1 · Nasdaq 1.68:1",
    direction: "down",
    thesis: "The index drawdown was modest, but declining issues outnumbered advancers across both exchanges.",
    watch: "Breadth recovery · new highs/lows · volume confirmation",
    detail: "A small index loss does not equal a healthy tape. Breadth is useful for seeing whether a few large names are masking wider selling. Volume was below its 20-day average, so the signal is meaningful but not conclusive.",
  },
  {
    id: 4,
    category: "AI Hardware",
    signal: "AI is rotating, not disappearing",
    move: "SOX +1.6% · MSFT −3.04%",
    direction: "neutral",
    thesis: "Higher yields weighed on mega-cap duration while memory and equipment retained demand visibility.",
    watch: "Memory pricing · hyperscaler capex · order visibility",
    detail: "Treat AI as several linked but distinct markets: applications, cloud, compute, memory, optical interconnect and project financing. The current setup rewards investors who distinguish supply-demand visibility from broad narrative exposure.",
  },
  {
    id: 5,
    category: "AI Hardware",
    signal: "Storage & optical are the crowded leaders",
    move: "SNDK +8.88% · MU +4.13%",
    direction: "up",
    thesis: "Bandwidth and memory demand pushed storage and optical-interconnect names higher even as the market fell.",
    watch: "Volume follow-through · supply gaps · guidance confirmation",
    detail: "The theme has a credible demand case, but speed matters. Follow-through should be validated by orders, inventories and margin outlook rather than by a single heat-map session.",
  },
  {
    id: 6,
    category: "AI Hardware",
    signal: "Fabrinet: beat, then re-rate",
    move: "Q4 EPS $4.10 · AH −6.92%",
    direction: "down",
    thesis: "A strong revenue and EPS beat still failed to satisfy a market asking harder questions about margins, capex and valuation.",
    watch: "Cash flow · capex · pre-market price acceptance",
    detail: "The company reported FY2026 Q4 revenue of $1.316bn and non-GAAP EPS of $4.10, above public consensus, while guiding FY2027 Q1 revenue to $1.375–1.425bn. The after-hours reversal is a reminder that results, guidance, valuation and stock reaction must be read together.",
  },
  {
    id: 7,
    category: "Consumer",
    signal: "Retail earnings are the consumer stress test",
    move: "HD → LOW/TGT → WMT",
    direction: "neutral",
    thesis: "This week’s retail reports test whether spending weakness is temporary, segmented or broad-based.",
    watch: "Same-store sales · traffic · ticket · full-year guide",
    detail: "Home Depot reports first, followed by Lowe’s, Target and Walmart. Do not stop at EPS. The harder evidence is same-store sales, mix, promotion intensity, inventory, gross margin and management’s full-year wording.",
  },
  {
    id: 8,
    category: "Consumer",
    signal: "One consumer sector, several realities",
    move: "HD 5D −3.68% · WMT 5D +1.48%",
    direction: "neutral",
    thesis: "Home improvement, discount and broad retail reflect different income tiers, baskets and margin models.",
    watch: "Share gains · promo intensity · housing-sensitive demand",
    detail: "A single retailer cannot stand in for the U.S. consumer. Compare Home Depot’s housing sensitivity, Target’s discretionary mix and Walmart’s value proposition before drawing a macro conclusion.",
  },
  {
    id: 9,
    category: "Consumer",
    signal: "Nike and Expedia show two kinds of risk",
    move: "NKE 5D −7.17% · EXPE near $335",
    direction: "neutral",
    thesis: "Nike reflects a brand-and-demand reset; Expedia is testing profit-taking after momentum.",
    watch: "Volume on weakness · trend support · forward commentary",
    detail: "Nike’s larger five-day decline came with elevated volume, while Expedia remained above its intermediate averages after retreating from an intraday high. Both are consumer-linked, but the market questions are materially different.",
  },
  {
    id: 10,
    category: "Cross-asset",
    signal: "Defensive assets are not one trade",
    move: "Gold ↑ · dollar ↓ · BTC > $64K",
    direction: "neutral",
    thesis: "Gold, oil, the dollar and Bitcoin are all repricing risk, but through distinct transmission channels.",
    watch: "Real yields · dollar liquidity · geopolitical headlines",
    detail: "Gold can rise even when yields rise if safe-haven demand dominates. Bitcoin and gold should not be placed in the same basket without considering liquidity, real rates and risk appetite separately.",
  },
];

export const sources = [
  { label: "Reuters", href: "https://www.reuters.com/business/nasdaq-futures-gain-tech-stocks-climb-2026-08-17/" },
  { label: "Futunn research brief", href: "https://news.futunn.com/t/post/77801289/Inryj7uqib" },
  { label: "Federal Reserve calendar", href: "https://www.federalreserve.gov/newsevents/2026-august.htm" },
  { label: "Home Depot investor relations", href: "https://ir.homedepot.com/news-releases/2026" },
];
