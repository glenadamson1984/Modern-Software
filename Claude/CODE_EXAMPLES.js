// ==========================================
// EXAMPLE: Services Page Update
// File: pages/services/index.js
// ==========================================

// ✅ ADD THIS IMPORT AT THE TOP
import servicesData from '../../data/services.json';

const Services = () => {
  const { pathname } = useRouter();
  
  // ❌ DELETE ALL OF THIS:
  // const [servicesData, setServicesData] = useState([]);
  // useEffect(() => { fetchServices(); }, []);
  // const fetchServices = async () => {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services?populate=*`);
  //   const res = await response?.json();
  //   setServicesData(res?.data);
  // };

  // ✅ servicesData is now available directly from the import!
  
  return (
    <SubPageLayout subTitle={"What we do"}>
      {servicesData?.map((item, index) => (
        <div key={index}>
          {/* ✅ CHANGE IMAGE URL FROM: */}
          {/* <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.service_image?.data?.attributes?.url}`} /> */}
          
          {/* ✅ TO: */}
          <img src={item?.attributes?.service_image?.url} />
          
          <h2>{item?.attributes?.title}</h2>
          <p>{item?.attributes?.service_description}</p>
        </div>
      ))}
    </SubPageLayout>
  );
};

// ==========================================
// EXAMPLE: Portfolio Detail Update
// File: pages/portfolio/[id].jsx
// ==========================================

// ✅ ADD THIS IMPORT
import portfolioData from '../../data/portfolio.json';

const Detail = () => {
  const router = useRouter();
  let { id } = router.query;

  // ✅ REPLACE fetch logic WITH:
  const portfolioItem = portfolioData.find(p => p.id === parseInt(id));
  const threePortfolioData = portfolioData.filter(p => p.id !== parseInt(id)).slice(0, 3);

  // ❌ DELETE:
  // const [portfolioData, setPortfolioData] = useState(Object);
  // useEffect(() => { fetchPortfolio(); }, [router.query]);
  // const fetchPortfolio = async () => { ... };

  if (!portfolioItem) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <PortfolioDetailHeader portfolioData={portfolioItem} />
      <PortfolioDetailSuccessStories threePortfolioData={threePortfolioData} />
    </div>
  );
};

// ==========================================
// EXAMPLE: Service Detail Update
// File: pages/services/[id].jsx
// ==========================================

// ✅ ADD THIS IMPORT
import servicesData from '../../data/services.json';

const Detail = () => {
  const router = useRouter();
  let { id } = router.query;

  // ✅ REPLACE fetch logic WITH:
  const serviceData = servicesData.find(s => s.id === parseInt(id));

  // ❌ DELETE:
  // const [servicesData, setServicesData] = useState("");
  // useEffect(() => { fetchServices(); }, [id]);
  // const fetchServices = async () => { ... };

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <SubPageLayout>
      <h1>{serviceData?.attributes?.title}</h1>
      <p>{serviceData?.attributes?.service_description}</p>
    </SubPageLayout>
  );
};
