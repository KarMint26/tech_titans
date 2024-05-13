import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Wrapper from "@/components/custom/Wrapper";
import Footer from "@/components/custom/Footer";
import BtnBackTop from "@/components/custom/BtnBackTop";
import WABtn from "@/components/custom/WABtn";

const APP_NAME = "TECH TITANS";
const APP_DEFAULT_TITLE = "TECH TITANS";
const APP_TITLE_TEMPLATE = "TECH TITANS - %s";
const APP_DESCRIPTION =
  "Provides IT Solutions Services for Website and Mobile Apps Development and Consulting Related to IT Products.";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#128EF0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#128EF0"
            initialPosition={0.08}
            crawlSpeed={250}
            height={4}
            speed={250}
            showSpinner={false}
            shadow="0 0 25px #128EF0,0 0 20px #128EF0,0 0 15px #128EF0,0 0 10px #128EF0"
          />
          <Wrapper />
          {children}
          <Footer />
          <BtnBackTop />
          <WABtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
