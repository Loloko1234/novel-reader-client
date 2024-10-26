import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="comic-title">Novel Reader</h1>
        <p className="tagline">Your Epic Adventure Awaits!</p>
      </header>
      <main className="home-main">
        <section className="features">
          <h2 className="section-title">Unlock Your Reading Superpowers</h2>
          <ul className="power-list">
            <li>Explore a Multiverse of Stories</li>
            <li>Level Up Your Reading Experience</li>
            <li>Track Your Hero's Journey</li>
            <li>Collect Legendary Bookmarks</li>
          </ul>
        </section>
        <section className="cta">
          <Link to="/library" className="cta-button">
            Enter the Storyverse
          </Link>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Novel Reader. All rights reserved. No capes!</p>
      </footer>
    </div>
  );
};

export default Home;
