'use client'
import './globals.css'
import Link from 'next/link';
import RestrictRotation from './components/RestrictRotation';
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Maha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hi there! I'm Maha." />
        <link rel="icon" href="/fmagnifying-glass.svg" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Maha Kanakala" />
        <meta property="og:description" content="Hi there! I'm Maha." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="link to an image that represents your website or brand" />
        <meta property="og:url" content="maha-kanakala.vercel.app" />
        <meta name="github:card" content="summary" />
        <meta name="github:title" content="Maha Kanakala" />
        <meta name="github:description" content="Personal Website" />
        <meta name="github:image" content="link to an image that represents your website or brand" />
        <meta name="github:url" content="maha-kanakala.vercel.app" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}
        {/* <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
             <li>
              <Link href="/photos">Photos</Link>
            </li> 
            <li>
              <Link href="/contact">Contact</Link>
            </li> 
          </ul>
        </nav> */}
        <RestrictRotation />
      </body>
    </html>
  )
}
