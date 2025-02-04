import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./QuoteGenerator.module.css";

function QuoteGenerator() {
  const [query, setQuery] = useState("");
  const [newsEvents, setNewsEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "8f34551d6ab94ad8b7829883c5967a80";

  // Function to fetch news
  const fetchNews = async (searchQuery = "Nigeria") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
      );
      setNewsEvents(response.data.articles || []);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Nigeria news on mount
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>News Explorer</h1>

      {/* Search Bar with Accessible Label */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) fetchNews(query);
        }}
        className={styles.searchBox}
      >
        <label htmlFor="news-search" className={styles.srOnly}>
          Search for news
        </label>
        <input
          id="news-search"
          type="text"
          className={styles.searchInput}
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-describedby="search-instructions"
        />
        <p id="search-instructions" className={styles.srOnly}>
          Enter a keyword and press the Search button to find news articles.
        </p>
        <button
          className={styles.searchButton}
          aria-label="Search News"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <p className={styles.loading} role="status">
          Loading...
        </p>
      )}

      {/* Error Message */}
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      {/* News Cards */}
      <div className={styles.newsGrid}>
        {newsEvents.length > 0
          ? newsEvents.map((news, index) => (
              <div key={index} className={styles.newsCard}>
                {news.urlToImage && (
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className={styles.newsImage}
                  />
                )}
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsDescription}>
                  {news.description
                    ? news.description.slice(0, 100) + "..."
                    : ""}
                </p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.newsLink}
                  aria-label={`Read more about ${news.title}`}
                >
                  Read More
                </a>
              </div>
            ))
          : !loading && <p className={styles.noNews}>No news found.</p>}
      </div>
    </div>
  );
}

export default QuoteGenerator;
