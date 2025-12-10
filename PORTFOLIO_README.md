# Aesthetic Portfolio

A modern, aesthetic portfolio website with stunning visual effects and smooth animations.

## Features

### ✨ Visual Effects
- **Custom Cursor**: Circular cursor that expands on hover with mix-blend-mode effect
- **Liquid Ether Background**: WebGL fluid simulation with beautiful color gradients
- **Smooth Animations**: Scroll-based animations and transitions throughout
- **Typing Sounds**: Audio feedback when hovering over navigation items

### 🎨 Design Elements
- **Hero Section**: Full-screen landing with liquid ether background and centered text
- **Dark Theme**: Beautiful dark color scheme with zinc and accent colors
- **Responsive Layout**: Works on all screen sizes
- **Gradient Cards**: Project cards with beautiful gradient overlays

### 🎯 Sections
1. **Hero** - Full-screen intro with LiquidEther background
2. **About** - Introduction section with dark background
3. **Expertise** - Service grid with hover effects
4. **Marquee** - Animated text strip
5. **Projects** - Portfolio showcase
6. **Experience** - Timeline of work history

### 🔧 Navigation
- Fixed top-right navigation
- Hover animation: text scrolls up and changes color
- Typing sound effects on hover
- Smooth scroll to sections

## Tech Stack
- Next.js 16
- TypeScript
- Tailwind CSS
- Three.js (for LiquidEther)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors
The accent color is `#c4ff0e` (lime green). Update this throughout the code to change the theme.

### LiquidEther Colors
Edit the colors prop in `page.tsx`:
```tsx
<LiquidEther
  colors={['#5227FF', '#FF9FFC', '#B19EEF']}
  // ...
/>
```

### Content
Update text, images, and project information in `app/page.tsx`.

## Key Components

- `CustomCursor.tsx` - Custom cursor implementation
- `Navigation.tsx` - Animated navigation menu
- `LiquidEther.tsx` - WebGL fluid simulation background
- `page.tsx` - Main portfolio page with all sections

## Notes

- The custom cursor is hidden on touch devices
- Audio context for typing sounds requires user interaction
- Smooth scrolling is enabled globally
- All animations use CSS transitions for performance

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge) with WebGL support.
