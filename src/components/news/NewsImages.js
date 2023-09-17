import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NewsContext from '../../context/NewsContext';
import { OPEN_LIGHTBOX } from '../../context/types/GalleryTypes';
const NewsImages = ({ glr }) => {
    const { dispatch } = useContext(NewsContext);
    const openLightBox = (imageObject) => {
        dispatch({ type: OPEN_LIGHTBOX, payload: imageObject });
    };
    return (
        <div className='col-6 p-15'>
            <div className='gallery__image'>
                <LazyLoadImage src={glr.image} onClick={() => openLightBox(glr)} />
            </div>
        </div>
    );
};
export default NewsImages;
