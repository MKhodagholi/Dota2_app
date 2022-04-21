import React from "react";
import CardHero from "../components/CardHero";

import Search from "../components/Search";

const Stream = () => {
  return (
    <div className="stream">
      <Search />
      <div className="stream-content">
        <div className="title">
          Learn You <br />
          Favorite Hero
        </div>
        <CardHero />
      </div>
    </div>
  );
};

export default Stream;
