import { goBack } from "react-chrome-extension-router";
import { useState } from "react";

import { searchAnime } from "../utils/jikanApi";

export default function Search({ fnSetAnimes }) {
  const [animeName, setAnimeName] = useState("");
  const [animes, setAnimes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(animeName);
    searchAnime(animeName).then((res) => {
      setAnimes(res.data.filter((anime) => anime.approved));
      console.log(res);
    });
  };

  const handleClickAdd = (id) => {
    console.log(animes[id]);
    let anime = animes[id];
    fnSetAnimes((prevAnimes) => [
      ...prevAnimes,
      {
        id: anime.mal_id,
        nbEpisodes: anime.episodes,
        nbSeen: 0,
        img: anime.images.jpg.small_image_url,
        name: anime.title,
        episodes: [],
        currentEpisodesPage: 1,
        maxEpisodesPage: null,
        airing: anime.airing,
      },
    ]);
  };

  return (
    <div className="search-page">
      <span className="back-btn" onClick={goBack}>
        ← Go back
      </span>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Naruto"
          aria-label="Anime name"
          name="anime-name"
          onChange={(e) => setAnimeName(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>

      <div className="search-anime-list">
        {animes.map((a, elId) => (
          <div className="search-anime-card" key={a.mal_id}>
            <img
              src={a.images.jpg.small_image_url}
              alt={`Poster of ${a.title}`}
            />
            <span>{a.title}</span>
            <span className="add-btn" onClick={() => handleClickAdd(elId)}>
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
