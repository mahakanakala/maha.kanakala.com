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
    image: '/images/mandala.png',
  },
  {
    title: 'WHATS IN YOUR SKINCARE?',
    type: 'WEB DEV',
    languages: 'JAVASCRIPT, TYPESCRIPT, CSS',
    link: 'https://toxins-web.vercel.app/',
    github: 'https://github.com/mahakanakala/toxins-web',
    image: '/images/mandala.png',
  },
  {
    title: 'WEBSITE TEMPLATE (CS LLC)',
    type: 'WEB DEV',
    languages: 'HTML, CSS',
    link: 'https://mahakanakala.github.io/csllc-webtemplate/',
    github: 'https://github.com/mahakanakala/csllc-webtemplate',
    image: '/images/mandala.png',
  },
];

export default function ProjectsSection() {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>PROJECTS</h2>
      {projectsData.map((project, index) => (
        <section key={index}>
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
          <hr className={styles.sectionLine} />
          <div id='hiddenContainer' className={styles.projectImage}>
            <Image
              src={project.image}
              width={100}
              height={100}
              alt='project picture'
            />
          </div>
        </section>
      ))}
      <hr className={styles.sectionLine} />
    </div>
  );
}