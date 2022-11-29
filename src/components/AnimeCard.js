import { Link } from "react-chrome-extension-router";
import { AnimeContext } from "../context/AnimeContext";
import Anime from "../pages/Anime";
import { useContext } from "react";

export default function AnimeCard({ anime }) {
  const setAnimes = useContext(AnimeContext);
  const deleteAnime = (id) => {
    console.log("delete");
    setAnimes((prevAnimes) => {
      return prevAnimes.filter((anime) => anime.id !== id);
    });
  };

  return (
    <div className="anime-card-container">
      <Link
        className="anime-card"
        props={{
          anime,
        }}
        component={Anime}
      >
        <img src={anime.img} alt={`${anime.name}`} />
        <span>{anime.name}</span>
        <span hidden={anime.airing}>
          {anime.nbSeen}/{anime.nbEpisodes}
        </span>
      </Link>
      <span className="add-btn" onClick={() => deleteAnime(anime.id)}>
        x
      </span>
    </div>
  );
}
