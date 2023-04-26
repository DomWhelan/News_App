// https://newsapi.org/v2/everything?q=tesla&from=2023-02-10&sortBy=publishedAt&apiKey=c6501b7d86434b21b8e5fead22ba0d3f
// https://newsapi.org/v2/everything?q=tesla&from=2023-03-26&sortBy=publishedAt&apiKey=API_KEY
// https://newsapi.org/v2/everything?q=apple&from=2023-04-25&to=2023-04-25&sortBy=popularity&apiKey=API_KEY

import { useEffect, useState } from "react";
import Articles from "../components/Articles";

const AppleArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2023-04-25&to=2023-04-25&sortBy=popularity&apiKey=c6501b7d86434b21b8e5fead22ba0d3f"
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
      <Articles
        imageUrl={article.urlToImage}
        id={article.id}
        title={article.title}
        content={article.content}
      />
    );
    console.log(articleList);
  });
  return (
    <section>
      <table>
        <th></th>
        {articleList}
      </table>
    </section>
  );
};

export default AppleArticles;
