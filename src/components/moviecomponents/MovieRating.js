import { BsFillStarFill, BsStar } from "react-icons/bs";

const MovieRating = ({ details }) => {
  const rating = (number) => {
    const maxStars = 5;
    let container = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= number) {
        container.push(
          <BsFillStarFill
            key={i}
            size={26}
            color="#18c50f"
            className="reviews__body__contents__info__rating__icon"
          />,
        );
      } else {
        container.push(
          <BsStar
            key={i}
            size={26}
            color="#18c50f"
            className="reviews__body__contents__info__rating__icon"
          />,
        );
      }
    }
    return container;
  };
  return (
    <div className="stats-position-rating">
      <div className="stats-position-rating__stars score">
        {rating(details.rating)}
      </div>
      <div className="stats-position-rating-number score">{details.rating}</div>
    </div>
  );
};

export default MovieRating;
