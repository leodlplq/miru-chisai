const BASE_URL = " https://api.jikan.moe/v4";

const searchAnime = async (name) => {
  return fetch(`${BASE_URL}/anime?q=${name}&type=tv`).then((res) => res.json());
};

export { searchAnime };
