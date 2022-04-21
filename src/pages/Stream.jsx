import React from "react";
import CardHero from "../components/CardHero";
import Menu from "../components/Menu";

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
      <Menu />
    </div>
  );
};

export default Stream;
