import { Router } from "react-chrome-extension-router";
import "./App.css";
import { useState, useEffect } from "react";

import { AnimeContext } from "./context/AnimeContext";

import logo from "./assets/logo.png";
import AnimeList from "./components/AnimeList";

function App() {
  const [animes, setAnimes] = useState(
    JSON.parse(localStorage.getItem("animes")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("animes", JSON.stringify(animes));
  }, [animes]);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="Logo" />
        <span className="tiny">Made with Jikan API by Léo Delplanque.</span>
      </div>
      <AnimeContext.Provider value={setAnimes}>
        <Router>
          <Content animes={animes} fnSetAnimes={setAnimes} />
        </Router>
      </AnimeContext.Provider>
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
