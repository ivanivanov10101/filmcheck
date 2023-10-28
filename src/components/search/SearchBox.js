import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {IoIosSearch} from "react-icons/io";

const SearchBox = () => {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [keyword, setKeyword] = useState('');
  const defaultKeyword = useRef('');
  const navigate = useNavigate()
  const searchRef = useRef<HTMLInputElement>(null)


  const goToSearchPage = () => {
    if (keyword) {
      defaultKeyword.current = keyword
      navigate(`/search?q=${keyword}`)
      setSearchFocus(false)
      searchRef.current?.blur()
    }
  }
  return (
    <div
      className="
          border-b-[1.5px]
          border-white
          flex
          items-center
          p-1
          flex-[0.5]
          focus-within:border-primary
          relative
        "
    >
      <input
        onClick={(e) => {
          e.stopPropagation()
          setSearchFocus(true)
        }}
        onKeyDown={(e) => (e.key === 'Enter' ? goToSearchPage() : '')}
        onInput={(e) => setKeyword(e.currentTarget.value)}
        value={keyword}
        type="text"
        className="bg-transparent outline-0 flex-1"
        placeholder="search..."
      />
      <IoIosSearch size={18}></IoIosSearch>
      {/* tmp results */}
      {isSearchFocus && keyword ? (
        <SearchResult
          keyword={keyword}
          goToSearchPage={goToSearchPage}
        ></SearchResult>
      ) : (
        ''
      )}
    </div>
  )
}
export default SearchBox
