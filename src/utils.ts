import moment from "moment";
import poster from "./data/img.avif";
import poster2 from "./data/img2.jpg";
import poster3 from "./data/img3.jpg";
import {MediaType} from "./types";
import {Film} from "./interfaces";

export const formatResult = (obj: any, mediaType?: MediaType): Film => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    posterPath: obj.poster_path,
    backdropPath: obj.backdrop_path,
    releaseDate: obj.release_date,
    mediaType: mediaType || obj.media_type,
    runtime: obj.runtime,
    averageVote: obj.vote_average,
    overview: obj.overview,
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

export const shuffle = (a: any) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const tmdbImageSrc = (path: string, size: string): string => {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const imdbSrc = (type: string, path: string): string => {
  if (!path) return "";

  return `https://www.imdb.com/${type}/${path}/`;
};

export const tmdbSrc = (type: string, path: string) => {
  if (!path) return "";

  return `https://www.themoviedb.org/${type}/${path}`;
};

export const formatDate = (date: string) => {
  return moment(date).format("Do MMMM YYYY");
};

export const formatDateShort = (date: string) => {
  return moment(date).format("YYYY");
};

export const mergeClassName = (val1: string, val2: string) => {
  return val1 + " " + (val2 || "");
};

export const randomHeader = () => {
  let posters = [poster, poster2, poster3];
  const index = Math.floor(Math.random() * posters.length);
  return posters[index];
};
