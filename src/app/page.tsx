import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  const googleAnalyticsId = process.env.GA_TRACKING_ID;

  return (
    <>
      <Head>
        <title>Maha Kanakala</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hello, I'm Maha Kanakala. I'm a software engineer based in the Tri-state Area."
        />
        <link rel="icon" href="/fmagnifying-glass.svg" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:title" content="What's in your Skincare?" />
        <meta
          property="og:description"
          content="Discover the ingredients in your skincare products and learn about their benefits and potential risks."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="link to an image that represents your website or brand" />
        <meta property="og:url" content="the URL of the website" />
        <meta name="github:card" content="summary" />
        <meta name="github:title" content="What's in your Skincare?" />
        <meta
          name="github:description"
          content="Maha Kanakala's personal website."
        />
        <meta name="github:image" content="link to an image that represents your website or brand" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `,
          }}
        ></script>
      </Head>
      <div className={styles.main}>
        <section className={styles.heroSection}>
          <h3 className={styles.headerIntro}> MAHA KANAKALA</h3>
          <h2 className={styles.openerName}>SOFTWARE ENGINEERING STUDENT</h2>
          <div className={styles.nameSection}>
            <div className={styles.nameContainer}>
              <h1 className={styles.nameCenter}> MAHA </h1>
            </div>
            {/* <div className={styles.videoContainer}>
              <video autoPlay muted loop >
                <source src="/videos/0208d89b4b72440ca37722f78bf78e76.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </section>
        <ProjectsSection />
      </div>
    </>
  );
}
