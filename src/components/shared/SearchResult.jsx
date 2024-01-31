import { formatDateShort, tmdbImageSrc } from "../../utils";
import placeholder from "../../data/placeholder-movieimage.png";
import { Link } from "react-router-dom";

export const SearchResult = ({ result }) => {
  return (
    <Link
      className="movies__card__layer__content__movie__link"
      to={`/film/${result?.id}`}
    >
      <li className="search-result">
        <div className="poster">
          {result?.poster_path ? (
            <img
              className="movie-poster"
              src={tmdbImageSrc(result?.poster_path, "w154")}
              alt="Movie Poster"
            />
          ) : (
            <img
              className="movie-poster"
              src={placeholder}
              alt="Movie Poster"
            />
          )}
        </div>

        <div className="movie-text">
          {result ? result?.title : " "}
          {result?.release_date ? (
            <div className="release-date">
              ({formatDateShort(result?.release_date)})
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
    </Link>
  );
};
