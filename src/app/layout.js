import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Streaming fun with Amazon prime watch party",
  description:
    "Amazon Prime watch party allows you to stream and enjoy your favorite shows and movies together in real-time, with chat interaction, with audio and video calls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/main-logo.svg" />
        <link rel="canonical" href="https://www.amazonprimeparty.com/" />
        <meta
          name="google-site-verification"
          content="tCvjyM1W-PyhbwuUDIxqRmt45nVdtJQhvnv8oRvXzr8"
        />

        <meta property="og:url" content="https://www.amazonprimeparty.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Streaming fun with Amazon prime watch party "
        />
        <meta
          property="og:description"
          content="Amazon Prime watch party allows you to stream and enjoy your favorite shows and movies together in real-time, with chat interaction, with audio and video calls"
        />
        <meta
          property="og:image"
          content="https://www.amazonprimeparty.com/main-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="amazonprimewatchparty.com" />
        <meta
          property="twitter:url"
          content="https://www.amazonprimeparty.com/"
        />
        <meta
          name="twitter:title"
          content="Streaming fun with Amazon prime watch party "
        />
        <meta
          name="twitter:description"
          content="Amazon Prime watch party allows you to stream and enjoy your favorite shows and movies together in real-time, with chat interaction, with audio and video calls"
        />
        <meta
          name="twitter:image"
          content="https://www.amazonprimeparty.com/main-logo.svg"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DB61TJFG7T" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DB61TJFG7T');
          `,
          }}
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
