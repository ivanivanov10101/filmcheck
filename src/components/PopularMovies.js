import MovieList from "./MovieList";
import HomeInfoTab from "./HomeInfoTab";
import { tmdbImageSrc } from "../utils";
import { getPopulars } from "../api/tmbd-data";
import { useQuery } from "@tanstack/react-query";

const PopularMovies = () => {
  const heading = "Popular Movies";

  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      return await getPopulars("movie");
    },
  });

  return (
    <div className="movies">
      <div className="container">
        <HomeInfoTab />
        <div className="movies__block">
          <h2 className="heading">{heading}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {popular
              ?.map((movie) => (
                <MovieList
                  movie={movie}
                  imageSrc={tmdbImageSrc(movie.posterPath, "w780")}
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

export default PopularMovies;
