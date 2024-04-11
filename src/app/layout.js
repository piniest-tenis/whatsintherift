import "./globals.css";
import Controls from './components/Controls';
import Footer from './components/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://whatsintherift.com'),
  title: "What's In The Rift - Actual Play / Audio Drama hybrid using the Cortex Prime systemCreate Next App",
  description: "The hit actual play podcast from Gas Station Drugs. Hosted by Josh Burgess, run on Cortex Prime.",
  url: "whatsintherift.com",
  siteName: "What's in The Rift",
  images: [
    {
      url: 'https://whatsintherift.com//witr-showcard-season-2-twitter-preview.png',
      width: 800,
      height: 800,
      alt: 'The Season 2 Showcard for What\'s in The Rift. A black and white oil painting. A large black mountain stands in front of splatters of gray and black around its base. A black semi-circular arch extends from one side of the mountain to the other. A large H sits above a black circle surroundd by a white glowing border. Inside the circle is a dark gray spire with a bright white light at the top and two orbital paths in white surrounding it.',
    },
    {
      url: 'https://whatsintherift.com/witr-showcard-season-2.webp',
      width: 1800,
      height: 1800,
      alt: 'The Season 2 Showcard for What\'s in The Rift. A black and white oil painting. A large black mountain stands in front of splatters of gray and black around its base. A black semi-circular arch extends from one side of the mountain to the other. A large H sits above a black circle surroundd by a white glowing border. Inside the circle is a dark gray spire with a bright white light at the top and two orbital paths in white surrounding it.',
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What\'s in The Rift',
    description: 'The hit actual play podcast from Gas Station Drugs. Hosted by Josh Burgess, run on Cortex Prime.',
    site: '@whatsintherift',
    creator: '@whatsintherift',
    images: ['https://whatsintherift.com/witr-showcard-season-2-twitter-preview.png'],
  },
  locale: 'en_US',
  type: 'website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/671ba9862a.js" crossOrigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LXX0125J99" strategy="afterInteractive"
          id='ga_analytics' />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-LXX0125J99');
         `}
        </Script>
      </head>
      <GoogleTagManager gtmId="GTM-PH5DVSHG" />
      <body>
        <Controls />
        <video
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline //FIX iOS black screen
        >
          <source src={'/videos/season-2-bg-video-web.webm'} type={'video/webm'} />
        </video>
        <div id="bg-mask" />
        <main>
          {children}
        </main>
        <Footer />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          height="0"
          width="0"
        >
          <defs>
            <filter id="squiggle">
              <feTurbulence
                type="fractalNoise"
                id="turbulence"
                baseFrequency=".05"
                numOctaves="4"
              />
              <feDisplacementMap
                id="displacement"
                in="SourceGraphic"
                scale="4"
              />
            </filter>
          </defs>
        </svg>
      </body>
    </html>

  );
}
