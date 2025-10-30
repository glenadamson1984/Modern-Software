# Modern Software - Static Migration Package

This package contains everything you need to convert your Modern Software website from Strapi to static JSON files.

## 📦 What's Included

- `download-images.js` - Script to download all images from Strapi
- `data/portfolio.json` - All your portfolio items as static data
- `data/services.json` - All your services as static data
- `MIGRATION_GUIDE.md` - Detailed step-by-step instructions

## 🚀 Quick Start

### 1. Download Images

Copy `download-images.js` to your project root and run:
```bash
node download-images.js
```

This will create `public/uploads/` with all your images.

### 2. Add Data Files

Copy the entire `data/` folder to your project root.

### 3. Update Your Code

Follow the instructions in `MIGRATION_GUIDE.md` to update your pages.

**Key changes:**
- Import JSON files instead of fetching from API
- Remove `process.env.NEXT_PUBLIC_STRAPI_*` references
- Update image URLs (remove Strapi base URL)

### 4. Test & Deploy

```bash
npm run dev  # Test locally
git add . && git commit -m "Migrate to static data" && git push  # Deploy
```

### 5. Shut Down AWS

Once verified, terminate your EC2 instance and save £18/month!

## 💰 Cost Savings

- **Before:** £18/month for AWS/Strapi
- **After:** £0/month (Vercel free tier)

## 📖 Full Documentation

See `MIGRATION_GUIDE.md` for complete instructions and troubleshooting.

## ✅ Checklist

- [ ] Run `download-images.js`
- [ ] Copy `data/` folder to project
- [ ] Update services pages
- [ ] Update portfolio pages
- [ ] Remove Strapi env variables
- [ ] Test locally
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Shut down AWS

## 🆘 Need Help?

Check the Troubleshooting section in `MIGRATION_GUIDE.md`
