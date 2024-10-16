import React from "react";
import style from "@/components/Articles/articles.module.css";
import Link from "next/link";
import Image from "next/image";
const Articles = () => {
  const data = [
    {
      image:
        "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_3.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_4.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_1.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_3.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_4.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_1.jpg",
      title:
        "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    // {
    //   image:
    //     "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
    //   title:
    //     "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
    //   author: "By Chase Peterson-Withorn",
    // },
    // {
    //   image: "https://themewagon.github.io/givehope/images/img_3.jpg",
    //   title:
    //     "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
    //   author: "By Chase Peterson-Withorn",
    // },
    // {
    //   image: "https://themewagon.github.io/givehope/images/img_4.jpg",
    //   title:
    //     "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
    //   author: "By Chase Peterson-Withorn",
    // },
    // {
    //   image: "https://themewagon.github.io/givehope/images/img_1.jpg",
    //   title:
    //     "Forbes 38th Annual Worlds Billionaires List: Facts And Figures 2024",
    //   author: "By Chase Peterson-Withorn",
    // },
  ];

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
    "Community Empowerment : Farmers' Cooperative Initiatives: Establish and support cooperatives to help farmers pool resources, share knowledge, and access better markets. Community Skill Development Centers: Set up centers offering vocational training in carpentry, tailoring, digital skills, etc., to empower community members with employable skills.";
  return (
    <div className={style["container"]}>
      {/* <div className="container-fluid wt-container">
        <div className="wt1">
          <img src="https://themewagon.github.io/givehope/images/bg_3.jpg"></img>
        </div>
        <div className="wt2">
          <h1 className="title-font">Who We Are</h1>
          <p className="p1">
            At Sustain a Bean, we believe in the power of community,
            sustainability, and fair trade. Our journey began in the cocoa farms
            of Suhum, Ghana, where we witnessed firsthand the challenges faced
            by farmers—exploitation, unfair trade practices, and a lack of
            opportunities for growth. Inspired by their resilience, we set out
            to create a brand that not only delivers exceptional cocao but also
            makes a lasting impact on the lives of those who nurture its roots.
          </p>
          
          <button>LEARN MORE</button>
        </div>
      </div> */}
      <div className="container-fluid inetiative-container">
        <div className="mission-content-wrap">
          <div className="icon-div">
            <img src="bulb-icon.png"></img>
          </div>
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>{truncateText(missionText, MAX_CONTENT_LENGTH)}</p>
            <Link href="/vision">Learn More</Link>
            {/* <a href="">Learn More</a> */}
          </div>
        </div>
        <div className="mission-content-wrap">
          <div className="icon-div">
            <img src="money-icon.png"></img>
          </div>
          <div className="mission-content">
            <h3>Our Vision</h3>
            <p>{truncateText(visionText, MAX_CONTENT_LENGTH)}</p>
            <Link href="/vision">Learn More</Link>
            {/* <a href="">Learn More</a> */}
          </div>
        </div>
        <div className="mission-content-wrap">
          <div className="icon-div">
            <img src="yellow-user-icon.png"></img>
          </div>
          <div className="mission-content">
            <h3>Our Initiatives</h3>
            <p>{truncateText(initiativeText, MAX_CONTENT_LENGTH)}</p>
            <Link href="/vision">Learn More</Link>
            {/* <a href="">Learn More</a> */}
          </div>
        </div>
      </div>
      <div className={style["container-wrap"]}>
        <div className={style.contentWrap}>
          <h2 className={style["relatedpost-title"]}>Articles</h2>
          <div className="row">
            {data &&
              data.length > 0 &&
              data.map((e, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                  <Link href="/">
                    <div className={style["post-card-item"]}>
                      <div className={style["post-img-div"]}>
                        <Image
                          src={e.image}
                          alt={e.title}
                          className={style.image}
                          width={500}
                          height={300}
                        />
                      </div>
                      <div>
                        <p className={style["desc-p"]}>{e.title}</p>
                        <p className={style["name-p"]}>{e.author}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
