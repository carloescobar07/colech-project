import React from "react";
import { Link } from "react-router-dom";

function MinedItem({ image, name, description }) {
  console.log(image);
  return (
    <Link to={`/MINED/${name}`}>
      <div className="Mineditem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        {/* <img src={image} width="240" height="auto" /> */}
        <h1> {name} </h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default MinedItem;
