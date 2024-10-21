import React from "react";
import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";
import LoginButton from "@/components/LoginButton/loginbutton";
const Navbar = () => {
  return (
    <>
      {/* <nav
        className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light`}
        id="ftco-navbar"
      >
        <div className={`container-fluid ${styles.navContainer} pl-5 pr-5`}>
          <img src="logo.png" alt="" style={{ width: " 4.8rem" }} />

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/initiatives" className="nav-link">
                  Our Initiatives
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/donation" className="nav-link">
                  Donate
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className={styles.navbar}>
        <div className={styles.topSection}>
          <div className={styles.menuIcon}>
            {/* <i className="fa fa-bars"></i> */}
            <img src="logo.png" alt="" className={styles.logoImage}/>
          </div>

          <div className={styles.logo}>
            <span>SUSTAIN A BEAN</span>
          </div>

          <div className={styles.rightSection}></div>
        </div>

        <div className={styles.bottomSection}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/about">ABOUT US</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/our-initiatives">OUR INITIATIVES</Link>
              <ul className={styles.dropdown}>
                <li className={styles.option}>
                  <Link href="/our-initiatives#education">Education</Link>
                </li>
                <li className={styles.option}>
                  <Link href="/our-initiatives#wash"> WASH</Link>
                </li>
                <li className={styles.option}>
                  <Link href="/our-initiatives#agriculture">Agricultural</Link>
                </li>
                <li className={styles.option}>
                  <Link href="/our-initiatives#health-and-nutrtitions">Health and Nutrition</Link>
                </li>
                <li className={styles.option}>
                  <Link href="/our-initiatives#women-empowerment">Women Empowerment</Link>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <Link href="/donation">DONATE</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/blog">BLOG</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/awards">GET INVLOVED</Link>
              <ul className={styles.dropdown}>
                <li className={styles.option}>
                  <Link href="/awards/2023">2023 Awards</Link>
                </li>
                <li className={styles.option}>
                  <Link href="/awards/2024">2024 Awards</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/business">OUR STORY</Link>
            </li>

            <li>
              <Link href="/interviews">OUR IMPACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
