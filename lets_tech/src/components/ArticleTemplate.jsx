const Article = (props) => {
  return (
    <tr className="articleContainer">
      <td className="articleTitle">{props.title}</td>
      <td className="articleImg">
        {" "}
        <img src={props.imageUrl} alt="" />{" "}
      </td>
      <td className="articleAuthour">{props.author}</td>
      <td className="articleContent">{props.content}</td>
    </tr>
  );
};

export default Article;
