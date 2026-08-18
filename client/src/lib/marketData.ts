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
  lesson: string;
  watch: string;
  invalidation: string;
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
    lesson: "Read oil as a cost transmission channel, not only as an energy-stock headline.",
    watch: "Negotiation headlines · freight disruption · gasoline pass-through",
    invalidation: "Risk premium fades if shipping normalises and oil falls on credible negotiations.",
    detail: "The key read-through is not simply that energy can outperform. Oil is also a possible headwind for consumer margins, transportation costs and inflation expectations. Watch whether crude remains elevated because of a supply-risk premium or because actual physical demand tightens.",
  },
  {
    id: 2,
    category: "Macro",
    signal: "The long-end yield is the valuation switch",
    move: "U.S. 30Y 5.31%",
    direction: "up",
    thesis: "A 2007-era long-end yield challenges long-duration equities, housing and big-ticket demand.",
    lesson: "Separate long-end yields from the simple ‘growth up / yields up’ story; supply and term premium matter too.",
    watch: "Term premium · Treasury supply · inflation expectations",
    invalidation: "The valuation pressure eases if long-end yields retrace with a narrower term premium.",
    detail: "Long yields do not move only on growth data. Fiscal issuance, term premium, corporate AI financing and inflation risk all matter. The question is whether this becomes a broader financial-conditions tightening rather than a one-day bond move.",
  },
  {
    id: 3,
    category: "Macro",
    signal: "Headline indexes hid weaker internals",
    move: "NYSE 1.76:1 · Nasdaq 1.68:1",
    direction: "down",
    thesis: "The index drawdown was modest, but declining issues outnumbered advancers across both exchanges.",
    lesson: "Compare an index close with breadth and volume before calling the tape healthy or broken.",
    watch: "Breadth recovery · new highs/lows · volume confirmation",
    invalidation: "A breadth recovery with stronger volume would weaken the narrow-market concern.",
    detail: "A small index loss does not equal a healthy tape. Breadth is useful for seeing whether a few large names are masking wider selling. Volume was below its 20-day average, so the signal is meaningful but not conclusive.",
  },
  {
    id: 4,
    category: "AI Hardware",
    signal: "AI is rotating, not disappearing",
    move: "SOX +1.6% · MSFT −3.04%",
    direction: "neutral",
    thesis: "Higher yields weighed on mega-cap duration while memory and equipment retained demand visibility.",
    lesson: "Do not treat AI as a single sector; split the chain into software, cloud, compute, memory, optical and financing.",
    watch: "Memory pricing · hyperscaler capex · order visibility",
    invalidation: "The rotation weakens if memory prices, capex intent or order visibility roll over.",
    detail: "Treat AI as several linked but distinct markets: applications, cloud, compute, memory, optical interconnect and project financing. The current setup rewards investors who distinguish supply-demand visibility from broad narrative exposure.",
  },
  {
    id: 5,
    category: "AI Hardware",
    signal: "Storage & optical are the crowded leaders",
    move: "SNDK +8.88% · MU +4.13%",
    direction: "up",
    thesis: "Bandwidth and memory demand pushed storage and optical-interconnect names higher even as the market fell.",
    lesson: "A strong heat map is a clue, not proof; look for orders, inventories and margin evidence next.",
    watch: "Volume follow-through · supply gaps · guidance confirmation",
    invalidation: "A high-volume reversal or weaker supply-demand commentary would challenge the leadership trade.",
    detail: "The theme has a credible demand case, but speed matters. Follow-through should be validated by orders, inventories and margin outlook rather than by a single heat-map session.",
  },
  {
    id: 6,
    category: "AI Hardware",
    signal: "Fabrinet: beat, then re-rate",
    move: "Q4 EPS $4.10 · AH −6.92%",
    direction: "down",
    thesis: "A strong revenue and EPS beat still failed to satisfy a market asking harder questions about margins, capex and valuation.",
    lesson: "Always read the four-part earnings set: reported result, guide, valuation and price reaction.",
    watch: "Cash flow · capex · pre-market price acceptance",
    invalidation: "The negative read softens if the stock stabilises and management’s cash-flow / capex narrative is accepted.",
    detail: "The company reported FY2026 Q4 revenue of $1.316bn and non-GAAP EPS of $4.10, above public consensus, while guiding FY2027 Q1 revenue to $1.375–1.425bn. The after-hours reversal is a reminder that results, guidance, valuation and stock reaction must be read together.",
  },
  {
    id: 7,
    category: "Consumer",
    signal: "Retail earnings are the consumer stress test",
    move: "HD → LOW/TGT → WMT",
    direction: "neutral",
    thesis: "This week’s retail reports test whether spending weakness is temporary, segmented or broad-based.",
    lesson: "An EPS beat is incomplete; use traffic, ticket, inventory, gross margin and guidance to read the consumer.",
    watch: "Same-store sales · traffic · ticket · full-year guide",
    invalidation: "The consumer-pressure view weakens if multiple retailers show resilient demand and constructive full-year guidance.",
    detail: "Home Depot reports first, followed by Lowe’s, Target and Walmart. Do not stop at EPS. The harder evidence is same-store sales, mix, promotion intensity, inventory, gross margin and management’s full-year wording.",
  },
  {
    id: 8,
    category: "Consumer",
    signal: "One consumer sector, several realities",
    move: "HD 5D −3.68% · WMT 5D +1.48%",
    direction: "neutral",
    thesis: "Home improvement, discount and broad retail reflect different income tiers, baskets and margin models.",
    lesson: "Do not infer the entire consumer from one ticker; compare the customer, category mix and margin model.",
    watch: "Share gains · promo intensity · housing-sensitive demand",
    invalidation: "A consistent set of results across income tiers would make the consumer signal more generalisable.",
    detail: "A single retailer cannot stand in for the U.S. consumer. Compare Home Depot’s housing sensitivity, Target’s discretionary mix and Walmart’s value proposition before drawing a macro conclusion.",
  },
  {
    id: 9,
    category: "Consumer",
    signal: "Nike and Expedia show two kinds of risk",
    move: "NKE 5D −7.17% · EXPE near $335",
    direction: "neutral",
    thesis: "Nike reflects a brand-and-demand reset; Expedia is testing profit-taking after momentum.",
    lesson: "Two consumer stocks can fall for different reasons; volume and trend position tell you what question to ask.",
    watch: "Volume on weakness · trend support · forward commentary",
    invalidation: "The split narrows if company commentary and price action start signalling the same demand pattern.",
    detail: "Nike’s larger five-day decline came with elevated volume, while Expedia remained above its intermediate averages after retreating from an intraday high. Both are consumer-linked, but the market questions are materially different.",
  },
  {
    id: 10,
    category: "Cross-asset",
    signal: "Defensive assets are not one trade",
    move: "Gold ↑ · dollar ↓ · BTC > $64K",
    direction: "neutral",
    thesis: "Gold, oil, the dollar and Bitcoin are all repricing risk, but through distinct transmission channels.",
    lesson: "Never put gold, oil, the dollar and Bitcoin into one generic ‘safe-haven’ bucket without separating their drivers.",
    watch: "Real yields · dollar liquidity · geopolitical headlines",
    invalidation: "A broad dollar rebound or higher real yields could break the apparent defensive-asset alignment.",
    detail: "Gold can rise even when yields rise if safe-haven demand dominates. Bitcoin and gold should not be placed in the same basket without considering liquidity, real rates and risk appetite separately.",
  },
];

export const sources = [
  { label: "Reuters", href: "https://www.reuters.com/business/nasdaq-futures-gain-tech-stocks-climb-2026-08-17/" },
  { label: "Futunn research brief", href: "https://news.futunn.com/t/post/77801289/Inryj7uqib" },
  { label: "Federal Reserve calendar", href: "https://www.federalreserve.gov/newsevents/2026-august.htm" },
  { label: "Home Depot investor relations", href: "https://ir.homedepot.com/news-releases/2026" },
];

export const premarketRows = [
  {
    event: "Home Depot",
    exposure: "Consumer / XLY",
    educationObserve: "Read same-store sales, pro demand, margin and full-year guidance together — not EPS in isolation.",
    educationMistake: "Calling the consumer strong just because one headline number beats consensus.",
    analysisPositive: "Same-store sales, pro demand, margin and full-year guide improve together.",
    analysisNegative: "A cautious guide or promotion-led gross-margin pressure.",
  },
  {
    event: "Oil & Hormuz",
    exposure: "Macro / inflation",
    educationObserve: "Compare crude, freight, gasoline and energy-equity reaction to see how the shock travels.",
    educationMistake: "Treating higher oil as a positive only because energy shares are rising.",
    analysisPositive: "New talks and a narrower risk premium pull crude lower.",
    analysisNegative: "Brent stays above $90 with visible shipping disruption.",
  },
  {
    event: "Long-end yields",
    exposure: "Valuation / duration",
    educationObserve: "Check the 10Y, 30Y and curve shape; higher long yields change valuation even when policy rates are unchanged.",
    educationMistake: "Assuming softer consumer data must immediately push long-end yields lower.",
    analysisPositive: "Curve pressure eases and yields retrace.",
    analysisNegative: "30Y makes fresh highs as term premium widens.",
  },
  {
    event: "Fabrinet",
    exposure: "AI hardware",
    educationObserve: "Read the after-hours move against guidance, cash flow, capex and valuation rather than the EPS beat alone.",
    educationMistake: "Stopping the analysis at ‘beat but fell’ without identifying what expectation changed.",
    analysisPositive: "Cash-flow and guidance quality win acceptance in pre-market.",
    analysisNegative: "The after-hours decline persists on margin or capex concern.",
  },
];
