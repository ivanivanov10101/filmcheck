import MovieList from "../MovieList";
import { shuffle, tmdbImageSrc } from "../../utils";

const MovieRecEntry = ({ movies, name }) => {
  if (!movies) return null;
  let recs = shuffle(movies?.results);
  return (
    <div className="similar-movies">
      <div className="container">
        <h2 className="heading">Similar to {name}</h2>
        <div className="row ml-minus-15 mr-minus-15 missing-recs">
          {recs.length === 0
            ? "No recommendations found."
            : recs
                .map((movie) => (
                  <MovieList
                    movie={movie}
                    imageSrc={tmdbImageSrc(movie.poster_path, "w342")}
                    key={movie.id}
                  />
                ))
                .slice(1, 5)}
        </div>
      </div>
    </div>
  );
};

export default MovieRecEntry;
