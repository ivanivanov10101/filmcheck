import {useReducer} from "react";
import MovieContext from "../MovieContext";
import MovieReducer from "../reducers/MovieReducer";
import {allmovies} from "../../data/allmovies";

const MoviesProvider = (props) =>{
    const [moviesData, dispatch] = useReducer(MovieReducer, {
        movies: allmovies,
        details: {},
    },undefined);
    return (
        <MovieContext.Provider value={{moviesData, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesProvider;
