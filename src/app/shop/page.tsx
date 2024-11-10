import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const Page = () => {
  return (
    <div>
      <Head>
        <title>Simple E-Commerce</title>
        <meta name="description" content="E-Commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>jeveluxe</div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="/shop" className={styles.navLink}>Shop</a>
            <a href="/about" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Contact</a>
          </nav>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search products..."
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SHOP</h1>
          <button className={styles.heroButton}>HOME SHOP</button>
        </div>
      </section>

      {/* Product Categories */}
      <section className={styles.productSection}>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <h3 className={styles.productTitle}>Category 1</h3>
            <Image src="/jwell8.jpg" alt="Product 1" width={500} height={300} className={styles.productImage} />
            <div className={styles.productPrice}>RS:499$</div>
            <p className={styles.productDescription}>Its versatility makes it a favorite for both casual and formal wear</p>
          </div>

          {/* Additional product cards can be added in the same way */}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h1>jeveluxe</h1>
          <p>400 University Drive, Suite 200, Carol Globes, FL 33134 USA</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
