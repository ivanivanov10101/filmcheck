import {DETAILS} from "../types/MovieTypes";

const MovieReducer = (state, action) =>{
    const {type, payload} = action;
    if(type === DETAILS){
        const news = state.news.find((news) => news.id === parseInt(payload));
        return {
            ...state,
            details: news,
        };
    }
    else {
        return state;
    }
}

export default MovieReducer;
