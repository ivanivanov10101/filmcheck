import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/shared/Header";
import MovieInfo from "../components/MovieInfo";
import MovieRecEntry from "../components/recs/MovieRecEntry";
import Footer from "../components/footer/Footer";
import {
  getCast,
  getMovie,
  getReviews,
  getSimilar,
} from "../api/tmbd-data";
import {tmdbImageSrc} from "../utils";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import {Cast, Film} from "../interfaces";

const FilmPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentPage = useLocation();

  const [film, setFilm] = useState<Film | null | undefined>(null);

  const [cast, setCast] = useState<Cast[]>([]);
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setFilm(undefined);

    const fetch = async () => {
      const film = await getMovie(parseInt(id as string));
      if (film) {
        setFilm(film);
        const cast = await getCast(film.id);
        setCast(cast);
        const similar = await getSimilar(film.id);
        setSimilar(similar);
        const reviews = await getReviews(film.id);
        setReviews(reviews);
      }

    };

    fetch();
  }, [currentPage, id]);

  if (film === null) {
    return <></>;
  } else if (film === undefined) {
    return <LoadingSpinner />;
  }
  return (
    <Fragment>
      <Helmet>
        <title>{film.title}</title>
      </Helmet>
      <Header
        image={tmdbImageSrc(film.backdropPath, "original")}
        heading={undefined}
        paragraph={undefined}
        children={undefined}
      ></Header>
      {/*<MovieInfo*/}
      {/*  info={film}*/}
      {/*  crew={cast.crew}*/}
      {/*  cast={cast.cast}*/}
      {/*  reviews={reviews.results}*/}
      {/*/>*/}
      {/*{similar.length !== 0 && (*/}
      {/*  <MovieRecEntry movies={similar} name={film.title} />*/}
      {/*)}*/}
      {/*<Footer />*/}
    </Fragment>
  );
};

export default FilmPage;
