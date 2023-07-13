import React from 'react';
import styles from '../page.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const projectsData = [
  {
    title: 'TOXINS IN SKINCARE',
    type: 'DATA SCIENCE',
    languages: 'PYTHON',
    link: '',
    github: 'https://github.com/mahakanakala/toxins-in-skincare',
  },
  {
    title: 'WHATS IN YOUR SKINCARE?',
    type: 'WEB DEV',
    languages: 'JAVASCRIPT, TYPESCRIPT, CSS',
    link: 'https://toxins-web.vercel.app/',
    github: 'https://github.com/mahakanakala/toxins-web',
  },
  {
    title: 'STOCKS PREDICTION',
    type: 'DATA SCIENCE, AI',
    languages: 'PYTHON',
    link: '',
    github: '',
  },
  {
    title: 'WEBSITE TEMPLATE (CS LLC)',
    type: 'WEB DEV',
    languages: 'HTML, CSS',
    link: 'https://mahakanakala.github.io/csllc-webtemplate/',
    github: 'https://github.com/mahakanakala/csllc-webtemplate',
  },
];

export default function ProjectsSection() {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>PROJECTS</h2>
      {projectsData.map((project, index) => (
        <section key={index}>
          <hr className={styles.sectionLine} />
          <div className={styles.parent}>
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
            <div className={styles.projectView}>VIEW PROJECT</div>
            
            <div className={styles.arrow}>
              <a title='project' href={project.link} target="_blank" rel="noopener noreferrer">
                <BsArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      ))}
      <hr className={styles.sectionLine} />
    </div>
  );
}