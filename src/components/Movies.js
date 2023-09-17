import {useContext, useState} from "react";
import MovieContext from "../context/MovieContext";
import MovieList from "./MovieList";

const Movies = () => {
    const {moviesData: {movies}} = useContext(MovieContext);
    const [heading] = useState('Currently Popular');

    const [state] = useState({
        heading: "Discover and share your experience about countless movie classics.",
        paragraph: "Pick up a camera. Shoot something. No matter how small, no matter how cheesy, no matter whether your friends and your sister star in it. Put your name on it as director. Now you're a director. Everything after that you're just negotiating your budget and your fee. \n --James Cameron",
    })
    return (
        <div className="movies">
            <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <h3 className="movies__heading">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="movies__paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
                <div className='movies__block'>
                    <h2 className='heading'>{heading}</h2>
                    <div className='row ml-minus-15 mr-minus-15'>
                        {movies.map((movie) => (
                            <MovieList
                                movie={movie}
                                key={movie.id}
                            />
                        )).slice(0, 8)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;
