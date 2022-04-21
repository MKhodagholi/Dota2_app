import React from "react";

const Menu = () => {
  const menuHandler = () => {};

  return (
    <div className="menu">
      <ul>
        <li>
          <i className="fa fa-video-camera"></i>
          <h2>Tutorial</h2>
        </li>
        <li className="active">
          <i className="fa fa-youtube-play"></i>
          <h2>Stream</h2>
        </li>
        <li>
          <i className="fa fa-television"></i>
          <h2>Match</h2>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
