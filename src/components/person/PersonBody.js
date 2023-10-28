import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {imdbSrc, tmdbImageSrc, tmdbSrc} from "../../utils";
import { Link } from "react-router-dom";
import ReadMoreCollapse from "../shared/ReadMoreCollapse";
import PersonFilmographyCard from "./PersonFilmographyCard";

const PersonBody = (person) => {
  let info = person.person;
  console.log(info)
  return (
    <Fragment>
      <div className="person-wrapper">
        <section className="sidebar">
          <div className="sidebar__profilecard sidebar__profilecard__img">
            <LazyLoadImage src={tmdbImageSrc(info.profile_path, "h632")}/>
          </div>
          <aside className="sidebar__biography"><ReadMoreCollapse content={info.biography}/></aside>
          <span className="sidebar__bottom">More details at: </span>
          <Link
            className="imdb_link"
            target="_blank"
            to={imdbSrc('name', info.imdb_id)}
          >
            <button className="button-8">IMDB</button>
          </Link>
          <Link
            className="tmdb_link"
            target="_blank"
            to={tmdbSrc('movie', info.id)}
          >
            <button className="button-8">TMDB</button>
          </Link>
        </section>
        <section className="films">
          <header className="films__header">
            Films starring <h1 className="films__header__name">{info.name}</h1>
          </header>
          <div className="films__wrapper row">
            {info ? (
              info.movie_credits?.cast.map((movie) => {
                return (
                  <PersonFilmographyCard
                    movie={movie}
                    imageSrc={tmdbImageSrc(movie.poster_path, "w780")}
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
