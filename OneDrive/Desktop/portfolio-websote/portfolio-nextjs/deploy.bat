@echo off
echo 🚀 Starting Portfolio Deployment...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
) else (
    echo ✅ Git repository already initialized
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Adding remote origin...
    git remote add origin https://github.com/DevanshSingh151/portfolio-website.git
) else (
    echo ✅ Remote origin already configured
)

REM Check git status
echo 📊 Git status:
git status

REM Add all files
echo 📦 Adding all files...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Update portfolio: Next.js portfolio with modern design and features"

REM Push to main branch
echo 🚀 Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo 🎉 Deployment completed successfully!
echo.
echo 📋 Next steps:
echo 1. Go to https://github.com/DevanshSingh151/portfolio-website
echo 2. Check that all files are uploaded
echo 3. Deploy to Vercel or Netlify (see DEPLOYMENT.md)
echo.
echo 🌐 Your portfolio will be available at:
echo    https://github.com/DevanshSingh151/portfolio-website
echo.
echo Happy coding! 🚀
pause
