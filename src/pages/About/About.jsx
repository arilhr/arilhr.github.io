import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.scss";

export const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ x: "-100px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="about-section">
          <h3>About me</h3>
          <p>
            I'm a calm person, thinker, and always careful in everything I do.
            Have a passion to learning about game programming, front-end web
            development, and UI/UX design, but does not rule out the possibility
            to study in other fields.
          </p>
        </div>
        <div className="about-section">
          <h3>Education</h3>
          <ul>
            <li>
              ENGINEERING POLYTECHNIC INSTITUTE OF SURABAYA BACHELOR OF APPLIED
              SCIENCE - BASc, GAME TECHNOLOGY | 2019 - PRESENT
            </li>
          </ul>
        </div>
        <div className="about-section">
          <h3>Organization Experience</h3>
          <ul>
            <li>MEMBER OF DIVISION KOMINFO IMAGE PENS | 2020 - 2021</li>
            <li>ASSISTANT LAB OF GAME TECHNOLOGY PENS | 2020 - PRESENT</li>
            <li>COMMITTEE OF GAMEJAM INTERNAL PENS SEASON 8 | 2020</li>
            <li>COMMITTEE OF GAMEJAM INTERNAL PENS SEASON 9 | 2021</li>
          </ul>
        </div>
        <div className="about-section">
          <h3>Licences and Certifications</h3>
          <ul>
            <li>BELAJAR MEMBUAT GAME PEMULA - DICODING | 2020</li>
            <li>BELAJAR DASAR PEMROGRAMAN WEB - DICODING | 2020</li>
            <li>BELAJAR MEMBUAT FRONT-END WEB PEMULA - DICODING | 2022</li>
            <li>RESPONSIVE WEB DESIGN - FREECODECAMP | 2021</li>
            <li>
              JavaScript Algorithms and Data Structures - FREECODECAMP | 2022
            </li>
            <li>Front End Development Libraries - FREECODECAMP | 2022</li>
          </ul>
        </div>
        <div className="about-section">
          <h3>Achievement</h3>
          <ul>
            <li>
              BEST GAME, GAMEJAM INTERNAL PENS - ENGINEERING POLYTECHNIC
              INSTITUTE OF SURABAYA | 2019
            </li>
            <li>
              TOP 20 GAME DEVELOPMENT GEMASTIK 12 - TELKOM UNIVERSITY | 2019
            </li>
            <li>
              RANK 1 SEMESTER 4 GAME TECHNOLOGY PENS - ENGINEERING POLYTECHNIC
              INSTITUTE OF SURABAYA | 2021
            </li>
            <li>BEST FUN GAME WINNERS GAMEJAM IGSI 2022 | 2022</li>
          </ul>
        </div>
      </Container>
    </motion.div>
  );
};
