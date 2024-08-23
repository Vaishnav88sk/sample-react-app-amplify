import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=d9a4e53f40bc4a5eb9c880a378ef3833`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>
              <Link to={`/article/${index}`}>{article.title}</Link>
            </h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
