import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All-Star Pump Outs",
  description: "All-Star Pump Outs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11141175218"></Script>
      <Script>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date()); gtag('config', 'AW-11141175218');
          `
        }
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
