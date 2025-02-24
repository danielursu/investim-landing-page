# Investim Landing Page Design Specifications

## Brand Colors
- Primary Blue: `#2F27CE`
- Secondary Blue: `#807BDC`
- Gradients:
  - Primary Gradient: `bg-[linear-gradient(180deg,#807BDC_0%,#2F27CE_100%)]`
- Text Colors:
  - Primary: `text-gray-900`
  - Secondary: `text-gray-600`
  - Light: `text-gray-200`

## Typography
- Font Family: Inter (next/font/google)
- Headings:
  - H1: `text-4xl md:text-5xl font-bold`
  - H2: `text-2xl font-bold`
  - H3: `text-xl font-semibold`
- Body Text:
  - Regular: `text-lg`
  - Small: `text-sm`

## Layout
### Container
- Max Width: `container`
- Padding: `px-4 md:px-6`

### Spacing
- Section Padding: `py-24`
- Component Gap: `gap-8`
- Margin Bottom: `mb-4`, `mb-8`, `mb-16`

## Components

### Site Header
- Background: `bg-white`
- Height: `h-20`
- Logo:
  - Height: `h-10`
  - Width: Auto
  - Format: SVG
- Navigation:
  - Links Color: `text-gray-600`
  - Hover: `hover:text-gray-900`

### Hero Section
- Full Screen: `min-h-screen`
- Background Image:
  - Position: `object-cover`
  - Brightness: `brightness-[0.85]`
  - Priority Loading: `true`
- Content:
  - Padding Top: `pt-32`
  - Max Width: `max-w-2xl`
- Call to Action:
  - Button Color: `bg-[#2f27ce]`
  - Hover: `hover:bg-[#2f27ce]/90`
  - Size: `px-8 py-6`
  - Text: `text-lg text-white`
- Feature Cards:
  - Width: `lg:w-[900px]`
  - Position: `ml-auto`
  - Background: `bg-white/10`
  - Backdrop: `backdrop-blur-sm`
  - Hover: `hover:bg-white/20 hover:shadow-xl`
  - Border Radius: `rounded-2xl`

### Steps Section
- Background: `bg-white`
- Layout:
  - Grid: `md:grid-cols-3`
  - Gap: `gap-8`
- Step Cards:
  - Padding: `p-8`
  - Border: `border-gray-100`
  - Border Radius: `rounded-2xl`
  - Hover: `hover:shadow-lg`
  - Number Height: `h-[180px]`
  - Number Size: `text-[140px]`
  - Number Gradient: `from-[#807BDC] to-[#2F27CE]`
  - Animation:
    - Duration: `duration-300`
    - Transform: `group-hover:-translate-y-11`

### Feature Card
- Background: `bg-white/10`
- Border: `border border-white/20`
- Backdrop: `backdrop-blur-sm`
- Hover:
  - Background: `hover:bg-white/20`
  - Shadow: `hover:shadow-xl`
- Border Radius: `rounded-2xl`
- Padding: `p-6`
- Typography:
  - Title: `text-2xl font-semibold text-white`
  - Description: `text-gray-200`
- Icon:
  - Position: `absolute top-1/2 -translate-y-1/2 right-6`
  - Size: `h-8 w-8`
  - Color: `text-white opacity-50`
  - Hover: `group-hover:opacity-100`
- Animation:
  - Duration: `duration-300`
  - Properties: `transition-all`

### Buttons
- Primary Button:
  - Background: Primary Gradient
  - Hover: `hover:opacity-90`
  - Size: 
    - Regular: `px-6`
    - Large: `px-8 py-6`
  - Border Radius: `rounded-lg`
  - Text: `text-lg text-white`

## Animations
- Transitions:
  - Default Duration: `duration-300`
  - Timing: `transition-all`
- Hover Effects:
  - Cards: Scale and shadow
  - Buttons: Opacity change
  - Numbers: Slide up animation

## Responsive Design
### Breakpoints
- Mobile First
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large Desktop: `xl:` (1280px)

### Grid System
- Mobile: Single column
- Tablet: Two columns where appropriate
- Desktop: Three columns for steps

## Assets
### Images
- Hero Background: `/public/hero-image.png`
- Logo: `/public/logo.svg`
  - Fill: `none` (transparent background)
  - Optimized for Next.js Image component

## Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Color contrast ratios meeting WCAG standards
- Keyboard navigation support
- Focus states for interactive elements

## Performance
- Next.js Image optimization
- Font optimization with next/font
- Responsive images
- Lazy loading where appropriate
- Minimal bundle size

## Browser Support
- Modern browsers (last 2 versions)
- Progressive enhancement
- Fallback styles for older browsers