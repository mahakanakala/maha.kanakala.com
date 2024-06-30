"use client"
import { useState, useEffect } from "react";
import React from 'react';
import styles from '../page.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image'

const projectsData = [
  // {
  //   title: 'TOXINS IN SKINCARE',
  //   type: 'DATA SCIENCE',
  //   languages: 'PYTHON',
  //   link: '',-z
  //   github: 'https://github.com/mahakanakala/toxins-in-skincare',
  //   image: '/images/projects/',
  // },
  {
    title: 'SKINTELLIGENCE',
    type: 'WEB DEV',
    languages: 'JAVASCRIPT, TYPESCRIPT, CSS',
    link: 'https://whats-in-your-skincare.vercel.app/',
    github: 'https://github.com/mahakanakala/skintelligence_website',
    image: '/images/projects/skincare_web_proj.png',
    description: 'This web app allows users to scan their skincare products and see a list of potentially harmful ingredients. By providing transparency around skincare ingredients, the app empowers consumers to make more informed choices.'
  },
  // {
  //   title: 'VSCO ANALYZER',
  //   type: 'DATA SCIENCE',
  //   languages: 'PYTHON',
  //   link: 'https://github.com/mahakanakala/vsco_analyzer',
  //   github: 'https://github.com/mahakanakala/vsco_analyzer',
  //   image: '/images/projects/',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // },
  {
    title: 'GLOBAL TEMPERATURE TIME FORECASTING MODEL',
    type: 'AI, ML',
    languages: 'PYTHON',
    link: 'https://global-weather-forecaster.streamlit.app/',
    github: 'https://github.com/mahakanakala/datathon23',
    image: '/images/projects/temp_project.png',
    description: 'This project is a Streamlit web app that uses the Prophet forecasting model to predict global temperature anomalies over time. It includes visualizations like animated charts and heatmaps to explore trends and seasonality, as well as an integrated question-answering chatbot.'
  },
  {
    title: 'OCEAN POLLUTION MAP',
    type: 'AI, DATA SCIENCE',
    languages: 'PYTHON',
    link: 'https://kelp-keep-the-oceans-safe.streamlit.app/',
    github: 'https://github.com/mahakanakala/kelp-keep-the-oceans-safe',
    image: '/images/projects/njit_proj.png',
    description: 'The project is built using Streamlit, Pandas, Folium, Google Cloud Storage, Transformers, and Vertex AI, and aims to inform and engage users by visualizing real-time data about oil spills and garbage patches across the world\'s oceans. Users can report new incidents, interact with a question-answering chatbot, and explore the interactive map interface.'
  },
  {
    title: 'PORTFOLIO TEMPLATE (CS LLC)',
    type: 'WEB DEV',
    languages: 'HTML, CSS',
    link: 'https://mahakanakala.github.io/csllc-webtemplate/',
    github: 'https://github.com/mahakanakala/csllc-webtemplate',
    image: '/images/projects/template_proj.png',
    description: 'This portfolio website template, created as part of the Computer Science LLC, uses HTML and CSS to help beginners showcase their projects, achievements, blog, and photos. With the option to explore popular web frameworks like React, Angular, or Vue.js, the template provides a solid foundation to build an engaging online presence.'
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setActiveProject((prevActive) => (prevActive === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxFillImage = document.querySelector('.projectImage') as HTMLElement | null;

      if (maxFillImage) {
        const maxFillImageBottom = maxFillImage.offsetTop + maxFillImage.offsetHeight;
        const scrolledToBottom = window.scrollY + window.innerHeight >= maxFillImageBottom;

        if (scrolledToBottom) {
          setActiveProject(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

// export default function ProjectsSection() {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>PROJECTS</h2>
      {projectsData.map((project, index) => (
        <section key={index}>
          <div className="stickyBar" id="start"> 
          <hr className={styles.sectionLine} />
            <div className={styles.projectGrid}>
              <div className={styles.projectImageWrapper}>
              <div className={styles.projectImage}>
            <Image
                    src={project.image}
                    fill={true}
                    alt='project picture'
                    // width={260}
                    // height={170}
            />
                </div>
                </div>
              <div className={ styles.projectTitleAndDescription}>
              <div className={styles.sectionTitle}>{project.title} </div>
                <div className={styles.projectDescription}> {project.description}</div>
                </div>
            <div className={styles.projectType}> ({project.type})</div>
            <div className={styles.projectLanguages}>{project.languages}</div>
            <div className={styles.githubIcon}>
              {project.github ? (
                <a title="github" href={project.github} target="_blank" rel="noopener noreferrer" >
                  <AiFillGithub />
                </a>
              ) : null}
            </div>
              <div id='visibleContainer' className={styles.projectView}>  <a href={project.link}> VIEW PROJECT </a> </div>
            <div className={styles.arrow}>
              <a title='project' href={project.link} target="_blank" rel="noopener noreferrer">
                <BsArrowUpRight />
              </a>
            </div>
          </div>
          {/* <hr className={styles.sectionLine} id="end"/> */}
          </div>
        </section>
      ))}
      <hr className={styles.sectionLine} />
    </div>
  );
}