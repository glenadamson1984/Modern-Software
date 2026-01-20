import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthProvider } from "../src/contexts/AuthContext";
config.autoAddCss = false;

function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const isLeadsPage = router.pathname === "/leads";

  if (isLeadsPage) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-1004932801"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-1004932801');
        `}
      </Script>
      <AuthProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
