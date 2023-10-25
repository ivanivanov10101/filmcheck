import React, { Fragment, useEffect, useMemo, useState } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/page-elements/Pagination";
import SmallHeader from "../components/SmallHeader";
import Footer from "../components/footer/Footer";
import { getPopulars } from "../api/tmbd-data";
import { tmdbImageSrc } from "../utils";

const Films = () => {
  const [heading] = useState("Currently Popular");

  const [currentPage, setCurrentPage] = useState(1);

  let EntryAmount = 16;

  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const movies = await getPopulars("movie");
    setPopularMovies(movies);
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * EntryAmount;
    const lastPageIndex = firstPageIndex + EntryAmount;
    return popularMovies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, EntryAmount, popularMovies]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <Fragment>
      <SmallHeader />
      <div className="container movies__block">
        <h2 className="heading">{heading}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {currentTableData &&
            currentTableData.map((film) => (
              <MovieList
                movie={film}
                imageSrc={tmdbImageSrc(film.posterPath, "w780")}
                key={film.id}
              />
            ))}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={popularMovies.length}
          pageSize={EntryAmount}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Films;
