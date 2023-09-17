import {LazyLoadImage} from "react-lazy-load-image-component";

const NewsBody = ({details}) => {
  return (
    <div className="movie-info">
      <div className="news-title-block">
        <div className="header__contents__text__child__movie-page news-title-height">{details.name}</div>
        <div className="news__author">Author: <div className="stats MovieInfoImportDataColor">{details.author}</div></div>
        <div className="news__author">Date: <div className="stats MovieInfoImportDataColor">{details.date}</div></div>
      </div>
      <div className="container">
        <div className="">
          <div className="card-and-alt flex-child">
            <div className="news__card">
              <div className="news__card__img">
                <LazyLoadImage src={details.image}/>
              </div>
            </div>
            <div className="news__card__alt">
              <div>{details.alt}</div>
            </div>
          </div>
        </div>
        <div className="news__body">
          <h1 className="news__header">{details.h1}</h1>
          <p className="news__text">{details.content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsBody;
