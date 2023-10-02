import React from "react";
import FormularioMinedu from "../components/FormularioMinedu";
import { useParams } from "react-router-dom";

import "../styles/Menu.css";

function MinisterioDetalle() {
  const { ministerioName } = useParams();

  return (
    <div>
      <h1>Detalle de Ministerio</h1>
      <h2>{ministerioName}</h2>
      {ministerioName === "Minedu" && <FormularioMinedu />}
      {ministerioName === "Economia" && <h1>Formulario de Economia</h1>}
    </div>
  );
}

export default MinisterioDetalle;
