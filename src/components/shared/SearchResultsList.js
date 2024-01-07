import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="container">
      <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult result={result} key={id}/>;
        })}
      </div>
    </div>
  );
};
