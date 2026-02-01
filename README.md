# Property Portfolio Strategy Lab

A lightweight, static web app prototype for exploring property investment strategies, budget ranges,
timeframes, and market-standard features. Use it as a starting point for a larger portfolio planning
platform.

## Features

- Filter investment strategies by budget, timeframe, risk appetite, and goal focus.
- Review market-standard “must-have” features for portfolio tools.
- Download a simple strategy brief based on your selected filters.

## Getting started

### Prerequisites

- Any modern web browser (Chrome, Edge, Firefox, Safari).
- Optional: Python 3 if you want to serve locally with a simple web server.

### Install / setup

1. Clone the repository.
   ```bash
   git clone <your-repo-url>
   cd Property-Portfolio-Modelling
   ```
2. No build step is required. The app is static HTML/CSS/JS.

### Run locally

You can open the app directly in your browser:

```bash
open index.html
```

Or use a local web server (recommended for consistent asset loading):

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

## Usage

1. Choose a **Budget range**, **Timeframe**, **Risk appetite**, and **Goal focus**.
2. The **Investment strategy menu** updates automatically based on your selections.
3. Review **Must-have features** and **Tool categories** to compare what typical market tools offer.
4. Click **Download strategy brief** to export a text summary of the filtered strategies.

## Project structure

```
.
├── index.html
└── assets
    ├── app.js
    ├── favicon.svg
    └── styles.css
```

## Next steps (ideas)

- Connect live market data sources.
- Add deal analysis calculators and sensitivity modeling.
- Build portfolio dashboards with lending and cash flow tracking.
