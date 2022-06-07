import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselDefault.scss";

export const CarouselDefault = ({ imageList }) => {
  return (
    <Carousel>
      {imageList?.map((image, index) => {
        return (
          <Carousel.Item key={image + index}>
            <img className="d-block w-100" src={image} alt={index} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
