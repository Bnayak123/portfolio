import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi,I'm Bangaranayaka P</h1>
        <p className={styles.description}>
          I'm Java Full-stack developer with 2+ years of experience using
          Java,Spring boot, Microservices and ReactJS,Reach out me if you'd like to
          know more!
        </p>
        <a className={styles.contactBtn} href="mailto:bnayak62.bn@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/profilePhoto.png")}
        alt="profile photo"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
