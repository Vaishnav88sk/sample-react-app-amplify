import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';
import axios from 'axios';
import './App.css';

function App() {
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

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:id" element={<Article articles={articles} />} />
          </Routes>
        </main>
        {/* <footer>
          <p>&copy; 2024 My News Website</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
