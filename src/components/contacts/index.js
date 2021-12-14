import "./index.css";

function Contacts({ title, children }) {
  return (
    <div className="contacts__item">
      <h3 className="contacts__item-headline">{title}</h3>
      {children}
    </div>
  );
}

export default Contacts;
