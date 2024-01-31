import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="container">
      <ul className="results-list">
        {results.map((result, id) => {
          return <SearchResult result={result} key={id}/>;
        })}
      </ul>
    </div>
  );
};
