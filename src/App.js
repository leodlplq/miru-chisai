import {
  Router,
  getCurrent,
  getComponentStack,
} from "react-chrome-extension-router";
import "./App.css";

import { useEffect } from "react";

import logo from "./assets/logo.png";
import AnimeList from "./components/AnimeList";

const animeList = [
  {
    id: 1,
    name: "Chainsaw Man",
    img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
  },
  {
    id: 2,
    name: "Bleach",
    img: "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg",
  },
  {
    id: 3,
    name: "Fullmetal Alchemist: Brotherhood",
    img: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
  },
  {
    id: 4,
    name: "Kaguya-sama: Love is War - Ultra Romantic",
    img: "https://cdn.myanimelist.net/images/anime/1160/122627l.jpg",
  },
];
function App() {
  let components = null;
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="Logo" />
        {components ? <a href="/">Home</a> : "no"}
      </div>
      <Router>
        <Content />
      </Router>
    </div>
  );
}

function Content() {
  return (
    <div className="container">
      <h1>Currently watching :</h1>
      <AnimeList list={animeList} />
    </div>
  );
}

export default App;
