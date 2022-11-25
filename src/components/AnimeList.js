import AnimeCard from "./AnimeCard";

export default function AnimeList({ list }) {
  console.log(list);
  return (
    <div className="anime-list">
      {list.map((l) => (
        <AnimeCard name={l.name} img={l.img} id={l.id} key={l.id} />
      ))}
    </div>
  );
}
