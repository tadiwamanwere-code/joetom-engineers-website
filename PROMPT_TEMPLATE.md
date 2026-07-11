# Premium Minimalist Construction & Architectural Website Prompt Template

This prompt template is optimized for generating high-end, premium, minimalist service/agency websites (like architectural firms, custom home builders, luxury furniture makers, or high-end contractors). It emphasizes layout variation, spacious negative space, a restricted industrial color palette, elegant typography pairings, and micro-interactive custom components (such as Before/After image comparison sliders, timeline step navigators, and vector widgets).

---

## 1. Visual Identity & Design System Prompts

Use this prompt block to establish the initial CSS theme, Google Web Fonts, and typography rules.

```text
Initialize a modern styling theme for a premium, high-end construction contractor brand:
1. Colors: Base background of clean Bone/Ivory white (#FAF9F6), dark accent background of rich Charcoal black (#0B0C0E), and an operational highlight color of Safety Orange (#EA580C) used sparingly for CTAs, indicators, and hover states.
2. Typography Pairings: 
   - Display/Headings: Import "Space Grotesk" from Google Fonts for bold, technical, modern architectural headlines. Set tracking to tight.
   - Body Text: Import "Inter" for neutral, highly legible sans-serif copy.
   - Accents/System Labels: Import "JetBrains Mono" for uppercase labels, coordinates, years, and data metrics. Set tracking to wide.
3. Scrollbar & Interactions: Minimal scrollbars styled in Charcoal and Orange. Set global scroll behavior to smooth.
```

---

## 2. Midjourney / Gemini AI Image Generation Prompts

These exact prompt formulas were used to generate the high-resolution, contextually matching images:

### Hero Background Image
```text
A stunning, minimalist wide-angle shot of a high-end modern architectural build during the golden hour. A concrete and steel residential masterpiece with floor-to-ceiling glass windows, concrete textures, and steel beams. Soft, warm dramatic sunlight casting long shadows. No text, photorealistic, luxury architectural photography.
```

### High-End Portfolio / Case Study Completed Image (Residential)
```text
High-end minimalist modern villa facade, concrete gray, natural wood panels, warm ambient light, architectural photography, dusk lighting, 4:3.
```

### Commercial Construction / Facade Image
```text
Modern architectural office building facade, raw concrete, geometric glass patterns, structural steel angles, confident minimal design, sunny day, sharp architectural details, 4:3.
```

### Craftsmanship / Process Editorial Closeups
```text
Editorial closeup of high-end craftsmanship in construction, hands holding drafting tools over blueprints on a rustic wood workbench in a modern workspace, warm side lighting, concrete wall in background, detailed, high-resolution, 4:3.
```

---

## 3. Core Component Prompting Blueprint

To get an AI assistant to build each section with maximum layout discipline and zero placeholder text, use these targeted component prompts:

### Component A: Sticky Transparent-to-Solid Navbar
```text
Create a sticky Navbar component that is transparent on the hero section but fades into a solid Charcoal black background with a subtle border and blur filter on scroll.
- Include a geometric icon logo (e.g., an abstract frame or beam formed with custom borders) and the clean wordmark "HOVE CONSTRUCTION".
- Map navigation items dynamically: HOME, ABOUT, SERVICES, PROJECTS, PROCESS, REVIEWS, CONTACT.
- Add an animated layout underline for the active navigation section using framer-motion.
- Support mobile drawer collapse with polished entry transitions.
```

### Component B: Parallax Hero Section (Top Priority)
```text
Build a full-viewport-height (100vh) hero section:
- Use a single high-resolution architectural image with a parallax translate-y factor on scroll.
- Overlay a custom diagonal transparent-to-black gradient for clear readability.
- Headline: A confident, bold tagline with tight letter-spacing (e.g., "Building Beyond Blueprints").
- Subheadline: One line reinforcing prestige, credentials, and years of service.
- CTAs: Two outline/ghost-button style buttons. Accentuate the primary with a Safety-Orange fill that scales and adds a soft shadow glow on hover.
- Add an animated line scroll indicator at the bottom.
```

### Component C: About & Values Section (Bone Background)
```text
Create an About Section using a Bone-white background for visual contrast:
- Side-by-side grid: Bold 2-line header on the left; clean, lightweight paragraph block on the right explaining the company story, materials commitment, and precision.
- Core Values Grid: Three distinct white cards with tiny orange corner accent tags that scale slightly on hover. Show Operating Principles (Millimeter Precision, Architectural Integrity, Absolute Transparency) with corresponding Lucide icons (ShieldCheck, HardHat, Eye).
- Remove general leadership headshots to keep the layout entirely focused on construction excellence and architectural details.
```

### Component D: Interactive Capabilities Accordion (Charcoal Background)
```text
Implement an interactive Services accordion on a deep Charcoal black background:
- Left Column: Clickable large cards with capability numbers (e.g., "CAPABILITY_01", "CAPABILITY_02") and category names. Clicking a card updates the active panel.
- Right Column: A detailed viewport showing corresponding technical specifications, core engineering methods, and a checklist of deliverables using custom Lucide icons.
- Use framer-motion AnimatePresence to cross-fade detailed text when switching active capabilities to prevent layout jumps.
```

### Component E: Case Studies & Before/After Comparison Slider (Bone Background)
```text
Create an interactive portfolio section:
- Include categorical navigation filters: All, Residential, Commercial, Design-Build, Renovation.
- SPECIAL CORNER PIECE: A fully custom Before/After image comparison slider.
  - Implement mouse-drag and touch-drag listeners on a central vertical slider bar.
  - Crop the 'Before' image using a dynamic CSS clip-path based on the slider coordinate percentage.
  - Provide elegant overlaid before/after dark text badges.
- Display portfolio case studies in a 2-column bento grid. Each card should feature location coordinates, build scales, years, budgets, and a custom list of structural highlights. Clicking a card opens a detailed full-screen modal view.
```

### Component F: Structural Lifecycle Timeline (Charcoal Background)
```text
Build a Process Section detailing the project timeline phases (Consultation, Design & Engineering, Precision Build, Handover):
- Display phase steps vertically (or horizontally on desktop) with active step buttons.
- Show large phase numbers ("01", "02").
- When a phase is active, display a detailed specs container with phase durations, specific structural release parameters, and signed quality deliverables.
```

### Component G: Testimonials Review Carousel (Bone Background)
```text
Implement a testimonial carousel with a minimal aesthetic:
- Place a large, stylistic structural Quote mark in the background.
- Support auto-playing cross-fade transitions every 8 seconds.
- Provide manual left/right navigation chevrons and indicator bullet lines.
- Display star ratings, direct client quotations, names, roles, and the associated project case study label.
```

### Component H: Proposal Form & Vector Grid Map (Charcoal Background)
```text
Create a split Contact Section:
- Left Column: Direct contact hotlines (phone, email, office address, operating hours) paired with an artistic vector-style radar site map.
  - Design the map using grid lines, coordinate labels, diagonal vector path lines, and a glowing pinging locator node showing the headquarters.
- Right Column: A multi-step-style project inquiry form.
  - Fields: Full Name, Email, Phone, Project Category selection, Target Budget tier selectors, and text area for Architectural Vision.
  - Provide real-time validation and a fake transmitting-state simulation.
  - Show a custom victory state card displaying a generated receipt reference code upon successful transmission.
```

---

## 4. Localization and Regional Customization Prompt

When porting this layout template to specific locations (e.g., Harare, Munich, Tokyo, London), run this prompt adjustment:

```text
Adjust the copy, metrics, and geolocation cues of this layout:
1. Update coordinates to match the target city (e.g., Lat: -17.8249° S, Lng: 31.0530° E for Harare, Zimbabwe).
2. Change currencies, telephone prefix codes (+263 for Zim), and address headers (e.g., 42 Samora Machel Avenue, Harare).
3. Replace high-end corporate placeholders with realistic localized business entities, estates, or municipal development groups.
4. Set timezone indicators to local time standards (e.g., CAT / Central Africa Time).
```
