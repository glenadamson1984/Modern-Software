import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";
import React from "react";
import { useRouter } from "next/router";
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
    <AuthProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
