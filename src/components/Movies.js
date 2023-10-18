import {useContext} from "react";
import MovieContext from "../context/MovieContext";
import MovieList from "./MovieList";
import HomeInfoTab from "./HomeInfoTab";

const Movies = () => {
  const {moviesData: {movies}} = useContext(MovieContext);
  const heading = 'Currently Popular';
  return (
    <div className="movies">
      <div className="container">
        <HomeInfoTab/>
        <div className='movies__block'>
          <h2 className='heading'>{heading}</h2>
          <div className='row ml-minus-15 mr-minus-15'>
            {movies.map((movie) => (
              <MovieList
                movie={movie}
                key={movie.id}
              />
            )).slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies;
