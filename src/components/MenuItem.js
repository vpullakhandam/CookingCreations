import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, reci }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>
        {" "}
        {
          <Link to={reci}>
            <button className="reci-button">recipe</button>
          </Link>
        }{" "}
      </p>
    </div>
  );
}

export default MenuItem;
