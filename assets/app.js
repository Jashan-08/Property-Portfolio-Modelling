const strategies = [
  {
    name: "Buy & Hold Growth",
    summary: "Focus on capital growth in high-demand metro or emerging city corridors.",
    budget: "250k-600k",
    timeframe: "7-10 years",
    risk: "medium",
    goal: "equity growth",
    tags: ["Growth markets", "Low churn", "Long-term"],
  },
  {
    name: "Yield + Cash Flow",
    summary: "Target stronger rental yields to fund additional acquisitions.",
    budget: "150k-450k",
    timeframe: "3-7 years",
    risk: "low",
    goal: "cash flow",
    tags: ["High yield", "Regional hubs", "Stable tenants"],
  },
  {
    name: "Value-Add Renovation",
    summary: "Upgrade underperforming properties to force equity and rent uplift.",
    budget: "200k-800k",
    timeframe: "1-3 years",
    risk: "medium",
    goal: "equity growth",
    tags: ["Renovation", "Equity release", "Manufactured growth"],
  },
  {
    name: "Development Split",
    summary: "Subdivide or develop for upside equity within shorter windows.",
    budget: "600k-2m+",
    timeframe: "2-5 years",
    risk: "high",
    goal: "equity growth",
    tags: ["Development", "Planning approvals", "High uplift"],
  },
  {
    name: "Rent-vesting",
    summary: "Invest in growth markets while renting where you live.",
    budget: "200k-700k",
    timeframe: "5-10 years",
    risk: "low",
    goal: "lifestyle flexibility",
    tags: ["Lifestyle", "Portfolio first", "Tax efficiency"],
  },
  {
    name: "Build-to-Rent",
    summary: "Create rental homes designed for long-term cash flow stability.",
    budget: "800k-3m+",
    timeframe: "5-10 years",
    risk: "medium",
    goal: "cash flow",
    tags: ["New builds", "Depreciation", "Portfolio scale"],
  },
];

const features = [
  {
    title: "Deal Analysis Calculator",
    detail: "Purchase price, yield, equity uplift, renovation ROI, and exit scenarios.",
    category: "analysis",
  },
  {
    title: "Portfolio Cash Flow Tracking",
    detail: "Track income, expenses, loan repayment schedules, and buffers.",
    category: "portfolio",
  },
  {
    title: "Market Ranking Scorecard",
    detail: "Compare suburbs on growth, vacancy, affordability, and infrastructure.",
    category: "market",
  },
  {
    title: "Loan & Serviceability Models",
    detail: "Stress test interest rate changes and lending policy shifts.",
    category: "finance",
  },
  {
    title: "Scenario Planner",
    detail: "Model best-case, base-case, and downside outcomes for 10-year plans.",
    category: "strategy",
  },
  {
    title: "Portfolio Roadmap Timeline",
    detail: "Visual milestones, acquisition sequencing, and equity releases.",
    category: "strategy",
  },
  {
    title: "Tax & Depreciation Insights",
    detail: "Estimate after-tax cash flow and depreciation benefits.",
    category: "finance",
  },
  {
    title: "Property Management Dashboard",
    detail: "Vacancy alerts, maintenance logs, and tenant performance.",
    category: "operations",
  },
];

const toolCategories = [
  {
    title: "Portfolio Planning Platforms",
    detail: "All-in-one forecasting + holdings management.",
  },
  {
    title: "Market Research & Data Tools",
    detail: "Suburb performance, demographics, and supply pipelines.",
  },
  {
    title: "Deal Analysis Spreadsheets",
    detail: "Quick underwriting for single properties and renovations.",
  },
  {
    title: "Finance & Loan Modeling Suites",
    detail: "Serviceability, buffers, and debt reduction planning.",
  },
  {
    title: "Property Operations Dashboards",
    detail: "Maintenance, inspections, and rent tracking workflows.",
  },
];

const budgetRanges = ["150k-450k", "250k-600k", "200k-800k", "600k-2m+", "800k-3m+"];
const timeframes = ["1-3 years", "2-5 years", "3-7 years", "5-10 years", "7-10 years"];
const riskLevels = ["low", "medium", "high"];
const goalFocus = ["equity growth", "cash flow", "lifestyle flexibility"];

const budgetSelect = document.getElementById("budgetRange");
const timeframeSelect = document.getElementById("timeframe");
const riskSelect = document.getElementById("riskLevel");
const goalSelect = document.getElementById("goalFocus");

const strategyGrid = document.getElementById("strategyGrid");
const featureGrid = document.getElementById("featureGrid");
const toolGrid = document.getElementById("toolGrid");

const strategyCount = document.getElementById("strategyCount");
const featureCount = document.getElementById("featureCount");
const toolCount = document.getElementById("toolCount");
const strategyBadge = document.getElementById("strategyBadge");
const featureBadge = document.getElementById("featureBadge");

const resetFilters = document.getElementById("resetFilters");
const downloadBrief = document.getElementById("downloadBrief");

const populateSelect = (select, options) => {
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });
};

const buildTags = (tags) =>
  tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

const renderStrategies = () => {
  const budgetValue = budgetSelect.value;
  const timeframeValue = timeframeSelect.value;
  const riskValue = riskSelect.value;
  const goalValue = goalSelect.value;

  const filtered = strategies.filter((strategy) => {
    const budgetOk = budgetValue === "all" || strategy.budget === budgetValue;
    const timeframeOk = timeframeValue === "all" || strategy.timeframe === timeframeValue;
    const riskOk = riskValue === "all" || strategy.risk === riskValue;
    const goalOk = goalValue === "all" || strategy.goal === goalValue;
    return budgetOk && timeframeOk && riskOk && goalOk;
  });

  strategyGrid.innerHTML = filtered
    .map(
      (strategy) => `
      <article class="card">
        <div>
          <h3>${strategy.name}</h3>
          <p class="muted">${strategy.summary}</p>
        </div>
        <div class="tags">
          <span class="tag">Budget ${strategy.budget}</span>
          <span class="tag">${strategy.timeframe}</span>
          <span class="tag">${strategy.risk} risk</span>
          <span class="tag">${strategy.goal}</span>
        </div>
        <div class="tags">${buildTags(strategy.tags)}</div>
      </article>
    `
    )
    .join("");

  strategyBadge.textContent = `${filtered.length} selected`;
};

const renderFeatures = () => {
  featureGrid.innerHTML = features
    .map(
      (feature) => `
      <article class="feature">
        <h4>${feature.title}</h4>
        <p class="muted">${feature.detail}</p>
      </article>
    `
    )
    .join("");

  featureBadge.textContent = `${features.length} highlighted`;
};

const renderTools = () => {
  toolGrid.innerHTML = toolCategories
    .map(
      (tool) => `
      <article class="tool">
        <h4>${tool.title}</h4>
        <p class="muted">${tool.detail}</p>
      </article>
    `
    )
    .join("");
};

const updateStats = () => {
  strategyCount.textContent = `${strategies.length}`;
  featureCount.textContent = `${features.length}`;
  toolCount.textContent = `${toolCategories.length}`;
};

const init = () => {
  populateSelect(budgetSelect, budgetRanges);
  populateSelect(timeframeSelect, timeframes);
  populateSelect(riskSelect, riskLevels);
  populateSelect(goalSelect, goalFocus);

  updateStats();
  renderStrategies();
  renderFeatures();
  renderTools();
};

const resetAll = () => {
  budgetSelect.value = "all";
  timeframeSelect.value = "all";
  riskSelect.value = "all";
  goalSelect.value = "all";
  renderStrategies();
};

const downloadSummary = () => {
  const content = [
    "Property Portfolio Strategy Brief",
    "",
    "Selected Filters:",
    `Budget: ${budgetSelect.value}`,
    `Timeframe: ${timeframeSelect.value}`,
    `Risk: ${riskSelect.value}`,
    `Goal: ${goalSelect.value}`,
    "",
    "Recommended Strategies:",
    ...strategies
      .filter((strategy) => {
        const budgetOk = budgetSelect.value === "all" || strategy.budget === budgetSelect.value;
        const timeframeOk =
          timeframeSelect.value === "all" || strategy.timeframe === timeframeSelect.value;
        const riskOk = riskSelect.value === "all" || strategy.risk === riskSelect.value;
        const goalOk = goalSelect.value === "all" || strategy.goal === goalSelect.value;
        return budgetOk && timeframeOk && riskOk && goalOk;
      })
      .map((strategy) => `- ${strategy.name}: ${strategy.summary}`),
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "strategy-brief.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

budgetSelect.addEventListener("change", renderStrategies);
timeframeSelect.addEventListener("change", renderStrategies);
riskSelect.addEventListener("change", renderStrategies);
goalSelect.addEventListener("change", renderStrategies);
resetFilters.addEventListener("click", resetAll);
downloadBrief.addEventListener("click", downloadSummary);

init();
