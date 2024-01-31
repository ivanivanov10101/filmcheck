import React, { Fragment } from "react";
import SearchSummarySidebar from "./SearchSummarySidebar";
import {useParams} from "react-router-dom";

const SearchBody = (props) => {
  const params = useParams();
  return (
    <Fragment>
      <div className="person-wrapper">
        <section className="sidebar">
          <SearchSummarySidebar/>
        </section>
        <section className="films">
          <h1>Searching for: {params.query}</h1>
        </section>
      </div>
    </Fragment>
  );
};
export default SearchBody;
