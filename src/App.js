import { Router } from "react-chrome-extension-router";
import "./App.css";
import { useState } from "react";

import logo from "./assets/logo.png";
import AnimeList from "./components/AnimeList";

function App() {
  /**
   * {
        id: anime.mal_id,
        nbEpisodes: anime.episodes,
        nbSeen : 0,
        img: anime.images.jpg.small_image_url,
        name: anime.title,
        episodes:[
          [
            {
              name: name,
              seen: bool,
              number: id ?,
            }, 
            {
              name: name,
              seen: bool,
              number: id ?,
            }
          ]
        ]
      },
   */

  const [animes, setAnimes] = useState([
    {
      id: 20,
      img: "https://cdn.myanimelist.net/images/anime/13/17405t.jpg",
      name: "Naruto",
      nbSeen: 0,
      nbEpisodes: 220,
      episodes: [
        [
          {
            name: "Episode 1",
            seen: false,
            number: 1,
          },
          {
            name: "Episode 2",
            seen: false,
            number: 2,
          },
        ],
      ],
    },
  ]);
  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="Logo" />
        <a href="https://twitter.com/leo_dlplq">T</a>
      </div>
      <Router>
        <Content animes={animes} fnSetAnimes={setAnimes} />
      </Router>
    </div>
  );
}

function Content({ animes, fnSetAnimes }) {
  return (
    <div className="container">
      <h1>Currently watching :</h1>
      <AnimeList animes={animes} fnSetAnimes={fnSetAnimes} />
    </div>
  );
}

export default App;
