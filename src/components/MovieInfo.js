import { LazyLoadImage } from "react-lazy-load-image-component";
import MovieTabs from "./moviecomponents/MovieTabs";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import Model from "./Model";
import ReviewModel from "./reviews/ReviewModel";
import ReviewModelSubmitted from "./reviews/ReviewModelSubmitted";
import MovieSecondaryButtons from "./moviecomponents/MovieSecondaryButtons";
import MovieRating from "./moviecomponents/MovieRating";
import MovieInfoBox from "./moviecomponents/MovieInfoBox";
import { formatDateShort, tmdbImageSrc } from "../utils";

const MovieInfo = ({ info, crew, cast }) => {
  const { dispatch } = useContext(ModalContext);
  const [reviewModal] = useState("reviewModal");
  const [reviewModalSubmitted] = useState("reviewModalSubmitted");

  return (
    <div className="movie-info">
      <div className="container flex">
        <div className="col-3 p-15 stats">
          <div className="movies__card">
            <div className="movies__card__img">
              <LazyLoadImage
                src={tmdbImageSrc(info.posterPath, "w780")}
                alt={"movie poster"}
              />
            </div>
          </div>
          <div className="stats-position-main-buttons">
            <button
              className="button-5"
              onClick={() =>
                dispatch({ type: OPEN_MODEL, payload: reviewModal })
              }
            >
              Add Review
            </button>
            <button className="button-6">
              <MoreVertIcon />
            </button>
          </div>
          <MovieSecondaryButtons />
          <MovieRating info={info.averageVote} />
        </div>
        <div className="stats main-movie-page-info">
          <div className="header__contents__text__child__movie-page stats-position-year">
            {formatDateShort(info.releaseDate)}
          </div>
          <div className="header__contents__text__child__movie-page stats-position-name">
            {info.title}
          </div>
          <MovieInfoBox info={info} crew={crew}/>
          <div className="stats movie-tabs">
            <MovieTabs cast={cast} crew={crew}/>
          </div>
          <Model current={reviewModal}>
            <ReviewModel currentModel={reviewModalSubmitted} />
          </Model>
          <Model current={reviewModalSubmitted}>
            <ReviewModelSubmitted currentModel={reviewModal} />
          </Model>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
