import React from "react";
import projects from "../../Data/project.json";
import { ProjectCord } from "./ProjectCord";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
      {projects.map((project, id) => {
        return <ProjectCord key={id} project={project} />;
      })}
    </div>
  </section>
);
};

export default Projects;
