import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface NovelDetails {
  title: string;
  author: string;
  description: string;
  coverUrl: string;
}

const NovelDetails: React.FC = () => {
  const { novelSlug } = useParams<{ novelSlug: string }>();
  const [novel, setNovel] = useState<NovelDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNovelDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://novelbin.com/b/${novelSlug}`,
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          }
        );

        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(response.data, "text/html");

        const novel: NovelDetails = {
          title:
            htmlDocument.querySelector("h3.title")?.textContent?.trim() || "",
          author:
            htmlDocument
              .querySelector('a[href^="https://novelbin.com/a/"]')
              ?.textContent?.trim() || "",
          description:
            htmlDocument.querySelector("div.desc")?.textContent?.trim() || "",
          coverUrl:
            htmlDocument.querySelector("div.book img")?.getAttribute("src") ||
            "",
        };

        setNovel(novel);
      } catch (error) {
        console.error("Error fetching novel details:", error);
        setError(
          `Failed to load novel details. Error: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchNovelDetails();
  }, [novelSlug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!novel) {
    return <div>Novel not found</div>;
  }

  return (
    <div className="novel-details">
      <img src={novel.coverUrl} alt={novel.title} className="novel-cover" />
      <div className="novel-info">
        <h1 className="novel-title">{novel.title}</h1>
        <p className="novel-author">by {novel.author}</p>
        <p className="novel-description">{novel.description}</p>
      </div>
    </div>
  );
};

export default NovelDetails;
