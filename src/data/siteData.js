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
    description: 'Crucial drivetrain component designed for heavy-duty agricultural tractors. Manufactured from case-hardened steel alloys to withstand high torsional stress. Features precision-ground journals with microscopic roundness control and internal/external spline broaching. Rigorously tested for fatigue limits to ensure reliable power transmission under extreme agricultural load profiles.',
    specs: ['Material: Case-Hardened Steel (20MnCr5 / 8620)', 'Journal Tolerance: ±0.005 mm (5 microns)', 'Surface Hardness: 58-62 HRC (Case depth 0.8-1.2mm)', 'Process: Spline Broaching + Cylindrical Grinding + Heat Treatment', 'Application: Tractor Drivetrain / Rear Axle Differential Units'],
    image: '/images/differential_cross.png',
  },
  {
    id: 2,
    name: 'Hydraulic Pump Piston',
    category: 'Hydraulic',
    description: 'Engineered for high-pressure fluid power systems. CNC turned and cylindrical-ground to mirror-finish tolerances to eliminate blow-by and minimize volumetric losses. Specially treated for surface hardness to reduce friction coefficient and sliding wear inside the cylinder block chambers. Guaranteed sealing consistency and longevity across continuous duty cycles.',
    specs: ['Material: EN 24 / EN 31 High-Carbon Steel Alloy', 'Surface Roughness: Ra 0.2 microns max', 'Dimensional Tolerance: ±0.003 mm (3 microns)', 'Surface Treatment: Hard Chrome Plating / Induction Hardening', 'Application: Swashplate Radial/Axial Piston Pumps & Motors'],
    image: '/images/hydraulic_piston.png',
  },
  {
    id: 3,
    name: 'Hydraulic Pump Camshaft',
    category: 'Hydraulic',
    description: 'Precision camshaft featuring dual-ground lobe profiles designed for exact hydraulic piston stroke timing. Ground using advanced profile grinders to match custom lift and acceleration geometries. High fatigue resistance prevents lobe degradation under heavy continuous cyclic pressure loading. Individually inspected on CNC metrology coordinate measuring stations.',
    specs: ['Material: EN 353 Alloy Steel (Carburizing Grade)', 'Lobe Profile Accuracy: Within 3 microns profile error', 'Heat Treatment: Gas Carburizing + Case Hardening (Depth 1.0mm)', 'Key Processes: CNC Turning + Profile Lobe Grinding + Magnetic Particle Inspection', 'Application: Hydraulic Valve Actuation & High-Pressure Injection Pumps'],
    image: '/images/hydraulic_piston.png',
  },
  {
    id: 4,
    name: 'Centre Column',
    category: 'Valve Actuator',
    description: 'Main cylinder component of industrial valve actuator units regulating gas and oil flow lines. Designed for high pressure containment and exact axial alignment during torque conversion. Internally honed to mirror smooth standards to support double-acting pneumatic and hydraulic seals without premature degradation. Checked with air-gauging for precise cylindrical geometry.',
    specs: ['Material: ASTM A350 LF2 / ASTM A105 Carbon Steel', 'Internal Honing: H7 Limits (Cylindricity within 5 microns)', 'Pressure Rating: Suitable up to Class 600 systems', 'Testing: Hydrostatic pressure verification + LPI Dye Penetrant testing', 'Application: Heavy Duty Quarter-Turn Valve Actuators (Oil & Gas)'],
    image: '/images/centre_column.png',
  },
  {
    id: 5,
    name: 'Clutch Ring',
    category: 'Valve Actuator',
    description: 'Precision-machined locking ring gear used to engage and disengage rotational torque in valve actuator gearboxes. Manufactured with internal internal spline gears broached in single-pass setups to maintain pitch-circle runout limits. Anti-corrosive phosphated finish provides wear protection and reduces gear-mesh drag during low-frequency manual overrides.',
    specs: ['Material: EN 19 Chrome-Molybdenum Steel', 'Spline Standard: DIN 5480 / ANSI B92.1 compliant', 'Surface Finishing: Manganese Phosphating (Corrosion Inhibition)', 'Quality Audits: Pitch Circle Runout checking + Hardness depth testing', 'Application: Valve Actuator Manual Overrides & Declutchable Gearboxes'],
    image: '/images/clutch_ring.png',
  },
  {
    id: 6,
    name: 'Broaching Parts',
    category: 'Tractor',
    description: 'High-volume internal and external keyways, splines, and double-D slot components for industrial machinery and agricultural implements. Manufactured on vertical broaching machinery using custom-made broach toolings to maintain tooth index spacing. Offers high repeatability and rapid batch turnaround rates for OEM assembly lines.',
    specs: ['Material Range: Mild Steel, Alloy Steel, Stainless Steel (304/316)', 'Profile Precision: Class 7 spline fits', 'Max Broach Length: 1200 mm stroke capability', 'Key Processes: CNC Turning prep + Vertical Broaching + Deburring', 'Application: Gearbox Sleeves, PTO Shaft Adapters, Agricultural Drives'],
    image: '/images/differential_cross.png',
  },
  {
    id: 7,
    name: 'CNC Precision Parts',
    category: 'CNC',
    description: 'Tailored components manufactured to custom CAD blueprint designs. Utilizing multi-axis CNC machining centers to consolidate operations and secure high geometric dimensioning and tolerancing (GD&T) callouts like perpendicularity, concentricity, and flatness. Ideal for complex manifold, casing, and bracket configurations.',
    specs: ['Material: Aluminum 6061-T6, EN 8 Carbon Steel, Stainless Steel, Brass', 'Machining Envelope: Up to 500 x 400 x 300 mm', 'Positional Accuracy: ±0.010 mm (10 microns)', 'Post-Processing: Anodizing, Blackening, Powder Coating as requested', 'Application: Custom Hydraulic Manifolds, Bearing housings, Mounting brackets'],
    image: '/images/cnc_components.png',
  },
  {
    id: 8,
    name: 'Turned & Ground Shafts',
    category: 'CNC',
    description: 'Precision cylindrical shafts engineered to transmit torque or support rotating parts in conveyors, pumps, and motors. Produced on multi-axis turn-mill machinery and finished on centerless/cylindrical grinding wheels. Features precise bearing-journal surfaces and strict straightness control to prevent radial runout during high-rpm operations.',
    specs: ['Material: EN 8D / EN 9 Bright Steel Shafting', 'Straightness Tolerance: 0.1 mm per meter length', 'Diameter Range: 10 mm to 150 mm outer diameter', 'Surface Finish: Ra 0.3 microns max (Superfinished journals)', 'Application: Electric Motor Shafts, Hydraulic cylinder rods, Pump Impeller Rotors'],
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
