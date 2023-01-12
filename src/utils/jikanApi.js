const BASE_URL = "https://api.jikan.moe/v4";

const searchAnime = async (name) => {
  return fetch(`${BASE_URL}/anime?q=${name}&type=tv`).then((res) => res.json());
};

const getEpisodesByPage = (id, page) => {
  return fetch(`${BASE_URL}/anime/${id}/episodes?page=${page}`).then((res) =>
    res.json()
  );
};

const getAnimeById = (id) => {
  return fetch(`${BASE_URL}/anime/${id}`).then((res) => res.json());
};

export { searchAnime, getEpisodesByPage, getAnimeById };
