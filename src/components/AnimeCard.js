import { Link } from "react-chrome-extension-router";
import Anime from "../pages/Anime";

export default function AnimeCard({ anime }) {
  return (
    <Link
      className="anime-card"
      props={{
        anime,
      }}
      component={Anime}
    >
      <img src={anime.img} alt={`${anime.name}`} />
      <span>{anime.name}</span>
    </Link>
  );
}
