import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unique - Expressions - Hair Studio",
  description: "Unique - Expressions - Hair Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="author" content="themesflat.com" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <link rel="stylesheet" href="fonts/fonts.css" />
          <link rel="stylesheet" href="fonts/font-icons.css" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/drift-basic.min.css" />
          <link rel="stylesheet" href="css/photoswipe.css" />
          <link rel="stylesheet" href="css/swiper-bundle.min.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" type="text/css" href="css/styles.css" />

          <link rel="shortcut icon" href="images/demo/UNIQUE HAIRs.png" />
          <link
            rel="apple-touch-icon-precomposed"
            href="images/demo/NEW LOGO WHITE.png"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased preload-wrapper color-primary-4`}
        >
          {children}

          <Script src="js/bootstrap.min.js" />
          <Script src="js/jquery.min.js" />
          <Script src="js/swiper-bundle.min.js" />
          <Script src="js/carousel.js" />
          <Script src="js/count-down.js" />
          <Script src="js/bootstrap-select.min.js" />
          <Script src="js/lazysize.min.js" />
          <Script src="js/bootstrap-select.min.js" />
          <Script src="js/drift.min.js" />
          <Script src="js/wow.min.js" />
          <Script src="js/multiple-modal.js" />
          <Script src="js/main.js" />
          <Script src="js/shop.js" />
          <Script src="js/model-viewer.min.js" />

          <Script src="js/zoom.js" />
        </body>
      </html>
    </ClerkProvider>
  );
}
