# How to Push Your Easy Route Travels Project to GitHub

## Prerequisites

You need to install Git first. Follow these steps:

### 1. Install Git

**Download from:** https://git-scm.com/download/win

- Download the installer for Windows
- Run the installer
- Accept all default settings
- Complete installation
- **Restart your terminal/PowerShell**

### 2. Configure Git (One-time setup)

After installing Git, open PowerShell and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

Replace with your actual name and email.

---

## Create GitHub Repository

### Step 1: Create Repo on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click **"+"** icon (top right) → **"New repository"**
3. Name it: `easyroute-travels` (or any name you prefer)
4. Add description: `Study Abroad Admissions Support | UK & Canada`
5. Choose **Public** (so others can see it)
6. Click **"Create repository"**

### Step 2: GitHub Will Show Commands

GitHub will display something like:

```bash
# Option A: If starting fresh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/easyroute-travels.git
git push -u origin main

# Option B: If repo already exists
git remote add origin https://github.com/YOUR-USERNAME/easyroute-travels.git
git branch -M main
git push -u origin main
```

---

## Push Your Project (Step by Step)

### Step 1: Navigate to Your Project

```powershell
cd "c:\Users\user\OneDrive - University of Bradford\Documents\Easyroute"
```

### Step 2: Initialize Git Repository

```powershell
git init
```

### Step 3: Add All Files

```powershell
git add .
```

### Step 4: Create First Commit

```powershell
git commit -m "Initial commit: Easy Route Travels website with Next.js, Tailwind CSS, and Formspree integration"
```

### Step 5: Add Remote Repository

Replace `YOUR-USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/easyroute-travels.git
```

### Step 6: Rename Branch to Main

```powershell
git branch -M main
```

### Step 7: Push to GitHub

```powershell
git push -u origin main
```

This will prompt you to log in to GitHub. Use your GitHub credentials.

---

## Complete Command Sequence

Copy and paste all these commands in order (update YOUR-USERNAME):

```powershell
cd "c:\Users\user\OneDrive - University of Bradford\Documents\Easyroute"

git init

git add .

git commit -m "Initial commit: Easy Route Travels - Study abroad admissions support website with Next.js, Tailwind CSS, custom SVG illustrations, and Formspree integration"

git remote add origin https://github.com/YOUR-USERNAME/easyroute-travels.git

git branch -M main

git push -u origin main
```

---

## What Gets Committed

✅ All source code (`src/`)
✅ Configuration files (`package.json`, `tsconfig.json`, etc.)
✅ Public assets (illustrations, etc.)
✅ Documentation files

❌ NOT committed (in `.gitignore`):
- `node_modules/` (dependencies)
- `.next/` (build files)
- `.env` (environment variables)
- OS files (`.DS_Store`, etc.)

---

## After Pushing

### View Your Repository
- Go to `https://github.com/YOUR-USERNAME/easyroute-travels`
- You'll see all your files!

### Clone to Another Computer
```powershell
git clone https://github.com/YOUR-USERNAME/easyroute-travels.git
cd easyroute-travels
npm install
npm run dev
```

### Make Future Commits
```powershell
# After making changes:
git add .
git commit -m "Description of changes"
git push
```

---

## Troubleshooting

### "git: The term 'git' is not recognized"
- Git not installed
- Restart PowerShell after installation
- Or use Command Prompt instead

### "fatal: not a git repository"
- Run `git init` first in your project directory

### "failed to push some refs"
- Make sure remote URL is correct
- Check GitHub credentials
- Try: `git push -u origin main`

### "Please tell me who you are"
- Run the git config commands:
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

---

## GitHub Markdown Tips

Once on GitHub, create a README.md (it will auto-display):

```markdown
# Easy Route Travels

Study Abroad Admissions Support | UK & Canada

## About
Easy Route Travels provides structured, transparent support to help students navigate university admissions confidently.

## Features
- Modern Next.js website
- Beautiful SVG illustrations
- Responsive design
- Formspree form integration
- Custom components

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Forms
- Eligibility Assessment: `/apply`
- Contact: `/contact`

## License
© 2026 Easy Route Travels
```

---

## Quick Commands Reference

```powershell
# Check status
git status

# View commit history
git log

# View recent commits (one line each)
git log --oneline

# Check remote URL
git remote -v

# Update from GitHub
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## Next Steps

1. ✅ Install Git
2. ✅ Create GitHub account
3. ✅ Create repository on GitHub
4. ✅ Run the commands above
5. ✅ View your project on GitHub
6. ✅ Share your GitHub link!

**Your project will be live and version controlled!** 🚀
