# Upper Campus Residence Merchandise Platform

## Overview
Upper Campus Residence is a premium collegiate editorial and merchandise platform designed for the modern resident. It blends the rich academic heritage of the residence (formerly Smuts Hall) with a forward-thinking, minimalist aesthetic. The platform serves as both a retail space for limited-edition apparel and a digital archive of the residence's journey.

## Design Philosophy
The project follows an **Editorial / Prestige** design recipe:
- **Typography**: `Newsreader` (Serif) for an academic, high-end feel; `Inter` (Sans) for functional UI.
- **Palette**: 
  - `Primary`: Forest Green (#006b31) - Representing growth and heritage.
  - `Secondary`: Deep Red (#b6181f) - Representing passion and history.
  - `Tertiary`: Slate Blue (#3e57a9) - Representing academic rigor.
  - `Surface`: Off-white (#f9f9f9) - For a clean, gallery-like backdrop.
- **Atmosphere**: Minimalist, spacious, and authoritative.

## Key Features
- **Dynamic Home**: High-impact hero section and curated collection previews.
- **Curated Shop**: Filterable product grid with high-quality imagery and detailed product cards.
- **Product Storytelling**: Deep-dive product pages that explain the "Why It Matters" (social impact and heritage funding).
- **Interactive Timeline**: A "Journey" page tracking the residence's evolution from 1928 to the present.
- **Visual Lookbook**: Magazine-style layout for seasonal collections.
- **Responsive Navigation**: Optimized for both desktop (Glass-header) and mobile (Bottom-nav).

## Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS (v4)
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter & Newsreader)

## Project Structure
- `/src/pages/`: Main view components (Home, Shop, Lookbook, Journey, ProductDetail).
- `/src/components/`: Reusable UI elements (Header, Footer, BottomNav, ProductCard).
- `/src/constants.ts`: Centralized data store for products, collections, and timeline events.
- `/src/types.ts`: TypeScript interfaces for core data models.
- `/src/index.css`: Global styles, Tailwind theme configuration, and custom editorial utilities.

## Social Impact
A core component of the platform is the **Heritage Fund**. 15% of every sale is dedicated to residence initiatives, supporting historic preservation and student grants.
