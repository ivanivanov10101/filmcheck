import {useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const SmallHeader = ({heading, paragraph, children, image}) => {
  const [state] = useState({
    poster: './assets/images/img.avif',
    logo: './assets/images/logo.png'
  })
  const navigate = useNavigate()
  const goToHome = () =>{
    navigate('/');
  }
  return(
    <div className='small-header'>
      <div className='container'>
        <div className='small-header__logo'>
          <LazyLoadImage src={state.logo} alt="logo-image" onClick={goToHome}/>
        </div>
      </div>
      <div className='header__image'>
        {image ? <img src={image} alt={image}/> : <img src={state.poster} alt="poster" /> }
      </div>
    </div>
  )
}

export default SmallHeader;

