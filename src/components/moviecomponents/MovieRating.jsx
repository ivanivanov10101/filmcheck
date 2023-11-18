import { Rating } from "react-simple-star-rating";

const MovieRating = ({ info }) => {
  let movieRating = parseFloat((info / 2).toFixed(2));

  return (
    <div className="stats-position-rating">
      <Rating
        initialValue={movieRating}
        readonly
        allowFraction
        fillColor="#18c50f"
        emptyColor="#445566"
        className="rating"
      />
      <span className="rating">{movieRating}</span>
    </div>
  );
};

export default MovieRating;
