import React from "react";
import Link from "next/link";
function Page() {
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
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://fama.b-cdn.net/sustainbean/banner2.webp")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "75vh", // Full viewport height
          width: "100%", // Full width
          position: "relative",
        }}
      >
        {/* Optional: Add some overlay effect if needed */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 1,
          }}
        />
      </div>

      {/* Content below the background */}
      <div className="container mt-5">
        <h2 style={{ color: "black", margin: "2rem" }}>About Us</h2>
        <div className="row">
          <div className="col-lg-6">
            <p>
              At Sustain a Bean, we believe in the power of community,
              sustainability, and fair trade. Our journey began in the cocoa
              farms of Suhum, Ghana, where we witnessed firsthand the challenges
              faced by farmers—exploitation, unfair trade practices, and a lack
              of opportunities for growth. Inspired by their resilience, we set
              out to create a brand that not only delivers exceptional cocao but
              also makes a lasting impact on the lives of those who nurture its
              roots.
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              Sustain a Bean is more than just Cocoa ; it’s a movement to give
              back to the very communities that make our product possible. We
              work hand-in-hand with farmers to ensure they receive fair wages,
              access to education, and the resources needed to build better
              futures for their families.
            </p>
          </div>
        </div>
      </div>
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
      <div className="container-fluid ourteam-container">
        <h1 className="text-center ot-h1">Our Team</h1>
        {/* <p className="text-center ot-p">
          Some quick example text to build on the card title and make up the
          bulk of the <br />
          card&apos;s content.
        </p> */}
        <div className="team-flex">
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile1.webp"></img>
            </div>
            <p>Mrs Vanya Mohan</p>
            <p className="p2">Donated just now</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile2.webp"></img>
            </div>
            <p>Mr Jason Mohan</p>
            <p className="p2">Donated just now</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile3.webp"></img>
            </div>
            <p>Mr Jeffrey Hammond</p>
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
    </div>
  );
}

export default Page;
