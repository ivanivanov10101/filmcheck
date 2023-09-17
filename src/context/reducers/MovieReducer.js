import {DETAILS} from "../types/MovieTypes";

const MovieReducer = (state, action) =>{
    const {type, payload} = action;
    if(type === DETAILS){
        const movie = state.movies.find((movie) => movie.id === parseInt(payload));
        return {
            ...state,
            details: movie,
        };
    }
    else {
        return state;
    }
}

export default MovieReducer;
