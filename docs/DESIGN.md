---
name: Luminous Institutional
colors:
  surface: '#fbf9fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#fbf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f5'
  surface-container: '#efedf0'
  surface-container-high: '#e9e7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f3'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4e5f7b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#081c35'
  on-primary-container: '#7385a3'
  inverse-primary: '#b5c7e8'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#2dbcfe'
  on-secondary-container: '#004866'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002111'
  on-tertiary-container: '#009760'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b5c7e8'
  on-primary-fixed: '#081c35'
  on-primary-fixed-variant: '#364763'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#82cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#68fdb2'
  tertiary-fixed-dim: '#45e098'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005232'
  background: '#fbf9fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system establishes a balance between national institutional authority and the hyper-modernity of digital infrastructure. It is designed to feel technically credible yet human-centered, evoking the speed and connectivity of fibre optics.

The visual style is **Futuristic Glassmorphism**. It utilizes a layered approach where information sits on translucent surfaces, anchored by a deep navy bedrock. Key characteristics include:
- **Fibre Aesthetic:** Linear light trails, glowing paths, and subtle technical grids that suggest a network in motion.
- **Kinetic Light:** Use of "Cyan Glow" to highlight points of interaction and progress.
- **Institutional Weight:** Bold, solid typography and high-quality photography to maintain the prestige of the JKUAT and KPC partnership.
- **Credibility:** Clean, structured layouts that prioritize data clarity and educational transparency.

## Colors

This design system uses a palette that bridges the gap between traditional governance and modern tech.

- **Primary (Deep Navy Blue):** Used for headers, footers, and foundational blocks to provide an institutional "anchor."
- **Secondary (Electric Blue):** The primary action color, used for CTA buttons and "Fibre Optic" line elements.
- **Tertiary (Emerald Green):** Denotes growth, completion, and success metrics.
- **Gold Accent:** Reserved for high-prestige elements, award badges, or the "SUPPORTED BY KPC FOUNDATION" acknowledgment.
- **Background Strategy:** The primary interface uses a light grey/white background for maximum readability, with sections of Deep Navy for cinematic contrast.

## Typography

The typography system is designed for high-impact communication and technical clarity.

- **Headlines:** Montserrat provides a geometric, confident, and "bold" feel essential for a national initiative.
- **Body:** Inter is used for its exceptional readability at various sizes, specifically within data-heavy dashboards.
- **Technical Accents:** Space Grotesk is used for labels, captions, and data points to reinforce the futuristic/technical aesthetic.
- **Acknowledgement Text:** "THIS PROJECT IS SUPPORTED BY KPC FOUNDATION" should always be set in `label-caps` with a minimum of 2px letter spacing to ensure it feels like an official stamp of authority.

## Layout & Spacing

This design system follows a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile.

- **Institutional Whitespace:** Generous `section-gap` (120px) is used to separate major narrative blocks, ensuring the content does not feel cluttered or "cheap."
- **Grid Motifs:** A subtle 24px square grid pattern may be used as a background overlay in hero sections to emphasize the technical nature of "Digital Leap."
- **Safe Areas:** Large internal padding within cards (minimum 32px) ensures that technical content remains breathable and premium.

## Elevation & Depth

Hierarchy is established through **Luminous Layering** rather than traditional heavy shadows.

- **Glass Surfaces:** Components like dashboards and navigation bars use a background blur (Backdrop Filter: blur(12px)) and a 1px semi-transparent white border.
- **Fibre Glows:** Interactive elements utilize a `0px 0px 15px` box-shadow using the Secondary Electric Blue color to simulate a neon light source.
- **Depth Tiers:** 
  - *Tier 1 (Surface):* Light grey (#F8FAFC) or Navy (#071B34).
  - *Tier 2 (Glass):* White with 80% opacity + 1px border.
  - *Tier 3 (Interaction):* Electric Blue glow + subtle Y-axis displacement (4px).

## Shapes

To maintain a "Technical & Institutional" feel, the design system utilizes **Soft Precision** geometry. 

- **Standard Radius:** 4px (0.25rem) for input fields and small buttons, conveying a sense of engineering precision.
- **Large Radius:** 12px (0.75rem) for container cards and cinematic sections to soften the futuristic aesthetic for human-centered content.
- **Line Ends:** All fibre-optic line elements and progress bars must use rounded caps to prevent the design from feeling too aggressive or sharp.

## Components

### Cinematic Hero Sections
Use high-resolution imagery of Kenyan students or infrastructure overlaid with a Deep Navy gradient (80% to 0% opacity). Integrate a "Glowing Line" element that leads the eye toward the primary CTA.

### Premium Cards
Cards feature a `1px` stroke in `#E2E8F0`. On hover, the stroke color transitions to Electric Blue (#00AEEF) and a soft cyan outer glow appears.

### Interactive Timelines
Vertical or horizontal tracks using a dashed line motif. Completed milestones use the Emerald Green (#16C47F) with a pulse animation, while future milestones use a translucent Deep Navy circle.

### Institutional Footer
The footer must be Deep Navy (#071B34). The partner logos (KPC Foundation, JKUAT, JHUB Africa) must be displayed in a single horizontal row, monochrome white.

### Data Dashboards
Charts should utilize the Electric Blue and Emerald Green for positive data, with Gold used for "Targets" or "Aspirations." Use subtle technical grid backgrounds within the chart area.

### Buttons
- **Primary:** Solid Electric Blue with white text, 4px corner radius.
- **Secondary/Institutional:** Transparent with a 2px Deep Navy border.
- **Acknowledgement Tag:** A small, Gold-accented badge in the top right of hero sections or the footer explicitly stating: "SUPPORTED BY KPC FOUNDATION."