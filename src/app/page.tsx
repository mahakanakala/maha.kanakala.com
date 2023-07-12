"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
// import NameAnimation from './components/NameAnimation'
import ProjectsSection from './components/ProjectsSection'
import { BsArrowUpRight } from 'react-icons/bs';

const typingText = ['maha', 'महा', 'మహా'];

export default function Home() {
  return (
    <div className={styles.main}>
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
      <section className={styles.heroSection}>
        <div className={styles.nameSection}>
          <h1 className={styles.nameCenter}> MAHA
          </h1>
          {/* <NameAnimation /> */}
          <div>
            <Image
              src="/images/mandala.png"
              alt="Background Image"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              className={styles.bgImage}
            />
          </div>
        </div>
      </section>
      <ProjectsSection />
    </div>
  );
}
