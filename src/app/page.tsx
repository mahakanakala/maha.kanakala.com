"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
// import NameAnimation from './components/NameAnimation'

import { BsArrowUpRight } from 'react-icons/bs';

const typingText = ['maha', 'महा', 'మహా'];

export default function Home() {
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
      </header>
      <div className={styles.contentContainer}>
        <section className={styles.heroSection}>
          <div className={styles.nameSection}>
            <h1 className={styles.nameCenter}> MAHA
            </h1>
            {/* <NameAnimation /> */}
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
