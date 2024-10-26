import React, { useState, useEffect } from "react";
import axios from "axios";

interface TitleData {
  title: string;
}

const NovelChapter: React.FC = () => {
  const [titleData, setTitleData] = useState<TitleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get<TitleData>(
          "http://localhost:5000/api/novel-chapter"
        );
        setTitleData(response.data);
      } catch (err) {
        setError(
          "Nie udało się pobrać tytułu: " +
            (err instanceof Error ? err.message : String(err))
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchTitle();
  }, []);

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error}</div>;
  if (!titleData) return <div>Brak danych</div>;

  return (
    <div>
      <h1>{titleData.title}</h1>
    </div>
  );
};

export default NovelChapter;
