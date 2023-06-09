import { useEffect, useState } from "react";
import Article from "./ArticleTemplate";

export default function Articles(props) {
  
  const [articles, setArticles] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');

  useEffect(() => {
    async function fetchArticles(link){    
      const response = await fetch(link);
      const responseData = await response.json();
      const allArticles = responseData.articles;

      setArticles(allArticles);
    };
    fetchArticles(props.link).catch((err) => console.log(err));
  }, [props.link]);

  const articleList = [];
  articles.forEach((article) => {
    if(titleFilter === '' || article.title.includes(titleFilter)){
      articleList.push(
        <Article
          imageUrl={article.urlToImage}
          id={article.id}
          title={article.title}
          content={article.content}
        />
      );
    } 
  });

  window.DEBUG && console.log(articleList);

  return (
    <section>
      <div className="searchBar">
            <span>{"Search Here ->"}</span>
            <input
                type="text"
                className="searchBarInput"
                placeholder="Search..."
                onChange={(e) => {
                    setTitleFilter(e.target.value);
                }}
            />
        </div>
      <table>
        <thead></thead>
        <tbody>
        {articleList}
        </tbody>
      </table>
    </section>
  );
}
