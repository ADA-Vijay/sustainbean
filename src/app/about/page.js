import React from "react";

function Page() {
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
        <h2 style={{ color: "black",margin:"2rem" }}>About Us</h2>
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
    </div>
  );
}

export default Page;
