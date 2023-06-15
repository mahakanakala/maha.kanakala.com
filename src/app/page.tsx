import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import { Noto_Serif_Telugu } from "next/font/google";
import { EB_Garamond } from "next/font/google"
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight } from 'react-icons/Bs';


const Devarangi = Noto_Sans_Devanagari({ subsets: ["latin"] });
const Telugu = Noto_Serif_Telugu({ subsets: ["latin"] });
const Playfair = Playfair_Display({ subsets: ["latin"] });

// const DynamicProjectsSection = dynamic(() => import("./ProjectsSection.js"), {
//   ssr: false,
// });

export default function Home() {
  const selectedPage = "Home";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.nameSection}>
          <div className={styles.floatParentElement}>
            <div className={styles.nameHeader}>MAHA KANAKALA</div>
          </div>
          <div className={styles.floatChildElement}>
            <div className={styles.subtitle}>COMPUTER SCIENCE STUDENT</div>
          </div>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li
              className={`${styles.navItem} ${selectedPage === "Home" ? styles.active : ""
                }`}
            >
              <a href="#">Home</a>
            </li>
            <li
            // className={`${styles.navItem} ${selectedPage === "Projects" ? styles.active : ""
            //   }`}
            >
              <a href="#">Projects</a>
            </li>
            <li

            >
              <a href="#">Blog</a>
            </li>
            <li

            >
              <a href="#">Photos</a>
            </li>
            <li

            >
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.contentContainer}>
        <section className={styles.heroSection}>
          <div className={styles.nameSection}>
            <h1 className={styles.nameCenter}> MAHA
              {/* <Typewriter
                options={{
                  strings: ['Hello', 'World'],
                  autoStart: true,
                  loop: true,
                }}
              /> */}

            </h1>
            <div className={styles.floatChildElement}>
              <Image
                src="/images/mandala.png"
                alt="Background Image"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>
        <h2 className={styles.projectsTitle}>PROJECTS</h2>
        <section>
          <hr className={styles.sectionLine} />
          <div className={styles.parent}>
            <div className={styles.sectionTitle}>
              TOXINS IN SKINCARE</div>
            <div className={styles.projectType}> (DATA SCIENCE) </div>
            <div className={styles.projectLanguages}> PYTHON </div>
            <div className={styles.projectView}> VIEW PROJECT</div>
            <div className={styles.arrow}>
              <a href="https://github.com/mahakanakala/toxins-in-skincare"><BsArrowUpRight /></a>
               </div>
          </div>
        </section>
        <section>
          <hr className={styles.sectionLine} />
          <div className={styles.parent}>
            <div className={styles.sectionTitle}>
              STICKIES (OBSIDIAN EXTENSION)</div>
            <div className={styles.projectType}> (WEB DEV) </div>
            <div className={styles.projectLanguages}> JAVASCRIPT </div>
            <div className={styles.projectView}> VIEW PROJECT</div>
            <div className={styles.arrow}> <BsArrowUpRight /> </div>
          </div>
        </section>
        <section>
          <hr className={styles.sectionLine} />
          <div className={styles.parent}>
            <div className={styles.sectionTitle}>
              STOCKS PREDICTION</div>
            <div className={styles.projectType}> (DATA SCIENCE, AI) </div>
            <div className={styles.projectLanguages}> PYTHON </div>
            <div className={styles.projectView}> VIEW PROJECT</div>
            <div className={styles.arrow}>

              <BsArrowUpRight />  </div>
          </div>
        </section>
        <hr className={styles.sectionLine} />

        
      </div>
    </div>
  );
}
