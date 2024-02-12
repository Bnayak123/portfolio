import React from "react";
import { getImageUrl } from "./../../utils";
import styles from"./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="photo with laptop" className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}> 
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer</h3>
              <p>
                I'm a Backend developer with 2+ years of experience in building
                Java applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3> Frontend Developer</h3>
              <p>
                I have experience developing frontend applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end Systems
                and Microservices Architecture with APIs best practices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
