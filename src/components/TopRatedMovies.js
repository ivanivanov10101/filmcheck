import MovieList from "./MovieList";
import { getTopRated } from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";
import { useQuery } from "@tanstack/react-query";

const TopRatedMovies = () => {
  const heading = "Top Rated Movies";

  const { data: top } = useQuery({
    queryKey: ["top"],
    queryFn: async () => {
      return (await getTopRated()).films;
    },
  });

  return (
    <div className="movies">
      <div className="container">
        <div className="movies__block">
          <h2 className="heading">{heading}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {top
              ?.map((movie) => (
                <MovieList
                  movie={movie}
                  imageSrc={tmdbImageSrc(movie.posterPath, "w342")}
                  key={movie.id}
                />
              ))
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
