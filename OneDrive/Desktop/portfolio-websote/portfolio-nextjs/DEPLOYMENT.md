# 🚀 Deployment Guide

This guide will walk you through deploying your portfolio website to GitHub and various hosting platforms.

## 📋 Prerequisites

- GitHub account
- Node.js installed on your machine
- Git installed on your machine

## 🐙 Step 1: Create GitHub Repository

### 1.1 Create New Repository
1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `portfolio-website`
4. Description: `My personal portfolio website built with Next.js`
5. Make it **Public**
6. **Don't** initialize with README (we already have one)
7. Click **"Create repository"**

### 1.2 Repository Settings
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/(root)**
5. Click **Save**

## 💻 Step 2: Prepare Your Local Project

### 2.1 Initialize Git (if not already done)
```bash
cd portfolio-nextjs
git init
```

### 2.2 Add Remote Origin
```bash
git remote add origin https://github.com/DevanshSingh151/portfolio-website.git
```

### 2.3 Check Status
```bash
git status
```

## 📤 Step 3: Push to GitHub

### 3.1 Add All Files
```bash
git add .
```

### 3.2 Initial Commit
```bash
git commit -m "Initial portfolio commit: Next.js portfolio with modern design"
```

### 3.3 Push to Main Branch
```bash
git branch -M main
git push -u origin main
```

## 🌐 Step 4: Deploy to Vercel (Recommended)

### 4.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your `portfolio-website` repository
5. Click **"Deploy"**

### 4.2 Automatic Deployment
- Vercel will automatically deploy your site
- Every push to main branch triggers a new deployment
- Your site will be available at: `https://your-portfolio.vercel.app`

## 🚀 Step 5: Deploy to Netlify

### 5.1 Build Your Project
```bash
npm run build
```

### 5.2 Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"New site from Git"**
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click **"Deploy site"**

## 📱 Step 6: Deploy to GitHub Pages

### 6.1 Update Next.js Config
Add this to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 6.2 Build and Deploy
```bash
npm run build
npm run export
```

### 6.3 Push to GitHub
```bash
git add .
git commit -m "Add static export for GitHub Pages"
git push
```

## 🔧 Step 7: Custom Domain (Optional)

### 7.1 Add Custom Domain
1. Go to your hosting platform (Vercel/Netlify)
2. Navigate to **Domain Settings**
3. Add your custom domain
4. Update DNS records as instructed

### 7.2 Update Portfolio Links
Update your portfolio with the new domain:
- GitHub profile
- LinkedIn profile
- Resume links

## 📊 Step 8: Monitor and Update

### 8.1 Analytics
- Add Google Analytics
- Monitor page views and user behavior
- Track form submissions

### 8.2 Regular Updates
- Update projects regularly
- Add new skills and experiences
- Keep content fresh and relevant

## 🚨 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Deployment Failures
- Check build logs in your hosting platform
- Ensure all dependencies are in `package.json`
- Verify environment variables if needed

#### Image Issues
- Ensure all images are in the `public/` folder
- Check image paths in components
- Optimize images for web

## 📈 Performance Optimization

### 8.1 Lighthouse Score
- Run Lighthouse audit in Chrome DevTools
- Aim for 90+ in all categories
- Optimize based on recommendations

### 8.2 Core Web Vitals
- Monitor LCP, FID, and CLS
- Optimize images and fonts
- Minimize JavaScript bundles

## 🔒 Security Considerations

### 8.1 Environment Variables
- Never commit `.env` files
- Use platform-specific environment variable systems
- Secure API keys and sensitive data

### 8.2 Dependencies
- Regularly update dependencies
- Use `npm audit` to check for vulnerabilities
- Consider using Dependabot for automatic updates

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review Next.js deployment guides
3. Check GitHub Issues for similar problems
4. Contact platform support if needed

---

🎉 **Congratulations! Your portfolio is now live on the internet!**

Share your portfolio URL with potential employers, clients, and the developer community!
