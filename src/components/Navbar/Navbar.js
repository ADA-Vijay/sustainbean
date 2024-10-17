import React from 'react';
import styles from "@/components/Navbar/Navbar.module.css";
import Link from 'next/link';
import LoginButton from "@/components/LoginButton/loginbutton"
const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light`}
      id="ftco-navbar"
    >
      <div className={`container-fluid ${styles.navContainer} pl-5 pr-5`}>
        {/* <a className={styles["navbar-brand"]} href="/">
          GiveHope
        </a> */}
        <img src="logo.png" alt="" style={{width:" 4.8rem"}}/>
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
            {/* <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li> */}
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
            {/* <li className="nav-item">
              <a href="/how-it-works" className="nav-link">
                How It Works
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="/donate" className="nav-link">
                Donate
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li> */}
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
    </nav>
  );
};

export default Navbar;
