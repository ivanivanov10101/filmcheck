import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from "react-router-dom";

const NewsBlock = ({ news }) =>{
  return(
    <div className="col-6 p-15">
      <div className="movies__card">
        <div className="movies__card__img">
          <LazyLoadImage src={news.image} alt={news.image}/>
        </div>
        <div className="movies__card__layer">
          <div className="movies__card__layer__content">
            <div className="movies__card__layer__content__movie">
              <Link className="movies__card__layer__content__movie__link" to={`/news/${news.id}`}>{news.name}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsBlock;
