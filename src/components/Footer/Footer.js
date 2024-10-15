import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4">
            <h3 className="heading-section">About Us</h3>
            <p className="lead">
              At Sustain a Bean, we believe in the power of community,
              sustainability, and fair trade. Our journey began in the cocoa
              farms of Suhum, Ghana, where we witnessed firsthand the challenges
              faced by farmers—exploitation, unfair trade practices, and a lack
              of opportunities for growth.
            </p>
            {/* <p className="mb-5">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p> */}
            <p>
              <Link href="/about" className="link-underline">
                Read More
              </Link>
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h3 className="heading-section">Recent Blog</h3>
            <div className="block-21 d-flex mb-4">
              <figure className="mr-3">
                <img
                  src="https://themewagon.github.io/givehope/images/img_1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </figure>
              <div className="text">
                <h3 className="heading">
                  <a href="#">Water Is Life. Clean Water In Urban Area</a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar"></span> July 29, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-21 d-flex mb-4">
              <figure className="mr-3">
                <img
                  src="https://themewagon.github.io/givehope/images/img_2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </figure>
              <div className="text">
                <h3 className="heading">
                  <a href="#">Life Is Short So Be Kind</a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar"></span> July 29, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-21 d-flex mb-4">
              <figure className="mr-3">
                <img
                  src="https://themewagon.github.io/givehope/images/img_3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </figure>
              <div className="text">
                <h3 className="heading">
                  <a href="#">Unfortunate Children Need Your Love</a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar"></span> July 29, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="block-23">
              <h3 className="heading-section">Get Connected</h3>
              <ul>
                <li>
                  <span className="icon fa fa-map-marker"></span>
                  <span className="text">17 dadeban road, Accra Ghana</span>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa fa-phone"></i>
                    <span className="text"> +23 3243110615</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-envelope"></span>
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
                <li>
                  <Link href="https://www.instagram.com/sustain.a.bean">
                    <span className="icon fa-brands fa-instagram"></span>
                    <span className="text">sustain.a.bean</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-12 text-center">
            <p>
              Copyright © {new Date().getFullYear()} All rights reserved | This
              template is made with{" "}
              <i className="ion-ios-heart text-danger" aria-hidden="true"></i>{" "}
              by{" "}
              <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
