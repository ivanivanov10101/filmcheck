import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import MovieInfo from "../components/MovieInfo";
import MovieRecEntry from "../components/recs/MovieRecEntry";
import Footer from "../components/footer/Footer";
import { getCast, getMovie, getRecs } from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";

const FilmPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentPage = useLocation();

  const [film, setFilm] = useState(null);

  const [cast, setCast] = useState([]);
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    setFilm(undefined);

    const fetch = async () => {
      const film = await getMovie("movie", id);
      setFilm(film);
      const cast = await getCast("movie", film.id);
      setCast(cast);
      const recs = await getRecs("movie", film.id);
      setRecs(recs);
    };

    fetch();
  }, [currentPage, id]);

  if (film === null) {
    return <></>;
  } else if (film === undefined) {
    return (
      <div className={"center"}>
        <h1>LOADING</h1>
      </div>
    );
  }
  return (
    <Fragment>
      <Helmet>
        <title>{film.title}</title>
      </Helmet>
      <Header image={tmdbImageSrc(film.backdropPath, "original")}></Header>
      <MovieInfo info={film} crew={cast.crew} cast={cast.cast} />
      {recs.length !== 0 && <MovieRecEntry movies={recs} name={film.title} />}
      <Footer />
    </Fragment>
  );
};

export default FilmPage;
