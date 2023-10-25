import MovieReviewsBody from "./MovieReviewsBody";

const MovieReviews = (reviews) => {
  return (
    <div className="reviews">
      <h2 className="heading">Reviews</h2>
      <div className="row reviews-positioning">
        {reviews.reviews && reviews.reviews.length > 0
          ? reviews.reviews.map((review, id) => (
              <MovieReviewsBody key={id} review={review} />
            )).slice(0, 6)
          : " "}
      </div>
    </div>
  );
};

export default MovieReviews;
