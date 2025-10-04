# Software Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a sleek crypto-inspired design.

## 🚀 Features

- **Modern Design**: Clean, crypto-style interface with glowing effects and animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better developer experience
- **React 18**: Latest React with modern hooks and patterns
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom crypto-themed design system
- **Icons**: Custom icon implementation with Unicode symbols
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## 📋 Prerequisites

⚠️ **Important**: This project requires **Node.js 24.9.0** or higher and **npm 11.6.0** or higher.

### Current Environment Requirements:
- Node.js >= 24.9.0
- npm >= 11.6.0

### Upgrading Node.js

If you're using an older Node.js version (like 16.13.1), you'll need to upgrade:

#### Using NVM (Recommended):
```bash
# Install Node.js 24.9.0
nvm install 24.9.0
nvm use 24.9.0
nvm alias default 24.9.0

# Verify installation
node --version  # Should show v24.9.0
npm --version   # Should show 11.6.0+
```

#### Using Official Installer:
1. Download Node.js 24.9.0+ from [nodejs.org](https://nodejs.org/)
2. Run the installer
3. Restart your terminal

## 🚀 Getting Started

1. **Ensure Node.js 24.9.0+ is installed**
   ```bash
   node --version  # Must be v24.9.0 or higher
   npm --version   # Must be 11.6.0 or higher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The crypto-style color scheme is defined in `tailwind.config.js`:
- **crypto-dark**: `#0a0a0a` - Main background
- **crypto-accent**: `#00d4ff` - Primary accent (cyan)
- **crypto-green**: `#00ff88` - Success/highlight color
- **crypto-purple**: `#8b5cf6` - Secondary accent
- **crypto-orange**: `#ff6b35` - Warning/special color

### Content Customization

#### Personal Information
Update your details in the following components:
- `src/components/About.tsx` - Personal info, bio, and stats
- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/Contact.tsx` - Contact information and social links

#### Projects
Edit the projects array in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    demoUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/yourusername/project',
    image: 'path-to-your-image.jpg',
    featured: true // Set to true for featured projects
  },
  // Add more projects...
]
```

#### Skills
Update the skills data in `src/components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

### Styling
- Main styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Custom CSS classes for crypto styling are defined in index.css

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first approach with hamburger menu
- Responsive grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🌟 Crypto-Style Design Elements

- **Glowing effects**: Text and border glows using CSS shadows
- **Gradient backgrounds**: Multi-layer gradients for depth
- **Floating animations**: Subtle animations for visual interest
- **Geometric shapes**: Abstract floating elements
- **Monospace font**: JetBrains Mono for a technical feel
- **Neon color palette**: Cyan, green, and purple accents

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The project generates a standard React build that can be deployed to any static hosting platform.

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:
```
VITE_SITE_URL=https://your-domain.com
VITE_GA_ID=your-google-analytics-id
```

## 🐛 Troubleshooting

### Node.js Version Issues
If you see errors related to `node:fs/promises` or similar, you're likely using an older Node.js version:

1. Check your Node.js version: `node --version`
2. If it's below 24.9.0, upgrade using the instructions above
3. Clear dependencies and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Build Issues
- Ensure you're using Node.js 24.9.0+
- Clear browser cache if seeing old content
- Check console for any TypeScript errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Requirements Summary:**
- ✅ Node.js 24.9.0+
- ✅ npm 11.6.0+
- ✅ Modern browser with ES2022 support# engineer-portfolio
