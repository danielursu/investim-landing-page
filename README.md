# Investim Landing Page

Modern landing page for Investim, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🔥 Next.js 14 with App Router
- 💪 TypeScript for type safety
- 🎯 Reusable UI components with shadcn/ui
- 🌟 Custom animations and transitions
- 📱 Mobile-first approach

## Components

### Core Components
- `Hero` - Full-screen hero section with background image and feature cards
- `StepsSection` - Three-step guide with animated number cards
- `SiteHeader` - Navigation header with logo and CTA buttons

### UI Components
- `StepCard` - Animated card displaying step numbers with gradient effect
- `FeatureCard` - Interactive card with white border and chevron icon
- `Button` - Customizable button component with hover effects

### PortfolioChart

The PortfolioChart component provides an interactive visualization of investment allocations. Key features include:

- Interactive pie chart showing current portfolio allocation
- Risk level slider with real-time updates
- Detailed allocation breakdown with percentages
- Responsive design for all screen sizes

### RechartsChart

A dedicated component for handling the pie chart visualization using Recharts library. Features:

- Dynamic imports for client-side only rendering
- Customizable colors and dimensions
- Proper error handling and type safety

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/danielursu/investim-landing-page.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

The project follows a consistent design system:

- **Colors**:
  - Primary Blue: `#2F27CE`
  - Secondary Blue: `#807BDC`
  - Text: Various shades of gray for hierarchy

- **Typography**:
  - Inter font family
  - Responsive text sizes
  - Consistent font weights

- **Spacing**:
  - Consistent padding and margins
  - Responsive grid system
  - Component-specific spacing

For detailed design specifications, see [docs/design-specs.md](docs/design-specs.md).

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - see LICENSE file for details
