import React, { Fragment, useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SmallHeader from "../components/SmallHeader";
import Footer from "../components/footer/Footer";
import { getPopularsFilmsPage } from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";
import ReactPaginate from "react-paginate";
import HeaderDropDown from "../components/shared/HeaderDropDown";
import DownshiftDropdown from "../components/shared/DownshiftDropdown";

const Films = () => {
  const heading = "Currently Popular";

  const [popularMovies, setPopularMovies] = useState([]);
  const pageCount = 500 ;//hard limit by the API, stated in the support pages

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPopularMovies = async (page) => {
    const movies = await getPopularsFilmsPage(page);
    setPopularMovies(movies);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchPopularMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);
  };

  return (
    <Fragment>
      <SmallHeader />
      <div className="container movies__block">
<<<<<<< HEAD
        {/*<h2 className="heading">*/}
        {/*  <HeaderDropDown />*/}
        {/*</h2>*/}
        {/*<h2 className="heading">*/}
        {/*  <DownshiftDropdown />*/}
        {/*</h2>*/}
        <h2 className="heading">{heading}</h2>
=======
        <h2 className="heading"><HeaderDropDown/></h2>
        {/*<h2 className="heading">{heading}</h2>*/}
>>>>>>> parent of 07b1db2 (minor fixes)
        <div className="row ml-minus-15 mr-minus-15">
          {isLoaded ? (
            popularMovies.results.map((movie) => {
              return (
                <MovieList
                  movie={movie}
                  imageSrc={tmdbImageSrc(movie.poster_path, "w780")}
                  key={movie.id}
                />
              );
            })
          ) : (
            <div>No Movies Found</div>
          )}
        </div>
        {popularMovies ? (
          <ReactPaginate
            pageCount={pageCount}
            pageRange={2}
            breakLabel={"..."}
            marginPagesDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"paginate-container"}
            previousLinkClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            breakClassName={"page__break"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          ></ReactPaginate>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Films;
