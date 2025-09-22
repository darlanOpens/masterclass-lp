# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a design system specification for a premium dark-themed landing page. The project is defined through a comprehensive `design.json` file that serves as the single source of truth for design tokens, components, and layout specifications.

## Architecture

The project uses a JSON-based design system approach with the following key areas:

- **Design Tokens**: Colors, typography, spacing, and effects defined in `design.json`
- **Component Specifications**: Detailed component definitions including navbar, hero, cards, buttons, and badges
- **Layout System**: 12-column grid system with responsive breakpoints
- **Color Palette**: Premium dark theme with blue gradients and gold accents
- **Typography**: Poppins/Inter font stack with defined scale and weights

## Key Design System Elements

### Color System
- Primary background: `#020718` (dark blue)
- Surface colors: Various shades of blue (`#151D42`, `#1B2B5B`, etc.)
- Accent colors: Gold (`#D0A420`), Cyan (`#39E0FF`), Magenta (`#FF5A7A`)
- Text: White primary, muted gray (`#8C8DA2`)

### Component Structure
- **Navbar**: 72px height, translucent background with backdrop blur
- **Hero**: Radial gradient background, two-column layout (text/visual)
- **Feature Grid**: 5-column grid with icon chips and labels
- **Author Cards**: Photo + content layout with gradient backgrounds
- **Buttons**: Primary (gold gradient), outline, and ghost variants

### Responsive Design
- Breakpoints: xs(360px), sm(640px), md(768px), lg(1024px), xl(1280px), xxl(1440px)
- Fluid typography enabled between 360px and 1440px viewport widths
- Mobile-first approach with stacking layouts for smaller screens

## Development Guidelines

Since this is a design specification repository:

1. **Design Tokens**: Use the CSS tokens defined in `css_tokens` section for consistent styling
2. **Component Implementation**: Follow the component specifications in the `components` section
3. **Accessibility**: Maintain 4.5:1 contrast ratio and 44px minimum touch targets
4. **Motion**: Use the defined animation durations (120ms fast, 200ms base, 320ms slow)
5. **Portuguese Locale**: Content is intended for Brazilian Portuguese (`pt-BR`)

## File Structure

- `design.json` - Complete design system specification including:
  - Style definitions (colors, typography, layout)
  - Component specifications
  - Responsive behavior rules
  - Accessibility guidelines
  - Animation tokens

This repository serves as a design reference and should be used to generate web pages or applications that match the specified premium dark aesthetic.