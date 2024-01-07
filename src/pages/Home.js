import { Fragment, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import Model from "../components/Model";
import ModalContext from "../context/ModalContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

import Header from "../components/shared/Header";
import Register from "../auth/Register";
import Login from "../auth/Login";
import TopRatedMovies from "../components/TopRatedMovies";
import NewsFeed from "../components/news/NewsFeed";
import Footer from "../components/footer/Footer";
import Reviews from "../components/Reviews";
import PopularMovies from "../components/PopularMovies";
import SearchBar from "../components/shared/SearchBar";
import { SearchResultsList } from "../components/shared/SearchResultsList";

const Home = () => {
  const [results, setResults] = useState([]);
  const { dispatch } = useContext(ModalContext);

  const state = {
    heading: "FilmCheck, the social media for film nerds",
    paragraph:
      "Join us today! And share your film experiences with other film nerds!",
  };
  const registerModel = "registerModel";
  const loginModel = "loginModel";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>FilmCheck - The Social Media for Film Nerds</title>
        <meta name="description" content="The Social Media for Film Nerds" />
        <meta name="keywords" content="films, movies, fans, actors" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
        >
          Register
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />{" "}
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />{" "}
      </Model>
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <PopularMovies />
      <Reviews />
      <TopRatedMovies />
      <NewsFeed />
      <Footer />
    </Fragment>
  );
};

export default Home;
