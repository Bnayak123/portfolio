import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:bnayak62.bn@gmail.com">bnayak62.bn@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bangaranayaka-p-304b621b7">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Bnayak123">github.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.download} src={getImageUrl("contact/download-file.png")} alt="download icon" />
          <a  href=" https://drive.google.com/file/d/17i9qDI51S5U-J0pdBxugzYtXExzlvwoC/view?usp=drivesdk">Resume-Download</a>
        </li>
      </ul>
    </footer>
  );
};
