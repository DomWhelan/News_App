import { useEffect, useState } from "react";
import Article from "./ArticleTemplate";

export default function Articles(props) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // const fetchArticles = async () => {
    async function fetchArticles(link){    
      const response = await fetch(link);
      const responseData = await response.json();
      const allArticles = responseData.articles;

      setArticles(allArticles);
    };
    fetchArticles(props.link).catch((err) => console.log(err));
  }, []);

  const articleList = [];
  articles.forEach((article) => {
    articleList.push(
      <Article
        imageUrl={article.urlToImage}
        id={article.id}
        title={article.title}
        content={article.content}
      />
    );
  });

  console.log(articleList);

  return (
    <section>
      <table>
        <thead></thead>
        <tbody>
        {articleList}
        </tbody>
      </table>
    </section>
  );
}
