export const countSeenEpisodes = (array) => {
  return array.flat().filter((ep) => ep.seen).length;
};
