import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faPlay,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";

import axeImg from "../img/axe.png";

const CardHero = () => {
  return (
    <div className="card-hero">
      <div className="card-hero__img">
        <img src={axeImg} alt="" />
      </div>
      <div className="card-hero__content">
        <div className="describe">
          <h1>Axe</h1>
          <h2>
            <FontAwesomeIcon icon={faEye} /> 35k Views
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
