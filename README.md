# Rail Budget Overlay

This project uses LA Metro as the home base, comparing its constructed corridors’ actual cost-per-mile to other North American transit budgets. Swap between comparison budgets to see which corridors (and even partial segments) each agency could afford at today’s USD-equivalent rates.

## Repository layout

- `front-end`: Vite + React app that loads the front-line dataset, renders LA Metro corridors with Leaflet, and overlays comparison budgets that color only the routes fitting that funding bucket while the base map is just a neutral field with town labels (no other OSM labels).
- `data`: Type-safe module that defines each LA corridor’s actual constructed cost, length, and cost-per-mile, plus town label coordinates and a list of peer transit budgets such as NYC, Toronto (CAD), and SEPTA along with conversion metadata.

## Running the demo

```bash
cd front-end
npm install
npm run dev
```

Visit the local Vite URL (usually `http://localhost:5173`) to interact with the overlay and switch between the comparison budgets.

## Data + overlay behavior

- The `data/rail-cost-data.ts` file exports `railCostDataset`. The `base` object lists LA corridors (Crenshaw, Purple Line, Regional Connector, etc.) with their constructed cost, track length, and derived cost-per-mile along with the coordinate paths used in the map.
- The comparison list contains capital programs from other agencies. When you select one, the UI funds the cheapest per-mile corridors first, partially coloring any corridor that the budget can only cover a portion of, while keeping the base line visible in light grey.
- The detail panel summarizes the funded versus deferred corridors, the total estimated spend, and how much of the comparison budget remains so you can track “LA vs XYZ” comparisons.

## Next steps ideas

1. Hook the dataset into a backend API so planners can add new comparison budgets without redeploying the frontend.
2. Allow multi-budget overlays (e.g., show Toronto + NYC budgets simultaneously) for side-by-side visuals.
3. Add filters for line type, borough, or capital category (tunnel vs. signal work) so each comparison highlights the right subset of projects.
