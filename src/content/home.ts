export type Stat = { label: string; value: number; suffix?: string };

export const keyStats: Stat[] = [
  { label: "Serving newborns since", value: 2015 },
  { label: "Level III NICU beds", value: 42 },
  { label: "Full-time neonatologists", value: 4 },
  { label: "Neonatologist availability", value: 24, suffix: "×7" },
  { label: "Neonatal ambulances", value: 3 },
];

export type Outcome = { value: string; label: string; accent?: boolean };

export const outcomes: Outcome[] = [
  { value: "5500+", label: "Number of admissions" },
  { value: "4000+", label: "Newborns under 1.5 kg birth weight", accent: true },
  { value: "500+", label: "Newborns under 1 kg birth weight" },
  { value: "<1%", label: "Mortality", accent: true },
];

export const aboutHighlights = [
  "Four full-time, fellowship-trained neonatologists",
  "First centre in the region to offer inhaled nitric oxide",
  "Whole-body cooling, high-frequency and conventional ventilation",
  "Active academic and training programmes for newborn care",
];

export const nicuOnWheelsHighlights = [
  "Dedicated neonatal transport - newborns only",
  "Neonatologist accompanies every transfer, 24×7",
  "Covers Saurashtra and Kutch",
];

export const successStats = [
  { value: "26 wks", label: "Gestation at birth" },
  { value: "850 g", label: "Birth weight" },
  { value: "52 days", label: "NICU stay, sepsis-free" },
];
