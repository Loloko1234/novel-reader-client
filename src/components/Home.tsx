import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

interface Novel {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

const Home: React.FC = () => {
  // Mock data for novels
  const hotNovels: Novel[] = [
    {
      id: 1,
      title: "The Dragon's Revenge",
      author: "A. Flame",
      imageUrl: "/solo.jpg",
    },
    {
      id: 2,
      title: "Cyber Samurai",
      author: "E. Circuit",
      imageUrl: "/solo.jpg",
    },
    {
      id: 3,
      title: "Galactic Odyssey",
      author: "S. Cosmos",
      imageUrl: "/solo.jpg",
    },
  ];

  const newNovels: Novel[] = [
    { id: 4, title: "Mystic Runes", author: "M. Spell", imageUrl: "/solo.jpg" },
    { id: 5, title: "Neon Nights", author: "N. Glow", imageUrl: "/solo.jpg" },
    {
      id: 6,
      title: "Quantum Quest",
      author: "Q. Particle",
      imageUrl: "/solo.jpg",
    },
  ];

  const renderNovelCategory = (title: string, novels: Novel[]) => (
    <section className="novel-category">
      <h2 className="category-title">{title}</h2>
      <div className="novel-carousel">
        {novels.map((novel) => (
          <div key={novel.id} className="novel-card">
            <img
              src={novel.imageUrl}
              alt={novel.title}
              className="novel-image"
            />
            <div className="novel-info">
              <h3 className="novel-title">{novel.title}</h3>
              <p className="novel-author">{novel.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="comic-title">Novel Reader</h1>
        <p className="tagline">Your Epic Adventure Awaits!</p>
      </header>
      <main className="home-main">
        {renderNovelCategory("Hot Picks 🔥", hotNovels)}
        {renderNovelCategory("New Releases ✨", newNovels)}
        <section className="cta">
          <Link to="/library" className="cta-button">
            Explore Full Library
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
