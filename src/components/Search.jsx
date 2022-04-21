import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search your hero..." />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  );
};

export default Search;
