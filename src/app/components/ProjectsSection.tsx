"use client"
import { useState, useEffect } from "react";
import React from 'react';
import styles from '../page.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image'

const projectsData = [
  {
    title: 'TOXINS IN SKINCARE',
    type: 'DATA SCIENCE',
    languages: 'PYTHON',
    link: '',
    github: 'https://github.com/mahakanakala/toxins-in-skincare',
    image: '/images/toxins_website_preview.gif',
  },
  {
    title: 'SKINTELLIGENCE',
    type: 'WEB DEV',
    languages: 'JAVASCRIPT, TYPESCRIPT, CSS',
    link: 'https://whats-in-your-skincare.vercel.app/',
    github: 'https://github.com/mahakanakala/skintelligence_website',
    image: '/images/toxins_website_preview.gif',
  },
  {
    title: 'VSCO ANALYZER',
    type: 'DATA SCIENCE',
    languages: 'PYTHON',
    link: 'https://github.com/mahakanakala/vsco_analyzer',
    github: 'https://github.com/mahakanakala/vsco_analyzer',
    image: '/images/toxins_website_preview.gif',
  },
  {
    title: 'GLOBAL TEMPERATURE TIME FORECASTING MODEL',
    type: 'AI',
    languages: 'PYTHON',
    link: 'https://global-weather-forecaster.streamlit.app/',
    github: 'https://github.com/mahakanakala/datathon23',
    image: '/images/toxins_website_preview.gif',
  },
  {
    title: 'PORTFOLIO TEMPLATE (CS LLC)',
    type: 'WEB DEV',
    languages: 'HTML, CSS',
    link: 'https://mahakanakala.github.io/csllc-webtemplate/',
    github: 'https://github.com/mahakanakala/csllc-webtemplate',
    image: '/images/toxins_website_preview.gif',
  },
];

export default function ProjectsSection() {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>PROJECTS</h2>
      {projectsData.map((project, index) => (
        <section key={index}>
          <div className="stickyBar" id="start"> 
          <hr className={styles.sectionLine} />
          <div className={styles.projectGrid}>
            <div className={styles.sectionTitle}>{project.title}</div>
            <div className={styles.projectType}> ({project.type})</div>
            <div className={styles.projectLanguages}>{project.languages}</div>
            <div className={styles.githubIcon}>
              {project.github ? (
                <a title="github" href={project.github} target="_blank" rel="noopener noreferrer" >
                  <AiFillGithub />
                </a>
              ) : null}
            </div>
            <div id='visibleContainer' className={styles.projectView}>VIEW PROJECT</div>
            <div className={styles.arrow}>
              <a title='project' href={project.link} target="_blank" rel="noopener noreferrer">
                <BsArrowUpRight />
              </a>
            </div>
          </div>
          {/* <hr className={styles.sectionLine} id="end"/> */}
          </div>
          {/* <div className={styles.projectImage}>
            <Image
              src={project.image}
              fill={true}
              alt='project picture'
            />
          </div> */}
        </section>
      ))}
      <hr className={styles.sectionLine} />
    </div>
  );
}