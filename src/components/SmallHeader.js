import {useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const SmallHeader = ({heading, paragraph, children, image}) => {
  const [state] = useState({
    poster: '/assets/images/img.avif',
    logo: '/assets/images/logo.png'
  })
  const navigate = useNavigate()
  const goToHome = () =>{
    navigate('/');
  }
  return(
    <div className='small-header'>
      <div className='container'>
        <div className='small-header__logo'>
          <LazyLoadImage src={state.logo} alt="logoImage" onClick={goToHome}/>
        </div>
      </div>
      <div className='header__image moviePageImage'>
        {image ? <img src={image} alt={image}/> : <img src={state.poster} alt="poster" /> }
      </div>
      <div className='small-header__contents'>
        <div className='container'>
          <div className='small-header__contents__text'>
            <div className='small-header__contents__text__child'>
              <h1 className='small-header__contents__text__child__h1'>{heading}</h1>
              <p className='small-header__contents__text__child__p'>{paragraph}</p>
              <div className='small-header__contents__text__child__link'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallHeader;

