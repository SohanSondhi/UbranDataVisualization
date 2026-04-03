export interface RailLineProjection {
  id: string;
  name: string;
  color: string;
  lengthMiles: number;
  constructedCostMillions: number;
  costPerMile: number;
  coords: [number, number][];
  note: string;
}

export interface RailSystemComparison {
  id: string;
  label: string;
  budgetMillions: number;
  currency?: "USD" | "CAD";
  description: string;
}

export interface RailCostDataset {
  base: {
    name: string;
    description: string;
    lines: RailLineProjection[];
  };
  comparisons: RailSystemComparison[];
}

export const railCostDataset: RailCostDataset = {
  base: {
    name: "LA Metro line build-out",
    description:
      "Sample LA corridors (Crenshaw, Purple Line, Regional Connector, etc.) with stabilized cost-per-mile figures drawn from the actual money spent.",
    lines: (() => {
      const lanes: Omit<RailLineProjection, "costPerMile">[] = [
        {
          id: "lineCrenshaw",
          name: "Crenshaw/LAX Line",
          color: "#498b9e",
          lengthMiles: 8.5,
          constructedCostMillions: 1900,
          note: "North-south spine connecting the Expo line to LAX with low-floor stations.",
          coords: [
            [33.7125, -118.3536],
            [33.7115, -118.3137],
            [33.6952, -118.2872],
            [33.6692, -118.2124],
          ],
        },
        {
          id: "linePurple",
          name: "Purple Line extension",
          color: "#956299",
          lengthMiles: 9.1,
          constructedCostMillions: 2100,
          note: "Tunneling from Wilshire/Western to Westwood/UCLA.",
          coords: [
            [34.0608, -118.3025],
            [34.0533, -118.3282],
            [34.0468, -118.3676],
            [34.0484, -118.3954],
          ],
        },
        {
          id: "lineRegionalConnector",
          name: "Regional Connector",
          color: "#0090d1",
          lengthMiles: 2.0,
          constructedCostMillions: 1900,
          note: "Underground link between Little Tokyo and 7th/Flower, enabling through-routing.",
          coords: [
            [34.0505, -118.2463],
            [34.0448, -118.2498],
            [34.0365, -118.2559],
            [34.0317, -118.2596],
          ],
        },
        {
          id: "lineGold",
          name: "Gold Line Foothill Extension",
          color: "#ffd700",
          lengthMiles: 12.8,
          constructedCostMillions: 1400,
          note: "At-grade extension toward Azusa with grade separations.",
          coords: [
            [34.0678, -118.2397],
            [34.1459, -118.1534],
            [34.1403, -118.0463],
          ],
        },
        {
          id: "lineExpo",
          name: "Expo Line doubling",
          color: "#2c92bf",
          lengthMiles: 15.2,
          constructedCostMillions: 800,
          note: "Signal upgrades, grade separations, and service reliability work.",
          coords: [
            [34.0438, -118.2676],
            [34.0188, -118.2510],
            [33.9416, -118.2709],
          ],
        },
      {
        id: "lineWestSantaMonica",
        name: "West Santa Monica future subway",
        color: "#006eb3",
        lengthMiles: 7.9,
        constructedCostMillions: 2500,
        note: "Imagined tunnel under Santa Monica Blvd for the Purple Line extension.",
        coords: [
          [34.0522, -118.2437],
          [34.0498, -118.2762],
          [34.0399, -118.2965],
          [34.0334, -118.3378],
          [34.0244, -118.3729],
          [34.0156, -118.4101],
          [34.0098, -118.4442],
          [34.0063, -118.4789],
        ],
      },
      ];

      return lanes.map((line) => ({
        ...line,
        costPerMile: Number((line.constructedCostMillions / line.lengthMiles).toFixed(1)),
      }));
    })(),
  },
  comparisons: [
    {
      id: "la",
      label: "LA Metro Countywide Plan",
      budgetMillions: 3300,
      currency: "USD",
      description:
        "LA County Metro’s latest capital program (Green Line Extension + Purple Line Phase 2). Budget roughly matches funding available in one cycle.",
    },
    {
      id: "septa",
      label: "SEPTA New Starts Portfolio",
      budgetMillions: 2500,
      description:
        "Southeastern Pennsylvania’s investments focus on revitalizing regional rail corridors.",
    },
    {
      id: "nyc",
      label: "NYC MTA Capital Program",
      budgetMillions: 4800,
      currency: "USD",
      description:
        "MTA’s capital program for signal upgrades, resiliency work, and capacity expansion on the existing trunk lines.",
    },
    {
      id: "toronto",
      label: "Toronto ON: Metrolinx Expansion",
      budgetMillions: 2900,
      currency: "CAD",
      description:
        "Metrolinx capital plan focused on regional rail electrification and the relief line.",
    },
    {
      id: "vancouver",
      label: "TransLink: Surrey–Langley SkyTrain",
      budgetMillions: 2500,
      currency: "CAD",
      description:
        "Surrey-Langley extension plus supporting regional technology upgrades.",
    },
    {
      id: "septa",
      label: "SEPTA New Starts Portfolio",
      budgetMillions: 2500,
      currency: "USD",
      description:
        "Southeastern Pennsylvania’s investments focus on revitalizing regional rail corridors.",
    },
  ],
};
