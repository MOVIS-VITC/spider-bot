# ⚡ Quick Start Guide

Get your portfolio live in 5 minutes! 🚀

## 🚀 Quick Deployment (5 minutes)

### Option 1: Use Deployment Script (Recommended)

**Windows:**
```bash
deploy.bat
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Commands

```bash
# Initialize Git
git init

# Add remote
git remote add origin https://github.com/DevanshSingh151/portfolio-website.git

# Add files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Push
git branch -M main
git push -u origin main
```

## 🌐 Deploy to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your `portfolio-website` repository
5. Click **"Deploy"**

🎉 **Your portfolio is now live!**

## 📱 Your Portfolio URL

After Vercel deployment, your portfolio will be available at:
`https://your-portfolio.vercel.app`

## 🔧 Customize

- **Update content**: Edit files in `src/components/`
- **Change colors**: Modify `tailwind.config.js`
- **Add images**: Place in `public/` folder
- **Update links**: Change GitHub, LinkedIn URLs

## 📞 Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Review `README.md` for customization options
- Run `npm run dev` to test locally

---

**Time to deployment: ~7 minutes total!** ⚡
