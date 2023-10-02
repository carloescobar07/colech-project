import React, { useState } from "react";
import { Flex, Heading, TextField, Button, Alert } from "@aws-amplify/ui-react";

function FormularioMinedu() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState(false);
  const [edad, setEdad] = useState(0);
  const [resultado, setResultado] = useState("");

  const handleOnApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleOnProcesar = () => {
    if (nombre === "" || apellido === "" || edad === "") {
      setError(true);
      return;
    }
    // TODO logica para el procesamiento de datos
    const nuevoResultado = `Su nombre es ${nombre} ${apellido} y tiene ${edad} años`;
    setResultado(nuevoResultado);
    setError(false);
  };

  return (
    <Flex direction="column" padding="2rem" gap="0.5rem">
      <p>El nombre es: {nombre}</p>
      <p>El apellido es: {apellido}</p>

      <p>El resultado es: {resultado}</p>
      <Heading width="30vw" level={6}>
        Heading text
      </Heading>

      <Heading width="30vw" level={6}>
        Heading text
      </Heading>

      <Heading width="30vw" level={6}>
        Heading text
      </Heading>

      {error && (
        <Alert variation="error" hasIcon heading="Error">
          Hay un error en el formulario
        </Alert>
      )}

      <TextField
        descriptiveText="esta es una explicacion"
        placeholder="Ej. John Doe"
        label="Nombre"
        errorMessage="There is an error"
        onChange={(e) => setNombre(e.target.value)}
      />

      <TextField
        descriptiveText="esta es una explicacion"
        placeholder="Ej. John Doe"
        label="Apellido"
        errorMessage="There is an error"
        onChange={handleOnApellidoChange}
      />

      <TextField
        descriptiveText="Ingrese su edad"
        placeholder="Ej. 18"
        label="Edad"
        type="number"
        onChange={(e) => setEdad(e.target.value)}
      />

      <Flex direction="row" justifyContent="center">
        <Button loadingText="" onClick={() => alert("hello")}>
          Cancelar
        </Button>
        <Button variation="primary" onClick={() => handleOnProcesar()}>
          Procesar
        </Button>
      </Flex>
    </Flex>
  );
}

export default FormularioMinedu;
