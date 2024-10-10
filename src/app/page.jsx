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
            height: "100vh", // Full viewport height
            width: "100%", // Full width
            position: "relative",
          }}
        >
          <div className="container h-100">
            <div className="row align-items-center justify-content-center text-center h-100">
              <div className="col-md-7">
                {/* <h2 className="heading mb-5" style={{ color: "#fff" }}>
                Free Website Template for Charity Websites.
              </h2> */}
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
                    <span className="align-self-center">Watch Video</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Articles />
    </>
  );
}
