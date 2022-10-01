import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Homepage.scss";

//components
import { HomeTitle } from "../../components/HomeTitle/HomeTitle";
import PersonalPhoto from "../../assets/img/personal-photo.png";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Container>
        <motion.div
          className="align-self-end title"
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HomeTitle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={PersonalPhoto} alt="placeholder" className={`home-photo`} />
        </motion.div>
      </Container>
    </div>
  );
};
