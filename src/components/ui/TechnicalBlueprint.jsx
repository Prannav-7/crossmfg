import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, Info, Layers, RefreshCw } from 'lucide-react';

export default function TechnicalBlueprint({ productId = 1, defaultMode = 'blueprint' }) {
  const [mode, setMode] = useState(defaultMode); // 'sketch' (pencil on parchment) or 'blueprint' (cyan on navy)
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Specifications and hotspot details based on product
  const blueprintsData = {
    1: {
      name: "Differential Cross",
      dwgNumber: "CMC-DWG-001-A",
      material: "20MnCr5 Case Hardened Alloy",
      tolerance: "ISO 2768-f (Precision)",
      scale: "1:1",
      hotspots: [
        { id: "h1", x: 150, y: 55, title: "Journal OD Tolerance", desc: "Diameter ground to Ø 25.005 mm with 5-micron limit (+0.005 / +0.000)", spec: "Ø 25.005 +0.005 / +0.000" },
        { id: "h2", x: 150, y: 150, title: "Central Lubrication Chamber", desc: "Internal lubrication oil path with broached keyways to ensure continuous wear reduction.", spec: "Bore Ø 16.00 mm min" },
        { id: "h3", x: 60, y: 150, title: "Surface Roughness", desc: "Micro-ground journal surfaces to reduce oil seal friction and maximize service life.", spec: "Ra 0.20 µm Max" },
        { id: "h4", x: 240, y: 150, title: "Case Hardness Depth", desc: "Gas carburized and induction hardened to 58-62 HRC for high torsional fatigue limits.", spec: "58-62 HRC (Depth 0.8-1.2mm)" }
      ]
    },
    2: {
      name: "Hydraulic Pump Piston",
      dwgNumber: "CMC-DWG-002-B",
      material: "EN 31 High-Carbon Steel",
      tolerance: "ISO 2768-m (Medium)",
      scale: "2:1",
      hotspots: [
        { id: "h1", x: 230, y: 150, title: "Piston Dome Concentricity", desc: "Superfinished cylindrical diameter with 3-micron runout tolerance to prevent blow-by.", spec: "Concentricity within 0.003 mm" },
        { id: "h2", x: 130, y: 120, title: "Sealing Ring Grooves", desc: "Precision grooves machined to secure rubber and PTFE hydraulic cup seals under high pressure.", spec: "Width 3.20 ± 0.05 mm" },
        { id: "h3", x: 70, y: 150, title: "Mirror Finish Surface", desc: "Polished to mirror-like specs, minimizing friction coefficient inside the cylinder block.", spec: "Ra 0.15 µm Superfinish" }
      ]
    },
    3: {
      name: "Hydraulic Pump Camshaft",
      dwgNumber: "CMC-DWG-003-A",
      material: "EN 353 Carburizing Steel",
      tolerance: "ISO 2768-f",
      scale: "1.5:1",
      hotspots: [
        { id: "h1", x: 100, y: 150, title: "Lobe Profile Geometry", desc: "CNC profile ground lobes to maintain exact lift timing and displacement consistency.", spec: "Lobe profile error < 3 µm" },
        { id: "h2", x: 240, y: 150, title: "Drive Keyway Slot", desc: "Broached drive slot for shaft coupling keyway, aligning mechanical torque transfer.", spec: "Keyway 5.00 +0.02 / +0.00" },
        { id: "h3", x: 170, y: 150, title: "Bearing Journal Grounding", desc: "Cylindrical ground journal surfaces for precision fit into low-friction needle bearings.", spec: "Ø 20.002 ± 0.004 mm" }
      ]
    },
    4: {
      name: "Centre Column",
      dwgNumber: "CMC-DWG-004-C",
      material: "ASTM A350 LF2 Low-Temp Steel",
      tolerance: "ASME B16.34 Specs",
      scale: "1:2",
      hotspots: [
        { id: "h1", x: 150, y: 100, title: "Internal Hone Roundness", desc: "Honed cylinder wall ensuring perfect sealing contact for valve actuator piston rings.", spec: "Hone limits H7 (Cylindricity 5µm)" },
        { id: "h2", x: 150, y: 220, title: "Mounting Flange Alignment", desc: "Flange bolt circle drilled with high angular positioning accuracy to match B2B pipelines.", spec: "8x Holes Equispaced" },
        { id: "h3", x: 60, y: 150, title: "Hydrostatic Rating", desc: "Pressure tested for oil & gas valve actuation lines supporting severe service.", spec: "Class 600 System Rating" }
      ]
    },
    5: {
      name: "Clutch Ring",
      dwgNumber: "CMC-DWG-005-B",
      material: "EN 19 Chrome-Moly Alloy",
      tolerance: "DIN 5480 spline fit",
      scale: "1:1",
      hotspots: [
        { id: "h1", x: 150, y: 90, title: "Internal Spline Broaching", desc: "Single-pass broached gears ensuring perfect sliding fit and zero gear runout.", spec: "Spline pitch circle error < 8µm" },
        { id: "h2", x: 90, y: 150, title: "Phosphate Coating Finish", desc: "Manganese phosphate coating to prevent gear teeth galling during override manual engagement.", spec: "MIL-DTL-16232 compliant" }
      ]
    },
    6: {
      name: "Broaching Parts",
      dwgNumber: "CMC-DWG-006-A",
      material: "EN 8D Medium Carbon Steel",
      tolerance: "ISO 2768-m",
      scale: "1:1",
      hotspots: [
        { id: "h1", x: 150, y: 150, title: "Internal Tooth Spline", desc: "Spline gear broached teeth for high-torque PTO agricultural drives.", spec: "Class 7 Spline Fit" }
      ]
    },
    7: {
      name: "CNC Precision Parts",
      dwgNumber: "CMC-DWG-007-D",
      material: "Al6061-T6 / EN 8 Casing",
      tolerance: "GD&T Positional callouts",
      scale: "1:1.5",
      hotspots: [
        { id: "h1", x: 150, y: 110, title: "Manifold Concentric Bore", desc: "Multi-axis machined valve port with precise perpendicularity to block base.", spec: "Perpendicularity 0.010 mm" },
        { id: "h2", x: 220, y: 150, title: "Flatness Tolerance", desc: "Milled block face ensuring metal-to-metal contact with sealing gaskets.", spec: "Flatness within 0.02 mm" }
      ]
    },
    8: {
      name: "Turned & Ground Shafts",
      dwgNumber: "CMC-DWG-008-B",
      material: "EN 8D Bright Steel",
      tolerance: "ISO h6 limits",
      scale: "1:4",
      hotspots: [
        { id: "h1", x: 150, y: 140, title: "Bearing Journal Diameter", desc: "Cylindrical ground seat to support speed ball/roller bearings.", spec: "Diameter ±0.005 mm" },
        { id: "h2", x: 60, y: 150, title: "Straightness Profile", desc: "Straightness controlled along full shaft span to eliminate vibration at high rpm.", spec: "Max runout 0.1mm/meter" }
      ]
    }
  };

  const productDwg = blueprintsData[productId] || blueprintsData[1];

  // Theme-specific styles
  const themeStyles = {
    sketch: {
      panelBg: "bg-brand-parchment-light border-brand-charcoal/20",
      svgBg: "#FCFAF2",
      gridColor: "rgba(26, 28, 30, 0.05)",
      axisColor: "rgba(26, 28, 30, 0.15)",
      drawingLines: "#2A2D30",
      constructionLines: "rgba(163, 129, 82, 0.25)",
      dimensionLines: "#A38152", // Brass color for annotations
      textHeading: "text-brand-charcoal",
      textMuted: "text-brand-charcoal/60",
      dwgTextColor: "#1A1C1E"
    },
    blueprint: {
      panelBg: "bg-brand-blueprint border-brand-blueprint-grid",
      svgBg: "#070F24",
      gridColor: "rgba(0, 168, 204, 0.07)",
      axisColor: "rgba(0, 168, 204, 0.2)",
      drawingLines: "#E0F2FE", // Bright white/blue
      constructionLines: "rgba(14, 165, 233, 0.2)",
      dimensionLines: "#38BDF8", // Cyan
      textHeading: "text-white",
      textMuted: "text-slate-400",
      dwgTextColor: "#00F0FF" // Cyber cyan
    }
  };

  const currentTheme = themeStyles[mode];

  // Render SVG outlines based on productId
  const renderSVGBlueprint = () => {
    switch (productId) {
      case 2: // Hydraulic Pump Piston
        return (
          <>
            {/* Centerline */}
            <line x1="30" y1="150" x2="270" y2="150" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            <line x1="150" y1="50" x2="150" y2="250" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            
            {/* Piston Outer Body */}
            <rect x="60" y="90" width="180" height="120" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" className="animate-draw" />
            
            {/* Piston head details (dome bevels) */}
            <line x1="240" y1="90" x2="250" y2="110" stroke={currentTheme.drawingLines} strokeWidth="1.5" />
            <line x1="250" y1="110" x2="250" y2="190" stroke={currentTheme.drawingLines} strokeWidth="1.5" />
            <line x1="240" y1="210" x2="250" y2="190" stroke={currentTheme.drawingLines} strokeWidth="1.5" />

            {/* Grooves */}
            <rect x="115" y="85" width="10" height="130" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />
            <rect x="135" y="85" width="10" height="130" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />
            
            {/* Inner chamber lines (dashed) */}
            <rect x="60" y="115" width="110" height="70" stroke={currentTheme.drawingLines} strokeWidth="1" strokeDasharray="3 3" fill="none" />

            {/* Dimension Lines */}
            {/* Overall length */}
            <line x1="60" y1="65" x2="250" y2="65" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="60,65 66,62 66,68" fill={currentTheme.dimensionLines} />
            <polygon points="250,65 244,62 244,68" fill={currentTheme.dimensionLines} />
            <text x="155" y="60" fill={currentTheme.dimensionLines} fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">190.00 mm (OAL)</text>
            
            {/* Extension lines */}
            <line x1="60" y1="85" x2="60" y2="60" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="250" y1="105" x2="250" y2="60" stroke={currentTheme.constructionLines} strokeWidth="0.75" />

            {/* Diameter annotation */}
            <line x1="265" y1="90" x2="265" y2="210" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="265,90 262,96 268,96" fill={currentTheme.dimensionLines} />
            <polygon points="265,210 262,204 268,204" fill={currentTheme.dimensionLines} />
            <text x="275" y="153" fill={currentTheme.dimensionLines} fontSize="8" fontFamily="JetBrains Mono" transform="rotate(90, 275, 153)" textAnchor="middle">Ø 60.002 ±0.003 mm</text>
            
            {/* Extension lines for diameter */}
            <line x1="240" y1="90" x2="270" y2="90" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="240" y1="210" x2="270" y2="210" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
          </>
        );
      case 3: // Hydraulic Pump Camshaft
        return (
          <>
            {/* Centerline */}
            <line x1="20" y1="150" x2="280" y2="150" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            
            {/* Shaft Base Cylinder */}
            <rect x="40" y="110" width="220" height="80" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" className="animate-draw" />
            
            {/* Cam Lobes (Eccentric circles / ovals) */}
            <path d="M 90,110 C 90,60 130,60 130,110 L 130,190 C 130,210 90,210 90,190 Z" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            <path d="M 150,110 C 150,80 190,80 190,110 L 190,190 C 190,210 150,210 150,190 Z" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />

            {/* Keyway drive slot */}
            <rect x="230" y="138" width="20" height="24" stroke={currentTheme.drawingLines} strokeWidth="1.2" fill="none" />
            
            {/* Dimension Lines */}
            <line x1="90" y1="50" x2="130" y2="50" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="90,50 96,47 96,53" fill={currentTheme.dimensionLines} />
            <polygon points="130,50 124,47 124,53" fill={currentTheme.dimensionLines} />
            <text x="110" y="44" fill={currentTheme.dimensionLines} fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">LIFT 8.50 mm</text>
            <line x1="90" y1="110" x2="90" y2="45" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="130" y1="110" x2="130" y2="45" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
          </>
        );
      case 4: // Centre Column
        return (
          <>
            {/* Centerline */}
            <line x1="30" y1="150" x2="270" y2="150" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            <line x1="150" y1="40" x2="150" y2="260" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            
            {/* Outer Column Body */}
            <rect x="80" y="70" width="140" height="160" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" className="animate-draw" />
            
            {/* Honed Chamber Inner Bore (dashed) */}
            <rect x="95" y="70" width="110" height="160" stroke={currentTheme.drawingLines} strokeWidth="1" strokeDasharray="4 4" fill="none" />

            {/* Top and Bottom Flange Details */}
            <line x1="70" y1="90" x2="230" y2="90" stroke={currentTheme.drawingLines} strokeWidth="1.2" />
            <line x1="70" y1="210" x2="230" y2="210" stroke={currentTheme.drawingLines} strokeWidth="1.2" />

            {/* Mount Holes */}
            <circle cx="90" cy="90" r="4" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />
            <circle cx="210" cy="90" r="4" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />
            <circle cx="90" cy="210" r="4" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />
            <circle cx="210" cy="210" r="4" stroke={currentTheme.drawingLines} strokeWidth="1" fill="none" />

            {/* Tolerance callout */}
            <line x1="95" y1="50" x2="205" y2="50" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="95,50 101,47 101,53" fill={currentTheme.dimensionLines} />
            <polygon points="205,50 199,47 199,53" fill={currentTheme.dimensionLines} />
            <text x="150" y="44" fill={currentTheme.dimensionLines} fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">INT HONE BORE Ø 110.00 mm H7</text>
            <line x1="95" y1="70" x2="95" y2="45" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="205" y1="70" x2="205" y2="45" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
          </>
        );
      case 1: // Differential Cross (Default)
      default:
        return (
          <>
            {/* Compass Coordinates & Axes */}
            <line x1="30" y1="150" x2="270" y2="150" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            <line x1="150" y1="30" x2="150" y2="270" stroke={currentTheme.axisColor} strokeWidth="1" strokeDasharray="8 4 2 4" />
            
            {/* Precision Drafting circles */}
            <circle cx="150" cy="150" r="28" stroke={currentTheme.constructionLines} strokeWidth="0.75" fill="none" />
            <circle cx="150" cy="150" r="50" stroke={currentTheme.constructionLines} strokeWidth="0.75" strokeDasharray="2 2" fill="none" />
            
            {/* Horizontal Journals */}
            <path d="M 50,130 L 100,130 L 100,110 L 130,110 L 130,130" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            <path d="M 50,170 L 100,170 L 100,190 L 130,190 L 130,170" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            
            <path d="M 250,130 L 200,130 L 200,110 L 170,110 L 170,130" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            <path d="M 250,170 L 200,170 L 200,190 L 170,190 L 170,170" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />

            {/* Vertical Journals */}
            <path d="M 130,50 L 130,100 L 110,100 L 110,130" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            <path d="M 170,50 L 170,100 L 190,100 L 190,130" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            
            <path d="M 130,250 L 130,200 L 110,200 L 110,170" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />
            <path d="M 170,250 L 170,200 L 190,200 L 190,170" stroke={currentTheme.drawingLines} strokeWidth="1.5" fill="none" />

            {/* Journal Caps & Chamfers */}
            <line x1="50" y1="130" x2="50" y2="170" stroke={currentTheme.drawingLines} strokeWidth="1.5" />
            <line x1="250" y1="130" x2="250" y2="170" stroke={currentTheme.drawingLines} strokeWidth="1.5" />
            <line x1="130" y1="50" x2="170" y2="50" stroke={currentTheme.drawingLines} strokeWidth="1.5" />
            <line x1="130" y1="250" x2="170" y2="250" stroke={currentTheme.drawingLines} strokeWidth="1.5" />

            {/* Concentric Center Hub */}
            <circle cx="150" cy="150" r="16" stroke={currentTheme.drawingLines} strokeWidth="1.2" fill="none" />
            <circle cx="150" cy="150" r="22" stroke={currentTheme.drawingLines} strokeWidth="1.0" strokeDasharray="3 2" fill="none" />

            {/* Hatching patterns on cross shoulders */}
            <line x1="100" y1="115" x2="108" y2="123" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="105" y1="110" x2="115" y2="120" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="112" y1="110" x2="122" y2="120" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            
            <line x1="180" y1="115" x2="188" y2="123" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="185" y1="110" x2="195" y2="120" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            
            {/* Tolerances Callout Lines */}
            <line x1="50" y1="40" x2="50" y2="120" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="250" y1="40" x2="250" y2="120" stroke={currentTheme.constructionLines} strokeWidth="0.75" />
            <line x1="50" y1="45" x2="250" y2="45" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="50,45 56,42 56,48" fill={currentTheme.dimensionLines} />
            <polygon points="250,45 244,42 244,48" fill={currentTheme.dimensionLines} />
            <text x="150" y="38" fill={currentTheme.dimensionLines} fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">WIDTH 200.00 ± 0.05 mm</text>

            <line x1="130" y1="35" x2="170" y2="35" stroke={currentTheme.dimensionLines} strokeWidth="1" />
            <polygon points="130,35 136,32 136,38" fill={currentTheme.dimensionLines} />
            <polygon points="170,35 164,32 164,38" fill={currentTheme.dimensionLines} />
            <text x="150" y="29" fill={currentTheme.dimensionLines} fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">Ø 40.00</text>
          </>
        );
    }
  };

  return (
    <div className={`card-premium ${currentTheme.panelBg} flex flex-col p-4 md:p-6 transition-colors duration-500 overflow-hidden`}>
      
      {/* Drawing Toolbar controls */}
      <div className="flex justify-between items-center pb-4 border-b border-brand-charcoal/15 mb-4">
        <div className="flex items-center gap-2">
          <Layers className={mode === 'blueprint' ? 'text-sky-400' : 'text-brand-charcoal'} size={15} />
          <span className={`text-[10px] font-technical tracking-wider uppercase ${currentTheme.textHeading}`}>
            {productDwg.dwgNumber}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('sketch')}
            className={`px-3 py-1 font-technical text-[9px] uppercase tracking-wider transition-colors border ${
              mode === 'sketch' 
                ? 'bg-brand-charcoal text-brand-parchment border-brand-charcoal' 
                : 'text-brand-charcoal/70 border-brand-charcoal/20 hover:border-brand-charcoal'
            }`}
          >
            Pencil Draft
          </button>
          <button
            onClick={() => setMode('blueprint')}
            className={`px-3 py-1 font-technical text-[9px] uppercase tracking-wider transition-colors border ${
              mode === 'blueprint' 
                ? 'bg-sky-500 text-brand-blueprint border-sky-500' 
                : 'text-slate-400 border-slate-700 hover:border-slate-500'
            }`}
          >
            Blueprint
          </button>
        </div>
      </div>

      {/* SVG Canvas and Grid Sheet */}
      <div className="relative aspect-square max-w-[480px] mx-auto w-full border border-brand-charcoal/20 rounded-sm overflow-hidden flex items-center justify-center"
           style={{ backgroundColor: currentTheme.svgBg }}>
        
        {/* Draw grid lines */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `radial-gradient(${currentTheme.gridColor} 1px, transparent 1px)`,
               backgroundSize: '16px 16px'
             }} />

        {/* Blueprint coordinate numbers along top and side */}
        <div className="absolute top-1 left-4 right-4 flex justify-between pointer-events-none text-[7px] font-technical" style={{ color: currentTheme.dwgTextColor, opacity: 0.35 }}>
          <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span>
        </div>
        <div className="absolute left-1 top-4 bottom-4 flex flex-col justify-between pointer-events-none text-[7px] font-technical" style={{ color: currentTheme.dwgTextColor, opacity: 0.35 }}>
          <span>1</span><span>2</span><span>3</span><span>4</span>
        </div>

        {/* Main Vector Drawing */}
        <svg viewBox="0 0 300 300" className="w-full h-full p-6 select-none relative z-10">
          {renderSVGBlueprint()}

          {/* Interactive Hotspots */}
          {productDwg.hotspots.map((spot) => (
            <g key={spot.id} 
               className="cursor-pointer"
               onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
               onMouseEnter={() => setActiveHotspot(spot.id)}
               onMouseLeave={() => setActiveHotspot(null)}>
              
              {/* Pulsing glow ring */}
              <circle cx={spot.x} cy={spot.y} r="12" fill={mode === 'blueprint' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(197, 168, 128, 0.25)'} className="animate-ping" style={{ animationDuration: '3s' }} />
              
              {/* Outer boundary ring */}
              <circle cx={spot.x} cy={spot.y} r="6" stroke={mode === 'blueprint' ? '#38BDF8' : '#C5A880'} strokeWidth="1.5" fill={currentTheme.svgBg} />
              
              {/* Center point */}
              <circle cx={spot.x} cy={spot.y} r="2.5" fill={mode === 'blueprint' ? '#00FFFF' : '#1A1C1E'} />
            </g>
          ))}
        </svg>

        {/* Floating details overlay on hover */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className={`absolute bottom-4 left-4 right-4 z-20 p-3.5 border ${
                mode === 'blueprint' 
                  ? 'bg-brand-blueprint/95 border-sky-950 text-white shadow-[0_15px_30px_rgba(0,0,0,0.5)]' 
                  : 'bg-brand-parchment-light/95 border-brand-charcoal/20 text-brand-charcoal shadow-[0_15px_30px_rgba(0,0,0,0.08)]'
              } text-[10px] backdrop-blur-sm`}
            >
              <div className="flex items-center gap-1.5 font-technical mb-1 text-[9px] uppercase tracking-wider text-brand-brass font-bold">
                <Info size={11} /> {productDwg.hotspots.find(h => h.id === activeHotspot)?.title}
              </div>
              <p className="font-body text-xs font-light leading-relaxed mb-1.5 opacity-90">
                {productDwg.hotspots.find(h => h.id === activeHotspot)?.desc}
              </p>
              <div className="font-technical font-bold text-[9px] tracking-wide text-right" style={{ color: currentTheme.dwgTextColor }}>
                SPEC: {productDwg.hotspots.find(h => h.id === activeHotspot)?.spec}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Engineering Drawing Block (Standard Title Block) */}
      <div className={`mt-4 pt-3 border-t border-brand-charcoal/15 grid grid-cols-2 md:grid-cols-4 gap-2 text-[8px] font-technical uppercase ${currentTheme.textMuted}`}>
        <div className="border-r border-brand-charcoal/10 pr-2">
          <span>DRWN BY:</span> <span className="block font-bold text-slate-800" style={{ color: currentTheme.dwgTextColor }}>T.K. (FOUNDER)</span>
        </div>
        <div className="border-r border-brand-charcoal/10 pr-2 max-md:border-none">
          <span>CHKD BY:</span> <span className="block font-bold text-slate-800" style={{ color: currentTheme.dwgTextColor }}>QA METROLOGY</span>
        </div>
        <div className="border-r border-brand-charcoal/10 pr-2">
          <span>TOLERANCE:</span> <span className="block font-bold text-slate-800" style={{ color: currentTheme.dwgTextColor }}>{productDwg.tolerance}</span>
        </div>
        <div>
          <span>SCALE:</span> <span className="block font-bold text-slate-800" style={{ color: currentTheme.dwgTextColor }}>{productDwg.scale}</span>
        </div>
      </div>
      <div className={`mt-2 p-2 border border-brand-charcoal/10 text-center font-technical text-[9px] tracking-wider font-bold ${currentTheme.textHeading}`}>
        {productDwg.name} — TECHNICAL ESTIMATION DRAWING SHEET
      </div>
    </div>
  );
}
