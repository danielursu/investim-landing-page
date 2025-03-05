# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2025-03-05

### Added
- New `use-button-animations` hook for consistent button hover effects
- GSAP-powered animations for RegisterButton component
- Smooth chevron animation on button hover
- New reusable RegisterButton component with modern gradient animations
- Interactive hover effects and smooth transitions for RegisterButton
- Animated chevron icon in RegisterButton for better UX
- GSAP animation library integration
- Custom useGsapAnimations hook for managing animations
- Smooth entrance animations for hero section
- Scroll-triggered animations for feature cards
- Enhanced hover animations for register button

### Changed
- Refactored animation system to use GSAP for all transitions
- Improved button hover interactions with synchronized scale and shadow effects
- Updated RegisterButton to use shared animation hook in both header and hero sections
- Refactored button implementation in site-header and hero sections
- Enhanced button styling with dynamic gradients and shadows
- Improved button accessibility with proper z-indexing and contrast

### Fixed
- Inconsistent hover animations between header and hero RegisterButtons
- Chevron animation smoothness on hover
- Memory leaks in animation event listeners
- Improved GSAP animations for feature cards to maintain consistent glassmorphic effect
- Synchronized register button and feature cards animations
- Optimized animation durations for better user experience
- Fixed backdrop blur flickering during feature card animations

## [0.3.0] - 2025-02-28

### Added
- Footer section component with newsletter subscription, contact form, and social media links

### Changed
- Updated copyright information with dynamic year and company name (Investim)
- Translated footer content to Romanian
- Modified quick links in footer to only include "Deschide cont" and "Accesare cont"

### Fixed
- Dependency conflicts between date-fns and react-day-picker
- Logo background fill in SVG

## [0.2.1] - 2025-02-24

### Added
- PortfolioChart component with interactive risk slider and pie chart visualization
- RechartsChart component for handling pie chart rendering

### Changed
- Updated text colors and spacing in PortfolioChart to match design specifications
- Improved alignment of allocation grid with chart width
- Reorganized component structure for better maintainability

### Fixed
- Resolved hydration errors by implementing dynamic imports for Recharts components

## [0.2.0] - 2025-02-24

### Added
- Created reusable `FeatureCard` component with:
  - White border and backdrop blur
  - Vertically centered chevron icon
  - Hover animations and transitions
- Implemented `StepsSection` component for investment process
- Added Hero section with feature cards and CTA
- Added site header with navigation and buttons
- Created comprehensive design system documentation
- New Hero section with improved layout and statistics display
- SVG logo integration in site header
- Project documentation (README.md, CHANGELOG.md)
- Workspace rules and configuration

### Changed
- Refactored Hero section to use new FeatureCard component
- Updated button styles with consistent design system
- Improved component organization and modularity
- Enhanced TypeScript type safety across components
- Updated site header with new logo
- Downgraded date-fns to v3.3.1 for compatibility with react-day-picker
- Improved component organization and structure

### Documentation
- Added detailed design specifications
- Updated README with component documentation
- Added comprehensive setup instructions

## [0.1.0] - 2025-02-23

### Added
- Initial project setup with Next.js 14.2
- Basic landing page structure
- ShadCN UI integration
- Responsive design implementation
- Core components:
  - Site header
  - Hero section
  - Navigation
- Basic styling with Tailwind CSS
- Development environment configuration
