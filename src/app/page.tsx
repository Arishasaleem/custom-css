import "./styles/style.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple E-Commerce</title>
        <meta name="description" content="E-Commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="brand">jeveluxe</div>
          <nav className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
          <div>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search products..."
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: "urlImagefront.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Timeless Jewelry</h1>
          <p className="hero-subtitle">Discover elegance in every piece.</p>
          <button className="shop-button">Shop Now</button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="category-section">
        <h2 className="text-3xl font-extrabold text-center mb-10">Browse The Range</h2>
        <div className="category-grid">
          <div className="category-item">
            <h3 className="font-bold text-xl">Category 1</h3>
            <Image src="/jwell8.jpg" alt="Category 1" className="category-image" />
          </div>
          <div className="category-item">
            <h3 className="font-bold text-xl">Category 2</h3>
            <Image src="/img9.jpg" alt="Category 2" className="category-image" />
          </div>
          <div className="category-item">
            <h3 className="font-bold text-xl">Category 3</h3>
            <Image src="/jwell2.jpg" alt="Category 3" className="category-image" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h1 className="footer-brand">jeveluxe</h1>
            <p>400 University Drive Suite 200, Carol Globes,</p>
            <p>FL 33134, USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
