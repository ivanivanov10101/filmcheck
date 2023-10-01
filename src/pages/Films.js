import React, {Fragment, useMemo, useState} from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/page-elements/Pagination";
import {allmovies} from "../data/allmovies";
import SmallHeader from "../components/SmallHeader";
import Footer from "../components/footer/Footer";

const Films = () => {
  const [heading] = useState('Currently Popular');

  const [currentPage, setCurrentPage] = useState(1);
  let EntryAmount = 16;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * EntryAmount;
    const lastPageIndex = firstPageIndex + EntryAmount;
    return allmovies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, EntryAmount]);

  return (
    <Fragment>
      <SmallHeader/>
      <div className="movies">
        <div className="container">
          <div className='movies__block'>
            <h2 className='heading'>{heading}</h2>
            <div className='row ml-minus-15 mr-minus-15'>
              {currentTableData.map((film) => (
                <MovieList
                  movie={film}
                  key={film.id}
                />
              ))}
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={allmovies.length}
              pageSize={EntryAmount}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>

  )
}

export default Films;
