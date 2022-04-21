import React from "react";
import CardHero from "../components/CardHero";

import Search from "../components/Search";

import { cardHeroData } from "../data";

const Stream = () => {
  return (
    <div className="stream">
      <Search />
      <div className="stream-content">
        <div className="title">
          Learn You <br />
          Favorite Hero
        </div>
        <div className="card-heros">
          {cardHeroData.map((card, index) => (
            <CardHero
              name={card.name}
              views={card.views}
              img={card.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stream;
