# Ahmad Rafiul Mahdi - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, showcasing projects, skills, experience, and professional information.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Modern UI**: Built with Tailwind CSS and custom animations
- **Performance Optimized**: Bundle analysis and image optimization
- **Interactive Components**: Smooth scrolling, animated elements, and engaging UI
- **SEO Friendly**: Meta tags and Open Graph optimization

## 🛠 Technology Stack

- **Framework**: [Next.js 12.3.1](https://nextjs.org/)
- **Frontend**: [React 18.2.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 3.1.8](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: Custom CSS animations and [React Slick](https://react-slick.neostack.com/)
- **Scroll Effects**: [React Scroll](https://github.com/fisshy/react-scroll)
- **Authentication**: [Supabase Auth](https://supabase.com/docs/guides/auth) (configured but optional)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── Buttons.jsx     # Custom button components
│   ├── Contact.jsx     # Contact section
│   ├── Experience.jsx  # Work experience timeline
│   ├── Footer.jsx      # Site footer
│   ├── Grids.jsx       # Grid layout components
│   ├── Hero.jsx        # Hero section with animated text
│   ├── Layout.jsx      # Layout wrapper
│   ├── Navbar.jsx      # Navigation header
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills section
│   └── Theme.jsx       # Theme toggle component
├── data/               # Static data and configuration
│   ├── navbar.json     # Navigation menu items
│   └── skillsData.js   # Skills information
├── lib/                # Utility libraries
│   └── supabaseClient.js # Supabase client configuration
├── pages/              # Next.js pages and API routes
│   ├── api/            # API endpoints
│   ├── _app.js         # App component with providers
│   ├── _document.js    # Document configuration
│   └── index.js        # Home page
├── public/             # Static assets
│   ├── favicon.ico     # Site favicon
│   └── iul-logo.svg    # University logo
└── styles/             # Global styles
    └── globals.css     # Global CSS and custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RafiulM/rafiulm.com.git
   cd rafiulm.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional for Supabase)
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   
   *Note: Supabase integration is configured but not required for the portfolio to function.*

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Adding New Projects

1. Edit the projects data in the appropriate component or data file
2. Update project images in the `public/` directory
3. Modify the `Projects.jsx` component if needed

### Updating Skills

1. Edit `data/skillsData.js` to add or modify skills
2. Skills are automatically categorized and displayed

### Styling Changes

- Global styles: `styles/globals.css`
- Component styles: Tailwind classes in individual components
- Theme configuration: `tailwind.config.js`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables if using Supabase
4. Deploy automatically on every push to main branch

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL (optional)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key (optional)
- `ANALYZE`: Set to 'true' to enable bundle analysis during build

### Tailwind CSS Customization

The project includes custom Tailwind configurations:
- Custom color palette with primary color `#FF5400`
- Custom fonts: Archivo and Dela Gothic One
- Custom animations including marquee effect
- Custom shadow effects and utilities

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with "Cannot find module 'tailwindcss'"**
   ```bash
   npm install tailwindcss --save-dev
   ```

2. **ESLint errors during build**
   ```bash
   npm install eslint eslint-config-next --save-dev
   ```

3. **Next.js configuration warnings**
   - The project uses some deprecated packages that may show warnings
   - Supabase auth helpers are deprecated but still functional
   - Consider updating to newer Supabase packages for new projects

4. **Development server doesn't start**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## 📊 Performance

- Bundle analyzer included for optimization
- Image optimization configured for external domains
- SEO optimized with proper meta tags
- Responsive images and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [https://rafiulm.com](https://rafiulm.com)
- **Portfolio**: Ahmad Rafiul Mahdi
- **Background**: Web Developer, UI/UX Designer, Graphic Designer
- **Education**: Bachelor of Engineering in Computer Engineering, University of Indonesia
- **Languages**: English (IELTS Band 8.0)

---

Built with ❤️ using Next.js and Tailwind CSS