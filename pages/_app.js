import "@/styles/globals.css"
import "@/styles/animation.css"

import Head from 'next/head';
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"
import { Analytics } from "@vercel/analytics/react"
import ReactGA from "react-ga4";
import { PortfolioProvider } from "@/contextApi/PortfolioContext"
import ThemeProvider from "@/context/themeContext"

if (process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
} else {
  console.warn("Google Analytics Measurement ID is missing.");
}



export default function App({ Component, pageProps }) {

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  )
}
