import { Fragment } from "react";
import { formatDate } from "../../utils";

const MovieInfoBox = ({ info, crew }) => {
  const director = crew?.filter(({ job }) => job === "Director");

  return (
    <Fragment>
      <div className="stats directed-by">
        Directed by:{" "}
        <div className="stats movie-info-import-data-color">
          {director && director[0].name}
        </div>
      </div>
      <div className="summary">{info.overview}</div>
      <div className="stats-minor-info">
        <div className="stats runtime">
          Runtime:{" "}
          <div className="stats movie-info-import-data-color">
            {info.runtime} min.
          </div>
        </div>
        <div className="stats genres">
          Genres:{" "}
          <div className="stats movie-info-import-data-color">
            {info.genres.map((genre, id) => {
              return <span key={id}>{(id ? ", " : "") + genre.name}</span>;
            })}
          </div>
        </div>
        <div className="stats release">
          Release Date:{" "}
          <div className="stats movie-info-import-data-color">
            {formatDate(info.releaseDate)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieInfoBox;
