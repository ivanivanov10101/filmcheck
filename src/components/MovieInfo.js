import {LazyLoadImage} from "react-lazy-load-image-component";
import MovieTabs from "./page-elements/MovieTabs";
import {BsFillStarFill, BsStar} from "react-icons/bs";

import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {OPEN_MODEL} from "../context/types/ModelTypes";
import {useContext, useState} from "react";
import ModelContext from "../context/ModelContext";
import Model from "./Model";
import ReviewModal from "./reviews/ReviewModal";
import ReviewModalSubmitted from "./reviews/ReviewModalSubmitted";

const MovieInfo = ({details}) => {
  const {dispatch} = useContext(ModelContext);
  const [reviewModal] = useState('reviewModal');
  const [reviewModalSubmitted] = useState('reviewModalSubmitted');
  const rating = (number) => {
    const maxStars = 5;
    let container = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= number) {
        container.push(
          <BsFillStarFill
            key={i}
            size={26}
            color='#18c50f'
            className='reviews__body__contents__info__rating__icon'
          />
        );
      } else {
        container.push(
          <BsStar
            key={i}
            size={26}
            color='#18c50f'
            className='reviews__body__contents__info__rating__icon'
          />
        );
      }
    }
    return container;
  };
  return (
    <div className="movie-info">
      <div className="container flex">
        <div className="col-3 p-15 stats">
          <div className="movies__card">
            <div className="movies__card__img">
              <LazyLoadImage src={details.image}/>
            </div>
          </div>
          <div className="statsPositionButtons">
            <div className="statsPositionMainButtons">
              <button className="statsPositionMainButtonsAdd button-5"
                      onClick={() => dispatch({type: OPEN_MODEL, payload: reviewModal})}>Add Review
              </button>
              <button className="button-6"><MoreVertIcon/></button>
            </div>
            <div className="statsPositionSecondaryButtons">
              <button className="buttons button-6"><ShareIcon/></button>
              <button className="buttons button-6"><VisibilityIcon/></button>
              <button className="buttons button-6"><FavoriteIcon/></button>
              <button className="buttons button-6"><BookmarkIcon/></button>
              <button className="buttons button-6"><FormatListBulletedIcon/></button>
            </div>
            <div className="stats-position-rating">
              <div className="stats-position-rating__stars score">{rating(details.rating)}</div>
              <div className="stats-position-rating-number score">{details.rating}</div>
            </div>
          </div>
        </div>

        <div className="stats main-movie-page-info">
          <div className="header__contents__text__child__movie-page stats-position-year">{details.year}</div>
          <div className="header__contents__text__child__movie-page stats-position-name">{details.name}</div>
          <div className="stats directed-by">Directed by: <div
            className="stats movie-info-import-data-color">{details.director}</div></div>
          <div className="summary">{details.details}</div>
          <div className="stats-minor-info">
            <div className="stats runtime">Runtime: <div
              className="stats movie-info-import-data-color">{details.runtime} min.</div></div>
            <div className="stats genres">Genres: <div className="stats movie-info-import-data-color">{details.genres}</div>
            </div>
            <div className="stats release">Release Date: <div
              className="stats movie-info-import-data-color">{details.release}</div></div>
          </div>
          <div className="stats movieTabs">
            <MovieTabs details={details}/>
          </div>
          <Model current={reviewModal}><ReviewModal currentModel={reviewModalSubmitted}/> </Model>
          <Model current={reviewModalSubmitted}><ReviewModalSubmitted currentModel={reviewModal}/> </Model>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
