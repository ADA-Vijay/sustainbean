import React from "react";
import styles from "./page.module.css";
import Articles from "@/components/Articles/articles";
import Link from "next/link";
import style from "@/app/donation/page.module.css"
export default function Home() {
  const MAX_CONTENT_LENGTH = 150; // Set the maximum number of characters for each section

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  const missionText =
    "We are committed to transforming the lives of cocoa farmers and their communities through fair trade practices, sustainable farming, and holistic wellness initiatives. Our goal is to educate and inspire others to support ethical and sustainable consumption, ensuring that every bite of our chocolate makes a positive impact.";

  const visionText =
    "Our vision is to create a world where health, fairness, and sustainability coexist harmoniously. We strive to be a catalyst for change, creating a regenerative legacy that supports the well-being of our consumers, farmers, and the planet. Through our products, partnerships, and initiatives, we aim to foster a deeper connection to the origins of our food and promote a more sustainable and equitable future for all.";

  const initiativeText =
    "Community Empowerment : Farmers Cooperative Initiatives: Establish and support cooperatives to help farmers pool resources, share knowledge, and access better markets. Community Skill Development Centers: Set up centers offering vocational training in carpentry, tailoring, digital skills, etc., to empower community members with employable skills.";
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            backgroundImage:
              'url("https://fama.b-cdn.net/sustainbean/banner1.webp")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "75vh", // Full viewport height
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
              backgroundColor: "#00000003", // Black with 50% opacity
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
      <div className="container-fluid ourteam-container">
        <h1 className="text-center ot-h1">Our Team</h1>
        <p className="text-center ot-p">
          Some quick example text to build on the card title and make up the
          bulk of the <br />
          card&apos;s content.
        </p>
        <div className="team-flex">
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile1.webp"></img>
            </div>
            <p>Jorge Smith</p>
            <p className="p2">Donated just now</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile2.webp"></img>
            </div>
            <p>Jorge Smith</p>
            <p className="p2">Donated just now</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile3.webp"></img>
            </div>
            <p>Jorge Smith</p>
            <p className="p2">Donated just now</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://themewagon.github.io/givehope/images/person_4.jpg"></img>
            </div>
            <p>Jorge Smith</p>
            <p className="p2">Donated just now</p>
          </div>
        </div>
      </div>
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
                src="https://themewagon.github.io/givehope/images/bg_2.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 pl-md-5">
              <span className="featured-text d-block mb-3">
                Be volunteer Today
              </span>
              <input
                className="volunteer-input"
                placeholder="Enter Your Name"
                type="text"
              />
              <input
                className="volunteer-input mt-3"
                placeholder="Email Your Email"
                type="text"
              />
              <textarea
                placeholder="Write Your Message"
                className="volunteer-input volunteer-textarea mt-3"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <p className="mt-3">
                <a
                  href="#"
                  className="btn btn-success btn-hover-white py-3 px-5"
                >
                  SEND
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 mb-5">
      <div className="mb-4">
      <h1 className="text-center ot-h1">Subscribe</h1>
        {/* <p className="text-center ot-p">
        Be a Part of the Change – Sign Up for News, Events, and Ways to Get Involved!
        </p> */}
        <strong><p className="text-center ot-p">
        Be a Part of the Change – Sign Up for News, Events, and Ways to Get Involved!
        </p></strong>
      </div>
      
        <div className={`container ${style["cards-container"]}`} style={{position:"relative",top:"0",left:"0"}}>
          <div className={style["card"]}>
            <div className={`${style.cardTitle} card-header`}>
              <h3>MONTHLY</h3>
            </div>
            <div className="mt-2">
              <span>
                <strong>SPECIAL OFFER</strong> : <strike>$12.99</strike>
              </span>
              <br />
              <span>
                <strong
                  style={{
                    fontSize: " 2rem",
                    fontFamily: "'Merriweather', GeorgiaCustom",
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      fontSize: " 1rem",
                      fontFamily: "'Merriweather', GeorgiaCustom",
                      fontWeight: "700",
                      fontStyle: "italic",
                    }}
                  >
                    $
                  </span>{" "}
                  9.99
                </strong>
              </span>
              <br />
              <span>Billed Monthly</span>
              <br />
              <button className={style["learn-more-btn"]}>subscribe</button>
            </div>
          </div>

          <div className={style["card"]} style={{ border: "1px solid" }}>
            <div className={`${style.cardTitle} card-header`}>
              <h3>ANNUAL</h3>
            </div>
            <div className="mt-2">
              <span>LESS THAN $1.50/WEEK</span>
              <br />
              <span>
                <strong
                  style={{
                    fontSize: " 2rem",
                    fontFamily: "'Merriweather', GeorgiaCustom",
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      fontSize: " 1rem",
                      fontFamily: "'Merriweather', GeorgiaCustom",
                      fontWeight: "700",
                      fontStyle: "italic",
                    }}
                  >
                    $
                  </span>{" "}
                  74.99
                </strong>
              </span>
              <br />
              <span>Billed Annually</span>
              <br />
              <button
                className={style["learn-more-btn"]}
                style={{ backgroundColor: "#dc0000" }}
              >
                subscribe
              </button>
            </div>
          </div>
          <p className={style.badge}> MOST POPULAR</p>
          <div className={style["card"]}>
            <div className={`${style.cardTitle} card-header`}>
              <h3>TWO YEAR</h3>
            </div>
            <div className="mt-2">
              <br />
              <span>
                <strong
                  style={{
                    fontSize: " 2rem",
                    fontFamily: "'Merriweather', GeorgiaCustom",
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      fontSize: " 1rem",
                      fontFamily: "'Merriweather', GeorgiaCustom",
                      fontWeight: "700",
                      fontStyle: "italic",
                    }}
                  >
                    $
                  </span>{" "}
                  145
                </strong>
              </span>
              <br />
              <span>Billed Every Two Years</span>
              <br />
              <button className={style["learn-more-btn"]}>subscribe</button>
            </div>
          </div>
        </div>
      </div>
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
