import React from "react";
import styles from "./page.module.css";
import style from "@/app/donation/page.module.css";

const YourComponent = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 60%, #333, #171717 53%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh", // Full viewport height
          width: "100%", // Full width
          position: "relative",
        }}
      >
        {/* Add padding-top to prevent cards from touching the navbar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#00000003", // Black with slight opacity
            zIndex: 1, // Ensure it appears above the background image
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* New content added above the cards */}
          <div className={style["meta-container"]}>
            <h1 className={style["member-header"]}>Fuel Your Ambition</h1>
            <div className={style["subheader-container"]}>
              <span className={style["subheader-1"]}>
                Invest in your success with limitless insights and exclusive
                member benefits.
              </span>
              <b className={style["subheader-2"]}>
                Become a SustainBean Member for less than $1.50/week.
              </b>
            </div>
          </div>

          {/* Cards Section */}
          <div className={`container ${style["cards-container"]}`}>
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
                  <strong style={{fontSize:" 2rem",fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic" }}><span style={{fontSize:" 1rem" ,fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic" }}>$</span> 9.99</strong>
                </span>
                <br />
                <span>Billed Monthly</span>
                <br />
                <button className={style["learn-more-btn"]}>subscribe</button>
              </div>
            </div>

            <div className={style["card"]} style={{border: "1px solid"}}>
              <div className={`${style.cardTitle} card-header`}>
             
                <h3>ANNUAL</h3>
              </div>
              <div className="mt-2">
                <span>LESS THAN $1.50/WEEK</span>
                <br />
                <span>
                  <strong style={{fontSize:" 2rem",fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic" }}><span style={{fontSize:" 1rem" ,fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic"}} >$</span> 74.99</strong>
                </span>
                <br />
                <span>Billed Annually</span>
                <br />
                <button
                  className={style["learn-more-btn"]}
                  style={{ backgroundColor: "#dc0000", }}
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
                  <strong style={{fontSize:" 2rem", fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic" }}><span style={{fontSize:" 1rem",fontFamily:"'Merriweather', GeorgiaCustom",fontWeight:"700",fontStyle:"italic" }}>$</span> 145</strong>
                </span>
                <br />
                <span>Billed Every Two Years</span>
                <br />
                <button className={style["learn-more-btn"]}>subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style["member-benefits"]} ${style["benefits-container"]} container`}
      >
        <div className={style["member-benefit-container"]}>
          <h3 className={style.title}>Member Benefits</h3>
          <ul className={style["member-benefit-wrapper"]}>
            <div className={style["member-benefit-block"]}>
              <div className={style["member-benefit-block__content"]}>
                <div className={style["member-benefit-block__header"]}>
                  Unlimited Digital Access
                </div>
                <div className={style["member-benefit-block__subheader"]}>
                  Gain actionable information, unparalleled insight and
                  boundless inspiration through diverse, in-depth, unique
                  journalism
                </div>
              </div>
            </div>
            <div className={style["member-benefit-block"]}>
              <div className={style["member-benefit-block__content"]}>
                <div className={style["member-benefit-block__header"]}>
                  Members-Only Events
                </div>
                <div className={style["member-benefit-block__subheader"]}>
                  From leadership sessions to discussions on wealth building,
                  taxes and more, members-only events cover the topics that
                  matter most to you
                </div>
              </div>
            </div>
            <div className={style["member-benefit-block"]}>
              <div className={style["member-benefit-block__content"]}>
                <div className={style["member-benefit-block__header"]}>
                  Enhanced Browsing Experience
                </div>
                <div className={style["member-benefit-block__subheader"]}>
                  Fewer ads, plus unlimited article saving for seamless access
                  to your favorite SustainBean content
                </div>
              </div>
            </div>
            <div className={style["member-benefit-block"]}>
              <div className={style["member-benefit-block__content"]}>
                <div className={style["member-benefit-block__header"]}>
                  Premium Video
                </div>
                <div className={style["member-benefit-block__subheader"]}>
                  Immerse yourself in discussions with visionaries,
                  entrepreneurs and thought leaders through an extensive video
                  library of world-className sustainbean&apos;s events
                </div>
              </div>
            </div>
            <div className={style["member-benefit-block"]}>
              <div className={style["member-benefit-block__content"]}>
                <div className={style["member-benefit-block__header"]}>
                  Member-Exclusive Perks
                </div>
                <div className={style["member-benefit-block__subheader"]}>
                  Special discounts at the Forbes Store and on certain investing
                  newsletters, plus early access to select product launches
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
