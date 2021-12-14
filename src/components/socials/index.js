import "./index.css";

function Socials({ img, text, url, alt }) {
  return (
    <li className="social-list__item">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} />
        <p>{text}</p>
      </a>
    </li>
  );
}

export default Socials;
