#!/bin/bash

# Elite Consultants - Cloudflare Deployment Script
# This script helps you deploy to Cloudflare in 3 steps

echo "🚀 Elite Consultants - Cloudflare Deployment Setup"
echo "=================================================="
echo ""
echo "BEFORE YOU START:"
echo "1. Create a GitHub account (if you don't have one): https://github.com"
echo "2. Create a Cloudflare account (if you don't have one): https://dash.cloudflare.com"
echo ""
echo "STEP 1: CREATE GITHUB REPOSITORY"
echo "================================"
echo "1. Go to: https://github.com/new"
echo "2. Enter repository name: eliteconsult-website"
echo "3. Leave 'Initialize repository' UNCHECKED"
echo "4. Click 'Create repository'"
echo "5. Copy the URL shown (looks like: https://github.com/YOUR_USERNAME/eliteconsult-website.git)"
echo ""
read -p "Have you created the GitHub repository? (yes/no): " github_done

if [ "$github_done" != "yes" ]; then
    echo "Please create the repository first at: https://github.com/new"
    exit 1
fi

echo ""
echo "STEP 2: PUSH CODE TO GITHUB"
echo "==========================="
read -p "Enter your GitHub repository URL (from step 1): " repo_url

if [ -z "$repo_url" ]; then
    echo "Error: Repository URL is required"
    exit 1
fi

cd "/Users/sp/Documents/Personal project/elitework"

echo "Adding remote repository..."
git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

echo "Renaming branch to main..."
git branch -M main

echo "Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed successfully!"
else
    echo "❌ Error pushing to GitHub. Check your URL and try again."
    exit 1
fi

echo ""
echo "STEP 3: DEPLOY TO CLOUDFLARE"
echo "============================"
echo "1. Go to: https://dash.cloudflare.com/sign-up"
echo "2. Sign up or log in to Cloudflare"
echo "3. Click 'Pages' in the sidebar"
echo "4. Click 'Create a project'"
echo "5. Select 'Connect to Git'"
echo "6. Choose 'GitHub' and authorize"
echo "7. Select your 'eliteconsult-website' repository"
echo ""
echo "BUILD SETTINGS TO USE:"
echo "  Framework preset: Next.js"
echo "  Build command: npm run build"
echo "  Build output directory: .next"
echo ""
echo "8. Click 'Save and Deploy'"
echo "9. Wait 2-5 minutes for deployment"
echo "10. You'll get a live URL! 🎉"
echo ""
echo "Your site will be live at something like:"
echo "https://eliteconsult-website.pages.dev"
echo ""
echo "✅ DEPLOYMENT SETUP COMPLETE!"
