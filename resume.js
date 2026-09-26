/* ============================================================
   YOUR RESUME CONTENT — this is the only file you need to edit.

   Edit it in Notepad, VS Code, or anything. Save, then refresh
   the browser tab. That's it.

   Rules:
   - Text goes inside "quotes".
   - Items in a list are separated by commas.
   - If a section's list is empty [], that section disappears
     from the page automatically. Fill it in and it comes back.
   - Don't delete the commas, brackets or braces.
   ============================================================ */

const RESUME = {

  /* ---------- TOP OF PAGE ---------- */
  name: "Krish Verma",
  tagline: "High school student, Class of 2028 · Dallas–Fort Worth, Texas",
  pitch: "I build <b>systematic trading tools</b> — and then run them long enough to find out where they break.",

  links: [
    { label: "GitHub",         href: "https://github.com/krishv3rma" },
    { label: "Live dashboard", href: "https://krishv3rma.github.io/stock_screener/" },
    { label: "Source",         href: "https://github.com/krishv3rma/stock_screener" },
    { label: "krish.v3rma@gmail.com", href: "mailto:krish.v3rma@gmail.com" }
  ],

  /* ---------- SELECTED WORK (the big project) ---------- */
  project: {
    title: "Holy Grail — Daily Trend Screener",
    meta: "Python · Pine Script · running unattended since 24 July 2026",
    paragraphs: [
      "A daily trend-following signal system for US equities. Every run screens the full universe of roughly 5,100 tickers, applies a market-cap and liquidity filter, runs a trend-following state machine over the survivors, and publishes the results to a public dashboard.",
      "It started as a TradingView indicator. I ported it to Python because Pine can't screen a universe, can't backtest across tickers, and can't run on a schedule. Then I put it on a scheduled task and left it alone."
    ],
    stats: [
      { n: "5,151", l: "tickers screened per run" },
      { n: "2×",    l: "runs per day, unattended" },
      { n: "~218",  l: "signals published daily" },
      { n: "83",    l: "commits and counting" }
    ]
  },

  /* ---------- BACKTEST RESULTS ---------- */
  results: {
    intro: "A signal system nobody has tested is a hypothesis. So I built a backtester and ran it. Here is the honest version, including the parts that don't flatter it.",
    chartTitle: "Cumulative return, in R-multiples",
    chartLabel: "AAPL · MSFT · NVDA · JPM · XOM &nbsp;·&nbsp; 214 trades",
    caption: "1R is the initial stop distance at entry. No commissions, slippage or modeled fills — the curve is a plan, not a track record.",
    stats: [
      { v: "+25.19R",       k: "Net result over 4 years", tone: "pos" },
      { v: "32.2%",         k: "Win rate" },
      { v: "1.27",          k: "Profit factor" },
      { v: "−12.6R",        k: "Maximum drawdown", tone: "neg" },
      { v: "+1.71 / −0.64", k: "Average win / loss" }
    ],
    findingLabel: "The result I didn't want",
    findingHtml: "<p>Split by direction, the long side returned <span class=\"mono pos\">+56.1R</span> across 132 trades and the short side returned <span class=\"mono neg\">−30.9R</span> across 82. The short side gave back more than half of what the long side earned.</p><p>Two more that matter: the single best trade is 59% of the net total, and two features carrying real complexity — an EMA50 trailing stop and a position-flip mechanism — fired 5 times and 2 times respectively across all 214 trades. My own documentation predicted some features wouldn't earn their keep. These are the ones.</p>"
  },

  /* ---------- HOW IT'S BUILT ---------- */
  build: [
    { w: "Engine",     t: "A trade state machine — FLAT, LONG, SHORT — with entries gated on seven triggers and six filters, and exits resolved in strict priority so only one fires per bar." },
    { w: "Risk",       t: "Stops at entry − 2×ATR(14), with ATR and multiplier locked at entry so changing an input can never move a live stop. The stop is a one-way ratchet." },
    { w: "Screener",   t: "Full-market ticker pull, cached market-cap floor, then liquidity and price filters. Roughly 870 names clear the cap; about 220 clear the screen." },
    { w: "Backtester", t: "Historical replay producing a per-trade log with R-multiples, exit reasons and hold times, plus the equity curve above." },
    { w: "Automation", t: "A scheduled task runs the pipeline at 9am and 6pm, commits the signal file only when it changed, and pushes. Pages redeploys on its own." }
  ],

  skills: ["Python", "pandas", "NumPy", "Pine Script", "PowerShell", "Git", "GitHub Pages", "Time-series analysis"],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      when: "Summer 2026",
      role: "Intern",
      org:  "Tax Geeks — accounting firm, Dallas–Fort Worth",
      note: "First exposure to how a small professional-services business actually runs day to day."
    }
    /* Add more like this:
    ,{ when: "...", role: "...", org: "...", note: "..." }
    */
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    {
      when: "Class of 2028",
      role: "High school — Coppell, Texas",
      org:  "",
      note: "Coursework includes AP Calculus BC. Pursuing a quantitative track toward economics or finance with computer science."
    }
  ],

  /* ---------- AWARDS & HONORS ----------
     EMPTY RIGHT NOW. Fill these in and the section appears.
     Include the level — school, district, state, national.
     Example:
       { when: "2026", role: "2nd place, State", org: "Texas DECA", note: "Financial analysis event, 1 of 400+ competitors." }
  */
  awards: [
  ],

  /* ---------- VOLUNTEERING & COMMUNITY ----------
     EMPTY RIGHT NOW. Fill these in and the section appears.
     Say what the organization is, what you did, and roughly how long.
     Example:
       { when: "2024 – present", role: "Volunteer", org: "Organization name", note: "What you actually did. Hours or scale if you have a number." }
  */
  volunteering: [
  ],

  /* ---------- ACTIVITIES ---------- */
  activities: [
    {
      when: "2025 – present",
      role: "Competitive debate",
      org:  "School team",
      note: "Evidence research, case construction, and argument under time pressure — the closest thing school offers to defending an analysis to someone actively trying to break it."
    }
  ],

  /* ---------- WHAT'S NEXT ---------- */
  next: "A held-out out-of-sample window so the parameters aren't graded on the data that set them. A slippage assumption on stop exits — the worst trade in the sample closed at −1.87R against a stop placed at −1R, which means daily stops gap and my loss side is optimistic. And an ablation of the trailing stop and flip logic, because on current evidence they aren't paying for the complexity they cost.",

  footerLocation: "Dallas–Fort Worth, TX"
};

/* ============================================================
   EQUITY CURVE DATA — [date, cumulative R]
   Regenerate from your own backtest whenever you rerun it.
   ============================================================ */
const EQUITY = [["2022-07-20",-0.57],["2022-08-04",-3.35],["2022-08-22",-3.9],["2022-08-26",-2.81],["2022-09-08",-2.97],["2022-09-13",-5.28],["2022-10-04",-4.79],["2022-10-21",-4.17],["2022-10-28",-4.61],["2022-11-10",-4.69],["2022-12-15",-6.17],["2022-12-22",-5.83],["2023-01-09",-7.17],["2023-01-19",-7.37],["2023-02-01",-8.35],["2023-02-17",-8.54],["2023-02-21",-9.7],["2023-03-07",-9.74],["2023-03-13",-11.26],["2023-04-14",-12.57],["2023-05-01",-6.41],["2023-05-23",-6.94],["2023-06-20",-7.96],["2023-06-28",-8.01],["2023-07-11",-3.13],["2023-07-24",6.17],["2023-08-03",11.83],["2023-08-15",12.28],["2023-08-23",11.78],["2023-09-07",11.32],["2023-10-04",11.88],["2023-10-26",11.49],["2023-11-01",9.05],["2023-11-03",8.24],["2023-12-19",10.06],["2024-01-02",10.31],["2024-01-03",11.17],["2024-01-25",9.74],["2024-02-06",8.46],["2024-03-05",10.51],["2024-04-04",24.88],["2024-04-12",32.18],["2024-04-15",32.22],["2024-04-25",30.97],["2024-05-02",29.79],["2024-05-06",29.45],["2024-05-21",33.19],["2024-06-04",31.58],["2024-06-05",30.69],["2024-06-24",31.35],["2024-07-17",29.27],["2024-07-25",31.87],["2024-08-05",30.31],["2024-08-20",30.03],["2024-09-03",29.68],["2024-09-10",30.84],["2024-09-27",29.11],["2024-10-07",28.06],["2024-10-31",26.13],["2024-11-05",27.03],["2024-11-19",26.32],["2024-11-27",25.75],["2024-12-19",27.56],["2024-12-27",26.88],["2025-01-02",28.51],["2025-01-10",26.24],["2025-01-23",26.84],["2025-01-30",23.43],["2025-02-10",22.47],["2025-02-20",24.64],["2025-03-10",22.92],["2025-03-14",21.6],["2025-03-24",21.93],["2025-04-09",22.68],["2025-04-11",21.59],["2025-04-24",19.94],["2025-05-09",19.74],["2025-06-06",20.33],["2025-06-23",20.61],["2025-07-02",19.37],["2025-08-01",18.23],["2025-09-05",23.79],["2025-09-10",27.86],["2025-09-18",26.7],["2025-09-30",27.13],["2025-10-10",28.23],["2025-10-14",28.57],["2025-10-27",28.56],["2025-11-05",28.87],["2025-11-13",28.47],["2025-11-24",27.51],["2025-12-08",26.82],["2025-12-15",28.18],["2026-01-07",28.63],["2026-01-13",28.92],["2026-01-27",27.55],["2026-02-09",26.26],["2026-02-27",25.87],["2026-04-08",23.28],["2026-04-13",31.68],["2026-05-07",30.23],["2026-05-22",29.11],["2026-05-29",29.27],["2026-06-05",26.98],["2026-06-15",24.35],["2026-06-22",25.95],["2026-07-07",25.36],["2026-07-13",25.19]];
