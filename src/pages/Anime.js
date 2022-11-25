import { goBack } from "react-chrome-extension-router";
import { ToggleItem } from "../components/Toggle";

import { useState } from "react";

export default function Anime({ anime: animeProps }) {
  const [anime, setAnime] = useState(animeProps);
  const handleClick = (id, chunk) => {
    // let selectedEpisode = anime.episodes[chunk].find((el) => el.number == id);
    // selectedEpisode.seen = !selectedEpisode.seen;
    // console.log("click on episode", id, chunk, selectedEpisode);

    // setAnime((prevAnime) => {
    //   return {
    //     ...prevAnime,
    //     episodes: { ...prevAnime.episodes },
    //   };
    // });
    console.log("check anime");
  };
  console.log(anime);

  return (
    <div className="anime-container">
      <span className="back-btn" onClick={goBack}>
        ← Go back
      </span>
      <div className="anime-header">
        <img src={anime.img} alt={anime.name} />
        <h2 className="anime-title">{anime.name}</h2>
        <h3>
          {anime.nbSeen}/{anime.nbEpisodes}
        </h3>
      </div>
      {anime.episodes.map((el, i) => {
        return (
          <ToggleItem
            key={`${anime.id}-${100 * i}`}
            chunk={{ start: 0, end: 100 }}
          >
            {el.map((ep) => {
              return (
                <div
                  className="episode-input"
                  onClick={() => handleClick(ep.number, i)}
                >
                  <input type="checkbox" checked={ep.seen} />
                  <span>
                    {ep.number} - {ep.name}
                  </span>
                </div>
              );
            })}
          </ToggleItem>
        );
      })}
    </div>
  );
}
