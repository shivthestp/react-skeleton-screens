import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";


const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div className="article">
      
      <h2>Articles</h2>
     
      {articles && articles.map(article => (
        <div className="article" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          {/* <a href={profile.website}> {profile.website}</a> */}
        </div>
      ))}
      
      {/* {!articles && <div>Loading...</div>} */}
      {!articles && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} theme='dark' />)}
    </div>
  );
};

export default Articles;
