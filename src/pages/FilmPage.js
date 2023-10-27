import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import MovieInfo from "../components/MovieInfo";
import MovieRecEntry from "../components/recs/MovieRecEntry";
import Footer from "../components/footer/Footer";
import {
  getCast,
  getMovie,
  getReviews,
  getSimilar,
  getTrailer,
} from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { TrailerModal } from "../components/moviecomponents/TrailerModal";

const FilmPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentPage = useLocation();

  const [film, setFilm] = useState(null);

  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [trailer, setTrailer] = useState("");

  const movieTrailer = async (film) => {
    const trailer = await getTrailer(film.mediaType, film.id);

    setTrailer(`https://www.youtube.com/embed/${trailer[0].key}?autoplay=0`);
  };

  useEffect(() => {
    setFilm(undefined);

    const fetch = async () => {
      const film = await getMovie("movie", id);
      setFilm(film);
      const cast = await getCast("movie", film.id);
      setCast(cast);
      const similar = await getSimilar("movie", film.id);
      setSimilar(similar);
      const reviews = await getReviews("movie", film.id);
      setReviews(reviews);
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
      <Header image={tmdbImageSrc(film.backdropPath, "original")}></Header>
      <MovieInfo
        info={film}
        crew={cast.crew}
        cast={cast.cast}
        reviews={reviews.results}
      />
      {similar.length !== 0 && (
        <MovieRecEntry movies={similar} name={film.title} />
      )}
      <Footer />
      {/*<TrailerModal*/}
      {/*    onHide={() => movieTrailer('')}*/}
      {/*    src={trailer}*/}
      {/*></TrailerModal>*/}
    </Fragment>
  );
};

export default FilmPage;
