const https = require("https");
const fs = require("fs");
const path = require("path");

const STRAPI_BASE = "https://strapi.modern-software.co.uk";
const STRAPI_API = `${STRAPI_BASE}/api`;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("✓ Created public/uploads/ directory");
}

// Fetch JSON from API
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

// Download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const fullUrl = STRAPI_BASE + url;
    const filePath = path.join(uploadsDir, filename);

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      console.log(`⊘ Skipped (exists): ${filename}`);
      resolve();
      return;
    }

    console.log(`Downloading: ${filename}`);

    https
      .get(fullUrl, (response) => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filePath);
          response.pipe(fileStream);

          fileStream.on("finish", () => {
            fileStream.close();
            console.log(`✓ Downloaded: ${filename}`);
            resolve();
          });
        } else {
          reject(
            new Error(`Failed to download ${filename}: ${response.statusCode}`)
          );
        }
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Extract all image URLs from an object recursively
function extractImageUrls(obj, urls = new Set()) {
  if (!obj || typeof obj !== "object") return urls;

  // Check if this object has a 'url' property that looks like an image path
  if (
    obj.url &&
    typeof obj.url === "string" &&
    obj.url.startsWith("/uploads/")
  ) {
    urls.add(obj.url);
  }

  // Recursively check all properties
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      extractImageUrls(obj[key], urls);
    }
  }

  return urls;
}

// Main function
async function downloadAllImages() {
  console.log("\n🚀 Starting image download from Strapi...\n");

  const allImageUrls = new Set();

  try {
    // 1. Fetch all portfolios
    console.log("📦 Fetching portfolio data...");
    const portfolioUrl = `${STRAPI_API}/portfolios?populate=*&pagination[pageSize]=100`;
    const portfolioData = await fetchJSON(portfolioUrl);
    console.log(`✓ Found ${portfolioData.data.length} portfolio items\n`);

    // Extract image URLs from portfolio
    extractImageUrls(portfolioData, allImageUrls);

    // 2. Fetch all services
    console.log("📦 Fetching services data...");
    const servicesUrl = `${STRAPI_API}/services?populate=*&pagination[pageSize]=100`;
    const servicesData = await fetchJSON(servicesUrl);
    console.log(`✓ Found ${servicesData.data.length} services\n`);

    // Extract image URLs from services
    extractImageUrls(servicesData, allImageUrls);

    // 3. Download all unique images
    console.log(`\n📥 Found ${allImageUrls.size} unique images to download\n`);

    const imageArray = Array.from(allImageUrls);
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (const url of imageArray) {
      const filename = path.basename(url);
      try {
        if (fs.existsSync(path.join(uploadsDir, filename))) {
          skipped++;
        } else {
          await downloadImage(url, filename);
          downloaded++;
        }
      } catch (error) {
        console.error(`✗ Error downloading ${filename}:`, error.message);
        failed++;
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log("✅ Download complete!");
    console.log("=".repeat(50));
    console.log(`📊 Summary:`);
    console.log(`   • Total images: ${allImageUrls.size}`);
    console.log(`   • Downloaded: ${downloaded}`);
    console.log(`   • Skipped (already exist): ${skipped}`);
    console.log(`   • Failed: ${failed}`);
    console.log(`   • Location: ${uploadsDir}`);
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

downloadAllImages();
