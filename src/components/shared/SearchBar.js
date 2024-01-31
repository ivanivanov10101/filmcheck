import {useRef, useState} from "react";
import { FaSearch } from "react-icons/fa";

import {API_REA_TOKEN} from "../../api/tmbd-data";
import {useNavigate} from "react-router-dom";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchPageResults, setSearchPageResults] = useState(null)
  const navigate = useNavigate();
  const queryRef = useRef(null)
  const fetchData = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${API_REA_TOKEN}` } },
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json?.results;
        setResults(results);
        setSearchPageResults(results)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${queryRef.current.value}`)
    }
  }

  console.log(searchPageResults)
  return (
    <div className="container">
      <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          ref={queryRef}
          onChange={(e) => handleChange(e.target.value)}
          onKeyUp={handleKeyPress.bind(this)}
        />
        <button id="clear-button" onClick={() => handleChange("")}>X</button>
      </div>
    </div>

  );
};

export default SearchBar;
