export const horizons = ['T-45', 'T-30', 'T-15', 'T-7', 'T-1'] as const;
export const airlines = ['IndiGo', 'Air India', 'Akasa Air', 'SpiceJet'] as const;
export const cities = ['Chennai', 'Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad'] as const;
export type FareRecord = { airline: string; origin: string; destination: string; horizon: string; date: string; fare: number };
const routes = [
  ['Chennai', 'Delhi', 4950], ['Mumbai', 'Delhi', 4210], ['Bengaluru', 'Mumbai', 3800],
  ['Delhi', 'Bengaluru', 4620], ['Hyderabad', 'Chennai', 3150], ['Chennai', 'Mumbai', 4380],
  ['Mumbai', 'Bengaluru', 4010], ['Delhi', 'Mumbai', 3550], ['Bengaluru', 'Delhi', 4870],
] as const;
export const fareRecords: FareRecord[] = routes.flatMap(([origin, destination, base], ri) =>
  airlines.flatMap((airline, ai) => horizons.flatMap((horizon, hi) =>
    ['2026-10-12', '2026-10-19', '2026-11-02'].map((date, di) => ({
      origin, destination, airline, horizon, date,
      fare: Math.round((base + ai * 270 + ri * 35 + di * 110) * [0.91, 1, 1.14, 1.37, 1.72][hi] / 10) * 10,
    }))
  ))
);
export const glossary = [
  { term: 'Jevons Index', category: 'Statistics', definition: 'An index formed from the geometric mean of individual price relatives.', detail: 'Each comparable fare contributes a price relative. Multiplying the relatives and taking the nth root gives the Jevons index.' },
  { term: 'Booking Horizon', category: 'Aviation', definition: 'The number of days between observing a fare and the flight departure.', detail: 'T-30 means a fare observed 30 days before departure. Comparing like-for-like horizons helps avoid misleading changes.' },
  { term: 'Web Scraping', category: 'Data Engineering', definition: 'Automated collection of information from permitted public web pages.', detail: 'Collection must respect website terms, access restrictions, and applicable law. AIRIX does not collect live fares in this demo.' },
  { term: 'Price Relative', category: 'Statistics', definition: 'A current price divided by its previous price, multiplied by 100.', detail: 'A result of 110 represents a 10% increase; 90 represents a 10% decrease.' },
  { term: 'Route Weighting', category: 'AIRIX Specific', definition: 'The proposed assignment of relative importance to different flight routes.', detail: 'Weights would require a documented, validated basis before any research or official use.' },
  { term: 'Geometric Mean', category: 'Statistics', definition: 'An average based on multiplication rather than addition.', detail: 'For n positive values, multiply all n values and take the nth root. Logarithms improve numerical stability for larger sets.' },
];
export const sources = [
  { name: 'DGCA', category: 'Aviation regulator', detail: 'Published aviation reports and regulatory context may help frame route coverage.', limitation: 'Public reports may not include comparable transaction-level fares.', url: 'https://www.dgca.gov.in/' },
  { name: 'MoSPI / NSO', category: 'Official statistics', detail: 'Published CPI methodology and releases provide institutional context.', limitation: 'AIRIX is not an official NSO or MoSPI index.', url: 'https://mospi.gov.in/' },
  { name: 'Airline Websites', category: 'Potential fare source', detail: 'Publicly displayed fare offers could inform a permitted collection design.', limitation: 'Access, availability and fare terms vary; permission must be checked.', url: '' },
  { name: 'OTA Platforms', category: 'Potential fare source', detail: 'Publicly displayed listings could add channel comparisons where permitted.', limitation: 'Fees, ranking, inventory and terms can differ by platform.', url: '' },
];
export const rupees = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;
