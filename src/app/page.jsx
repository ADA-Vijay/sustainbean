import React from "react";
import styles from "./page.module.css";
import Articles from "@/components/Articles/articles";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage: 'url("banner1.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "80vh", // Full viewport height
            width: "100%", // Full width
            position: "relative",
          }}
        >
          {/* Transparent black overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
              zIndex: 1, // Ensure it appears above the background image
            }}
          ></div>

          {/* Content */}
          <div
            className="container h-100"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row align-items-center justify-content-center text-center h-100">
              <div className="col-md-7">
                <p style={{ display: "inline-block" }}>
                  <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    data-fancybox
                    className="ftco-play-video d-flex"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <span className="play-icon-wrap align-self-center mr-4">
                      <span className="ion-ios-play"></span>
                    </span>
                    {/* <span className="align-self-center">Watch Video</span> */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Articles />
      <div
        className="featured-section overlay-color-2 impactStories"
        style={{
          backgroundImage:
            "url('https://themewagon.github.io/givehope/images/bg_3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Transparent color overlay */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(247, 202, 68, 0.8)", // #f7ca44 with 60% transparency
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://themewagon.github.io/givehope/images/bg_3.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 pl-md-5">
              <span className="featured-text d-block mb-3">
                Success Stories
              </span>
              <h2>
                Water Is Life. We Successfully Provide Clean Water in South East
                Asia
              </h2>
              <p className="mb-3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <span className="fund-raised d-block mb-5">
                We have raised $100,000
              </span>

              <p>
                <a
                  href="#"
                  className="btn btn-success btn-hover-white py-3 px-5"
                >
                  Read The Full Story
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
