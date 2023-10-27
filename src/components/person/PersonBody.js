import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { tmdbImageSrc } from "../../utils";
import { Link } from "react-router-dom";
import MovieList from "../MovieList";

const PersonBody = (person, movies, isLoaded) => {
  let info = person.person;

  return (
    <Fragment>
      <div className="person-wrapper">
        <section className="sidebar">
          <div className="movies__card movies__card__img">
            <LazyLoadImage src={tmdbImageSrc(info.profile_path, "h632")} />
          </div>
          <div className="sidebar__biography">{info.biography}</div>
          <span className="sidebar__bottom">More details at: </span>
          <Link
            className="imdb_link"
            target="_blank"
            to={`https://www.imdb.com/name/${info.imdb_id}/`}
          >
            <button className="button-8">IMDB</button>
          </Link>
          <Link
            className="tmdb_link"
            target="_blank"
            to={`https://www.themoviedb.org/person/${info.id}`}
          >
            <button className="button-8">TMDB</button>
          </Link>
        </section>
        <section className="films">
          <header className="films__header">
            Films starring <h1 className="films__header__name">{info.name}</h1>
          </header>
          <div className="films__wrapper">
            {isLoaded ? (
              movies.results.map((movie) => {
                return (
                  <MovieList
                    movie={movie}
                    imageSrc={tmdbImageSrc(movie.backdrop_path, "w780")}
                    key={movie.id}
                  />
                );
              })
            ) : (
              <div>No Movies Found</div>
            )}
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default PersonBody;
