# Quick Reference - What Changed

## 🔄 Key Changes Summary

### BEFORE (Using Strapi)
```javascript
// Fetching from API
const [servicesData, setServicesData] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services?populate=*`
    );
    const res = await response.json();
    setServicesData(res?.data);
  };
  fetchServices();
}, []);

// Using Strapi image URLs
<img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.service_image?.data?.attributes?.url}`} />
```

### AFTER (Using Static Data)
```javascript
// Direct import
import servicesData from '../../data/services.json';

// No fetching needed - data is immediately available!

// Simple image URLs
<img src={item?.attributes?.service_image?.url} />
```

## 📊 Files You'll Get

1. **download-images.js** - Downloads all 40+ images from Strapi
2. **portfolio.json** - All portfolio data
3. **services.json** - All services data
4. **MIGRATION_GUIDE.md** - Step-by-step instructions
5. **README.md** - Quick start guide

## 🚀 Quick Steps

1. Run `node download-images.js` in your project
2. Create `data/` folder and put the JSON files there
3. Update your pages to import JSON instead of fetching
4. Deploy and shut down AWS!

## 💰 Savings: £18/month → £0/month
