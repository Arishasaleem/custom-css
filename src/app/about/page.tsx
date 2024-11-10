import React from 'react';
import Head from 'next/head';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div>
      <Head>
        <title>Simple E-Commerce</title>
        <meta name="description" content="E-Commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.logo}>jeveluxe</div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="/shop" className={styles.navLink}>Shop</a>
            <a href="/about" className={styles.navLink}>About</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </nav>
          <div>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search products..." 
            />
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.aboutTitle}>About Us</h2>
          <p className={styles.aboutText}>
            At Timeless Jewelry, we believe in the power of elegance and the beauty of finely crafted pieces.
            Since 1990, our mission has been to offer premium jewelry that blends timeless beauty with modern sophistication.
            Our artisans pour their heart and soul into each design, creating masterpieces that resonate with every individual.
          </p>
          <p className={styles.aboutText}>
            We take pride in our commitment to quality, offering a range of jewelry that celebrates life&aposs special moments.
            Whether you are looking for a symbol of love, a style statement, or a treasured keepsake, we are here to help.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>
            <h1 className={styles.footerTitle}>jeveluxe</h1>
            <p>400 university drive suite 200 carol globes,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
