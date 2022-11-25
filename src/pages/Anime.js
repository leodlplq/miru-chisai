import { goBack } from "react-chrome-extension-router";

export default function Anime({ id, img, name }) {
  console.log(id);
  return (
    <div className="anime-container">
      <span className="back-btn" onClick={goBack}>
        ← Go back
      </span>
      <div className="anime-header">
        <img src={img} alt={name} />
        <h2 className="anime-title">{name}</h2>
      </div>
      Les épisodes
    </div>
  );
}
