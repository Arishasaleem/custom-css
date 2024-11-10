import React from 'react';
import Head from 'next/head';
import '../styles/contact.module.css';  // Import the custom CSS file

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Simple E-Commerce</title>
        <meta name="description" content="E-Commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="styles.header">
        <div className="header-container">
          <div className="logo">jeveluxe</div>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search products..." />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact</h1>
          <button className="hero-button">HOME SHOP</button>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h1 className="contact-info-title">Get in touch with us</h1>
        <p className="contact-info-description">
          For more information about our jewelry products & services, please feel free to drop us an email. Our staff is always here to help you out. Don&apos;t hesitate!
        </p>
      </div>

      {/* Address & Contact Form Section */}
      <div className="contact-form-container">
        <div className="contact-info-box">
          <h2 className="contact-info-heading">Address</h2>
          <p className="contact-info-detail">House-19, Sector 2 ABC Society, Karachi, Pakistan</p>

          <h2 className="contact-info-heading">Phone</h2>
          <p className="contact-info-detail">Mobile: +(92)303*****75</p>
          <p className="contact-info-detail">Hotline: +(92)303*****75</p>

          <h2 className="contact-info-heading">Working Time</h2>
          <p className="contact-info-detail">Monday to Friday: 9:00 AM to 10:00 PM</p>
          <p className="contact-info-detail">Saturday to Sunday: 9:00 AM to 9:00 PM</p>
        </div>

        <div className="contact-form">
          <h2 className="form-heading">Name</h2>
          <input type="text" className="form-input" />

          <h2 className="form-heading">Email Address</h2>
          <input type="email" className="form-input" />

          <h2 className="form-heading">Subject</h2>
          <input type="text" className="form-input" />

          <h2 className="form-heading">Message</h2>
          <textarea className="form-textarea" placeholder="Write your message here..."></textarea>

          <button className="form-button">Submit</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h1 className="footer-logo">jeveluxe</h1>
          <p className="footer-address">400 University Drive, Suite 200, Carol Globes, FL 33134 USA</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
