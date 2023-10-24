import { rating } from "../../utils";

const MovieRating = ({ info }) => {
  let movieRating = (info / 2).toFixed(2);

  return (
    <div className="stats-position-rating">
      <div className="stats-position-rating-number score">
        <span className="stats-position-rating__stars">
          {rating(movieRating)}
        </span>
        <span>{movieRating}</span>
      </div>
    </div>
  );
};

export default MovieRating;
