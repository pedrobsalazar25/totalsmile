# The Smile Sanctuary — Lovable Prompt

## Project Overview
A landing page for a dental tourism clinic in Costa Rica. Target audience: US/Canada patients seeking affordable, high-quality dental work combined with a luxury vacation experience. The site must feel premium, trustworthy (medical), and warm (tropical paradise) — not cold or sterile.

---

## Design Direction

### Aesthetic
White + warm wood + ocean blues. Clean and clinical but softened with warmth. Think "luxury medical spa meets tropical paradise."

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Ocean Deep | `#0A5C6C` | Primary — nav, headings, primary buttons |
| Pure White | `#FFFFFF` | Main backgrounds |
| Warm Sand | `#F7F3ED` | Alternate section backgrounds |
| Light Oak | `#C9A77D` | Decorative accents, icons, dividers |
| Walnut | `#8B6F47` | Secondary accents |
| Coral | `#E07A5F` | CTAs, important highlights |
| Soft Aqua | `#5BA8B4` | Secondary buttons, links |
| Deep Slate | `#2C3E4A` | Body text |
| Warm Gray | `#6B7680` | Secondary text |
| Light Border | `#E8E4DE` | Borders, dividers |

### Typography
- **Headings:** Montserrat (700, 600) — modern, confident
- **Body:** Source Sans 3 (400, 600) — humanist, warm, readable
- **Font source:** Google Fonts

---

## Page Structure — Landing Page

### Hero Section
**Headline:** Your Journey to a Perfect Smile Starts in Paradise
**Subheadline:** Why choose between affordable dental care and a luxury vacation? At The Smile Sanctuary, we combine elite dental expertise with the breathtaking beauty of Costa Rica.
**Background:** Use the uploaded image: `Hero Background.jpeg` — Costa Rica coastline/beach
**Glassmorphism overlay:** Semi-transparent frosted glass effect on the text container — white with blur (backdrop-filter: blur(12px), background: rgba(255,255,255,0.15))
**CTA Button:** Get My Free Quote (coral color)
**Secondary CTA:** View Our Gallery (outline style, white text)
**Trust badges below:** Savings %, Board-certified specialists, Concierge included — in frosted glass pill containers

### 2. Our Locations Section
Three location cards in a row (or stacked on mobile):
1. **Alajuela: The Gateway** — "Located just minutes from Juan Santamaría International Airport (SJO), our Alajuela clinic is designed for convenience. Perfect for your arrival consultation, final fittings, or quick cosmetic enhancements before you head home." — Use uploaded image: `Alajuela Location Card Image.jpeg`
2. **Pérez Zeledón: Mountain Wellness** — "Nestled in the lush, green heart of the Southern Zone, our Pérez Zeledón office offers a tranquil setting for those who prefer the cool mountain air and authentic Costa Rican culture. It's the ideal spot for restorative work in a peaceful, stress-free environment." — Use uploaded image: `Pérez Zeledón Location Card Image.jpeg`
3. **Playas del Coco: The Flagship & Recovery Center** — "Our premier surgical suite and Exclusive Recovery Center are located in the sun-drenched Guanacaste region. Here, we perform our most advanced procedures, followed by world-class aftercare in our private recovery facility." — Use uploaded image: `Playas del Coco Location Card Image.jpeg`
**Icons:** Airport icon (Alajuela), Mountain/tree icon (PZ), Sun/ocean icon (Playas del Coco)

### 3. The Recovery Experience Section
**Section title:** Heal Where the Ocean Meets the Shore
**Intro text:** The most critical part of dental surgery is the recovery. Most clinics send you back to a standard hotel—we bring you home to our Playa del Coco Recovery Center.
**Three feature cards:**
- Specialized Post-Op Nutrition: Gourmet soft-food menus designed for dental healing
- Professional On-Site Support: Peace of mind knowing our team is available to monitor your progress
- Total Relaxation: Recline in luxury while the Pacific breeze accelerates your well-being
**Background:** Use uploaded image: `Recovery Section Background.jpeg` — luxury pool/ocean view

### 4. Patient Concierge & Tours Section
**Background:** Use uploaded image: `Concierge Section Background Image.jpeg` — luxury transport/scenic drive
**Section title:** We Handle the Logistics. You Enjoy the View.
**Intro text:** Navigating a foreign country during a medical procedure shouldn't be stressful. Our concierge team manages:
**Three feature cards:**
- Private Airport Transfers: We meet you at the gate
- Custom Itineraries: Want to see a volcano or a cloud forest? We arrange tours that fit your recovery timeline
- Inter-Clinic Transport: Seamless travel between Alajuela, PZ, and the Coast

### 5. Call to Action Section
**Headline:** Ready for a Free Virtual Consultation?
**Subtext:** Upload your X-rays or dental plan today and receive a transparent, no-obligation quote within 24 hours.
**Primary CTA button:** Get My Free Quote (large, coral, with shadow)
**Secondary CTA button:** View Our Gallery (outline)
**Background:** Ocean teal gradient with the uploaded wave pattern: `CTA Section Wave Pattern Overlay.jpeg`
**Glassmorphism card:** The CTA text and buttons sit inside a frosted glass container — centered, backdrop-blur, warm white tint with rounded corners (24px)

### 6. Footer
- Logo: Use uploaded image `Logo.png`
- Tagline: Costa Rica Dental Excellence
- Contact info placeholder
- Copyright

---

## Animations & Effects

### Glassmorphism
- **Hero overlay:** frosted glass container — backdrop-filter: blur(12px), background: rgba(255,255,255,0.15), border: 1px solid rgba(255,255,255,0.3), border-radius: 24px
- **Feature cards:** semi-transparent glass effect — backdrop-filter: blur(8px), background: rgba(255,255,255,0.25), warm tint
- **Trust badge pills:** frosted glass with subtle border

### Card Effects — Soft Layered Shadows (NOT bevel)
- Cards feel like they are floating just above the page
- Shadow formula: `0 4px 16px rgba(42, 62, 74, 0.08), 0 1px 3px rgba(42, 62, 74, 0.04)` (layered for depth)
- On hover: shadow deepens to `0 8px 24px rgba(42, 62, 74, 0.12), 0 2px 6px rgba(42, 62, 74, 0.06)`

### Rounded Corners
- Cards: 16px–20px border radius (generous, soft feel)
- Buttons: 8px–12px
- Feature card containers: 20px radius

### Scroll Animations
- Sections fade in and slide up on scroll (intersection observer)
- Stagger: 100ms delay between cards in a row
- Duration: 600ms ease-out

### Hover Animations
- Cards: lift up (translateY: -4px) with shadow deepening — 300ms transition
- Buttons: subtle scale (1.02) + shadow lift on hover
- Links: smooth color transitions (200ms)

### Micro-interactions
- CTA buttons: slight pulse or glow on idle (optional, subtle)
- Navigation: smooth transition on scroll (background becomes more opaque)
- Section transitions: no jarring jumps — smooth scroll between anchors

---

## Component States

### Primary Button (CTA)
- Default: Coral `#E07A5F` background, white text, rounded (12px)
- Hover: Slight scale (1.02), shadow lift, slightly darker coral
- Active: Scale down (0.98), deeper shadow
- Border radius: 12px

### Secondary Button (Outline)
- Default: Transparent with white border, white text
- Hover: White fill, Ocean Deep text
- Border radius: 12px

### Navigation
- Logo: use `Logo.png` — positioned left
- Nav links right
- Sticky on scroll — background transitions from transparent to white with soft shadow
- Mobile: hamburger menu with slide-out drawer
- Smooth transition on scroll (300ms)

### Location Cards
- White background with soft layered shadow (no hard edges)
- Subtle border: 1px rgba(255,255,255,0.3)
- Icon at top (Light Oak color) — or use coral for visual warmth
- Title in Montserrat (bold)
- Description in Source Sans
- **Hover effect:** Cards lift upward (translateY: -4px) with shadow deepening — smooth 300ms transition
- Border radius: 16px
- Glassmorphism touch: slight backdrop blur on card surface

### Feature Cards (Recovery & Concierge)
- Warm Sand background OR semi-transparent glass effect (backdrop-blur + warm white tint)
- Soft layered shadow — floating effect, no hard edges
- Icon (Light Oak or Coral)
- Bold title
- Description text
- Border radius: 20px (more generous rounding for glass feel)
- **Hover effect:** Subtle lift (translateY: -4px) + shadow deepens
- Smooth 300ms ease transitions throughout

---

## Layout Notes

- **Max content width:** 1200px centered
- **Section padding:** 100px vertical (desktop), 60px (mobile)
- **Grid system:** 12-column CSS Grid
- **Mobile breakpoint:** 768px
- **Responsive:** All sections stack vertically on mobile
- **Visual priority:** Generous white space — let the content breathe. Cards float above the page with layered shadows and glassmorphism. Sections alternate between Pure White and Warm Sand backgrounds.

---

## Content Source
All copy is provided and should be used exactly as written.

---

## Images — Already Created

The client has already generated and uploaded the following images. Use these exact filenames in the build:

| Filename | Used In Section |
|----------|----------------|
| `Logo.png` | Header/logo and footer |
| `Hero Background.jpeg` | Hero section background |
| `Alajuela Location Card Image.jpeg` | Alajuela location card |
| `Recovery Section Background.jpeg` | Recovery Experience section background |
| `Pérez Zeledón Location Card Image.jpeg` | Pérez Zeledón location card |
| `Playas del Coco Location Card Image.jpeg` | Playas del Coco location card |
| `Concierge Section Background Image.jpeg` | Patient Concierge & Tours section background |
| `CTA Section Wave Pattern Overlay.jpeg` | CTA section wave pattern overlay |

---

## Technical Requirements
- Built on Lovable (React/Next.js based)
- Smooth scroll between sections
- Lazy loading for images
- Accessible (WCAG 2.1 AA)
- Fast loading optimized
- **CSS:** Use CSS variables for colors and effects (easy theming)
- **Glassmorphism:** backdrop-filter with graceful fallback for older browsers
- **Animations:** CSS transitions + intersection observer for scroll animations (no heavy JS libraries)
- **Performance:** Animate only transform and opacity (GPU-accelerated)