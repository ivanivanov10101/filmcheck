import {LazyLoadImage} from "react-lazy-load-image-component";
import {useNavigate} from "react-router-dom";
import poster from '../data/img.avif';
import logo from '../data/logo.png';

const Header = ({heading, paragraph, children, image}) => {

  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/');
  }
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <LazyLoadImage src={logo} alt="logo-image" onClick={goToHome}/>
        </div>
      </div>
      <div className="header__image">
        {image ? <img src={image} alt={image}/> : <img src={poster} alt="poster"/>}
      </div>
      <div className='header__contents'>
        <div className='container header__contents__text'>
          <div className='header__contents__text__child'>
            <h1 className='header__contents__text__child__h1'>{heading}</h1>
            <p className='header__contents__text__child__p'>{paragraph}</p>
            <div className='header__contents__text__child__link'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

