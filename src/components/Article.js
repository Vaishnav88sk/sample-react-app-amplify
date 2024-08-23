import React from 'react';
import { useParams } from 'react-router-dom';

function Article({ articles }) {
  const { id } = useParams();
  const article = articles[parseInt(id)];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

export default Article;
