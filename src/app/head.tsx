import Script from 'next/script'

export default function Head() {
    return (
      <>
        <title>Maha | Portfolio</title>
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
        <div>
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WMXHY7QDNB`}
      />
          <Script
              id="ga-script"
              strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WMXHY7QDNB', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
        </div>
        
      </>
    )
  }
  