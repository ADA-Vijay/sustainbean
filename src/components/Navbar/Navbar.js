import React from 'react'
import styles from "@/components/Navbar/Navbar.module.css"
const Navbar = () => {
    
  return (
    <nav className={`navbar navbar-expand-lg ${styles["navbar-dark"]} ${styles["ftco_navbar"]} ${styles["bg-dark"]} ${styles["ftco-navbar-light"]}`} id="ftco-navbar">
    <div className={`container ${styles.navContainer}`}>
      <a className={styles["navbar-brand"]} href="index.html">GiveHope</a>
      <button className={styles["navbar-toggler"]} type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="how-it-works.html" className="nav-link">How It Works</a></li>
          <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
          <li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar