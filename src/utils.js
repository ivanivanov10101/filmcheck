import moment from "moment";
import { BsFillStarFill, BsStar } from "react-icons/bs";

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

export const rating = (number) => {
  const maxStars = 5;
  let container = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= number) {
      container.push(
        <BsFillStarFill
          key={i}
          size={26}
          color="#18c50f"
          className="reviews__body__contents__info__rating__icon"
        />,
      );
    } else {
      container.push(
        <BsStar
          key={i}
          size={26}
          color="#18c50f"
          className="reviews__body__contents__info__rating__icon"
        />,
      );
    }
  }
  return container;
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
