# 🚀 Devansh's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, and Tailwind CSS. This portfolio showcases my development skills, projects, and professional journey.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Framer Motion animations and Typed.js effects
- **Email Subscription**: Newsletter signup with admin dashboard
- **Smooth Navigation**: Seamless scrolling between sections
- **Contact Integration**: Direct links to GitHub, LinkedIn, and contact info

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Type Safety**: TypeScript
- **Icons**: Lucide React
- **Typing Effects**: Typed.js
- **Backend**: Next.js API Routes
- **Data Storage**: Local JSON file system

## 📱 Sections

1. **Hero Section**: Introduction with animated typing effect
2. **About Section**: Portfolio purpose and developer journey
3. **Experience Section**: Work history and technical skills
4. **Footer**: Contact information and newsletter subscription

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevanshSingh151/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-nextjs/
├── public/                 # Static assets
│   ├── developer.png      # Developer illustration
│   ├── bg.png            # Background image
│   └── other-images/     # Additional images
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes
│   │   │   └── subscribe/ # Email subscription endpoint
│   │   ├── admin/        # Admin dashboard
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Experience.tsx # Experience section
│   │   └── Footer.tsx    # Footer component
│   └── lib/              # Utility functions
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a1a2e',
  secondary: '#16213e',
  accent: '#0f3460',
  dark: '#0f0f23'
}
```

### Content
- **Personal Info**: Update name, email, phone in components
- **Social Links**: Modify GitHub, LinkedIn URLs
- **Experience**: Update work history and skills
- **About**: Customize portfolio description

### Images
Replace images in the `public/` folder:
- `developer.png` - Hero section image
- `bg.png` - Background image
- Add your own profile and project images

## 📧 Email Subscription System

The portfolio includes a newsletter subscription system:

- **Frontend**: Email input form in footer
- **Backend**: `/api/subscribe` endpoint
- **Storage**: Local JSON file (`data/subscribers.json`)
- **Admin Dashboard**: `/admin` page to view subscribers

### Admin Access
Visit `/admin` to view collected email addresses and download subscriber data.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out/` folder
   - Or connect your GitHub repository

### Other Platforms

- **GitHub Pages**: Use `next export` and deploy to GitHub Pages
- **AWS Amplify**: Connect repository for automatic deployments
- **DigitalOcean App Platform**: Simple container deployment

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic component-based code splitting
- **Lazy Loading**: Images and components load on demand
- **SEO Optimized**: Meta tags and structured data ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: devanshsin2020@gmail.com
- **GitHub**: [@DevanshSingh151](https://github.com/DevanshSingh151)
- **LinkedIn**: [Devansh Singh](https://www.linkedin.com/in/devansh-singh-08139631b/)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

---

⭐ **Star this repository if you found it helpful!**
