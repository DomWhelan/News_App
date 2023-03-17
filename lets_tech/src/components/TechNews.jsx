import TechArticles from "../services/tech_news_api";

export default function TechNews() {
  return (
    <section>
      <table>
        <th></th>
        {TechArticles}
      </table>
    </section>
  );
}
