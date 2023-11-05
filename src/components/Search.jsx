import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search-bar-container">
      <MdSearch className="search-icon" fontSize="1.3em" />
      <input placeholder="Search" className="search-input" 
      onChange={(event) => handleSearchText(event.target.value)}/>
    </div>
  );
};

export default Search;
