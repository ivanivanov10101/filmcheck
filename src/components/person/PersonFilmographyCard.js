import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholder from "../../data/placeholder-movieimage.png";

const PersonFilmographyCard = ({ movie, imageSrc }) => {
  return (
    <div className="col-3 p-15">
      <div className="filmography__card">
        <div className="filmography__card__img">
          <LazyLoadImage
            src={imageSrc ? imageSrc : placeholder}
            alt={imageSrc}
          />
        </div>
        <div className="filmography__card__layer">
          <div className="filmography__card__layer__content filmography__card__layer__content__movie">
            {movie.title}
          </div>
        </div>
        <div className="filmography__card__info">
          <Link className="btn-white" to={`/film/${movie.id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonFilmographyCard;
