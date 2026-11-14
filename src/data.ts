import {
  Building2,
  ClipboardCheck,
  HardHat,
  Home,
  PenTool,
  Warehouse,
} from "lucide-react";

export const COMPANY = {
  name: "Sedgwick Construction",
  legalName: "Sedgwick Construction LLC",
  tagline: "Building Florida's Future Since 1998",
  phone: "(813) 555-0142",
  phoneHref: "tel:+18135550142",
  email: "estimates@sedgwickconstruction.com",
  address: "4820 N Habana Ave, Suite 400",
  city: "Tampa",
  state: "FL",
  zip: "33614",
  hours: "Monday – Friday, 7:00 AM – 5:00 PM",
  emergency: "24/7 emergency service for existing clients",
  license: "FL CGC #1524995",
  founded: 1998,
  site: "https://classyjennie2-debug.github.io/sedgwick/",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: typeof Building2;
  title: string;
  desc: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Office, retail and hospitality builds delivered turnkey — from shell to final finish.",
    points: ["Ground-up builds", "Occupied-space phasing", "LEED delivery"],
  },
  {
    icon: PenTool,
    title: "Design-Build",
    desc: "One team, one contract. We design, engineer and build so your budget stays protected.",
    points: ["Single point of contact", "Fast-track schedules", "Cost modeling"],
  },
  {
    icon: Home,
    title: "Residential & Custom Homes",
    desc: "Custom coastal homes and multifamily communities built to hurricane-grade standards.",
    points: ["Custom estates", "Multifamily", "Coastal engineering"],
  },
  {
    icon: Warehouse,
    title: "Industrial & Logistics",
    desc: "Warehouses, distribution centers and light manufacturing facilities statewide.",
    points: ["Tilt-wall & steel", "Dock & rail work", "Cold storage"],
  },
  {
    icon: ClipboardCheck,
    title: "Construction Management",
    desc: "Pre-construction, estimating and on-site management for owners who want transparency.",
    points: ["GMP contracts", "Live cost reporting", "Schedule control"],
  },
  {
    icon: HardHat,
    title: "Renovations & TI",
    desc: "Tenant improvements, historic renovations and structural upgrades with minimal downtime.",
    points: ["Tenant improvements", "Historic restoration", "Facility upgrades"],
  },
];

export const MARQUEE_ITEMS = [
  "Commercial Builds",
  "Design-Build",
  "Tenant Improvements",
  "Concrete",
  "Steel Erection",
  "Pre-Construction",
  "Renovations",
  "Site Work",
];

export type Project = {
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  desc: string;
  scope: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Bayside Commerce Center",
    location: "Tampa, FL",
    category: "Commercial",
    year: "2024",
    image: "/img/project-1.jpg",
    desc: "A 96,000 sq ft office and retail complex on the Hillsborough River waterfront.",
    scope: "Design-Build · 96,000 SF",
  },
  {
    title: "Coral Ridge Residences",
    location: "Naples, FL",
    category: "Residential",
    year: "2023",
    image: "/img/project-2.jpg",
    desc: "42-unit luxury apartment community with elevated, hurricane-rated construction.",
    scope: "Ground-Up · 42 Units",
  },
  {
    title: "SunCoast Logistics Hub",
    location: "Lakeland, FL",
    category: "Industrial",
    year: "2024",
    image: "/img/project-3.jpg",
    desc: "210,000 sq ft distribution facility with 46 dock doors and rail spur infrastructure.",
    scope: "Site Work → Turnkey · 210,000 SF",
  },
  {
    title: "Magnolia Medical Plaza",
    location: "Orlando, FL",
    category: "Healthcare",
    year: "2023",
    image: "/img/project-6.jpg",
    desc: "Outpatient surgical center and imaging suite built to strict healthcare tolerances.",
    scope: "CM At-Risk · 68,000 SF",
  },
  {
    title: "The Overlook Collection",
    location: "St. Petersburg, FL",
    category: "Residential",
    year: "2025",
    image: "/img/project-4.jpg",
    desc: "Sixteen custom waterfront homes framed and finished to Florida coastal code.",
    scope: "Custom Homes · 16 Estates",
  },
  {
    title: "Harborline Mixed-Use Tower",
    location: "Miami, FL",
    category: "Commercial",
    year: "2025",
    image: "/img/project-5.jpg",
    desc: "18-story mixed-use tower combining ground-floor retail with 120 residential units.",
    scope: "Pre-Con + Build · 18 Floors",
  },
];

export const PROJECT_FILTERS = ["All", "Commercial", "Residential", "Industrial", "Healthcare"];

export const STATS = [
  { value: 27, suffix: "+", label: "Years Building Florida" },
  { value: 480, suffix: "+", label: "Projects Delivered" },
  { value: 1.2, suffix: "M", label: "Sq Ft Constructed", decimals: 1 },
  { value: 0.72, suffix: "", label: "EMR Safety Record", decimals: 2 },
];

export const ADVANTAGES = [
  "OSHA 30-certified crews on every site",
  "In-house estimating & BIM modeling",
  "Florida-licensed & fully bonded",
  "3-year workmanship warranty",
];

export const PROCESS = [
  {
    step: "01",
    title: "Consult & Plan",
    desc: "We listen first. Site evaluations, feasibility studies and a budget range you can trust before a single dollar is committed.",
  },
  {
    step: "02",
    title: "Design & Pre-Con",
    desc: "Our estimators and BIM team lock in drawings, value-engineer costs and publish a schedule you can hold us to.",
  },
  {
    step: "03",
    title: "Build & Manage",
    desc: "Dedicated project management, weekly progress reporting and a superintendent on site from mobilization to closeout.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    desc: "Punch-list discipline, as-builts, warranties and a 3-year workmanship guarantee on everything we build.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sedgwick took our 96,000 square foot headquarters from dirt to ribbon-cutting two weeks early. Their pre-construction reporting kept our board informed every single week.",
    name: "Marcus Delaney",
    role: "Director of Real Estate",
    company: "Bayside Development Group",
  },
  {
    quote:
      "After two hurricane seasons, our new facility has zero water intrusion and zero downtime. The engineering alone was worth the call.",
    name: "Priya Raman",
    role: "VP of Operations",
    company: "SunCoast Logistics",
  },
  {
    quote:
      "We needed a surgical build inside a fully occupied medical campus. Sedgwick phased the work so patient care never stopped — and finished under budget.",
    name: "Dr. Alan Whitfield",
    role: "Chief Medical Officer",
    company: "Magnolia Health Partners",
  },
];

export const FAQS = [
  {
    q: "What areas of Florida do you serve?",
    a: "We are headquartered in Tampa and build statewide — with active projects in Miami, Orlando, Jacksonville, Naples, St. Petersburg and Lakeland.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Sedgwick Construction holds Florida Certified General Contractor license #CGC1524995 and carries full general liability and workers' compensation coverage. COIs are provided with every proposal.",
  },
  {
    q: "What size projects do you take on?",
    a: "Our sweet spot is $2M–$80M, but we gladly review small renovations and tenant improvements for long-term clients.",
  },
  {
    q: "How do you price work?",
    a: "Depending on scope, we work under lump-sum, GMP or cost-plus contracts. Every proposal is backed by a detailed, line-item estimate you can audit.",
  },
  {
    q: "Do you build to hurricane standards?",
    a: "Every structure we build meets or exceeds the Florida Building Code's high-velocity hurricane zone requirements, with impact-rated glazing and reinforced concrete systems as standard.",
  },
];

export const SERVICE_AREAS = [
  "Tampa",
  "Miami",
  "Orlando",
  "Jacksonville",
  "St. Petersburg",
  "Naples",
  "Lakeland",
  "Sarasota",
];