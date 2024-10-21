"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "@/components/Banner/banner.module.css"; // Import the CSS module for styling

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    {
      src: "https://fama.b-cdn.net/sustainbean/carousel4.jpg",
      features: {
        title: "Sustain-A-Bean",
      },
    },
    {
      src: "https://fama.b-cdn.net/sustainbean/carousel3.jpg",
      features: {
        title: "From soil to soul",
      },
    },
    {
      src: "https://fama.b-cdn.net/sustainbean/carousel2.jpg",
      features: {
        title: "Empowering, Uplifting, Sustainability",
      },
    },
    {
      src: "https://fama.b-cdn.net/sustainbean/carousel1.jpg",
      features: {
        title: "Making a difference together",
      },
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType="desktop"
      arrows={false}
    >
      {images.map((item, index) => (
        <div key={index} className={styles.carouselItem}>
          <div className={styles.featuresSection}>
            <h3>{item.features.title}</h3>
            {/* <ul>
              <li key={index}>{item.features.title}</li>
            </ul> */}
          </div>
          <div className={styles.imageSection}>
            <img
              src={item.src}
              alt={`Banner ${index + 1}`}
              className={styles.carouselImage}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
