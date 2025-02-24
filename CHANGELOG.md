# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Fixed
- Dependency conflicts between date-fns and react-day-picker
- Logo background fill in SVG

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
