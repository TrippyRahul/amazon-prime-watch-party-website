import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Streaming fun with Amazon prime watch party",
  description:
    "Amazon Prime watch party allows you to stream and enjoy your favorite shows and movies together in real-time, with chat interaction, with audio and video calls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.amazonprimeparty.com/" />

        <meta
          property="og:url"
          content="https://www.amazonprimeparty.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Streaming fun with Amazon prime watch party " />
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
        <meta name="twitter:title" content="Streaming fun with Amazon prime watch party " />
        <meta
          name="twitter:description"
          content="Amazon Prime watch party allows you to stream and enjoy your favorite shows and movies together in real-time, with chat interaction, with audio and video calls"
        />
        <meta
          name="twitter:image"
          content="https://www.amazonprimeparty.com/main-logo.svg"
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
