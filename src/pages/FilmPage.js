import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/shared/Header";
import MovieInfo from "../components/MovieInfo";
import MovieRecEntry from "../components/recs/MovieRecEntry";
import Footer from "../components/footer/Footer";
import { getCast, getMovie, getReviews, getSimilar } from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const FilmPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const {
    isLoading,
    error,
    data: film,
  } = useQuery({
    queryKey: ["film", id],
    queryFn: async () => {
      return await getMovie(id);
    },
  });

  const { data: cast } = useQuery({
    queryKey: ["cast", id],
    queryFn: async () => {
      return await getCast(id);
    },
  });

  const { data: similar } = useQuery({
    queryKey: ["similar", id],
    queryFn: async () => {
      return await getSimilar(id);
    },
  });

  const { data: review } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      return await getReviews(id);
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) console.log(error.message);

  return (
    <Fragment>
      <Helmet>
        <title>{film?.title}</title>
      </Helmet>
      <Header image={tmdbImageSrc(film?.backdropPath, "original")}></Header>
      <MovieInfo
        info={film}
        crew={cast?.crew}
        cast={cast?.cast}
        reviews={review?.results}
      />
      {similar?.length !== 0 && (
        <MovieRecEntry movies={similar} name={film?.title} />
      )}
      <Footer />
    </Fragment>
  );
};

export default FilmPage;
