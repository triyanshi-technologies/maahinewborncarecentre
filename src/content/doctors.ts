export type Doctor = {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  image: string;
  bio: string;
  tags: string[];
};

const DIRECTOR = "Director & Consultant Neonatologist";

export const doctors: Doctor[] = [
  {
    id: "dr-kunal-ahya",
    name: "Dr. Kunal P. Ahya",
    role: DIRECTOR,
    qualifications: "MD (Paediatrics, University First), CFIN, PGPN (USA), IPPN (Aus)",
    image: "/images/dr-kunal-ahya.jpg",
    bio: "Dr. Kunal Ahya completed his MD at PIMS, Loni, and his fellowship in neonatology at KEM Hospital and Bharati Hospital, Pune. With an excellent academic record, he stood first in his MD examinations and second in the Fellowship of Neonatology across India. He has cared for low birth weight babies as small as 500 grams.",
    tags: [
      "Extreme prematurity",
      "Neonatal ventilation",
      "Fellowship: KEM & Bharati, Pune",
      "Ranked 2nd nationally in fellowship",
    ],
  },
  {
    id: "dr-alpesh-desai",
    name: "Dr. Alpesh R. Desai",
    role: DIRECTOR,
    qualifications: "MB, DCH (Paediatrics), CFIN, PGPN (USA), IPPN (Aus)",
    image: "/images/dr-alpesh-desai.jpg",
    bio: "Dr. Alpesh Desai completed his MBBS at B J Medical College, Ahmedabad, his DCH at N H L Medical College, Ahmedabad, and his fellowship in neonatology at Bharati Vidyapeeth, Pune, and MOSC Medical College, Kochi. He is trained in whole-body cooling, high-frequency ventilation, TPN, CPAP, conventional ventilation, HHFNC, functional echocardiography and neurosonography.",
    tags: ["Whole-body cooling", "High-frequency ventilation", "Functional echo", "Neurosonogram"],
  },
  {
    id: "dr-jatin-unadkat",
    name: "Dr. Jatin K. Unadkat",
    role: DIRECTOR,
    qualifications: "MD (Paediatrics), CFIN, PGPN (USA)",
    image: "/images/dr-jatin-unadkat.jpg",
    bio: "Dr. Jatin Unadkat completed his MBBS at B J Medical College, Ahmedabad, his MD at N H L Medical College, Ahmedabad, and his fellowship in neonatology at Arpan Newborn Care Centre, Ahmedabad. Passionate about the care of tiny babies, he is trained in all essential procedures for sick newborns, with a special interest in neonatal ventilation.",
    tags: ["Neonatal ventilation", "Sick newborn procedures", "Tiny babies"],
  },
  {
    id: "dr-satish-sanja",
    name: "Dr. Satish P. Sanja",
    role: DIRECTOR,
    qualifications: "MD, DCH (Paediatrics), CFIN, PGPN (USA)",
    image: "/images/dr-satish-sanja.jpg",
    bio: "Dr. Satish Sanja graduated from the Russian Federation, completed his DCH at Bharati Vidyapeeth Deemed University, Pune, and trained in neonatology through fellowships at MOSC, Kochi, and Bharati Vidyapeeth, Pune. Practising neonatology since 2012, he is trained in screening neurosonography and functional echo, is an NSSK trainer and has treated neonates as small as 500 grams.",
    tags: ["Neurosonogram", "Functional echo", "NSSK trainer", "Practising since 2012"],
  },
  {
    id: "dr-jatin-rajyaguru",
    name: "Dr. Jatin Rajyaguru",
    role: DIRECTOR,
    qualifications: "MB, DCH (Paediatrics), CFIN, PGPN (USA), IPPN (Aus)",
    image: "/images/dr-alpesh-desai.jpg",
    bio: "Dr. Jatin Rajyaguru completed his MBBS at B J Medical College, Ahmedabad, his DCH at N H L Medical College, Ahmedabad, and his fellowship in neonatology at Bharati Vidyapeeth, Pune, and MOSC Medical College, Kochi. He is trained in whole-body cooling, high-frequency ventilation, TPN, CPAP, conventional ventilation, HHFNC, functional echocardiography and neurosonography.",
    tags: ["Whole-body cooling", "High-frequency ventilation", "Functional echo", "Neurosonogram"],
  },
];
