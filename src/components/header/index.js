import "./index.css";

import data from "../../data";

function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <div className="header__language">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="lt">Lietuviškai</option>
        </select>
      </div>
      <div className="header__info">
        <h1 className="header__info-name">{data[language].name}</h1>
        <h2 className="header__info-title">{data[language].title}</h2>
      </div>
    </header>
  );
}

export default Header;
