import { Link } from "react-chrome-extension-router";
import Anime from "../pages/Anime";

export default function AnimeCard({ id, name, img }) {
  return (
    <Link
      className="anime-card"
      props={{
        id: id,
        name,
        img,
      }}
      component={Anime}
    >
      <img src={img} alt={`${name}`} />
      <span>{name}</span>
    </Link>
  );
}
