import type { IconName } from "@/components/ui/Icon";

export type Facility = { icon: IconName; title: string; description: string };

export const facilities: Facility[] = [
  {
    icon: "lungs",
    title: "Inhaled Nitric Oxide",
    description: "First in the region - for severe pulmonary hypertension in newborns.",
  },
  {
    icon: "lungs",
    title: "High-Frequency Ventilation",
    description: "Gentle, lung-protective ventilation for the sickest and smallest babies.",
  },
  {
    icon: "monitor",
    title: "Conventional Ventilation",
    description: "Invasive mechanical ventilation with round-the-clock neonatologist oversight.",
  },
  {
    icon: "droplet",
    title: "CPAP & High-Flow Nasal Cannula",
    description: "Non-invasive breathing support that helps babies avoid intubation.",
  },
  {
    icon: "snowflake",
    title: "MiraCradle Whole-Body Cooling",
    description: "Therapeutic hypothermia to protect the brain after birth asphyxia.",
  },
  {
    icon: "heart",
    title: "Functional Echocardiography",
    description: "Bedside heart assessment by our trained neonatologists.",
  },
  {
    icon: "pulse",
    title: "Neurosonogram & POC-USG",
    description: "Esaote MyLab 40 HD with a dedicated neonatal probe.",
  },
  {
    icon: "droplet",
    title: "Total Parenteral Nutrition",
    description: "Precise IV nutrition for preterm babies not yet ready to feed.",
  },
  {
    icon: "shield-check",
    title: "Infection-Control Protocols",
    description: "Rigorous NICU practices - reflected in sepsis-free long stays.",
  },
];
