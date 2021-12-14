import "./index.css";

function Experience({ position, company, period, description, achievements }) {
  return (
    <div className="experience">
      <div className="experience__meta">
        <p>{position}</p>
        <p>{company}</p>
        <p>{period}</p>
      </div>
      <p className="experience__description">{description}</p>
      {Array.isArray(achievements) && (
        <ul className="experience__achievements">
          {achievements.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Experience;
