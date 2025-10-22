# Eve Wang Portfolio - Next.js + Tailwind

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring reusable components and a clean, accessible design.

## Features

- **Reusable Components**: PortfolioCard and EmbeddedPDF components for consistency
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Keyboard navigation and ARIA labels
- **Modern UI**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## Components

### PortfolioCard
- Clickable cards with cover images
- Hover/focus effects with description overlay
- Mobile-friendly (description always visible)
- Keyboard accessible with focus-visible styles

### EmbeddedPDF
- Consistent PDF embedding across all pages
- Scrollable, borderless design
- Error handling and modal support
- Customizable height and title props

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

4. **Export Static Site**
   ```bash
   npm run export
   ```

## Project Structure

```
├── components/
│   ├── PortfolioCard.jsx      # Reusable portfolio card component
│   └── EmbeddedPDF.js         # Reusable PDF embedding component
├── pages/
│   ├── _app.js               # App wrapper with global styles
│   ├── index.js              # Homepage with 2x3 grid
│   ├── aes-research.js       # AES Research page
│   └── [other-pages].js      # Individual portfolio pages
├── styles/
│   └── globals.css           # Global Tailwind styles
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## Portfolio Pages

1. **AES Research Paper** - Advanced Encryption Standard research
2. **Linguistic Research** - Honors research paper
3. **TEDx Speech** - Inspiring presentation
4. **Physics Club** - Leadership and education
5. **Congruence** - Mathematical exploration
6. **Physics & Math School** - Comprehensive academic work

## Customization

### Adding New Portfolio Items
1. Add new page in `/pages/`
2. Update the `portfolioItems` array in `/pages/index.js`
3. Add cover image to `/public/images/`

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `styles/globals.css` for global styles
- Component styles are in individual component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Eve Wang. All rights reserved.



