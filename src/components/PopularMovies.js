import {useEffect, useState} from "react";
import MovieList from "./MovieList";
import HomeInfoTab from "./HomeInfoTab";
import {tmdbImageSrc} from "../utils";
import {getPopulars} from "../api/tmbd-data";

const PopularMovies = () => {
  const heading = "Popular Movies";

  const [popularMovies, setPopularMovies] = useState([])

  const fetchPopularMovies = async () => {
    const movies = await getPopulars('movie')
    setPopularMovies(movies)
  }
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="movies">
      <div className="container">
        <HomeInfoTab />
        <div className="movies__block">
          <h2 className="heading">{heading}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {popularMovies
              .map((movie) => <MovieList movie={movie} imageSrc={tmdbImageSrc(movie.posterPath, 'w342')} key={movie.id} />)
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
