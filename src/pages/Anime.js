import { goBack } from "react-chrome-extension-router";
import { ToggleItem } from "../components/Toggle";

import { useState, useContext, useEffect } from "react";
import { AnimeContext } from "../context/AnimeContext";

import { countSeenEpisodes } from "../utils/countSeenEpisodes";
import { getEpisodesByPage } from "../utils/jikanApi";

export default function Anime({ anime: animeProps }) {
  const setAnimes = useContext(AnimeContext);

  const [anime, setAnime] = useState(animeProps);

  const handleClick = (number, chunk) => {
    setAnime((prevAnime) => {
      let newAnime = { ...prevAnime };
      let newEpisode = newAnime.episodes[chunk].find(
        (ep) => ep.number === number
      );
      newEpisode.seen = !newEpisode.seen;
      newAnime.nbSeen = countSeenEpisodes(newAnime.episodes);
      return newAnime;
    });
  };

  const loadMoreEpisodes = () => {
    getEpisodesByPage(anime.id, anime.currentEpisodesPage).then((res) => {
      setAnime((prevAnime) => {
        return {
          ...prevAnime,
          episodes: [
            ...prevAnime.episodes,
            res.data.map((ep) => ({
              name: ep.title,
              seen: false,
              number: ep.mal_id,
            })),
          ],
          currentEpisodesPage:
            prevAnime.currentEpisodesPage === prevAnime.maxEpisodesPage
              ? prevAnime.currentEpisodesPage
              : prevAnime.currentEpisodesPage + 1,
          maxEpisodesPage:
            prevAnime.maxEpisodesPage >= res.pagination.last_visible_page
              ? prevAnime.maxEpisodesPage
              : res.pagination.last_visible_page,
        };
      });
    });
  };

  useEffect(() => {
    if (anime.episodes.length === 0) {
      getEpisodesByPage(anime.id, anime.currentEpisodesPage).then((res) => {
        setAnime((prevAnime) => {
          return {
            ...prevAnime,
            episodes: [
              ...prevAnime.episodes,
              res.data.map((ep) => ({
                name: ep.title,
                seen: false,
                number: ep.mal_id,
              })),
            ],
            currentEpisodesPage:
              prevAnime.currentEpisodesPage === prevAnime.maxEpisodesPage
                ? prevAnime.currentEpisodesPage
                : prevAnime.currentEpisodesPage + 1,
            maxEpisodesPage:
              prevAnime.maxEpisodesPage >= res.pagination.last_visible_page
                ? prevAnime.maxEpisodesPage
                : res.pagination.last_visible_page,
          };
        });
      });
    }
  }, []);

  useEffect(() => {
    //update animes list
    setAnimes((prevAnimes) => {
      let id = prevAnimes.findIndex((a) => a.id === anime.id);
      return [...prevAnimes.slice(0, id), anime, ...prevAnimes.slice(id + 1)];
    });
  }, [anime]);

  return (
    <div className="anime-container">
      <span className="back-btn" onClick={goBack}>
        ← Go back
      </span>
      <div className="anime-header">
        <img src={anime.img} alt={anime.name} />
        <h2 className="anime-title">{anime.name}</h2>
        <h3 hidden={anime.airing}>
          {anime.nbSeen}/{anime.nbEpisodes}
        </h3>
      </div>
      <div className="anime-episode-container">
        {anime.episodes.length !== 0
          ? anime.episodes.map((el, i) => {
              return (
                <ToggleItem
                  key={`${anime.id}-${100 * i}`}
                  chunk={{ start: 100 * i + 1, end: 100 * i + el.length }}
                >
                  {el.map((ep) => {
                    return (
                      <label
                        className="episode-input"
                        key={`${anime.id}-${ep.number}`}
                        htmlFor={`${anime.id}-${ep.number}`}
                      >
                        <input
                          type="checkbox"
                          checked={ep.seen}
                          onChange={() => handleClick(ep.number, i)}
                          id={`${anime.id}-${ep.number}`}
                        />
                        <span>
                          {ep.number} - {ep.name}
                        </span>
                      </label>
                    );
                  })}
                </ToggleItem>
              );
            })
          : "Loading"}
        {anime.maxEpisodesPage >= anime.currentEpisodesPage &&
        anime.maxEpisodesPage !== anime.episodes.length ? (
          <div>
            <button className="btn" onClick={loadMoreEpisodes}>
              Load more episodes
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
