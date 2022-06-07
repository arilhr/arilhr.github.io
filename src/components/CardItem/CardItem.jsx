import React from "react";
import { motion } from "framer-motion";
import "./CardItem.scss";

export const CardItem = ({ img, name, category, description, onClick }) => {
  return (
    <motion.div
      className="card-item"
      onClick={onClick}
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ translateY: "-5px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="left-section">
        <div className="card-image">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="right-section">
        <div className="description">
          <h5>{name}</h5>
          <div className="category">
            {category !== null
              ? category.map((item, i) => {
                  return (
                    <span
                      key={`category-${item}-${name}-${i}`}
                      className="category-item"
                    >
                      {item}
                    </span>
                  );
                })
              : ""}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
