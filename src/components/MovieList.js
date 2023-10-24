import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholder from '../data/placeholder-movieimage.png';


const MovieList = ({ movie, imageSrc }) => {
  return (
    <div className="col-3 p-15">
      <div className="movies__card">
        <div className="movies__card__img">
          <LazyLoadImage src={imageSrc ? imageSrc : placeholder} alt={imageSrc} />
        </div>
        <div className="movies__card__layer">
          <div className="movies__card__layer__content movies__card__layer__content__movie">
            {movie.title}
          </div>
        </div>
        <div className="movies__card__info movies__card__info__text">
          <Link className="btn-white" to={`/film/${movie.id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
