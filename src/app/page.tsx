import React from "react";
import Head from './head'
import styles from "./page.module.css";

import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head/>
      <div className={styles.main}>
        <section className={styles.heroSection}>
          <h3 className={styles.headerIntro}> MAHA KANAKALA</h3>
          <h2 className={styles.openerName}>SOFTWARE ENGINEERING STUDENT</h2>
            <div className={styles.nameContainer}>
              <h1 className={styles.nameCenter}> MAHA </h1>
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
