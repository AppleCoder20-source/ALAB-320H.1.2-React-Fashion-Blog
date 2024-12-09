import img1 from "../assets/blog-image-1.jpg"
import img2 from "../assets/blog-image-2.jpg"
export const articles = [{
    id: 0, 
    date: '11/12/20',
    title: 'On the Street in Brooklyn',
    image: img1, 
    text: "Cary ipsum, dolor sit amet consectur",
    alt: "Brooklyn"
  }, {
    id: 1, 
    date: '11/11/20',
    title: 'Vintage in Vogue',
    image: img2, 
    text: "Selfies sunt, dolor sit amet",
    alt: "Vogue."
  }];
  
  const Articles = () => {
    return (
        <div className="nav-effect">
        <ul className="list">
          {articles.map((article) => (
            <li key={article.id} className="mb-4">
              <h3>{article.date}</h3>
              <h2>{article.title}</h2>
              <img
                src={article.image}
                className="img-fluid"
                alt={article.alt}
              />
              <article>{article.text}</article>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Articles;
  