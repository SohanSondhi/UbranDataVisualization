# Urban Rail Construction Cost Comparison: A Visual Analysis

NYU Building Urban Data Community Visualization Competition | 2026

## Project Overview

This project compares the cost of building urban rail in Los Angeles against peer cities in North America. The core case study is the Los Angeles Purple Line Extension, now the D Line Extension, and the main question is simple:

How far would the same overall LA project budget go if the line were built at the cost-per-mile rates seen in other cities?

The final visualization answers that question with an interactive metro-style map. A purple extension slider overlays the D Line route and moves to the last station that could be reached under each comparison city's construction cost profile. This turns a dense cost dataset into a spatial, easy-to-read comparison of transit delivery efficiency.

The work was created for the NYU Building Urban Data Community Visualization Competition and uses the Construction Costs of Urban Rail Projects Worldwide dataset as its primary source.

## Research Question

The project began with a broad planning discussion around what kinds of questions data analysis is best positioned to answer. The team focused on comparison, patterns, trends, associations, and correlations, then reviewed the available competition datasets through that lens.

The urban rail construction cost dataset stood out because it made direct comparison possible across cities, systems, and project types. From there, the team framed the project around a practical policy question:

Which cities appear to be delivering major rail infrastructure more efficiently, and what can Los Angeles learn from them while expanding the D Line?

That framing was intended to serve multiple audiences:

- Policymakers looking for benchmarks for transit investment decisions
- Urban researchers and data scientists interested in cross-city infrastructure patterns
- Engineers and project managers evaluating how cost structures vary across comparable rail projects
- General audiences who need a visual way to understand what construction cost differences mean in practice

## What This Repository Contains

This repository holds the competition front end and supporting working files used to turn the comparison into a visual story.

- [README.md](/c:/Users/sohan/Datathon/README.md): Project overview, workflow, methodology, and viewing instructions
- [front-end/index.html](/c:/Users/sohan/Datathon/front-end/index.html): Main interactive visualization
- [front-end/assets](/c:/Users/sohan/Datathon/front-end/assets): Backdrop images and map assets used by the front end
- [data/rail-cost-data.ts](/c:/Users/sohan/Datathon/data/rail-cost-data.ts): Working rail cost and corridor data from earlier project exploration
- [data/towns.ts](/c:/Users/sohan/Datathon/data/towns.ts): Supporting label and location data used during mapping experiments
- [data/README.md](/c:/Users/sohan/Datathon/data/README.md): Upstream dataset metadata and citation details

## How We Did It

### 1. Ideation and framing

The team started with a whiteboard session to review the competition datasets and identify which one could support a strong analytical question. Rather than just describing a dataset, the goal was to build a visualization that answered something meaningful. The team selected rail construction cost data because it supported direct, high-stakes comparison across cities.

### 2. Data selection and cleaning

The primary dataset was reviewed and filtered in Microsoft Excel. The team narrowed the working set to projects that were recent, relevant, and comparable to Los Angeles in terms of scale, geography, and transit context. Entries with incomplete or outdated cost information were removed or deprioritized, and units were standardized so projects could be compared consistently.

### 3. Cost-per-mile modeling

The analytical model normalized project cost by route length to create a cost-per-mile benchmark. That benchmark made it possible to compare the LA D Line Extension against peer cities on common ground, even when total project lengths and budgets differed substantially.

The model was then used to estimate how far LA's D Line budget would extend under other cities' cost structures. Instead of stopping at a spreadsheet comparison, the team translated those outputs into stations along the D Line extension corridor so viewers could see the difference spatially.

### 4. Regression and exploratory analysis

Claude AI, connected directly to Excel, was used to accelerate mathematical exploration and regression testing on the cleaned dataset. This helped the team iterate on comparative framings, check outliers, and pressure-test the interpretation of city-to-city differences without building every model manually from scratch.

### 5. Visual design

The final visual language was inspired by schematic subway maps and custom transit diagram tools. Reference metro maps and edited map imagery were used to create a clean Los Angeles backdrop that emphasized the D Line corridor while stripping out unnecessary geographic detail. The result was designed to feel familiar to transit riders while remaining analytical.

### 6. Front-end implementation

The final interactive front page in this repository was built as a lightweight static web page. The interface layers a purple slider over the D Line extension route and lets viewers jump to different comparison cities. Selecting a city moves the slider to the last reachable station under that city's cost-per-mile profile, while side panels summarize the multiplier versus Los Angeles and the city being compared.

## Visualization Logic

The current interface focuses on a small set of North American comparison cities:

- New York
- San Francisco
- Toronto
- Vancouver
- Montreal
- Seattle

For each city, the visualization stores:

- A cost-per-mile multiplier relative to Los Angeles
- The last station that would be reached if LA's D Line budget were spent at that city's construction cost level

The map then converts those comparisons into station-by-station movement along the extension corridor, ending at Downtown Santa Monica for the lowest cost-per-mile cases.

## Methodology Summary

### Primary dataset

Construction Costs of Urban Rail Projects Worldwide

- Authors: Alon Levy, Eric Goldwyn, Elif Ensari, Marco Chitti
- Institution: Marron Institute of Urban Management, New York University
- Repository metadata: [data/README.md](/c:/Users/sohan/Datathon/data/README.md)

### Working method

- Import and review the source data
- Filter to relevant and reasonably comparable North American projects
- Standardize values for comparison
- Calculate or verify cost-per-mile figures
- Compare peer-city cost structures against the LA D Line budget
- Translate results into station-based reach along the extension corridor
- Build a visual interface that makes those differences legible to non-technical viewers

## Tools and Software

The project combined spreadsheet analysis, AI-assisted exploration, and front-end implementation tools.

- Microsoft Excel: Data cleaning, filtering, comparison tables, and core cost-per-mile calculations
- Claude AI with Excel Connector: Regression testing, mathematical exploration, and comparison modeling inside Excel
- Codex: Interactive front-end implementation and iteration for the web visualization in this repository
- ChatGPT: Supplemental analytical exploration and prompt-based interpretation support
- Canva: Graphic editing and visual asset preparation
- Subway/Metro Line Builder and related transit-map references: Diagram inspiration and map construction support
- ClickUp / Click Cloud: Workflow and project coordination

## How to Run the Project

This project currently uses a static front end, so there is no `npm install`, no package manager setup, and no JavaScript build step required.

### Option 1: Open the file directly

1. Navigate to [front-end/index.html](/c:/Users/sohan/Datathon/front-end/index.html).
2. Open it in a modern browser such as Chrome, Edge, or Firefox.
3. Click the comparison city buttons to move the D Line extension slider.

### Option 2: Serve it locally with a simple static server

If you prefer running it from a local server instead of opening the file directly, you can serve the repository root with any lightweight static server.

Example using Python:

```bash
cd c:\Users\sohan\Datathon
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/front-end/
```

### What to expect

- The center map shows the D Line extension comparison
- The left column shows each city's cost-per-mile multiple versus Los Angeles
- The right column lets you jump to a comparison city and move the slider to that city's reachable station

## Geographic Scope

The final comparison centers on Los Angeles and a selected group of North American peer cities in the United States and Canada with relevant rail construction programs. This narrower scope was chosen to keep the comparison grounded in cities with more similar governance, labor, regulatory, and project-delivery conditions than a fully global comparison would allow.

## References and Data Sources

### Primary source

- Levy, Goldwyn, Ensari, Chitti. Construction Costs of Urban Rail Projects Worldwide. Marron Institute of Urban Management, New York University.

### Dataset citation

- Levy, A., Goldwyn, E., Ensari, E., & Chitti, M. (2025). Construction costs of urban rail projects worldwide [Data set]. New York University. https://doi.org/10.58153/9wnjp-kez15

### Supporting references

- NYU Data Services. Data Visualization Principles.
- Duke University Libraries. Designing a Visualization.

## Generative AI Usage Disclosure

In line with competition guidance, this project used generative AI as a support tool during analysis and implementation.

- Claude AI was used through an Excel connector to help run regression-style analysis and rapidly test comparative cost framings on the cleaned dataset.
- Codex was used to help build and refine the interactive front-end visualization in this repository.
- ChatGPT was used for supplemental analytical exploration and prompt-based interpretation support.

All framing, data selection, interpretation, and conclusions remained the responsibility of the project team. AI tools supported the workflow, but they did not replace human judgment.

## Submission Context

Prepared for the NYU Building Urban Data Community Visualization Competition.

Submitted April 3, 2026.
