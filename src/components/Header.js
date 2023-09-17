import {useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Header = ({heading, paragraph, children, image}) => {
    const [state] = useState({
        poster: '/assets/images/img.avif',
        logo: '/assets/images/logo.png'
    })
    const navigate = useNavigate()
    const goToHome = () =>{
        navigate('/');
    }
    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <LazyLoadImage src={state.logo} alt="logoImage" onClick={goToHome}/>
                </div>
            </div>
            <div className="header__image moviePageImage">
                {image ? <img src={image} alt={image}/> : <img src={state.poster} alt="poster" /> }
            </div>
            <div className='header__contents'>
                <div className='container'>
                    <div className='header__contents__text'>
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
        </div>
    )
}

export default Header;

