# Migration Guide: From Strapi to Static Data

This guide will help you convert your Modern Software website from using Strapi CMS to static JSON files.

## 📋 What You'll Need

1. The JSON data files (`portfolio.json` and `services.json`)
2. All images downloaded from Strapi
3. Your existing Next.js codebase

## 🚀 Step-by-Step Migration

### Step 1: Download All Images

1. Save the `download-images.js` file to your project root
2. Run it to download all images:
   ```bash
   node download-images.js
   ```
3. This will create a `public/uploads/` folder with all your images

### Step 2: Add JSON Data Files

1. Create a `data` folder in your project root:
   ```bash
   mkdir data
   ```

2. Copy `portfolio.json` and `services.json` into the `data` folder

Your folder structure should look like:
```
your-project/
├── data/
│   ├── portfolio.json
│   └── services.json
├── public/
│   └── uploads/
│       ├── take2_9ea5249bf3.jpg
│       ├── Terra_Quest_Logo_1024x338_118b2c40ca.png
│       └── ... (all other images)
├── pages/
├── src/
└── ...
```

### Step 3: Update Your Code

#### A. Services Page (`pages/services/index.js`)

**BEFORE:**
```javascript
const fetchServices = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services?populate=*`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const res = await response?.json();
      setServicesData(res?.data);
    }
  } catch (e) {
    toast.error("Please try again later.", { theme: "colored" });
  }
};
```

**AFTER:**
```javascript
import servicesData from '../../data/services.json';

// In your component, remove the useEffect and fetchServices
// Just use the imported data directly:
const Services = () => {
  // Remove: const [servicesData, setServicesData] = useState([]);
  // Remove: useEffect(() => { fetchServices(); }, []);
  
  // servicesData is now directly available!
  
  return (
    <SubPageLayout subTitle={"What we do"}>
      {servicesData?.map((item, index) => (
        <div key={index} className="grid gap-20">
          {/* ... rest of your JSX */}
          <img
            src={item?.attributes?.service_image?.url}
            alt={item?.attributes?.title}
          />
          {/* ... */}
        </div>
      ))}
    </SubPageLayout>
  );
};
```

#### B. Service Detail Page (`pages/services/[id].jsx`)

**BEFORE:**
```javascript
const fetchServices = async () => {
  try {
    let queryPrams = `populate=*`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services/${id}?${queryPrams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const res = await response?.json();
      setServicesData(res?.data);
    }
  } catch (e) {
    toast.error("Please try again later.", { theme: "colored" });
  }
};
```

**AFTER:**
```javascript
import servicesData from '../../data/services.json';

const Detail = () => {
  const router = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  let { id } = router.query;
  
  // Find the service by ID
  const serviceData = servicesData.find(s => s.id === parseInt(id));

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <SubPageLayout subTitle={"How we work?"}>
      <div className="pb-10">
        <div className="px-6 pt-16 text-4xl font-Inter text-pink sm:pt-8 sm:flex-1">
          {serviceData?.attributes?.title}
        </div>
        <div className="px-6 pt-16 text-xl font-Inter sm:pt-8">
          {serviceData?.attributes?.service_description}
        </div>
      </div>
      {/* ... rest of your component */}
    </SubPageLayout>
  );
};
```

#### C. Portfolio Page (`pages/portfolio/index.js`)

This page uses components, so update those component files to import the data:

**In PortfolioCard component:**
```javascript
import portfolioData from '../../data/portfolio.json';

const PortfolioCard = () => {
  // Remove the fetch logic
  // Use portfolioData directly
  
  return (
    <>
      {portfolioData?.map((item, index) => (
        // ... your JSX
      ))}
    </>
  );
};
```

#### D. Portfolio Detail Page (`pages/portfolio/[id].jsx`)

**BEFORE:**
```javascript
const fetchPortfolio = async () => {
  try {
    let queryPrams = `populate=*`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios/${id}?${queryPrams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const res = await response?.json();
      setPortfolioData(res?.data);
    }
  } catch (e) {
    toast.error("Please try again later.", { theme: "colored" });
  }
};

const fetchThreePortfolio = async () => {
  // Similar fetch for 3 items
};
```

**AFTER:**
```javascript
import portfolioData from '../../data/portfolio.json';

const Detail = () => {
  const router = useRouter();
  let { id } = router.query;

  // Find the portfolio item by ID
  const portfolioItem = portfolioData.find(p => p.id === parseInt(id));
  
  // Get 3 random items for "More Success Stories"
  const threePortfolioData = portfolioData
    .filter(p => p.id !== parseInt(id))
    .slice(0, 3);

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <>
      {Object.keys(portfolioItem)?.length > 0 && (
        <div className="casestudy-template-default single single-casestudy">
          <div className="u-fill-site " style={{ backgroundColor: "#7bcda4" }}>
            <PortfolioDetailHeader portfolioData={portfolioItem} />
            <div className="s-cms-content">
              <PortfolioDetailChallenge portfolioData={portfolioItem} />
              <PortfolioDetailSolution portfolioData={portfolioItem} />
              <PortfolioDetailResult portfolioData={portfolioItem} />
              <PortfolioDetailSuccessStories
                threePortfolioData={threePortfolioData}
              />
              <PortfolioDetailStartProject />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
```

### Step 4: Update Image URLs

**Important:** Your code currently uses:
```javascript
src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.service_image?.data?.attributes?.url}`}
```

Change this to:
```javascript
src={item?.attributes?.service_image?.url}
```

The images are now in `public/uploads/`, so URLs like `/uploads/image.jpg` will work automatically in Next.js!

### Step 5: Remove Environment Variables

In your `.env.local` file, you can remove:
```
NEXT_PUBLIC_STRAPI_API_URL=...
NEXT_PUBLIC_STRAPI_BASE_URL=...
```

### Step 6: Test Locally

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Visit these pages to test:
   - http://localhost:3000/services
   - http://localhost:3000/services/1
   - http://localhost:3000/portfolio
   - http://localhost:3000/portfolio/7

3. Check that:
   - All images load correctly
   - All text displays properly
   - Navigation between pages works
   - No console errors

### Step 7: Deploy to Vercel

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Migrate from Strapi to static data"
   git push
   ```

2. Vercel will automatically redeploy

3. Test your live site!

### Step 8: Shut Down AWS

Once you've confirmed everything works:

1. **Backup your EC2 data** (just in case)
2. Go to AWS Console → EC2
3. Terminate your instance
4. Delete associated EBS volumes
5. Release any Elastic IPs
6. If you have RDS, delete that too

## 🎉 You're Done!

Your site is now:
- ✅ Fully static
- ✅ No monthly AWS costs
- ✅ Still hosted on Vercel (free)
- ✅ Same look and functionality

## 📝 To Update Content in the Future

Simply edit the JSON files in `/data/`:
- Edit `data/services.json` to update services
- Edit `data/portfolio.json` to update portfolio items
- Add new images to `public/uploads/`

Then commit and push to trigger a redeploy!

## 🔧 Troubleshooting

**Images not loading?**
- Check that images are in `public/uploads/`
- Check that URLs in JSON start with `/uploads/`

**Data not showing?**
- Check that JSON files are in the `data/` folder
- Check that imports are correct
- Check browser console for errors

**Old API calls still happening?**
- Search your codebase for `STRAPI` or `process.env.NEXT_PUBLIC_STRAPI`
- Make sure all fetch calls are removed
