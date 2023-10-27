import moment from "moment";

export const formatResult = (obj, mediaType) => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    posterPath: obj.poster_path,
    mediaType: mediaType || obj.mediaType,
    backdropPath: obj.backdrop_path,
    releaseDate: obj.release_date,
    runtime: obj.runtime,
    averageVote: obj.vote_average,
    overview: obj.overview,
    genres: obj.genres,
    results: obj.results,
  };
};

export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const tmdbImageSrc = (path, size) => {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const formatDate = (date) => {
  return moment(date).format("Do MMMM YYYY");
};

export const formatDateShort = (date) => {
  return moment(date).format("YYYY");
};

export const mergeClassName = (val1, val2) => {
  return val1 + " " + (val2 || "");
};
