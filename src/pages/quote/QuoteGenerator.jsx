import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./QuoteGenerator.module.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.quotable.io/random"
        );
        setQuote(response.data.content);
        setAuthor(response.data.author);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch quote");
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className={styles.quoteContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quote && (
        <div className={styles.quote}>
          <p>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      <button
        onClick={() => window.location.reload()}
        className={styles.button}
      >
        Get Another Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
