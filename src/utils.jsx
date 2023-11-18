import moment from "moment";
import poster from "./data/img.avif";
import poster2 from "./data/img2.jpg";
import poster3 from "./data/img3.jpg";

export const formatResult = (obj) => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    posterPath: obj.poster_path,
    backdropPath: obj.backdrop_path,
    releaseDate: obj.release_date,
    runtime: obj.runtime,
    averageVote: obj.vote_average,
    overview: obj.overview,
    genres: obj.genres,
    results: obj.results,
    imdb: obj.imdb_id,
    budget: obj.budget,
    homepage: obj.homepage,
    prodcomp: obj.production_companies,
    country: obj.production_countries,
    revenue: obj.revenue,
    tag: obj.tagline,
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

export const imdbSrc = (type, path) => {
  if (!path) return "";

  return `https://www.imdb.com/${type}/${path}/`;
};

export const tmdbSrc = (type, path) => {
  if (!path) return "";

  return `https://www.themoviedb.org/${type}/${path}`;
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

export const randomHeader = () => {
  let posters = [poster, poster2, poster3]
  const index = Math.floor(Math.random() * posters.length)
  return posters[index];
}
