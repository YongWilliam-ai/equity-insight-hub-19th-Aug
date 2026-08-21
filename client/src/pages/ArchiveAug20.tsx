/**
 * EQUITY / INSIGHT — 2026-08-20 Market Ledger.
 * Style: ink-green research spine, warm-paper ledger, brass evidence rules.
 * The chosen philosophy is source-first editorial research: prices, timestamps and interpretations remain visibly distinct.
 */
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, CircleAlert, FileArchive,
  Landmark, Layers3, Menu, ShieldCheck, TrendingDown, TrendingUp, X,
} from "lucide-react";

type Language = "CN" | "TW" | "EN";
type ViewMode = "education" | "analysis";

const heroImage = "/manus-storage/equity-insight-hero_91085892.jpg";

const content: Record<Language, any> = {
  CN: {
    switcher: ["繁中", "简中", "EN"], locale: "简体中文主报告", edition: "BIT DAILY / 2026.08.20",
    nav: ["市场主线", "信号拆解", "今日验证", "来源审计"], sourceAware: "来源可追溯", sourceNote: "完成收市、盘中快照与分析判断严格分层。",
    sideThesis: "利率降温，\n不是风险出清。", mobileOpen: "打开目录", mobileClose: "关闭目录",
    heroLedger: "THE MARKET LEDGER / 20 AUG 2026", dataCut: "数据截点 · 09:37 HKT", strap: "美股 08.19 收盘 · 港股 08.20 早盘 · 下一美股交易日催化剂",
    titleA: "长端压力缓解，", titleEm: "但风险", titleB: "尚未离场。",
    hero: "财政部扩大长期国债买回让收益率回落，推动美股结束三日跌势；然而FOMC纪要、较高油价与半导体落后提醒市场：这是估值减压，而非全面风险偏好重启。",
    ctaDesk: "查看信号拆解", ctaWatch: "查看今日验证", thesisLabel: "一句话主线", thesis: "财政部买回操作带来 rate-relief rebound；医疗与个别零售领涨，但AI硬件仍分化，长端利率和油价仍是下一步的风险开关。",
    thesisAudit: "昨日对照", auditBody: "前日的“长端利率／油价压估值”得到部分验证后被政策操作缓解；AI硬件的弱势未演变为统一需求结论。",
    snapshotKicker: "01 / 完成交易时段", snapshotTitle: "收盘回升，\n不是单向风险偏好。", snapshotBody: "以下三个美股指数是8月19日已完成收盘；恒指明确为8月20日09:23:06 HKT的延迟盘中快照，不能作为收市使用。",
    statNames: ["S&P 500", "NASDAQ", "DOW", "恒指 · 盘中"], statNotes: ["8月19日收盘", "8月19日收盘", "8月19日收盘", "09:23 HKT / 延迟报价"],
    breadthKicker: "02 / 市场内部", breadthTitle: "广度回暖，\n但科技没有同步确认。", breadthBody: "NYSE上涨／下跌比为1.9:1，Nasdaq为1.45:1；全美成交量16.92bn，略低于20日均值16.96bn。医疗+3.5%、可选消费+2%，但IT -0.7%、SOX -2%。",
    breadthLabels: ["NYSE 上涨家数优势", "NASDAQ 上涨家数优势", "成交量 / 20日均值"], breadthNumbers: ["1.90 : 1", "1.45 : 1", "99.8%"],
    highlightsKicker: "03 / 事件到价格", highlightsTitle: "分化是信息，\n不是噪音。", highlightsBody: "每张卡片均把事实、价格反应与下一步应验证的条件分开呈现；切换阅读模式可改变观察角度。",
    education: "投教阅读", analysis: "分析阅读", modeLabel: "阅读模式", reading: "如何阅读", inference: "分析判断", next: "下一步看什么", factLabel: "事实", shortcut: "常见捷径", positive: "正面确认", negative: "负面确认", readingPanel: "市场解读", rateRelief: "利率减压", breadthRead: "广度，而非亢奋", sectorRead: "板块分化", rateReliefBody: "财政部的长端操作是收益率下降与指数回升之间最清晰的共同驱动。", breadthReadBody: "上涨家数改善，但成交量基本处于常态；收市未显示高确信度的需求爆发。", sectorReadBody: "医疗与可选消费提供承接，半导体仍为AI beta保留了谨慎标记。", conditionalNote: "这个判断是有条件的：收益率持续减压仍需验证，才可称为新的risk-on regime。",
    cards: [
      { label: "宏观 / 直接驱动", title: "长期国债买回缓解贴现率", move: "10Y 4.637% · 30Y 5.184%", fact: "财政部宣布自9月9日起把长期名义国债流动性支持买回的最高规模至少提高至US$4bn。", lesson: "国债买回是流动性与市场运作工具，不等同于Fed QE；先观察收益率反应，再推断估值影响。", analysis: "当天反弹是 rate-relief，不是通胀与财政供给问题被解决。", next: "若30Y重新上行、油价不回落，成长估值压力会再次被测试。" },
      { label: "医疗 / 临床数据", title: "Moderna、Merck带动医疗", move: "MRNA 近 +177% · MRK +12.6%", fact: "晚期黑色素瘤疫苗试验数据带动Moderna接近翻倍以上，Merck走高；标普医疗+3.5%。", lesson: "临床数据驱动的个股跳升不等于整个市场进入防御切换，应区分事件弹性与行业扩散。", analysis: "医疗提供了当日最清晰的业绩／数据型上涨贡献，也是指数反弹的重要承接。", next: "观察强势能否外溢至更广泛医疗，而不是只停留在试验相关个股。" },
      { label: "AI硬件 / 分化", title: "Marvell强，半导体仍弱", move: "MRVL +9.9% · SOX -2.0%", fact: "Marvell宣布协助开发Google定制芯片，并给予Alphabet潜在股权安排；但费城半导体指数收跌。", lesson: "不能用单一龙头上涨替代整个产业链判断；订单、客户集中度与指引需要分别核实。", analysis: "AI硬件从“全面估值压力”转为“有订单能见度者相对占优”的分化。", next: "继续看订单、价格、云厂商资本开支与半导体指数是否停止落后。" },
      { label: "消费 / 财报交叉", title: "Target与Lowe’s给出不同读数", move: "TGT +4.3% · LOW +2.0%", fact: "Target上调全年销售预期；Lowe’s虽下调全年销售增长预期但股价仍上行；Estée Lauder +16.3%。", lesson: "单季beat/miss不够，需同时看客流、客单、促销、毛利率和全年指引。", analysis: "消费没有给出单向结论：市场奖励改善与预期差，但前瞻仍需Walmart交叉验证。", next: "Walmart的交易量、客单、毛利率及全年指引将决定消费叙事能否扩散。" },
    ],
    watchKicker: "04 / 今天验证什么", watchTitle: "让下一组证据，\n决定今天的解释。", watchBody: "盘前和开盘走势只是调查起点；下面列出会强化或削弱当前主线的可观察条件。",
    watches: [
      { event: "港股密集中期业绩", time: "8月20日 · 官方日程", exposure: "友邦、中国平安、网易、泡泡玛特、李宁等", eduA: "比较盈利、现金流与指引，而不是只追盈利标题。", eduB: "避免把恒指早盘方向当作单一公司的业绩结论。", plus: "多家龙头的盈利／指引改善支撑早盘反弹。", minus: "科技或消费业绩令反弹回到个股分化。" },
      { event: "Walmart Q2", time: "8月20日 06:00 CDT", exposure: "下一美股 regular session 前", eduA: "依次看交易量、客单、促销、毛利和全年指引。", eduB: "避免由单一EPS数字外推整个美国消费。", plus: "交易量与指引稳健，且毛利没有被促销明显侵蚀。", minus: "成本／促销压缩毛利或全年指引转谨慎。" },
      { event: "长端利率与能源", time: "交易日持续观察", exposure: "估值与通胀传导开关", eduA: "把收益率、油价与科技相对表现放在同一条因果链里读。", eduB: "避免把财政部买回误读成利率风险已经消失。", plus: "收益率续降、半导体不再明显落后。", minus: "30Y和油价重上行，科技再次弱于指数。" },
    ],
    sourceKicker: "05 / 证据、时间戳与限制", sourceTitle: "事实先于叙事。", sourceBody: "主要数字以Reuters、美国财政部、HKEX与带时间戳的Yahoo Finance页面交叉核实。港股早盘为延迟盘中数据；不把它与8月19日的完成收市混用。",
    sourceCut: "资料截点：2026年8月20日 09:37 HKT · 盘中数据另行标注", archiveLabel: "历史归档", archive19: "阅读 2026.08.19", archive18: "阅读 2026.08.18",
    footer: "仅供研究与投资者教育用途，不构成个性化投资建议、证券推荐或交易指令。",
  },
  TW: {
    switcher: ["繁中", "簡中", "EN"], locale: "繁體中文主報告", edition: "BIT DAILY / 2026.08.20",
    nav: ["市場主線", "訊號拆解", "今日驗證", "來源稽核"], sourceAware: "來源可追溯", sourceNote: "完成收市、盤中快照與分析判斷嚴格分層。",
    sideThesis: "利率降溫，\n不是風險出清。", mobileOpen: "開啟目錄", mobileClose: "關閉目錄",
    heroLedger: "THE MARKET LEDGER / 20 AUG 2026", dataCut: "資料截點 · 09:37 HKT", strap: "美股 08.19 收市 · 港股 08.20 早盤 · 下一美股交易日催化劑",
    titleA: "長端壓力緩解，", titleEm: "但風險", titleB: "尚未離場。",
    hero: "財政部擴大長期國債買回讓收益率回落，推動美股結束三日跌勢；然而FOMC會議紀要、較高油價與半導體落後提醒市場：這是估值減壓，而非全面風險偏好重啟。",
    ctaDesk: "查看訊號拆解", ctaWatch: "查看今日驗證", thesisLabel: "一句話主線", thesis: "財政部買回操作帶來 rate-relief rebound；醫療與個別零售領漲，但AI硬件仍分化，長端利率和油價仍是下一步的風險開關。",
    thesisAudit: "昨日對照", auditBody: "前日的「長端利率／油價壓估值」得到部分驗證後被政策操作緩解；AI硬件的弱勢未演變為統一需求結論。",
    snapshotKicker: "01 / 完成交易時段", snapshotTitle: "收市回升，\n不是單向風險偏好。", snapshotBody: "以下三個美股指數是8月19日已完成收市；恆指明確為8月20日09:23:06 HKT的延遲盤中快照，不能作為收市使用。",
    statNames: ["S&P 500", "NASDAQ", "DOW", "恆指 · 盤中"], statNotes: ["8月19日收市", "8月19日收市", "8月19日收市", "09:23 HKT / 延遲報價"],
    breadthKicker: "02 / 市場內部", breadthTitle: "廣度回暖，\n但科技沒有同步確認。", breadthBody: "NYSE上漲／下跌比為1.9:1，Nasdaq為1.45:1；全美成交量16.92bn，略低於20日均值16.96bn。醫療+3.5%、可選消費+2%，但IT -0.7%、SOX -2%。",
    breadthLabels: ["NYSE 上漲家數優勢", "NASDAQ 上漲家數優勢", "成交量 / 20日均值"], breadthNumbers: ["1.90 : 1", "1.45 : 1", "99.8%"],
    highlightsKicker: "03 / 事件到價格", highlightsTitle: "分化是資訊，\n不是雜訊。", highlightsBody: "每張卡片均把事實、價格反應與下一步應驗證的條件分開呈現；切換閱讀模式可改變觀察角度。",
    education: "投教閱讀", analysis: "分析閱讀", modeLabel: "閱讀模式", reading: "如何閱讀", inference: "分析判斷", next: "下一步看甚麼", factLabel: "事實", shortcut: "常見捷徑", positive: "正面確認", negative: "負面確認", readingPanel: "市場解讀", rateRelief: "利率減壓", breadthRead: "廣度，而非亢奮", sectorRead: "板塊分化", rateReliefBody: "財政部的長端操作是收益率下降與指數回升之間最清晰的共同驅動。", breadthReadBody: "上漲家數改善，但成交量基本處於常態；收市未顯示高確信度的需求爆發。", sectorReadBody: "醫療與可選消費提供承接，半導體仍為AI beta保留了謹慎標記。", conditionalNote: "這個判斷是有條件的：收益率持續減壓仍需驗證，才可稱為新的risk-on regime。",
    cards: [
      { label: "宏觀 / 直接驅動", title: "長期國債買回緩解貼現率", move: "10Y 4.637% · 30Y 5.184%", fact: "財政部宣布自9月9日起把長期名義國債流動性支持買回的最高規模至少提高至US$4bn。", lesson: "國債買回是流動性與市場運作工具，不等同於Fed QE；先觀察收益率反應，再推斷估值影響。", analysis: "當天反彈是 rate-relief，不是通脹與財政供給問題被解決。", next: "若30Y重新上行、油價不回落，成長估值壓力會再次被測試。" },
      { label: "醫療 / 臨床數據", title: "Moderna、Merck帶動醫療", move: "MRNA 近 +177% · MRK +12.6%", fact: "晚期黑色素瘤疫苗試驗數據帶動Moderna接近翻倍以上，Merck走高；標普醫療+3.5%。", lesson: "臨床數據驅動的個股跳升不等於整個市場進入防禦切換，應區分事件彈性與行業擴散。", analysis: "醫療提供了當日最清晰的業績／數據型上漲貢獻，也是指數反彈的重要承接。", next: "觀察強勢能否外溢至更廣泛醫療，而不是只停留在試驗相關個股。" },
      { label: "AI硬件 / 分化", title: "Marvell強，半導體仍弱", move: "MRVL +9.9% · SOX -2.0%", fact: "Marvell宣布協助開發Google定製晶片，並給予Alphabet潛在股權安排；但費城半導體指數收跌。", lesson: "不能用單一龍頭上漲替代整個產業鏈判斷；訂單、客戶集中度與指引需要分別核實。", analysis: "AI硬件從「全面估值壓力」轉為「有訂單能見度者相對佔優」的分化。", next: "繼續看訂單、價格、雲端資本支出與半導體指數是否停止落後。" },
      { label: "消費 / 財報交叉", title: "Target與Lowe’s給出不同讀數", move: "TGT +4.3% · LOW +2.0%", fact: "Target上調全年銷售預期；Lowe’s雖下調全年銷售增長預期但股價仍上行；Estée Lauder +16.3%。", lesson: "單季beat/miss不夠，需同時看客流、客單、促銷、毛利率和全年指引。", analysis: "消費沒有給出單向結論：市場獎勵改善與預期差，但前瞻仍需Walmart交叉驗證。", next: "Walmart的交易量、客單、毛利率及全年指引將決定消費敘事能否擴散。" },
    ],
    watchKicker: "04 / 今天驗證甚麼", watchTitle: "讓下一組證據，\n決定今天的解釋。", watchBody: "盤前和開盤走勢只是調查起點；下面列出會強化或削弱當前主線的可觀察條件。",
    watches: [
      { event: "港股密集中期業績", time: "8月20日 · 官方日程", exposure: "友邦、中國平安、網易、泡泡瑪特、李寧等", eduA: "比較盈利、現金流與指引，而不是只追盈利標題。", eduB: "避免把恆指早盤方向當作單一公司的業績結論。", plus: "多家龍頭的盈利／指引改善支撐早盤反彈。", minus: "科技或消費業績令反彈回到個股分化。" },
      { event: "Walmart Q2", time: "8月20日 06:00 CDT", exposure: "下一美股 regular session 前", eduA: "依次看交易量、客單、促銷、毛利和全年指引。", eduB: "避免由單一EPS數字外推整個美國消費。", plus: "交易量與指引穩健，且毛利沒有被促銷明顯侵蝕。", minus: "成本／促銷壓縮毛利或全年指引轉謹慎。" },
      { event: "長端利率與能源", time: "交易日持續觀察", exposure: "估值與通脹傳導開關", eduA: "把收益率、油價與科技相對表現放在同一條因果鏈裡讀。", eduB: "避免把財政部買回誤讀成利率風險已經消失。", plus: "收益率續降、半導體不再明顯落後。", minus: "30Y和油價重上行，科技再次弱於指數。" },
    ],
    sourceKicker: "05 / 證據、時間戳與限制", sourceTitle: "事實先於敘事。", sourceBody: "主要數字以Reuters、美國財政部、HKEX與帶時間戳的Yahoo Finance頁面交叉核實。港股早盤為延遲盤中數據；不把它與8月19日的完成收市混用。",
    sourceCut: "資料截點：2026年8月20日 09:37 HKT · 盤中資料另行標註", archiveLabel: "歷史歸檔", archive19: "閱讀 2026.08.19", archive18: "閱讀 2026.08.18",
    footer: "僅供研究與投資者教育用途，不構成個人化投資建議、證券推薦或交易指令。",
  },
  EN: {
    switcher: ["Traditional", "Simplified", "EN"], locale: "English research edition", edition: "BIT DAILY / 2026.08.20",
    nav: ["Market thesis", "Signal breakdown", "Today’s tests", "Source audit"], sourceAware: "Source-aware", sourceNote: "Completed closes, intraday snapshots and analytical views remain separate.",
    sideThesis: "Rate relief,\nnot risk clearance.", mobileOpen: "Open index", mobileClose: "Close index",
    heroLedger: "THE MARKET LEDGER / 20 AUG 2026", dataCut: "Data cut · 09:37 HKT", strap: "U.S. close 08.19 · Hong Kong morning · next U.S. session catalysts",
    titleA: "Long-end pressure eased,", titleEm: "but risk", titleB: "has not left.",
    hero: "Treasury’s larger long-end buyback pushed yields lower and ended Wall Street’s three-day decline. Yet the FOMC minutes, firmer oil and semiconductor underperformance say this is valuation relief — not a broad restart of risk appetite.",
    ctaDesk: "Open signal breakdown", ctaWatch: "Open today’s tests", thesisLabel: "One-line thesis", thesis: "Treasury’s operation created a rate-relief rebound; healthcare and selected retail led, but AI hardware remains split and long-end yields plus oil are still the next risk switches.",
    thesisAudit: "Yesterday → Today", auditBody: "The prior long-end-yield / oil valuation risk was partly confirmed, then temporarily relieved by policy operations; hardware weakness did not become a uniform demand conclusion.",
    snapshotKicker: "01 / Completed sessions", snapshotTitle: "A higher close,\nnot one-way risk-on.", snapshotBody: "The first three U.S. indexes are completed 19 August closes. HSI is explicitly a delayed intraday snapshot at 09:23:06 HKT on 20 August, never a close.",
    statNames: ["S&P 500", "NASDAQ", "DOW", "HSI · intraday"], statNotes: ["19 Aug close", "19 Aug close", "19 Aug close", "09:23 HKT / delayed quote"],
    breadthKicker: "02 / Market internals", breadthTitle: "Breadth improved,\nbut tech did not confirm.", breadthBody: "NYSE advances led declines 1.9:1; Nasdaq 1.45:1. U.S. volume was 16.92bn, marginally below the 20-day average of 16.96bn. Health care +3.5% and consumer discretionary +2%, while IT -0.7% and SOX -2%.",
    breadthLabels: ["NYSE advance advantage", "NASDAQ advance advantage", "Volume / 20-day average"], breadthNumbers: ["1.90 : 1", "1.45 : 1", "99.8%"],
    highlightsKicker: "03 / Event to price", highlightsTitle: "Dispersion is information,\nnot noise.", highlightsBody: "Each card separates the fact, price reaction and the condition that still needs testing. Switch reading mode to change the framing.",
    education: "Education view", analysis: "Analysis view", modeLabel: "Reading mode", reading: "How to read it", inference: "Analytical read", next: "What to test next", factLabel: "Fact", shortcut: "Common shortcut", positive: "Positive confirmation", negative: "Negative confirmation", readingPanel: "Market reading", rateRelief: "Rate relief", breadthRead: "Breadth, not euphoria", sectorRead: "Sector split", rateReliefBody: "Treasury’s long-end action was the clearest common driver behind lower yields and the index rebound.", breadthReadBody: "Advancers improved but volume was essentially normal; the close did not show a high-conviction demand surge.", sectorReadBody: "Health care and consumer discretionary added support while semiconductors kept a caution flag on AI-beta.", conditionalNote: "The inference is conditional: sustained yield relief needs confirmation before a new risk-on regime can be claimed.",
    cards: [
      { label: "Macro / direct driver", title: "Long-end buybacks eased discount rates", move: "10Y 4.637% · 30Y 5.184%", fact: "Treasury said it will at least double the maximum size of long-end nominal liquidity-support buybacks to US$4bn from 9 September.", lesson: "A Treasury buyback is a market-functioning and liquidity tool, not Fed QE. Observe yield reaction before inferring the valuation effect.", analysis: "The rebound was rate relief, not a resolution of inflation or fiscal-supply risk.", next: "If 30Y resumes rising and oil does not cool, growth valuation pressure will be tested again." },
      { label: "Health care / clinical data", title: "Moderna and Merck lifted health care", move: "MRNA near +177% · MRK +12.6%", fact: "Late-stage melanoma vaccine results drove Moderna sharply higher and Merck up, while S&P health care gained 3.5%.", lesson: "A clinical-data jump in two stocks is not automatically a broad defensive rotation; separate event beta from industry breadth.", analysis: "Health care delivered the day’s clearest data-driven contribution and important support for the index rebound.", next: "Test whether strength broadens through health care rather than staying confined to trial-linked names." },
      { label: "AI hardware / dispersion", title: "Marvell rose; semis still fell", move: "MRVL +9.9% · SOX -2.0%", fact: "Marvell cited work on Google custom chips and a potential Alphabet equity arrangement; the Philadelphia Semiconductor Index still closed lower.", lesson: "One leader’s gain cannot stand in for an industry-chain conclusion. Orders, customer concentration and guidance must be checked separately.", analysis: "AI hardware moved from blanket valuation pressure to a split in which visible order exposure outperformed.", next: "Watch orders, pricing, hyperscaler capex and whether SOX stops lagging." },
      { label: "Consumer / earnings cross-check", title: "Target and Lowe’s gave different reads", move: "TGT +4.3% · LOW +2.0%", fact: "Target raised annual sales guidance; Lowe’s shares rose despite a lower annual sales-growth forecast; Estée Lauder gained 16.3%.", lesson: "A beat/miss is incomplete. Read traffic, ticket, promotions, gross margin and the full-year guide together.", analysis: "Consumer data remain non-uniform: markets rewarded improvement and expectation gaps, but Walmart is needed for a broader test.", next: "Walmart’s traffic, basket, margin and guidance will decide whether the consumer narrative can broaden." },
    ],
    watchKicker: "04 / What tests the thesis today", watchTitle: "Let the next evidence set\ndecide today’s explanation.", watchBody: "Pre-market and opening moves are the beginning of investigation. The conditions below can reinforce or weaken the current thesis.",
    watches: [
      { event: "Hong Kong dense results day", time: "20 Aug · official diary", exposure: "AIA, Ping An, NetEase, Pop Mart, Li Ning and others", eduA: "Compare earnings, cash flow and guidance — not only an earnings headline.", eduB: "Do not treat an HSI morning move as a verdict on a single company result.", plus: "Improved earnings / guidance across leaders support the morning rebound.", minus: "Tech or consumer prints pull the rebound back into stock-specific dispersion." },
      { event: "Walmart Q2", time: "20 Aug, 06:00 CDT", exposure: "Before next U.S. regular session", eduA: "Read traffic, basket, promotions, gross margin and full-year guide in sequence.", eduB: "Do not extrapolate the whole U.S. consumer from a single EPS number.", plus: "Traffic and guide are resilient without a material promotion-led margin hit.", minus: "Costs / promotions compress margin or guide turns more cautious." },
      { event: "Long-end yields & energy", time: "Through the trading day", exposure: "Valuation and inflation transmission switch", eduA: "Read yields, oil and relative tech performance as one causal chain.", eduB: "Do not interpret the Treasury operation as proof that rate risk has disappeared.", plus: "Yields keep falling and semis cease material underperformance.", minus: "30Y and oil resume rising while tech lags the indexes again." },
    ],
    sourceKicker: "05 / Evidence, timestamps & limits", sourceTitle: "Facts before narrative.", sourceBody: "Key figures were cross-checked with Reuters, U.S. Treasury, HKEX and a timestamped Yahoo Finance page. Hong Kong is a delayed intraday quote and is never mixed with the completed 19 August close.",
    sourceCut: "Data cut: 20 Aug 2026, 09:37 HKT · intraday figures labelled separately", archiveLabel: "Historical archive", archive19: "Read 2026.08.19", archive18: "Read 2026.08.18",
    footer: "Research and investor education only. Not personalised investment advice, a securities recommendation or a trading instruction.",
  },
};

const sources = [
  ["Reuters · U.S. close", "https://www.reuters.com/business/us-stock-futures-steady-after-tech-slump-investors-focus-middle-east-tensions-2026-08-19/"],
  ["U.S. Treasury · 19 Aug releases", "https://home.treasury.gov/news/press-releases"],
  ["HKEX · board-meeting diary", "https://www3.hkexnews.hk/reports/bmn/ebmn_c.htm"],
  ["Yahoo Finance · HSI delayed quote", "https://finance.yahoo.com/quote/%5EHSI/"],
  ["Walmart · Q2 earnings timing", "https://corporate.walmart.com/news/2026/08/13/walmart-to-host-second-quarter-earnings-conference-call-august-20-2026"],
];

function ResearchMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`research-mark ${className}`}><i /><i /><b /></span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    const value = new URLSearchParams(window.location.search).get("lang");
    return value === "TW" || value === "EN" ? value : "CN";
  });
  const [viewMode, setViewMode] = useState<ViewMode>("analysis");
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = content[language];
  const values = ["7,707.98", "26,331.09", "53,463.05", "25,779.08"];
  const changes = ["+0.21%", "+0.16%", "+0.22%", "+1.11%"];
  const icons = [Landmark, TrendingUp, Layers3, CalendarDays];

  useEffect(() => {
    document.documentElement.lang = language === "CN" ? "zh-Hans" : language === "TW" ? "zh-Hant" : "en";
    document.title = `EQUITY / INSIGHT — ${copy.edition}`;
  }, [language, copy.edition]);

  const switchLanguage = (next: Language) => {
    setLanguage(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  };
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#16352F] lg:flex">
      <aside className="ledger-spine sticky top-0 z-40 hidden h-screen w-[236px] flex-col border-r border-[#E4DBC9] bg-[#10332D] px-6 py-7 text-[#F6F0E3] lg:flex">
        <button className="flex items-center gap-3 text-left" onClick={() => jump("overview")} aria-label={copy.nav[0]}><ResearchMark className="h-11 w-11" /><span className="leading-none"><span className="block font-display text-[18px] tracking-tight">EQUITY</span><span className="mt-1 block font-mono text-[10px] tracking-[0.22em] text-[#C99A48]">INSIGHT</span></span></button>
        <div className="mt-14 border-l border-[#C99A48]/60 pl-4"><p className="font-mono text-[10px] tracking-[0.22em] text-[#C99A48]">{copy.edition}</p><p className="mt-3 whitespace-pre-line font-display text-[22px] leading-tight">{copy.sideThesis}</p></div>
        <nav className="mt-12 space-y-2" aria-label={copy.nav.join(" / ")}>{copy.nav.map((label: string, index: number) => <button key={label} onClick={() => jump(["overview", "signals", "watch", "sources"][index])} className="group flex w-full items-center gap-3 border-b border-white/10 py-3 text-left text-sm text-[#EAE3D5] transition hover:border-[#C99A48] hover:text-white"><span className="font-mono text-[10px] text-[#C99A48]">{String(index + 1).padStart(2, "0")}</span><span>{label}</span><ChevronRight size={14} className="ml-auto opacity-0 transition group-hover:opacity-100" /></button>)}</nav>
        <div className="mt-auto border border-white/15 bg-white/[0.04] p-4"><div className="flex items-center gap-2 text-[#C99A48]"><ShieldCheck size={15} /><span className="font-mono text-[10px] tracking-[0.16em]">{copy.sourceAware}</span></div><p className="mt-2 text-xs leading-relaxed text-[#D5CEBF]">{copy.sourceNote}</p></div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-[#E4DBC9] bg-[#F3EFE6]/95 px-5 py-3 backdrop-blur lg:px-10"><div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3"><button className="flex items-center gap-2 lg:hidden" onClick={() => setMobileOpen(true)} aria-label={copy.mobileOpen}><Menu size={21} /><ResearchMark className="h-7 w-7" /></button><div className="hidden items-center gap-3 text-[11px] font-medium tracking-[0.14em] text-[#50615B] sm:flex"><span className="status-dot" /><span>{copy.locale}</span><span className="text-[#B6A997]">•</span><span>{copy.edition}</span></div><div className="ml-auto flex items-center gap-1 rounded-full border border-[#DED4C2] bg-[#FAF7F0] p-1" role="group" aria-label="language switcher">{(["TW", "CN", "EN"] as Language[]).map((option, index) => <button key={option} onClick={() => switchLanguage(option)} className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition ${language === option ? "bg-[#16352F] text-white" : "text-[#66746E] hover:text-[#16352F]"}`}>{copy.switcher[index]}</button>)}</div></div></header>

        {mobileOpen && <div className="fixed inset-0 z-50 bg-[#10332D] p-6 text-[#F6F0E3] lg:hidden"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><ResearchMark className="h-10 w-10" /><span className="font-display text-xl">EQUITY / INSIGHT</span></div><button onClick={() => setMobileOpen(false)} aria-label={copy.mobileClose}><X size={24} /></button></div><div className="mt-14 space-y-4">{copy.nav.map((label: string, index: number) => <button key={label} onClick={() => jump(["overview", "signals", "watch", "sources"][index])} className="flex w-full items-center gap-4 border-b border-white/15 py-4 text-left"><span className="font-mono text-xs text-[#C99A48]">{String(index + 1).padStart(2, "0")}</span><span className="text-xl">{label}</span><ArrowRight className="ml-auto" size={17} /></button>)}</div></div>}

        <main>
          <section id="overview" className="relative min-h-[610px] overflow-hidden bg-[#102D28]"><img src={heroImage} alt="Equity Insight research desk" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-[#10332D]/70" /><div className="relative mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-end px-5 py-14 sm:px-10 lg:px-14"><div className="max-w-4xl"><div className="mb-6 flex flex-wrap items-center gap-3"><span className="ledger-rule" /><span className="font-mono text-[10px] tracking-[0.24em] text-[#E0C27B]">{copy.heroLedger}</span><span className="border border-[#E0C27B]/45 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-[#F4E4B8]">{copy.dataCut}</span></div><p className="max-w-2xl font-mono text-[11px] tracking-[0.12em] text-[#D7D1C1]">{copy.strap}</p><h1 className="mt-5 max-w-5xl font-display text-[46px] leading-[0.93] tracking-[-0.045em] text-[#FFF9ED] sm:text-[68px] lg:text-[82px]">{copy.titleA}<br /><em className="font-normal text-[#E0C27B]">{copy.titleEm}</em> {copy.titleB}</h1><p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#E6DFD1] sm:text-[17px]">{copy.hero}</p><div className="mt-9 flex flex-wrap items-center gap-3"><button onClick={() => jump("signals")} className="group inline-flex items-center gap-2 bg-[#C99A48] px-5 py-3 text-xs font-bold text-[#17342F] transition hover:bg-[#E0C27B] active:scale-[0.97]">{copy.ctaDesk}<ArrowRight size={15} className="transition group-hover:translate-x-1" /></button><button onClick={() => jump("watch")} className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-xs font-bold text-white transition hover:border-white hover:bg-white/10 active:scale-[0.97]"><CalendarDays size={15} />{copy.ctaWatch}</button></div></div></div></section>

          <section className="border-b border-[#E4DBC9] bg-[#FAF7F0] px-5 py-7 sm:px-10 lg:px-14"><div className="mx-auto grid max-w-[1500px] gap-5 xl:grid-cols-[1.15fr_2fr] xl:items-center"><div className="border-l-2 border-[#C99A48] pl-4"><p className="font-mono text-[10px] tracking-[0.2em] text-[#897A67]">{copy.thesisLabel}</p><p className="mt-1 font-display text-[25px] leading-tight text-[#15352F]">{copy.thesis}</p></div><div className="border-l border-[#DED4C2] pl-4"><p className="font-mono text-[10px] tracking-[0.14em] text-[#9B7739]">{copy.thesisAudit}</p><p className="mt-2 text-sm leading-6 text-[#68756F]">{copy.auditBody}</p></div></div></section>

          <section className="px-5 py-14 sm:px-10 lg:px-14"><div className="mx-auto max-w-[1500px]"><div className="mb-8 flex flex-wrap items-end justify-between gap-3"><div><p className="section-kicker">{copy.snapshotKicker}</p><h2 className="section-title whitespace-pre-line">{copy.snapshotTitle}</h2></div><p className="max-w-lg text-sm leading-6 text-[#68756F]">{copy.snapshotBody}</p></div><div className="grid border-y border-[#DCD1BE] sm:grid-cols-2 xl:grid-cols-4">{values.map((value, index) => { const Icon = icons[index]; return <article key={copy.statNames[index]} className="market-stat border-b border-[#DCD1BE] px-0 py-5 sm:border-b-0 sm:px-5 sm:not-last:border-r xl:first:pl-0"><div className="flex items-center justify-between"><p className="font-mono text-[11px] tracking-[0.12em] text-[#5D7169]">{copy.statNames[index]}</p><Icon size={15} className={index === 3 ? "text-[#C99A48]" : "text-[#39785F]"} /></div><p className="mt-3 font-mono text-[30px] font-semibold tracking-[-0.06em] text-[#14332C]">{value}</p><p className="mt-1 font-mono text-[11px] font-bold text-[#39785F]">{changes[index]}</p><p className="mt-2 font-mono text-[10px] tracking-[0.04em] text-[#7A827E]">{copy.statNotes[index]}</p></article>})}</div></div></section>

          <section className="border-y border-[#E2D8C6] bg-[#EAE4D8] px-5 py-14 sm:px-10 lg:px-14"><div className="mx-auto grid max-w-[1500px] gap-8 xl:grid-cols-[1.08fr_.92fr]"><div><p className="section-kicker">{copy.breadthKicker}</p><h2 className="section-title mt-3 whitespace-pre-line">{copy.breadthTitle}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#68756F]">{copy.breadthBody}</p><div className="mt-7 grid gap-0 border-l border-t border-[#D7C6A7] sm:grid-cols-3">{copy.breadthLabels.map((label: string, index: number) => <div key={label} className="-ml-px -mt-px border border-[#D7C6A7] bg-[#F7F1E6] p-4"><p className="font-mono text-[10px] tracking-[0.12em] text-[#68766E]">{label}</p><p className="mt-3 font-mono text-[27px] font-semibold tracking-[-0.05em] text-[#183B33]">{copy.breadthNumbers[index]}</p><div className="mt-3 h-1.5 bg-[#DFD4C3]"><div className="h-full bg-[#C99A48]" style={{ width: `${[66, 59, 99.8][index]}%` }} /></div></div>)}</div></div><div className="bg-[#153A32] p-7 text-[#F7F0E3] sm:p-9"><p className="font-mono text-[10px] tracking-[0.18em] text-[#E0C27B]">{copy.readingPanel}</p><div className="mt-7 space-y-5"><div className="border-l border-[#C99A48] pl-4"><p className="font-bold">{copy.rateRelief}</p><p className="mt-1 text-sm leading-6 text-[#D2DDD5]">{copy.rateReliefBody}</p></div><div className="border-l border-[#C99A48] pl-4"><p className="font-bold">{copy.breadthRead}</p><p className="mt-1 text-sm leading-6 text-[#D2DDD5]">{copy.breadthReadBody}</p></div><div className="border-l border-[#C99A48] pl-4"><p className="font-bold">{copy.sectorRead}</p><p className="mt-1 text-sm leading-6 text-[#D2DDD5]">{copy.sectorReadBody}</p></div></div><p className="mt-7 border-t border-white/15 pt-4 text-xs leading-5 text-[#C3D0C8]"><CircleAlert className="mr-2 inline text-[#E0C27B]" size={15} />{copy.conditionalNote}</p></div></div></section>

          <section id="signals" className="px-5 py-16 sm:px-10 lg:px-14"><div className="mx-auto max-w-[1500px]"><div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><div><p className="section-kicker">{copy.highlightsKicker}</p><h2 className="section-title mt-3 whitespace-pre-line">{copy.highlightsTitle}</h2></div><div><p className="max-w-2xl text-sm leading-7 text-[#68756F]">{copy.highlightsBody}</p><div className="mt-5 inline-flex border border-[#D8CCB7] p-1" role="group" aria-label={copy.modeLabel}>{(["education", "analysis"] as ViewMode[]).map((mode) => <button key={mode} onClick={() => setViewMode(mode)} className={`px-4 py-2 text-xs font-bold transition ${viewMode === mode ? "bg-[#16382F] text-white" : "text-[#6A756F]"}`}>{mode === "education" ? copy.education : copy.analysis}</button>)}</div></div></div><div className="mt-9 grid gap-0 border-l border-t border-[#D7C6A7] lg:grid-cols-2">{copy.cards.map((card: any, index: number) => <article key={card.title} className="research-slip relative -ml-px -mt-px flex min-h-[350px] flex-col border border-[#D7C6A7] p-6 pl-12"><span className="absolute bottom-0 left-0 top-0 flex w-7 items-center justify-center border-r border-[#C99A48] bg-[#E7DED0] px-1 text-center font-mono text-[9px] font-bold tracking-[0.08em] text-[#557067]" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>{card.label}</span><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.14em] text-[#9A7230]">{String(index + 1).padStart(2, "0")} / LEDGER ENTRY</span><ArrowUpRight size={17} className="text-[#557A6C]" /></div><h3 className="mt-5 font-display text-[30px] leading-tight text-[#16382F]">{card.title}</h3><p className="mt-2 font-mono text-[11px] font-semibold tracking-[0.04em] text-[#39785F]">{card.move}</p><p className="mt-5 text-sm leading-6 text-[#68756F]"><strong className="font-mono text-[10px] tracking-[0.1em] text-[#173D35]">{copy.factLabel.toUpperCase()} · </strong>{card.fact}</p><div className="mt-auto border-l border-[#C99A48] pl-4 pt-5"><p className="font-mono text-[10px] tracking-[0.14em] text-[#9B7739]">{viewMode === "education" ? copy.reading : copy.inference}</p><p className="mt-2 text-sm leading-6 text-[#405A51]">{viewMode === "education" ? card.lesson : card.analysis}</p><p className="mt-4 text-xs leading-5 text-[#708078]"><span className="font-mono text-[10px] font-bold tracking-[0.08em] text-[#9B7739]">{copy.next.toUpperCase()} · </span>{card.next}</p><p className="mt-4 border-t border-[#DDD2C0] pt-3 font-mono text-[9px] tracking-[0.1em] text-[#8B7B62]">SOURCE / {index === 0 ? "[1] + [2]" : "[1] REUTERS"}</p></div></article>)}</div></div></section>

          <section id="watch" className="border-y border-[#E1D7C5] bg-[#F9F5EB] px-5 py-16 sm:px-10 lg:px-14"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.76fr_1.24fr]"><div><p className="section-kicker">{copy.watchKicker}</p><h2 className="section-title mt-3 whitespace-pre-line">{copy.watchTitle}</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#68756F]">{copy.watchBody}</p></div><div className="divide-y divide-[#DED3C2] border-t border-[#DED3C2]">{copy.watches.map((row: any, index: number) => <article key={row.event} className="grid gap-3 py-6 sm:grid-cols-[154px_1fr_1fr] sm:gap-6"><div className="border-l border-[#C99A48] pl-3"><p className="font-mono text-[10px] text-[#C99A48]">{String(index + 1).padStart(2, "0")}</p><p className="mt-1 font-display text-xl text-[#153C34]">{row.event}</p><p className="mt-2 font-mono text-[10px] font-bold tracking-[0.04em] text-[#4B7063]">{row.time}</p><p className="mt-1 font-mono text-[10px] text-[#799087]">{row.exposure}</p></div>{viewMode === "education" ? <><div><p className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#39785F]">{copy.reading.toUpperCase()}</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.eduA}</p></div><div><p className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#AD5E52]">{copy.shortcut.toUpperCase()}</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.eduB}</p></div></> : <><div><p className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#39785F]">{copy.positive.toUpperCase()}</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.plus}</p></div><div><p className="font-mono text-[10px] font-bold tracking-[0.14em] text-[#AD5E52]">{copy.negative.toUpperCase()}</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.minus}</p></div></>}</article>)}</div></div></section>

          <section id="sources" className="relative overflow-hidden bg-[#10342D] px-5 py-14 text-[#F7F0E3] sm:px-10 lg:px-14"><div className="absolute left-0 top-0 h-full w-1 bg-[#C99A48]" /><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="font-mono text-[10px] tracking-[0.17em] text-[#E0C27B]">{copy.sourceKicker}</p><h2 className="mt-4 font-display text-[42px] leading-tight">{copy.sourceTitle}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#D3DDD6]">{copy.sourceBody}</p><p className="mt-6 font-mono text-[10px] tracking-[0.12em] text-[#D9CFBB]">{copy.sourceCut}</p><div className="mt-8 border-l border-[#C99A48] pl-4"><p className="font-mono text-[10px] tracking-[0.15em] text-[#E0C27B]">{copy.archiveLabel}</p><div className="mt-3 flex flex-wrap gap-3"><a href="/archive/2026-08-19" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs font-bold hover:border-[#E0C27B] hover:text-[#E0C27B]"><FileArchive size={14} />{copy.archive19}</a><a href="/archive/2026-08-18" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs font-bold hover:border-[#E0C27B] hover:text-[#E0C27B]"><FileArchive size={14} />{copy.archive18}</a></div></div></div><div className="grid content-start border-t border-white/15 sm:grid-cols-2">{sources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-white/15 py-4 text-sm text-[#E9E4D8] transition hover:text-[#E1C47D] sm:odd:pr-6 sm:even:pl-6"><span>{label}</span><ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div></div></section>
        </main>
        <footer className="border-t border-[#E0D5C3] bg-[#F3EFE6] px-5 py-7 sm:px-10 lg:px-14"><div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-xs text-[#6D7871] sm:flex-row"><p>EQUITY / INSIGHT · {copy.edition}</p><p className="max-w-xl text-left sm:text-right">{copy.footer}</p></div></footer>
      </div>
    </div>
  );
}
