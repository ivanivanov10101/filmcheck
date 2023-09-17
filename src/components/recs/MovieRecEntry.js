import MovieList from "../MovieList";
import {useContext} from "react";
import MovieContext from "../../context/MovieContext";

const MovieRecEntry = ({name}) => {
  const {moviesData: {movies}} = useContext(MovieContext);
  return (
    <div className="similar-movies">
      <div className="container">
        <h2 className="heading">Similar to {name}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {movies.map((movie) => (
            <MovieList
              movie={movie}
              key={movie.id}
            />
          )).slice(1, 5)}
        </div>
      </div>
    </div>
  )
}

export default MovieRecEntry;
