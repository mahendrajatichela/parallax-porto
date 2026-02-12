<<<<<<< HEAD
# parallax-porto
portofolio using shadcn, next.js, tailwind
=======
# Frontend Developer Portfolio

A modern, responsive portfolio built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and featuring smooth parallax effects.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- 🧩 shadcn/ui components
- ✨ Framer Motion animations with parallax effects
- 🎯 Lenis smooth scrolling
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🚀 Optimized for performance
- 🌄 Background image parallax inspired by Olivier Larose

## Parallax Effects

This portfolio features two types of parallax effects:

1. **Hero Section Parallax**: Background image moves on scroll creating depth
2. **Fixed Background Parallax**: Uses clip-path for section-based parallax effect

Inspired by [Olivier Larose's tutorial](https://blog.olivierlarose.com/tutorials/background-image-parallax)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nextjs-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── parallax-section.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts
└── public/
```

## Customization

### Update Content

Edit the following components to customize your portfolio:

- `components/hero.tsx` - Update your name and introduction
- `components/skills.tsx` - Add or modify your skills
- `components/projects.tsx` - Showcase your projects
- `components/contact.tsx` - Update contact information
- `components/parallax-section.tsx` - Customize parallax section content

### Change Images

Replace the Unsplash URLs in:
- `components/hero.tsx` - Hero background image
- `components/parallax-section.tsx` - Parallax section background

### Styling

The portfolio uses Tailwind CSS. You can customize colors and themes in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and CSS variables

### Components

This project uses shadcn/ui components. To add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- Render

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## Credits

- Parallax effect inspired by [Olivier Larose](https://blog.olivierlarose.com/)
- Images from [Unsplash](https://unsplash.com/)

## License

MIT License - feel free to use this portfolio as a template for your own!

## Contact

For questions or feedback, reach out at hello@example.com
>>>>>>> 8cff8d4 (Initial commit: Init)
