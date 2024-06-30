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
    link: 'https://investor.vanguard.com/corporate-portal'
  },
  {
    time: 'May-August 2023',
    position: 'Data Science Intern',
    company: 'Amplo Global',
    link: 'https://amploglobal.com/about-amplo-global/'
  },
  {
    time: 'May-August 2022',
    position: 'Software Engineering Intern',
    company: 'Zenith Services',
    link: 'https://zenithcad.com/'
  },
  {
    time: 'December-January 2022',
    position: 'UX Design Extern',
    company: 'Microsoft',
    link: 'https://leap.microsoft.com/en-US/pathways/design/user-experience-designer/'
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
    <div className={styles.experienceContainer}>
      <div className={styles.experienceTitle}>EXPERIENCE</div>
      <div className={styles.experiences}>
        {experienceData.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles.details}>
              <div className={styles.time}>{exp.time}</div>
              <div className={styles.rightDetails}>
                <div className={styles.positionAndCompany}>
                  <div className={styles.position}>{exp.position}</div>
                  <div className={styles.company}>
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {exp.company}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}