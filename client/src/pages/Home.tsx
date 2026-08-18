/**
 * The Market Ledger page — asymmetric editorial intelligence desk with searchable source-backed signals.
 */
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  ChevronRight,
  Clock3,
  Filter,
  Globe2,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  breadthData,
  languageCopy,
  marketStats,
  premarketRows,
  signals,
  sources,
  type Language,
  type MarketSignal,
  type ViewMode,
} from "@/lib/marketData";

const heroImage = "/manus-storage/equity-insight-hero_91085892.jpg";
const aiImage = "/manus-storage/ai-hardware-signal_7525933e.jpg";
const macroImage = "/manus-storage/macro-risk-paper_a963f5ef.jpg";
const markImage = "/manus-storage/equity-insight-mark_57c970d0.png";

const categories = ["All", "Macro", "AI Hardware", "Consumer", "Cross-asset"] as const;

function Direction({ direction }: { direction: MarketSignal["direction"] }) {
  if (direction === "up") return <TrendingUp size={15} aria-label="upward signal" />;
  if (direction === "down") return <TrendingDown size={15} aria-label="downward signal" />;
  return <ArrowUpRight size={15} aria-label="watch signal" />;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("TW");
  const [viewMode, setViewMode] = useState<ViewMode>("analysis");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [selectedSignal, setSelectedSignal] = useState<MarketSignal | null>(signals[0]);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const copy = languageCopy[language];
  const isEducation = viewMode === "education";
  const visibleSignals = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return signals.filter((signal) => {
      const categoryMatch = activeCategory === "All" || signal.category === activeCategory;
      const textMatch = !normalized || [signal.signal, signal.thesis, signal.watch, signal.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
      return categoryMatch && textMatch;
    });
  }, [activeCategory, query]);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#16352F] lg:flex">
      <aside className="ledger-spine sticky top-0 z-40 hidden h-screen w-[236px] flex-col border-r border-[#E4DBC9] bg-[#10332D] px-6 py-7 text-[#F6F0E3] lg:flex">
        <button className="flex items-center gap-3 text-left" onClick={() => jumpTo("overview")} aria-label="Go to overview">
          <img src={markImage} alt="Equity Insight mark" className="h-11 w-11 object-contain" />
          <span className="leading-none">
            <span className="block font-display text-[18px] tracking-tight">EQUITY</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.26em] text-[#C99A48]">INSIGHT HUB</span>
          </span>
        </button>

        <div className="mt-14 border-l border-[#C99A48]/60 pl-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C99A48]">Edition 02 / 2026</p>
          <p className="mt-3 font-display text-[22px] leading-tight">The market,\nnot the noise.</p>
        </div>

        <nav className="mt-12 space-y-2" aria-label="Research sections">
          {[
            ["01", "Market thesis", "overview"],
            ["02", "Signal desk", "signals"],
            ["03", "Pre-market", "premarket"],
            ["04", "Sources", "sources"],
          ].map(([index, label, id]) => (
            <button
              key={id}
              className="group flex w-full items-center gap-3 border-b border-white/10 py-3 text-left text-sm text-[#EAE3D5] transition hover:border-[#C99A48] hover:text-white"
              onClick={() => jumpTo(id)}
            >
              <span className="font-mono text-[10px] text-[#C99A48]">{index}</span>
              <span>{label}</span>
              <ChevronRight size={14} className="ml-auto opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <div className="rounded-none border border-white/15 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-[#C99A48]"><ShieldCheck size={15} /><span className="font-mono text-[10px] tracking-[0.16em]">SOURCE-AWARE</span></div>
            <p className="mt-2 text-xs leading-relaxed text-[#D5CEBF]">Research framing, not a trading instruction. Time cutoffs and source confidence are visible in every brief.</p>
          </div>
          <p className="font-mono text-[9px] tracking-[0.14em] text-[#91A69F]">AS OF U.S. CLOSE 08.17.2026</p>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
      <header className="sticky top-0 z-30 border-b border-[#E4DBC9] bg-[#F3EFE6]/95 px-5 py-3 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3">
          <button className="flex items-center gap-2 lg:hidden" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation">
            <Menu size={21} />
            <img src={markImage} alt="" className="h-7 w-7 object-contain" />
          </button>
          <div className="hidden items-center gap-3 text-[11px] font-medium tracking-[0.14em] text-[#50615B] sm:flex">
            <span className="status-dot" />
            <span>{copy.marketNote}</span>
            <span className="text-[#B6A997]">•</span>
            <span>Research edition</span>
          </div>
          <div className="ml-auto flex items-center gap-1 rounded-full border border-[#DED4C2] bg-[#FAF7F0] p-1" role="group" aria-label="Language switcher">
            {(["TW", "CN", "EN"] as Language[]).map((option) => (
              <button
                key={option}
                onClick={() => setLanguage(option)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition ${language === option ? "bg-[#16352F] text-white" : "text-[#66746E] hover:text-[#16352F]"}`}
              >
                {languageCopy[option].short}
              </button>
            ))}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div className="fixed inset-0 z-50 bg-[#10332D] p-6 text-[#F6F0E3] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><img src={markImage} alt="Equity Insight mark" className="h-10 w-10" /><span className="font-display text-xl">EQUITY / INSIGHT</span></div>
              <button onClick={() => setMobileNavOpen(false)} aria-label="Close navigation"><X size={24} /></button>
            </div>
            <div className="mt-14 space-y-4">
              {[
                ["01", "Market thesis", "overview"],
                ["02", "Signal desk", "signals"],
                ["03", "Pre-market", "premarket"],
                ["04", "Sources", "sources"],
              ].map(([index, label, id]) => (
                <button key={id} onClick={() => jumpTo(id)} className="flex w-full items-center gap-4 border-b border-white/15 py-4 text-left"><span className="font-mono text-xs text-[#C99A48]">{index}</span><span className="text-xl">{label}</span><ArrowRight className="ml-auto" size={17} /></button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="overview" className="relative min-h-[610px] overflow-hidden bg-[#102D28]">
          <img src={heroImage} alt="Editorial market research workspace" className="absolute inset-0 h-full w-full object-cover opacity-65" />
          <div className="absolute inset-0 bg-[#10332D]/64" />
          <div className="absolute right-7 top-7 z-10 hidden items-center gap-3 border-l border-[#C99A48] bg-[#10332D]/65 px-4 py-3 backdrop-blur-sm sm:flex">
            <img src={markImage} alt="" className="h-9 w-9 object-contain" />
            <span><span className="block font-display text-[18px] leading-none tracking-tight text-[#FFF9ED]">EQUITY / INSIGHT</span><span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-[#E0C27B]">THE MARKET LEDGER</span></span>
          </div>
          <div className="relative mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-end px-5 py-14 sm:px-10 lg:px-14">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3"><span className="ledger-rule" /><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#E0C27B]">The Market Ledger / 18 Aug 2026</span><span className="border border-[#E0C27B]/45 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-[#F4E4B8]">DATA CUT · U.S. CLOSE</span></div>
              <p className="max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-[#D7D1C1]">U.S. equities close · after-hours context · pre-market questions</p>
              <h1 className="mt-5 max-w-4xl font-display text-[45px] leading-[0.93] tracking-[-0.045em] text-[#FFF9ED] sm:text-[66px] lg:text-[82px]">Read the market<br /><em className="font-normal text-[#E0C27B]">before</em> it reads you.</h1>
              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#E6DFD1] sm:text-[17px]">Not a broad risk exit. A repricing of geopolitics, long-end yields and AI exposure — with retail earnings about to test how resilient the U.S. consumer really is.</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button onClick={() => jumpTo("signals")} className="group inline-flex items-center gap-2 bg-[#C99A48] px-5 py-3 text-xs font-bold text-[#17342F] transition hover:bg-[#E0C27B] active:scale-[0.97]">Open today&apos;s signal desk <ArrowRight size={15} className="transition group-hover:translate-x-1" /></button>
                <button onClick={() => jumpTo("premarket")} className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-xs font-bold text-white transition hover:border-white hover:bg-white/10 active:scale-[0.97]"><Clock3 size={15} /> Pre-market scenario map</button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#E4DBC9] bg-[#FAF7F0] px-5 py-7 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] gap-5 xl:grid-cols-[1.15fr_2fr] xl:items-center">
            <div className="border-l-2 border-[#C99A48] pl-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#897A67]">Today&apos;s thesis</p>
              <p className="mt-1 font-display text-[25px] leading-tight text-[#15352F]">宏觀風險推高成本與折現率；AI 硬件保留局部需求能見度。</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Macro", "Oil + long-end yields are the joint risk factor."],
                ["02", "AI hardware", "Memory and optical demand remain the selective bid."],
                ["03", "Consumer", "Retail guidance matters more than a headline EPS beat."],
              ].map(([number, label, statement]) => (
                <div key={number} className="border-l border-[#DED4C2] pl-4"><span className="font-mono text-[10px] text-[#C99A48]">{number}</span><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1C443B]">{label}</p><p className="mt-1 text-xs leading-5 text-[#68756F]">{statement}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div><p className="section-kicker">Market snapshot</p><h2 className="section-title">The close, in evidence.</h2></div>
              <p className="max-w-md text-sm leading-6 text-[#68756F]">All prices are from the cited 17 Aug U.S. close. The site keeps reported facts, consensus expectations and analytical interpretations visibly separate.</p>
            </div>
            <div className="grid border-y border-[#DCD1BE] sm:grid-cols-2 xl:grid-cols-4">
              {marketStats.map((stat: (typeof marketStats)[number]) => (
                <article key={stat.label} className="market-stat border-b border-[#DCD1BE] px-0 py-5 sm:border-b-0 sm:px-5 sm:not-last:border-r xl:first:pl-0">
                  <div className="flex items-center justify-between"><p className="font-mono text-[11px] tracking-[0.12em] text-[#5D7169]">{stat.label}</p><span className={`text-[11px] font-bold ${stat.tone === "up" ? "text-[#387B63]" : "text-[#B95C4F]"}`}>{stat.change}</span></div>
                  <p className="mt-3 font-display text-[33px] tracking-[-0.04em] text-[#14332C]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[#7A827E]">{stat.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E2D8C6] bg-[#EAE4D8] px-5 py-14 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden bg-[#173A33] p-7 text-[#F8F1E3] sm:p-9">
              <img src={macroImage} alt="Macro risk research still life" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="relative"><p className="section-kicker text-[#E0C27B]">Breadth check</p><h2 className="mt-3 max-w-xl font-display text-[34px] leading-tight">The tape was weaker than the index headlines.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#D3D9D4]">Decliners outnumbered advancers on both exchanges while volume stayed below the 20-day average. That is a signal to inspect the market&apos;s internals, not a verdict of systemic stress.</p></div>
              <div className="relative mt-8 h-[190px] rounded-none border-l border-[#C99A48]/70 bg-[#0E2A25]/40 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={breadthData} margin={{ top: 8, right: 10, left: -18, bottom: 0 }}>
                    <XAxis dataKey="market" tick={{ fill: "#D3D9D4", fontSize: 11, fontFamily: "IBM Plex Mono" }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 2]} ticks={[0, 1, 2]} tick={{ fill: "#9DB0A8", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} contentStyle={{ background: "#14342D", border: "1px solid rgba(224,194,123,0.45)", borderRadius: 0, color: "#F8F1E3", fontSize: 12 }} formatter={(value: number) => [`${value}:1`, "Decliners / advancers"]} />
                    <Bar dataKey="ratio" fill="#C99A48" radius={[0, 0, 0, 0]} barSize={48} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="relative mt-4 font-mono text-[10px] tracking-[0.12em] text-[#AABAB3]">DATA: DECLINERS PER ADVANCER · SOURCE: REUTERS, 17 AUG CLOSE</p>
            </div>
            <div className="border-l border-[#C99A48] pl-6 sm:pl-8">
              <p className="section-kicker">Why this matters</p>
              <h3 className="mt-3 font-display text-[31px] leading-tight">Index points are only the cover page.</h3>
              <div className="mt-7 space-y-5">
                {[
                  ["Breadth", "A 0.5% index move can still contain broad individual-stock weakness."],
                  ["Volume", "Below-average participation makes a single session less definitive."],
                  ["Structure", "S&P 500 and Nasdaq remain above their 20D and 50D averages."],
                ].map(([title, description]) => <div key={title} className="border-b border-[#D4C9B8] pb-4"><p className="text-sm font-bold text-[#164038]">{title}</p><p className="mt-1 text-sm leading-6 text-[#69756F]">{description}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="signals" className="px-5 py-16 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div><p className="section-kicker">Signal desk / top 10</p><h2 className="section-title mt-3">The questions that move the next decision.</h2></div>
              <p className="max-w-2xl text-sm leading-7 text-[#68756F]">Search a theme, filter the market transmission channel, then open any signal to see the cause → earnings / valuation → price chain and the condition that would change the view.</p>
            </div>

            <div className="mt-8 grid gap-7 xl:grid-cols-[1.12fr_0.88fr]">
              <div className="flex gap-0">
                <div className="hidden border-y border-l border-[#D7C6A7] bg-[#E7DED0] lg:flex lg:w-[42px] lg:flex-col lg:items-stretch">
                  {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`signal-file-tab border-b border-[#D7C6A7] px-2 py-3 text-[9px] font-bold uppercase tracking-[0.13em] transition ${activeCategory === category ? "bg-[#153C34] text-[#F9F1E4]" : "text-[#627068] hover:bg-[#D5C29A] hover:text-[#153C34]"}`}>{category === "All" ? "All signals" : category}</button>)}
                </div>
                <div className="min-w-0 flex-1 lg:pl-5">
                <div className="flex flex-col gap-4 border-y border-[#DDD2C0] py-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="relative flex-1"><Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#8B8A7C]" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} className="w-full border-0 border-b border-[#CFC3B0] bg-transparent py-3 pl-7 pr-3 text-sm text-[#15372F] outline-none placeholder:text-[#9B9B90] focus:border-[#C99A48]" /></div>
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] text-[#847968]"><Filter size={14} />{visibleSignals.length} SIGNALS</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-0 border-l border-t border-[#D7C6A7] lg:hidden">
                  {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`border-b border-r border-[#D7C6A7] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition active:scale-[0.97] ${activeCategory === category ? "bg-[#153C34] text-white" : "bg-[#ECE5D9] text-[#6C766F] hover:bg-[#D5C29A] hover:text-[#153C34]"}`}>{category}</button>)}
                </div>
                <div className="mt-5 divide-y divide-[#E1D7C5] border-t border-[#E1D7C5]">
                  {visibleSignals.map((signal: MarketSignal, index: number) => (
                    <motion.button key={signal.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035 }} onClick={() => setSelectedSignal(signal)} className={`group grid w-full grid-cols-[34px_1fr_auto] gap-3 py-5 text-left transition ${selectedSignal?.id === signal.id ? "bg-[#EBE5D9] px-3" : "hover:bg-[#F0EBE0] hover:px-3"}`}>
                      <span className="font-mono text-xs text-[#C99A48]">{String(signal.id).padStart(2, "0")}</span>
                      <span><span className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#658078]">{signal.category}</span><span className="text-[11px] text-[#887C69]">{signal.move}</span><span className="text-[9px] font-mono uppercase tracking-[0.12em] text-[#A47A34]">{isEducation ? "Learning lens" : "Analyst lens"}</span></span><span className="mt-1 block font-display text-[22px] leading-tight text-[#16382F]">{isEducation ? `How to read: ${signal.signal}` : signal.signal}</span><span className="mt-2 block max-w-xl text-sm leading-6 text-[#6A756F]">{isEducation ? signal.lesson : signal.thesis}</span></span>
                      <span className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full border ${signal.direction === "up" ? "border-[#94B5A4] text-[#39775F]" : signal.direction === "down" ? "border-[#D4AAA2] text-[#AF584D]" : "border-[#D6C49D] text-[#9D7733]"}`}><Direction direction={signal.direction} /></span>
                    </motion.button>
                  ))}
                  {visibleSignals.length === 0 && <div className="py-12 text-center text-sm text-[#7A827E]">No matching signal. Try a broader market term.</div>}
                </div>
                </div>
              </div>

              <div className="relative min-h-[490px] overflow-hidden bg-[#153A32] p-7 text-[#F7F0E3] sm:p-9">
                <img src={selectedSignal?.category === "AI Hardware" ? aiImage : macroImage} alt="Research context" className="absolute inset-0 h-full w-full object-cover opacity-20 transition" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E0C27B]">{isEducation ? "Teaching note" : "Research drawer"}</span><Sparkles size={17} className="text-[#E0C27B]" /></div>
                  {selectedSignal && <AnimatePresence mode="wait"><motion.div key={`${selectedSignal.id}-${viewMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex h-full flex-1 flex-col"><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9DB8AD]">{selectedSignal.category} / {selectedSignal.move}</p><h3 className="mt-2 font-display text-[38px] leading-[0.96] tracking-[-0.03em]">{isEducation ? `Why it matters: ${selectedSignal.signal}` : selectedSignal.signal}</h3><p className="mt-6 text-[15px] leading-7 text-[#E0E6DE]">{isEducation ? `${selectedSignal.lesson} ${selectedSignal.detail}` : selectedSignal.detail}</p><div className={`mt-auto border-l bg-black/10 pl-4 pt-7 ${isEducation ? "border-[#A4C2B3]" : "border-[#C99A48]"}`}><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E0C27B]">{isEducation ? "How to read the next print" : "View invalidates if"}</p><p className="mt-2 text-sm leading-6 text-[#F0E7D8]">{isEducation ? selectedSignal.watch : selectedSignal.invalidation}</p></div></motion.div></AnimatePresence>}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="premarket" className="overflow-hidden border-y border-[#E1D7C5] bg-[#F9F5EB] px-5 py-16 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div><p className="section-kicker">08.18 / pre-market map</p><h2 className="section-title mt-3">{isEducation ? "Learn the read before the opening move." : "Before the open, watch the proof — not the pitch."}</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#68756F]">{isEducation ? "Use the table as a repeatable reading checklist: what to observe, what it can mean and which shortcut to avoid." : "A pre-market move is an invitation to investigate. The table shows the evidence that would strengthen or weaken each market narrative."}</p>
              <div className="mt-8 inline-flex rounded-full border border-[#D8CCB7] p-1" role="group" aria-label="Reading mode">
                {(["education", "analysis"] as ViewMode[]).map((mode) => <button key={mode} onClick={() => setViewMode(mode)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${viewMode === mode ? "bg-[#16382F] text-white" : "text-[#6A756F]"}`}>{mode === "education" ? copy.education : copy.analysis}</button>)}
              </div>
            </div>
            <div className="divide-y divide-[#DED3C2] border-t border-[#DED3C2]">
              {premarketRows.map((row, index) => <article key={row.event} className="grid gap-3 py-5 sm:grid-cols-[140px_1fr_1fr] sm:gap-6"><div><p className="font-mono text-[10px] text-[#C99A48]">0{index + 1}</p><p className="mt-1 font-display text-xl">{row.event}</p><p className="mt-1 text-[11px] text-[#799087]">{row.exposure}</p></div>{isEducation ? <><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#39785F]">What to observe</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.educationObserve}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#AD5E52]">Common shortcut to avoid</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.educationMistake}</p></div></> : <><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#39785F]">Positive confirmation</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.analysisPositive}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#AD5E52]">Negative confirmation</p><p className="mt-2 text-sm leading-6 text-[#4F625B]">{row.analysisNegative}</p></div></>}</article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#10342D] px-5 py-14 text-[#F7F0E3] sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div><p className="section-kicker text-[#E0C27B]">{isEducation ? "Learning mode" : "Research mode"}</p><h2 className="mt-3 max-w-3xl font-display text-[38px] leading-[1.02] sm:text-[50px]">{isEducation ? "A market story is not a signal until you know what would prove it." : "This is a view with conditions, not a prediction."}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#D0DBD4]">{isEducation ? "Use the same sequence every day: identify the macro driver, inspect market breadth, separate sectors, test data quality, then name the evidence that would change your mind." : "Our current frame: long-end yields and oil are the market-wide risk switches; AI hardware retains selective demand visibility; retail guidance will determine whether consumer pressure is segmented or becoming broader."}</p></div>
            <div className="border-l border-[#C99A48] bg-white/[0.04] p-6"><div className="flex items-center gap-2 text-[#E0C27B]"><BookOpenText size={17} /><span className="font-mono text-[10px] uppercase tracking-[0.16em]">{isEducation ? "Reading standard" : "Briefing standard"}</span></div><p className="mt-4 font-display text-[27px] leading-tight">{isEducation ? "“Compare the data, the reaction and the explanation — never only the headline.”" : "“Not broad risk-off — a style split led by long-end rates and geopolitics.”"}</p><p className="mt-4 text-sm leading-6 text-[#C5D0C9]">{isEducation ? "The goal is a repeatable method: know what to observe, what it may mean and which shortcut to avoid." : "The concise wording is designed for a decision-maker conversation: state the frame, identify the evidence, then say what would invalidate it."}</p></div>
          </div>
        </section>

        <section id="sources" className="relative overflow-hidden px-5 py-12 sm:px-10 lg:px-14">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#C99A48]" />
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div><div className="flex items-center gap-3"><span className="ledger-rule" /><p className="font-mono text-[10px] tracking-[0.17em] text-[#9B7739]">FILE NOTES / AUDIT TRAIL</p></div><h2 className="section-title mt-4">Every claim needs a trail.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#68756F]">The site is a static reading experience based on the attached Version 2 brief. It does not display live prices. Cited sources are provided so readers can distinguish verified market close data, official event timing, secondary reporting and analysis.</p><p className="mt-6 font-mono text-[10px] tracking-[0.12em] text-[#7A6B57]">SOURCE CUT · 18 AUG 2026 · HIGH CONFIDENCE FOR CITED CLOSE DATA</p></div>
            <div className="grid gap-0 border-t border-[#DED3C2] sm:grid-cols-2">
              {sources.map((source: (typeof sources)[number]) => <a key={source.label} href={source.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-[#DED3C2] py-4 text-sm font-medium text-[#184039] transition hover:text-[#AF7A2A] sm:odd:pr-6 sm:even:pl-6"><span>{source.label}</span><ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E0D5C3] bg-[#F3EFE6] px-5 py-7 sm:px-10 lg:px-14"><div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-xs text-[#6D7871] sm:flex-row"><p>© 2026 Equity Insight Hub · Static research edition · U.S. close 17 Aug 2026</p><p className="max-w-xl text-left sm:text-right">Research and education only. Not personalised financial advice. Market data, source timing and assumptions are disclosed in the original Version 2 brief.</p></div></footer>
      </div>
    </div>
  );
}
