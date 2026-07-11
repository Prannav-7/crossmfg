// ─── Site Data — Cross Manufacturing Company (CMC) ────────────────────────────

export const siteConfig = {
  name: 'Cross Manufacturing Company',
  shortName: 'CMC',
  tagline: 'Precision Engineering Since 1989',
  subTagline: 'Trusted OEM partner for tractor, hydraulic & valve actuator components.',
  phone: '+91 98843 91672',
  phoneHref: 'tel:+919884391672',
  email: 'customercare@crossmfg.in',
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=customercare@crossmfg.in&su=OEM%20Machined%20Components%20Enquiry',
  website: 'https://crossmfg.in',
  established: 1989,
  logo: '/images/CrossMfg-Logo-2.png',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'Quality', path: '/quality' },
  { label: 'Contact', path: '/contact' },
];

export const stats = [
  { value: 35, suffix: '+', label: 'Years of Excellence', icon: 'calendar' },
  { value: 2, suffix: '', label: 'Manufacturing Units', icon: 'factory' },
  { value: 500, suffix: '+', label: 'Precision Components', icon: 'settings' },
  { value: 100, suffix: '%', label: 'Quality Assured', icon: 'shield-check' },
];

export const units = [
  {
    id: 'unit-1',
    name: 'Unit I — Senneerkuppam',
    address: 'Senneerkuppam, Poonamallee, Chennai – 600 056',
    description: 'Our primary manufacturing facility equipped with state-of-the-art CNC machining centers, broaching machines, and quality control lab.',
    capabilities: ['CNC Turning', 'Broaching', 'Grinding', 'Quality Inspection'],
    mapUrl: 'https://www.google.com/maps?q=Senneerkuppam,Poonamallee,Chennai',
  },
  {
    id: 'unit-2',
    name: 'Unit II — Thirumazhisai',
    address: 'SIDCO Industrial Estate, Thirumazhisai, Chennai – 600 124',
    description: 'Secondary facility focused on high-volume production of tractor and hydraulic components with advanced precision grinding.',
    capabilities: ['High-Volume CNC', 'Precision Grinding', 'Assembly', 'Final Testing'],
    mapUrl: 'https://www.google.com/maps?q=SIDCO+Industrial+Estate,Thirumazhisai,Chennai',
  },
];

export const products = [
  {
    id: 1,
    name: 'Differential Cross',
    category: 'Tractor',
    description: 'High-precision differential cross components manufactured for major tractor OEMs. Broached and ground to tight tolerances.',
    specs: ['Material: Case-hardened steel', 'Tolerance: ±0.01mm', 'Process: Broaching + Grinding'],
    image: '/images/differential_cross.png',
  },
  {
    id: 2,
    name: 'Hydraulic Pump Piston',
    category: 'Hydraulic',
    description: 'Precision-machined hydraulic pump pistons with superior surface finish for optimal sealing performance.',
    specs: ['Material: EN 24 Steel', 'Surface Finish: Ra 0.4', 'Process: CNC Turning + Grinding'],
    image: '/images/hydraulic_piston.png',
  },
  {
    id: 3,
    name: 'Hydraulic Pump Camshaft',
    category: 'Hydraulic',
    description: 'Camshafts designed for hydraulic pumps, featuring precision ground profiles for consistent fluid displacement.',
    specs: ['Material: EN 353', 'Hardness: 58-62 HRC', 'Process: CNC Machining + Profile Grinding'],
    image: '/images/hydraulic_piston.png',
  },
  {
    id: 4,
    name: 'Centre Column',
    category: 'Valve Actuator',
    description: 'Critical valve actuator centre columns machined to exacting standards for reliable performance in demanding applications.',
    specs: ['Material: Alloy Steel', 'Tolerance: ±0.005mm', 'Process: CNC Turning + Honing'],
    image: '/images/centre_column.png',
  },
  {
    id: 5,
    name: 'Clutch Ring',
    category: 'Valve Actuator',
    description: 'Precision clutch rings for valve actuator assemblies, ensuring smooth engagement and long service life.',
    specs: ['Material: EN 19', 'Surface Treatment: Phosphating', 'Process: Turning + Broaching'],
    image: '/images/clutch_ring.png',
  },
  {
    id: 6,
    name: 'Broaching Parts',
    category: 'Tractor',
    description: 'Various broached components for tractor assemblies, manufactured with tight dimensional control.',
    specs: ['Material: Various grades', 'Process: Internal/External Broaching', 'Batch Size: High Volume'],
    image: '/images/differential_cross.png',
  },
  {
    id: 7,
    name: 'CNC Precision Parts',
    category: 'CNC',
    description: 'Custom CNC-machined precision components for diverse engineering applications across industries.',
    specs: ['Material: As per spec', 'Tolerance: ±0.01mm', 'Process: Multi-axis CNC Machining'],
    image: '/images/cnc_components.png',
  },
  {
    id: 8,
    name: 'Turned & Ground Shafts',
    category: 'CNC',
    description: 'High-precision turned and ground shafts for automobile and general engineering applications.',
    specs: ['Diameter Range: 10-150mm', 'Length: Up to 500mm', 'Process: CNC Turning + Cylindrical Grinding'],
    image: '/images/cnc_components.png',
  },
];

export const productCategories = ['All', 'Tractor', 'Hydraulic', 'Valve Actuator', 'CNC'];

export const whyChooseUs = [
  {
    icon: 'precision',
    title: 'Precision Engineering',
    description: 'Over 35 years of expertise in manufacturing tight-tolerance components with advanced CNC machining.',
  },
  {
    icon: 'oem',
    title: 'OEM Trusted Partner',
    description: 'Trusted by leading OEMs including TAFE (Tractors and Farm Equipment Ltd) for critical drivetrain components.',
  },
  {
    icon: 'kaizen',
    title: 'KAIZEN Award Winner',
    description: 'Recognized with the Best KAIZEN Award by TAFE in November 2016 for continuous improvement excellence.',
  },
  {
    icon: 'quality',
    title: 'Dedicated Quality Lab',
    description: 'In-house quality control department with CMM and inline inspection for 100% dimensional verification.',
  },
  {
    icon: 'capacity',
    title: 'Dual Facility Capacity',
    description: 'Two fully-equipped manufacturing units in Chennai providing high-volume production capability.',
  },
  {
    icon: 'expertise',
    title: 'Expert Leadership',
    description: 'Led by Mr. T. Krishnamoorthy, a mechanical engineer with decades of precision manufacturing experience.',
  },
];

export const machinery = [
  { name: 'CNC Turning Centers', count: '12+', icon: '⚙️' },
  { name: 'CNC Machining Centers', count: '6+', icon: '🔩' },
  { name: 'Broaching Machines', count: '4+', icon: '🛠️' },
  { name: 'Cylindrical Grinders', count: '8+', icon: '⚡' },
  { name: 'CMM (Coordinate Measuring)', count: '2', icon: '📐' },
  { name: 'Surface Grinders', count: '4+', icon: '🔧' },
];

export const qualityProcess = [
  { step: 1, title: 'Raw Material Inspection', description: 'All incoming materials undergo hardness testing and chemical composition verification.' },
  { step: 2, title: 'In-Process Inspection', description: 'Inline dimensional checks at every machining stage to catch deviations early.' },
  { step: 3, title: 'CMM Measurement', description: 'Coordinate Measuring Machine verification for critical dimensions and GD&T requirements.' },
  { step: 4, title: 'Final Inspection', description: '100% dimensional audit before dispatch, with full traceability documentation.' },
  { step: 5, title: 'Dispatch Clearance', description: 'Approved parts packed and dispatched with inspection reports and material certificates.' },
];

export const awards = [
  {
    title: 'Best KAIZEN Award',
    issuer: 'TAFE — Tractors and Farm Equipment Limited',
    year: '2016',
    month: 'November',
    description: 'Awarded for outstanding commitment to continuous improvement, waste reduction, and manufacturing excellence.',
  },
];
