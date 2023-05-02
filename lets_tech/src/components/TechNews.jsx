import { useEffect, useState } from "react";
import Article from "./ArticleTemplate";

export default function TechArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6501b7d86434b21b8e5fead22ba0d3f"
      );

      const responseData = await response.json();
      const allArticles = responseData.articles;

      setArticles(allArticles);
    };
    fetchArticles().catch((err) => console.log(err));
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

  // console.log(articleList);

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
