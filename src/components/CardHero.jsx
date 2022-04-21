import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlay } from "@fortawesome/free-solid-svg-icons";

const CardHero = ({ name, img, views = 0 }) => {
  return (
    <div className="card-hero">
      <div className="card-hero__img">
        <img src={img} alt="" />
      </div>
      <div className="card-hero__content">
        <div className="describe">
          <h1>{name}</h1>
          <h2>
            <FontAwesomeIcon icon={faEye} /> {views}k Views
          </h2>
        </div>
        <div className="play-btn">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </div>
  );
};

export default CardHero;
