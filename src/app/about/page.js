import React from "react";
import Link from "next/link";
import style from "@/app/page.module.css"
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
        <h2 style={{ color: "black", margin: "2rem" }} className={`${style.subcribeTitle} text-center`}>About Us</h2>
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
              Sustain a Bean is more than just Cocoa ; it&apos;s a movement to give
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
      {/* <div className="container-fluid ourteam-container">
        <h1 className="text-center ot-h1">Founders Note</h1>
        <div className="team-flex">
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile1.webp"></img>
            </div>
            <p>Mrs Vanya Mohan</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile2.webp"></img>
            </div>
            <p>Mr Jason Mohan</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://fama.b-cdn.net/sustainbean/teamProfile3.webp"></img>
            </div>
            <p>Mr Jeffrey Hammond</p>
          </div>
          <div className="text-center team-wrap">
            <div className="team-img">
              <img src="https://themewagon.github.io/givehope/images/person_4.jpg"></img>
            </div>
            <p>Jorge Smith</p>
          </div>
        </div>
      </div> */}

      <div className="container py-8 mb-5">
        <h3 className={`text-center m-4 ${style.subcribeTitle}`}>Founders Note</h3>
        <div className="row g-0  rounded-3">
          <div className="col-lg-6 position-relative">
            <div className="d-none d-xl-block position-absolute top-100 start-0 translate-middle"></div>
            <img
              className="img-fluid rounded w-100"
              src="https://fama.b-cdn.net/sustainbean/teamProfile1.webp"
              srcSet=""
              sizes=""
              width="900"
              height=""
              alt="Photo by Austin Distel"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center align-self-center">
            <div className="lc-block mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                fill="currentColor"
                viewBox="0 0 16 16"
                lc-helper="svg-icon"
                className="text-muted"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
              </svg>
            </div>
            <div className="lc-block">
              <div
                id="carouselTestimonial"
                className="carousel slide pb-4"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner px-5">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="lc-block">
                        <div editable="rich">
                          <p className="rfs-8 text-muted">
                            &quot;The story of Sustain-A-Bean began not just
                            with an idea, but with a shared moment of
                            realization between us, Jason Nana Yaw Mohan and
                            Vanya Daryanani. To an outsider, our worlds might
                            have seemed vastly different—Jason, a healthcare
                            leader with deep roots in Ghana’s pharmaceutical
                            industry, and Vanya, a financial trader and wellness
                            expert who had traveled the globe, building her
                            career in diverse industries.&quot;
                          </p>
                        </div>
                        <div editable="rich">
                          <p className="rfs-8 text-muted">
                            But it was a visit to a cocoa farm in Ghana that
                            brought us together, where the seeds of
                            Sustain-A-Bean were planted. That day, standing in
                            the fields, we were not just observing the land; we
                            were witnessing the heart of an industry that fuels
                            a global craving for chocolate. Yet, behind the
                            sweetness of this delicacy, we saw the bitter
                            reality: the farmers who toiled day and night, whose
                            hands had cultivated the land for generations, were
                            not reaping the rewards of their labor. We heard
                            stories of struggle, where families fought for fair
                            wages, access to education, and basic resources. It
                            was clear to us that something had to change.
                          </p>
                        </div>
                      </div>
                      <div className="lc-block">
                        <h5 editable="inline" className="mb-1">
                          Mrs Vanya Mohan
                        </h5>
                        <p editable="inline">Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
