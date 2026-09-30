import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  /** Short label used in navigation, breadcrumbs and the footer. */
  navLabel: string;
  icon: IconName;
  card: { title: string; description: string };
  hero: { title: string; description: string };
  seo: { title: string; description: string };
  schemaName: string;
  image: { src: string; alt: string };
  heading: string;
  lead: string;
  features: string[];
  highlight: { title: string; text: string };
};

export const services: Service[] = [
  {
    slug: "level-3-nicu",
    navLabel: "Level III NICU",
    icon: "cross",
    card: {
      title: "Level III NICU & Newborn Services",
      description:
        "42-bed Level III nursery with nitric oxide, high-frequency ventilation and whole-body cooling for critically ill newborns.",
    },
    hero: {
      title: "Level III NICU in Rajkot",
      description:
        "Round-the-clock intensive care for premature, low birth weight and critically ill babies in Rajkot.",
    },
    seo: {
      title: "Level III NICU in Rajkot | MAAHI Newborn Care Centre",
      description:
        "42-bed Level III NICU in Rajkot with inhaled nitric oxide, high-frequency ventilation, whole-body cooling and neonatologists available 24x7.",
    },
    schemaName: "Level III NICU in Rajkot",
    image: { src: "/images/nicu-image.jpg", alt: "Level III NICU with incubators" },
    heading: "A 42-bed Level III nursery for critically ill newborns",
    lead: "MAAHI provides a spacious 42-bed Level III nursery where five full-time neonatologists are available 24 × 7 × 365. Every major life-support therapy is available in-house, so your baby never needs to be moved for advanced care.",
    features: [
      "Care for extremely premature and ELBW babies",
      "High-frequency and conventional ventilation",
      "Inhaled nitric oxide - first in the region",
      "CPAP and high-flow nasal cannula",
      "MiraCradle whole-body cooling for birth asphyxia",
      "Total parenteral nutrition (TPN)",
    ],
    highlight: {
      title: "Outcome that matters",
      text: "A 26-week, 850 g baby recently survived intact, without sepsis, through a 52-day NICU stay.",
    },
  },
  {
    slug: "neonatal-surgeries",
    navLabel: "Neonatal Surgeries",
    icon: "stethoscope",
    card: {
      title: "Neonatal Surgeries",
      description:
        "Pre- and post-operative intensive care for newborns who need surgery, with neonatologists monitoring every hour.",
    },
    hero: {
      title: "Neonatal Surgeries",
      description:
        "Neonatologist-led peri-operative care for babies who need surgery in their first weeks of life.",
    },
    seo: {
      title: "Neonatal Surgeries in Rajkot | MAAHI Newborn Care Centre",
      description:
        "Neonatologist-led pre- and post-operative intensive care for newborns needing surgery, in MAAHI's Level III NICU, Rajkot.",
    },
    schemaName: "Neonatal Surgeries",
    image: { src: "/images/nicu-ward.jpg", alt: "Post-operative newborn care" },
    heading: "Intensive care before and after newborn surgery",
    lead: "Some babies are born with conditions that need surgery soon after birth. At MAAHI, neonatologists stabilise the baby before surgery and manage ventilation, nutrition and monitoring throughout recovery in the Level III NICU.",
    features: [
      "Pre-operative stabilisation",
      "Post-operative ventilation and monitoring",
      "Parenteral nutrition during recovery",
      "Bedside ultrasound and echocardiography",
      "Pain management and infection control",
      "Family counselling at every step",
    ],
    highlight: {
      title: "One team, start to finish",
      text: "The same neonatology team follows your baby from admission to discharge.",
    },
  },
  {
    slug: "high-risk-opd",
    navLabel: "High Risk OPD",
    icon: "chart",
    card: {
      title: "High Risk OPD",
      description:
        "Structured follow-up for NICU graduates and high-risk babies - growth, nutrition and developmental checks.",
    },
    hero: {
      title: "High Risk OPD",
      description:
        "Structured check-ups for babies who were premature, low birth weight or unwell at birth.",
    },
    seo: {
      title: "High Risk OPD in Rajkot | MAAHI Newborn Care Centre",
      description:
        "High Risk OPD in Rajkot: growth, nutrition and developmental follow-up for premature and NICU-graduate babies at MAAHI.",
    },
    schemaName: "High Risk OPD",
    image: { src: "/images/office-image.jpg", alt: "High-risk follow-up clinic" },
    heading: "Follow-up for NICU graduates and high-risk babies",
    lead: "Babies discharged from intensive care need careful follow-up. Our High Risk OPD tracks growth, feeding and development so any concern is picked up and acted on early.",
    features: [
      "Growth and weight monitoring",
      "Nutrition and feeding guidance",
      "Developmental assessments",
      "Neurosonography where indicated",
      "Vaccination schedule planning",
      "Parent education and counselling",
    ],
    highlight: {
      title: "Continuity of care",
      text: "Follow-up is led by the neonatologists who knew your baby in the NICU.",
    },
  },
  {
    slug: "opd-services",
    navLabel: "OPD Services",
    icon: "syringe",
    card: {
      title: "OPD & Vaccination",
      description:
        "Neonatal and paediatric OPD for 0–18 years, vaccination, and 24×7 emergency OPD.",
    },
    hero: {
      title: "OPD & Vaccination",
      description:
        "Consultations, vaccination and counselling - plus emergency OPD every hour of every day.",
    },
    seo: {
      title: "OPD Services in Rajkot | MAAHI Newborn Care Centre",
      description:
        "Paediatric and neonatal OPD for 0-18 years in Rajkot, vaccination, free breastfeeding counselling and 24x7 emergency OPD at MAAHI.",
    },
    schemaName: "OPD & Vaccination",
    image: { src: "/images/office-image.jpg", alt: "OPD consultation room" },
    heading: "Neonatal and paediatric OPD from birth to 18 years",
    lead: "Neonatal and paediatric OPD and vaccination are available for children from 0 to 18 years. Emergency OPD services are provided 24 × 7 × 365.",
    features: [
      "Neonatal and paediatric consultations (0–18 years)",
      "Vaccination",
      "Free breastfeeding counselling by trained counsellors",
      "Growth and nutrition counselling",
      "Emergency OPD 24 × 7 × 365",
      "Well-baby check-ups",
    ],
    highlight: {
      title: "Free breastfeeding support",
      text: "Breastfeeding counselling is provided free of cost by our breastfeeding counsellors.",
    },
  },
  {
    slug: "nicu-on-wheels",
    navLabel: "NICU on Wheels (NETS)",
    icon: "ambulance",
    card: {
      title: "NICU on Wheels (NETS)",
      description:
        "Neonatal ambulances with a neonatologist on board 24×7 for safe transfers across Saurashtra and Kutch.",
    },
    hero: {
      title: "NICU on Wheels (NETS)",
      description: "Safe transfer of sick newborns across Saurashtra and Kutch, 24 × 7.",
    },
    seo: {
      title: "NICU on Wheels (NETS) in Rajkot | MAAHI Newborn Care Centre",
      description:
        "NICU on Wheels: neonatal ambulance transfers across Saurashtra & Kutch with a neonatologist on board 24x7. Call +91 78787 85108.",
    },
    schemaName: "NICU on Wheels (NETS)",
    image: { src: "/images/nicu-on-wheels-ambulance.jpg", alt: "NICU on Wheels ambulance" },
    heading: "Neonatal transport with a neonatologist on board",
    lead: "NICU on Wheels is our third neonatal ambulance and is dedicated exclusively to newborn transfers. It is the only neonatal ambulance in the region with a neonatologist available 24 × 7 during transport - expert care from the very first mile.",
    features: [
      "Dedicated neonatal ambulance fleet",
      "Neonatologist on board, 24 × 7",
      "Coverage across Saurashtra and Kutch",
      "Stabilisation at the referring hospital",
      "Direct admission to Level III NICU",
      "One call: +91 78787 85108",
    ],
    highlight: {
      title: "The region's only neonatologist-staffed ambulance",
      text: "Critically ill newborns receive specialist care before they even reach the NICU.",
    },
  },
  {
    slug: "poc-usg",
    navLabel: "Point-of-Care Ultrasound",
    icon: "pulse",
    card: {
      title: "Point-of-Care Ultrasound",
      description:
        "Bedside sonography, neurosonography and echocardiography for real-time decisions.",
    },
    hero: {
      title: "Point-of-Care Ultrasound (POC-USG)",
      description: "POC-USG, neurosonography and echocardiography by our own neonatologists.",
    },
    seo: {
      title: "Point-of-Care Ultrasound in Rajkot | MAAHI Newborn Care Centre",
      description:
        "Bedside point-of-care ultrasound, neurosonography and echocardiography for newborns by trained neonatologists at MAAHI, Rajkot.",
    },
    schemaName: "Point-of-Care Ultrasound (POC-USG)",
    image: { src: "/images/reception-2.jpg", alt: "Point-of-care consultation area" },
    heading: "Real-time bedside imaging for faster decisions",
    lead: "We use an Esaote MyLab 40 HD sonography machine with a dedicated neonatal probe. All our neonatologists are trained in POC-USG, neurosonography and echocardiography, giving real-time information that is hard to assess clinically.",
    features: [
      "Esaote MyLab 40 HD with neonatal probe",
      "Neurosonography",
      "Functional echocardiography",
      "Ultrasound-guided procedures",
      "Earlier detection of complications",
      "No need to move fragile babies",
    ],
    highlight: {
      title: "Safer procedures",
      text: "Real-time sonography helps us perform invasive procedures safely and prevent complications.",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
