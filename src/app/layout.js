import "./globals.css";
import Navbar from "@/components/layout/navbar";
import LayProvider from "@/components/provider";
import ClientLayout from "@/content/provider/clientlayout";
import Script from "next/script";

export const metadata = {
  title: "Aran-Portfolio-Website",
  description: "This is my personal portfolio website to showcase my work."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
          strategy="lazyOnload"
        />
      </head>
        <body className="antialiased">
          <Navbar />
          <ClientLayout className='w-full'>
            {children}
          </ClientLayout>
          <div className="flex md:hidden">{children}</div>
        </body>
    </html>
  );
}
