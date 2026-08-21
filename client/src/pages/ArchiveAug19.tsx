/**
 * EQUITY / INSIGHT — BIT Daily Market Intelligence, 2026-08-19.
 * Deep ink + warm paper + brass evidence marks. Content is limited to the DOCX-backed factbook.
 */
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, CircleAlert, FileArchive, Landmark, Layers3, ShieldCheck, TrendingDown } from "lucide-react";

const heroImage = "/manus-storage/equity-insight-hero_91085892.jpg";
const markImage = "/manus-storage/equity-insight-mark_57c970d0.png";

const sources = [
  ["[1] Reuters｜美股收市、广度与半导体", "https://www.reuters.com/business/us-stock-futures-drop-fading-iran-peace-hopes-lift-oil-bond-yields-2026-08-18/"],
  ["[2] Home Depot IR｜Q2 FY2026业绩", "https://ir.homedepot.com/news-releases/2026/08-18-2026-110040463"],
  ["[3] RTHK｜8月18日港股收市", "https://gbcode.rthk.hk/TuniS/news.rthk.hk/rthk/en/component/k2/1866585-20260818.htm"],
  ["[4] Federal Reserve｜8月日历", "https://www.federalreserve.gov/newsevents/2026-august.htm"],
  ["[5] HKEX｜业绩日程", "https://www3.hkexnews.hk/reports/bmn/ebmn_c.htm"],
  ["[6] Kuaishou IR｜中期业绩日程", "https://ir.kuaishou.com/"],
  ["[7] Walmart｜Q2业绩时间", "https://corporate.walmart.com/news/2026/08/13/walmart-to-host-second-quarter-earnings-conference-call-august-20-2026"],
];

const briefCards = [
  { number: "01", label: "宏观 / 已确认", title: "收益率与油价同时变贵", body: "10年期约4.70%，30年期仍接近19年高位；WTI约US$84.9。昨天的资金价格风险框架得到收市验证。", citation: "[1]", icon: Landmark },
  { number: "02", label: "AI / 已失效", title: "硬件独强没有延续", body: "SOX约-5%，Micron -7%、SanDisk -9%、Nvidia -2.3%。这否定了昨天的短线轮动判断，但不足以单独证明需求崩塌。", citation: "[1]", icon: Layers3 },
  { number: "03", label: "消费 + 港股 / 条件成立", title: "微观改善仍未消除宏观谨慎", body: "Home Depot改善但未上调全年指引；恒指+0.1%、恒生科技-0.9%，港股同样显示能源强、科技弱的结构。", citation: "[2][3]", icon: CalendarDays },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="ledger-kicker font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A7230]">{children}</p>;
}

function ResearchMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`research-mark ${className}`}><i /><i /><b /></span>;
}

function Metric({ label, value, change }: { label: string; value: string; change: string }) {
  return <div className="border-b border-[#DED3C2] py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0"><p className="font-mono text-[10px] tracking-[0.14em] text-[#66766E]">{label}</p><p className="mt-2 font-mono text-[28px] font-semibold tracking-[-.06em]">{value}</p><p className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#B85B4E]"><TrendingDown size={13} /> {change}</p></div>;
}

function Path({ step, title, body }: { step: string; title: string; body: string }) {
  return <div className="grid grid-cols-[30px_1fr] gap-3"><span className="font-mono text-[10px] text-[#D4AB5D]">{step}</span><div><p className="font-bold text-[#F7F0E2]">{title}</p><p className="mt-1 text-sm leading-6 text-[#CBD7D0]">{body}</p></div></div>;
}

export default function Home() {
  const nav = [["01", "60秒结论", "brief"], ["02", "市场仪表盘", "market"], ["03", "企业与跨市场", "companies"], ["04", "今天要看什么", "watch"], ["05", "来源与限制", "sources"]];
  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#17372F] lg:flex">
      <aside className="sticky top-0 z-40 hidden h-screen w-[230px] flex-col border-r border-[#E2D5C1] bg-[#10342D] px-6 py-7 text-[#F7F0E3] lg:flex">
        <a href="#top" className="flex items-center gap-3"><ResearchMark className="h-10 w-10" /><span><strong className="block font-display text-[18px] leading-none">EQUITY</strong><strong className="mt-0.5 block font-display text-[18px] leading-none text-[#E1C47D]">INSIGHT</strong></span></a>
        <div className="mt-12 border-l border-[#D4AB5D] pl-4"><p className="font-mono text-[10px] tracking-[0.18em] text-[#D4AB5D]">BIT DAILY / 2026.08.19</p><p className="mt-3 font-display text-[22px] leading-tight">资金价格，<br />重回定价中心。</p></div>
        <nav className="mt-10 space-y-1" aria-label="BIT report index">{nav.map(([number, label, target]) => <a key={target} href={`#${target}`} className="group flex items-center gap-3 border-b border-white/10 py-3 text-sm text-[#DCE3DB] transition hover:border-[#D4AB5D] hover:text-white"><span className="font-mono text-[10px] text-[#D4AB5D]">{number}</span><span>{label}</span><ChevronRight size={14} className="ml-auto opacity-0 transition group-hover:opacity-100" /></a>)}</nav>
        <div className="mt-auto border border-white/15 bg-white/[0.04] p-4"><p className="font-mono text-[9px] tracking-[0.16em] text-[#D4AB5D]">RESEARCH / NOT ADVICE</p><p className="mt-2 text-xs leading-5 text-[#CFD8D0]">收市事实、官方事件与分析判断分层呈现；点击来源可追溯。</p></div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-[#DED3C2] bg-[#F3EFE6]/95 px-5 py-3 backdrop-blur sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><a href="#top" className="flex items-center gap-3"><ResearchMark className="h-9 w-9" /><span><strong className="block font-display text-[16px] leading-none">EQUITY</strong><strong className="mt-0.5 block font-display text-[16px] leading-none text-[#9A7230]">INSIGHT</strong></span></a><div className="hidden items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-[#66766E] sm:flex"><span className="h-2 w-2 rounded-full bg-[#4E9377]" /> MARKET LEDGER ARCHIVE <span className="text-[#B8AA95]">·</span> 2026.08.19</div><a href="/archive/2026-08-18" className="group inline-flex items-center gap-2 border border-[#D4C5AE] px-3 py-2 text-xs font-bold text-[#34544B] transition hover:border-[#A8782F] hover:text-[#9A7230]"><FileArchive size={15} /> 昨日归档 <ChevronRight size={14} className="transition group-hover:translate-x-0.5" /></a></div></header>

        <section id="top" className="relative overflow-hidden bg-[#10342D] px-5 py-16 sm:px-8 lg:px-12"><img src={heroImage} alt="市场研究桌面" className="absolute inset-0 h-full w-full object-cover opacity-30" /><div className="absolute inset-0 bg-[#0E302A]/70" /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><div><div className="flex flex-wrap items-center gap-3"><span className="h-px w-10 bg-[#D4AB5D]" /><span className="font-mono text-[10px] tracking-[0.22em] text-[#E4C985]">18 AUG U.S. + HK CLOSE / 19 AUG HKT WATCH</span></div><h1 className="mt-6 max-w-4xl font-display text-[48px] leading-[.94] tracking-[-.045em] text-[#FBF5E7] sm:text-[67px]">资金价格，<br /><em className="font-normal text-[#E1C47D]">重回定价中心。</em></h1><p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#E0E5DD]">昨日DOCX提出的“油价与长端利率压制高估值资产”获收市验证；“存储／光通信选择性强势”则被当天AI硬件普跌否定。下一步要判断估值重置会否通过后续业绩传导至盈利。</p></div><div className="border-l border-[#D4AB5D] bg-[#0A2722]/75 p-6 backdrop-blur-sm"><Kicker>数据切点与审计</Kicker><p className="mt-3 text-sm leading-6 text-[#E7E4DB]">美股与港股数据均截至8月18日完成交易；昨日DOCX已取得并用于核对。港股日内延迟报价不与收市值混用。</p><a href="#sources" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#E4C985] hover:text-white">查看来源与置信度 <ArrowRight size={14} /></a></div></div></section>

        <section id="brief" className="border-b border-[#DED3C2] bg-[#FBF7EE] px-5 py-9 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><Kicker>01 / 给上司的 60 秒版本 / 已核实</Kicker><div className="mt-5 grid gap-0 border-l border-t border-[#D7C6A7] lg:grid-cols-3">{briefCards.map((card) => { const Icon = card.icon; return <article key={card.number} className="research-slip relative -ml-px -mt-px border border-[#D7C6A7] p-5 pl-11"><span className="absolute bottom-0 left-0 top-0 flex w-7 items-center justify-center border-r border-[#C99A48] bg-[#E7DED0] px-1 text-center font-mono text-[9px] font-bold tracking-[0.08em] text-[#557067]" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>{card.label}</span><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#9A7230]">{card.number} / LEDGER ENTRY</span><Icon size={17} className="text-[#557A6C]" /></div><h2 className="mt-4 font-display text-[27px] leading-tight">{card.title}</h2><p className="mt-3 text-sm leading-6 text-[#68756F]">{card.body} <sup className="font-mono text-[#9A7230]">{card.citation}</sup></p><p className="mt-4 border-t border-[#DDD2C0] pt-3 font-mono text-[9px] tracking-[0.1em] text-[#8B7B62]">SOURCE / {card.citation}</p></article>; })}</div></div></section>

        <section id="market" className="px-5 py-14 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr]"><div><Kicker>市场仪表盘 / 昨日主线审计</Kicker><h2 className="mt-3 font-display text-[40px] leading-tight">下跌有广度，<br />AI轮动已失效。</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#68756F]">NYSE与Nasdaq的下跌家数都多于上涨家数，成交量低于20日平均约12%。昨天“油价与长端利率压制估值”的主线被验证；而存储／光通信的相对强势未延续，应从结论降级为待业绩确认的假设。<sup className="font-mono text-[#9A7230]">[1]</sup></p><div className="mt-7 grid border-y border-[#DED3C2] sm:grid-cols-3"><Metric label="S&P 500" value="7,691.76" change="-0.69%" /><Metric label="NASDAQ" value="26,289.71" change="-1.33%" /><Metric label="DOW" value="53,343.40" change="-0.22%" /></div></div><div className="bg-[#183D35] p-7 text-[#F6F0E3]"><div className="flex items-center justify-between"><Kicker>下一步验证</Kicker><TrendingDown size={20} className="text-[#E1C47D]" /></div><div className="mt-7 space-y-5"><Path step="01" title="利率与油价" body="长端收益率回落、油价风险溢价收窄，才会放松估值压力。" /><Path step="02" title="盈利" body="Home Depot之后，以Walmart的交易量、客单、毛利与全年指引核对消费。" /><Path step="03" title="AI链" body="以订单、价格与业绩指引区分估值回撤和需求转弱。" /></div><p className="mt-7 border-t border-white/15 pt-4 text-xs leading-5 text-[#CBD7D0]">**风险升级：** 30年期继续上行、油价维持强势，且AI回撤扩展至平台股与信用敏感资产。<br />**风险缓和：** 利率与油价回落，同时供应链在业绩前获得稳定承接。</p></div></div></section>

        <section id="companies" className="border-y border-[#DED3C2] bg-[#E8E0D3] px-5 py-14 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-4"><div><Kicker>03 / 企业与跨市场</Kicker><h2 className="mt-3 font-display text-[40px] leading-tight">把“好业绩”与<br />“更高估值”分开看。</h2></div><p className="max-w-lg text-sm leading-7 text-[#68756F]">Home Depot提供消费板块的实际检验；港股收市显示指数近乎平，但科技落后能源，今天应以业绩而非预设方向继续验证。</p></div><div className="mt-8 grid gap-5 lg:grid-cols-2"><article className="border-l-2 border-[#B86251] bg-[#F7F2E8] p-6"><p className="font-mono text-[10px] tracking-[0.16em] text-[#A34F40]">HOME DEPOT / 官方业绩</p><h3 className="mt-3 font-display text-[30px] leading-tight">数据改善，全年指引不升级。</h3><p className="mt-4 text-sm leading-7 text-[#64716B]">Q2销售US$479亿（+5.7%）、同店销售+1.7%、调整后EPS US$4.92；公司维持全年指引，并指出燃料、能源及其他投入成本压力。这里的阅读重点不是“beat / miss”，而是改善与谨慎可以同时成立。<sup className="font-mono text-[#9A7230]">[2]</sup></p></article><article className="border-l-2 border-[#557A6C] bg-[#F7F2E8] p-6"><p className="font-mono text-[10px] tracking-[0.16em] text-[#557A6C]">HONG KONG / 已实现收市</p><h3 className="mt-3 font-display text-[30px] leading-tight">指数近乎平，科技落后能源。</h3><p className="mt-4 text-sm leading-7 text-[#64716B]">恒指收25,471（+0.1%），恒生科技-0.9%，成交HK$255.54bn。能源与煤炭上升，AI／科技回吐；这与隔夜美股的利率／油价驱动结构一致。今天港交所、快手、恒瑞、阿里等业绩将决定这种结构是否得到公司层面验证。<sup className="font-mono text-[#9A7230]">[3][5][6]</sup></p></article></div></div></section>

        <section id="watch" className="px-5 py-14 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><Kicker>04 / 今天要看什么 / 时间与来源已标记</Kicker><div className="mt-5 grid gap-0 border-t border-[#DED3C2] lg:grid-cols-4">{[["FOMC会议纪要", "8月19日 14:00 ET", "看通胀、油价与利率路径措辞；纪要不是即时政策行动。", "官方"], ["港交所中期业绩", "8月19日", "看现货成交、衍生品、融资和非股票收入，而不只看盈利标题。", "官方"], ["快手业绩", "香港收市后 / 19:00 HKT", "看广告、电商、AI投入与利润率是否能够同时成立。", "官方"], ["Walmart Q2", "8月20日 06:00 CDT", "看交易量、客单、促销、毛利率与全年指引，补足Home Depot以外的消费读数。", "官方"]].map(([title, time, body, tag], index) => <article key={title} className="watch-slip border-b border-[#DED3C2] py-5 lg:border-r lg:px-5 lg:first:pl-0"><span className="font-mono text-[10px] text-[#9A7230]">0{index + 1} / {tag}</span><h3 className="mt-3 font-display text-[25px]">{title}</h3><p className="mt-1 text-xs font-bold text-[#4D7164]">{time}</p><p className="mt-3 text-sm leading-6 text-[#68756F]">{body}</p></article>)}</div></div></section>

        <section id="sources" className="border-y border-[#D8CBB7] bg-[#11362F] px-5 py-12 text-[#F5EFE4] sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr]"><div><Kicker>来源、置信度与限制</Kicker><h2 className="mt-3 font-display text-[36px] leading-tight">事实先于叙事。</h2><p className="mt-4 text-sm leading-7 text-[#D3DDD6]">昨日DOCX、富途与三篇TechFlow均已完整阅读，后四者只作线索与叙事交叉检查。核心数字优先使用Reuters、公司IR、RTHK、联储与港交所；未经原始披露完整确认的AI信贷、OpenAI／Anthropic财务、券商估值和具体小米业绩数没有被写成核心事实。</p><div className="mt-6 border-l border-[#D4AB5D] pl-4 text-sm leading-6 text-[#E8DDBE]"><CircleAlert className="mb-2" size={17} />昨日DOCX已审计：油价／长端利率的估值压力被验证；AI hardware选择性强势被当日价格否定；消费结论仍须以多家零售业绩交叉验证。</div></div><div className="grid border-t border-white/15 sm:grid-cols-2">{sources.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-white/15 py-4 text-sm text-[#E9E4D8] transition hover:text-[#E1C47D] sm:odd:pr-6 sm:even:pl-6"><span>{name}</span><ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div></div></section>
        <footer className="px-5 py-7 text-xs text-[#67736D] sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:justify-between"><p>EQUITY / INSIGHT · MARKET LEDGER ARCHIVE · 2026.08.19</p><p>本文仅为研究与分析，不构成个性化投资建议、买卖建议或收益承诺。</p></div></footer>
      </div>
    </main>
  );
}
