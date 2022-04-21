import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="search">
      <input type="text" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
