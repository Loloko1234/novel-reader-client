import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchNovel, Novel } from "../api/novel.ts";
import "../styles/home.css";

const Home: React.FC = () => {
  const [novel, setNovel] = useState<Novel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNovel = async () => {
      try {
        const fetchedNovel = await fetchNovel(4); // Pobieramy powieść o ID 4
        setNovel(fetchedNovel);
      } catch (err) {
        setError("Nie udało się pobrać danych powieści");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadNovel();
  }, []);

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error}</div>;

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="comic-title">Novel Reader</h1>
        <p className="tagline">Your Epic Adventure Awaits!</p>
      </header>
      <main className="home-main">
        <section className="novel-category">
          <h2 className="category-title">Featured Novels</h2>
          <div className="novel-grid">
            {novel ? (
              <div
                className="novel-card"
                style={{ backgroundImage: `url(${novel.cover_image_url})` }}
              >
                <div className="novel-info">
                  <h3 className="novel-title">{novel.title}</h3>
                  <p className="novel-author">{novel.author}</p>
                  <p className="novel-chapters">
                    Chapters: {novel.last_chapter_number}
                  </p>
                  <Link to={`/novel/${novel.id}`} className="read-button">
                    Read Now
                  </Link>
                </div>
              </div>
            ) : null}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="novel-card empty-card">
                <div className="novel-info">
                  <h3 className="novel-title">Coming Soon</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
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
