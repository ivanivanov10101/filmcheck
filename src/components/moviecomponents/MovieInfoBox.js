import { Fragment } from "react";

const MovieInfoBox = ({ details }) => {
  return (
    <Fragment>
      <div className="stats directed-by">
        Directed by:{" "}
        <div className="stats movie-info-import-data-color">
          {details.director}
        </div>
      </div>
      <div className="summary">{details.details}</div>
      <div className="stats-minor-info">
        <div className="stats runtime">
          Runtime:{" "}
          <div className="stats movie-info-import-data-color">
            {details.runtime} min.
          </div>
        </div>
        <div className="stats genres">
          Genres:{" "}
          <div className="stats movie-info-import-data-color">
            {details.genres}
          </div>
        </div>
        <div className="stats release">
          Release Date:{" "}
          <div className="stats movie-info-import-data-color">
            {details.release}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieInfoBox;
