import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const FooterIntro = () => {
    const [state] = useState({
        logo: '/assets/footer/logo_light.png',
        intro: 'FilmCheck Limited. Made by fans in Amsterdam, The Netherlands.'
    });
    return (
        <div className='footer__intro'>
            <div className='footer__intro__img'>
                <LazyLoadImage src={state.logo} alt='footer logo' />
            </div>
            <p className='footer__intro__msg'>{state.intro}</p>
        </div>
    );
};
export default FooterIntro;
