"use client"
import { useState, useEffect } from "react";
import React from 'react';
import styles from '../page.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image'

const experienceData = [
  // {
  //   title: 'TOXINS IN SKINCARE',
  //   type: 'DATA SCIENCE',
  //   languages: 'PYTHON',
  //   link: '',
  //   github: 'https://github.com/mahakanakala/toxins-in-skincare',
  //   image: '/images/projects/',
  // },
  {
    time: 'May-August 2024',
    position: 'Application Development Intern',
    company: 'Vanguard',
    link: 'https://whats-in-your-skincare.vercel.app/'
  },
  {
    time: 'May-August 2024',
    position: 'Application Devleopment Intern',
    company: 'Vanguard',
    link: 'https://whats-in-your-skincare.vercel.app/'
  },
  {
    time: 'May-August 2024',
    position: 'Application Devleopment Intern',
    company: 'Vanguard',
    link: 'https://whats-in-your-skincare.vercel.app/'
  },
  {
    time: 'May-August 2024',
    position: 'Application Devleopment Intern',
    company: 'Vanguard',
    link: 'https://whats-in-your-skincare.vercel.app/'
  },
  {
    time: 'May-August 2024',
    position: 'Application Devleopment Intern',
    company: 'Vanguard',
    link: 'https://whats-in-your-skincare.vercel.app/'
  },
];

export default function ExperienceSection() {
  const [activeProject, setActiveExperience] = useState<number | null>(null);

  const handleExperienceClick = (index: number) => {
    setActiveExperience((prevActive) => (prevActive === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxFillImage = document.querySelector('.experienceImage') as HTMLElement | null;

      if (maxFillImage) {
        const maxFillImageBottom = maxFillImage.offsetTop + maxFillImage.offsetHeight;
        const scrolledToBottom = window.scrollY + window.innerHeight >= maxFillImageBottom;

        if (scrolledToBottom) {
          setActiveExperience(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // export default function ProjectsSection() {
  // make 2 divs side by side using float property
  // 1 box will have the time
  // 2 box will have the position and company (with interactive Link)
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>Experience</h2>
      {experienceData.map((experience, index) => (
        <section key={index}>
            <div className={styles.experienceDiv}>
              <div className={styles.experienceYear}>
                
                  </div>
              <div className={styles.experiencePosition}>
                
                  </div>
          </div>
          {/* <hr className={styles.sectionLine} id="end"/> */}
        </section>
      ))}
      <hr className={styles.sectionLine} />
    </div>
  );
}