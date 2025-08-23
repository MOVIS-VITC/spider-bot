#!/bin/bash

# 🚀 Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub

echo "🚀 Starting Portfolio Deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/DevanshSingh151/portfolio-website.git
else
    echo "✅ Remote origin already configured"
fi

# Check git status
echo "📊 Git status:"
git status

# Add all files
echo "📦 Adding all files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update portfolio: Next.js portfolio with modern design and features"

# Push to main branch
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/DevanshSingh151/portfolio-website"
echo "2. Check that all files are uploaded"
echo "3. Deploy to Vercel or Netlify (see DEPLOYMENT.md)"
echo ""
echo "🌐 Your portfolio will be available at:"
echo "   https://github.com/DevanshSingh151/portfolio-website"
echo ""
echo "Happy coding! 🚀"
