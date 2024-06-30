import React from "react";
import Head from './head'
import styles from "./page.module.css";
 
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';

export default function Home() {
  return (
    <>
      <div className={styles.introSection}>
        <h3 className={styles.headerIntro}> Maha Kanakala</h3>
        <div className={styles.introAndPicture}>
          <div className={styles.textContainer}>
        <div className={styles.intro}>Hi there, I am a <br />computer science major <br /> at Rutgers Univeristy</div>
            <div className={styles.description}>(currently interning at Vanguard)</div> 
          </div>
          <div>
          <h1 className={styles.introImage}>SOME IMAGE</h1>
        </div>
        </div>
        
        </div>
      <section>
      <hr className={styles.sectionLine} />
            <div className={styles.introGrid}>
            <div className={styles.introTitle}> Interests </div>
            <div className={styles.introTech}>DATA ENGINEERING, MACHINE LEARNING, UX/UI </div>
          </div>
          <hr className={styles.sectionLine} id="end"/>
      <ExperienceSection/>
        <div className={styles.nameContainer}>
          {/* <div className={styles.videoContainer}>
            <video autoPlay muted loop >
              <source src="/videos/0208d89b4b72440ca37722f78bf78e76.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
          
      </section>
      <ProjectsSection />
    </>
  );
}