import { useReducer } from 'react';
import SharedContext from '../SharedContext';
import SharedReducer from '../reducers/SharedReducer';
import reviews from '../../data/reviews';

const SharedProvider = (props) => {
    const [sharedData, dispatch] = useReducer(SharedReducer, {
        reviews: reviews,
    },undefined);
    return (
        <SharedContext.Provider value={{ sharedData, dispatch }}>
            {props.children}
        </SharedContext.Provider>
    );
};
export default SharedProvider;



