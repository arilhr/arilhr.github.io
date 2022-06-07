import React from "react";
import "./PortofolioView.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CarouselDefault } from "../CarouselDefault/CarouselDefault";
import { Container } from "react-bootstrap";

export const PortofolioView = ({ data, isOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", top: 0, position: "absolute" }}
            animate={{ x: 0, top: 0, transitionEnd: { position: "inherit" } }}
            transition={{ duration: 1 }}
            exit={{ x: "100%", position: "absolute", top: 0 }}
            className="porto-view"
          >
            <Container>
              <h3 className="title">{data.title}</h3>
              <div className="image-list">
                <CarouselDefault imageList={data.image} />
              </div>
              <div className="description">
                <p>{data.description}</p>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
