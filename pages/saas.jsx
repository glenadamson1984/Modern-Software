import React from "react";
import { useRouter } from "next/router";
import useWindowSize from "../src/hooks/useWindowSize";
import SEO from "../src/components/SEO";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import ContactFooter from "../src/components/layout/ContactFooter";
import {
  StyledSaaSHero,
  StyledSaaSHeroContent,
  StyledSaaSHeroTitle,
  StyledSaaSHeroSubtitle,
  StyledSaaSSection,
  StyledSaaSContainer,
  StyledSaaSIntro,
  StyledSaaSIntroTitle,
  StyledSaaSIntroDescription,
  StyledSaaSGrid,
  StyledSaaSCard,
  StyledSaaSIcon,
  StyledSaaSBadge,
  StyledSaaSTitle,
  StyledSaaSDescription,
  StyledSaaSFeatures,
  StyledSaaSFeature,
  StyledSaaSCallToAction,
} from "../page-styles/saas.styles";

const SaaS = () => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();

  const saasProducts = [
    {
      id: "modern-leads",
      icon: "📊",
      badge: "Available Now",
      title: "Modern Leads",
      description:
        "A powerful lead management system designed to help businesses track, organize, and convert prospects into customers. Built with Firebase for secure, real-time data management.",
      features: [
        "Secure login and authentication",
        "Lead tracking with status management",
        "AI-powered company research integration",
        "Companies House search integration",
        "Follow-up reminders and notes",
        "Pagination for large lead lists",
        "Export and reporting capabilities",
      ],
      cta: "Learn More",
    },
    {
      id: "modern-bookings",
      icon: "📅",
      badge: "Available Now",
      title: "Modern Bookings",
      description:
        "Streamline your appointment scheduling with an intuitive booking system. Perfect for salons, clinics, consultants, and service-based businesses.",
      features: [
        "Online booking calendar",
        "Automated email reminders",
        "Customer management system",
        "Staff scheduling and availability",
        "Payment integration",
        "Mobile-friendly interface",
        "No-show tracking and management",
      ],
      cta: "Get Notified",
    },
    {
      id: "modern-inventory",
      icon: "📦",
      badge: "Available Now",
      title: "Modern Inventory",
      description:
        "Take control of your stock with a simple yet powerful inventory management system. Track products, manage suppliers, and never run out of stock again.",
      features: [
        "Real-time stock tracking",
        "Low stock alerts",
        "Supplier management",
        "Purchase order generation",
        "Barcode scanning support",
        "Multi-location inventory",
        "Sales and purchase reports",
      ],
      cta: "Get Notified",
    },
    {
      id: "modern-invoices",
      icon: "🧾",
      badge: "Available Now",
      title: "Modern Invoices",
      description:
        "Create, send, and track professional invoices effortlessly. Get paid faster with automated reminders and online payment options.",
      features: [
        "Professional invoice templates",
        "Automated payment reminders",
        "Online payment integration",
        "Expense tracking",
        "Tax calculation and reporting",
        "Client portal access",
        "Recurring invoice automation",
      ],
      cta: "Get Notified",
    },
    {
      id: "modern-analytics",
      icon: "📈",
      badge: "Coming Soon",
      title: "Modern Analytics",
      description:
        "Transform your business data into actionable insights. Simple dashboards that help you understand your business performance at a glance.",
      features: [
        "Real-time business dashboards",
        "Sales and revenue tracking",
        "Customer behavior analysis",
        "Custom report builder",
        "Export to Excel/PDF",
        "Automated weekly summaries",
        "Goal tracking and KPIs",
      ],
      cta: "Get Notified",
    },
    {
      id: "modern-forms",
      icon: "📝",
      badge: "Available Now",
      title: "Modern Forms",
      description:
        "Create beautiful, responsive forms without coding. Collect data, manage submissions, and integrate with your existing tools seamlessly.",
      features: [
        "Drag-and-drop form builder",
        "Conditional logic",
        "File upload support",
        "Email notifications",
        "Data export options",
        "Payment form integration",
        "Multi-step forms",
      ],
      cta: "Get Notified",
    },
  ];

  return (
    <>
      <SEO
        title="SaaS Products | Modern Software - Ready-to-Use Business Solutions"
        description="Discover Modern Software's SaaS products including Modern Leads, Modern Bookings, Modern Inventory, and more. Ready-to-use business solutions designed for small businesses in Northern Ireland."
        keywords="SaaS products, business software, lead management, booking system, inventory management, invoice software, business analytics, Northern Ireland software"
        canonicalUrl="/saas"
      />
      {/* SaaS Hero Section */}
      <StyledSaaSHero isDesktop={isDesktop}>
        {isDesktop && (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              opacity: 0.6,
            }}
          >
            <source
              src="/videos/7263301-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <StyledSaaSHeroContent>
          <StyledSaaSHeroTitle isDesktop={isDesktop}>
            SaaS Products & Ready-to-Use Solutions
          </StyledSaaSHeroTitle>
          <StyledSaaSHeroSubtitle isDesktop={isDesktop}>
            Powerful business tools designed to help you work smarter, not harder.
            Built for small businesses, priced for growth.
          </StyledSaaSHeroSubtitle>
        </StyledSaaSHeroContent>
      </StyledSaaSHero>

      {/* SaaS Products Section */}
      <StyledSaaSSection isDesktop={isDesktop}>
        <StyledSaaSContainer>
          <StyledSaaSIntro>
            <StyledSaaSIntroTitle>
              Bespoke Software Solutions
            </StyledSaaSIntroTitle>
            <StyledSaaSIntroDescription>
              We&apos;ve built a range of SaaS products that solve common business
              challenges. These ready-to-use solutions are designed to be
              affordable, easy to set up, and powerful enough to grow with your
              business. Whether you need lead management, booking systems, or
              inventory tracking, we have a solution that fits.
            </StyledSaaSIntroDescription>
          </StyledSaaSIntro>

          <StyledSaaSGrid>
            {saasProducts.map((product) => (
              <StyledSaaSCard key={product.id}>
                <StyledSaaSIcon>{product.icon}</StyledSaaSIcon>
                <StyledSaaSBadge>{product.badge}</StyledSaaSBadge>
                <StyledSaaSTitle>{product.title}</StyledSaaSTitle>
                <StyledSaaSDescription>{product.description}</StyledSaaSDescription>
                <StyledSaaSFeatures>
                  {product.features.map((feature, index) => (
                    <StyledSaaSFeature key={index}>{feature}</StyledSaaSFeature>
                  ))}
                </StyledSaaSFeatures>
                <StyledSaaSCallToAction>
                  <div style={{ maxWidth: "200px", margin: "0 auto" }}>
                    <CallToActionButton
                      variant="darkGreen"
                      onClick={() => router.push("/contactus")}
                    >
                      {product.cta}
                    </CallToActionButton>
                  </div>
                </StyledSaaSCallToAction>
              </StyledSaaSCard>
            ))}
          </StyledSaaSGrid>
        </StyledSaaSContainer>
      </StyledSaaSSection>
    </>
  );
};

export default SaaS;
