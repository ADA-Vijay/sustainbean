import React from 'react';
import styles from "@/components/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light`}
      id="ftco-navbar"
    >
      <div className={`container ${styles.navContainer}`}>
        {/* <a className={styles["navbar-brand"]} href="/">
          GiveHope
        </a> */}
        <img src="logo.png" alt="" style={{width:" 3.8rem"}}/>
        {/* <button
          className={styles["navbar-toggler"]}
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button> */}

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/how-it-works" className="nav-link">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a href="/donate" className="nav-link">
                Donate
              </a>
            </li>
            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
