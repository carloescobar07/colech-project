import React from "react";
import { MenuList as Ministerioslist } from "../helpers/Ministerioslist";
import Ministeriositem from "../components/Ministeriositem";
import "../styles/Menu.css";

function Menu() {
  console.log(Ministerioslist);
  return (
    <div className="ministerios">
      <h1 className="Ministeriostittle">MINISTERIOS </h1>
      <div className="Ministerioslist">
        {Ministerioslist.map((item, key) => (
          <Ministeriositem
            key={key}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
