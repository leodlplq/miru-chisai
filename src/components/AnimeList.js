import AnimeCard from "./AnimeCard";
import { Link } from "react-chrome-extension-router";
import Search from "../pages/Search";

export default function AnimeList({ animes, fnSetAnimes }) {
  console.log(animes);
  return (
    <div className="anime-list">
      <Link
        className="anime-card"
        component={Search}
        props={{
          fnSetAnimes: fnSetAnimes,
        }}
      >
        <div className="img-add">+</div>
        <span>Search new animes</span>
      </Link>
      {animes.map((a) => (
        <AnimeCard anime={a} key={a.id} />
      ))}
    </div>
  );
}
