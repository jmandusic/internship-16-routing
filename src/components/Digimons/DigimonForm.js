import { useState, useEffect } from "react";

import { fetchDigimons } from "../../services/digimonServices";
import { Form } from "../index.styled";
import { Button } from "../../index.styled";

const DigimonForm = ({ onSubmit, digimon }) => {
  const [digimonNames, setDigimonNames] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [digimonName, setDigimonName] = useState(digimon?.name || "");
  const [digimonDescription, setDigimonDescription] = useState(
    digimon?.description || ""
  );

  useEffect(() => {
    fetchDigimons().then((digimons) => {
      setDigimonNames(digimons.map((digimon) => digimon.name));
    });
  }, []);

  const changeHandler = (setter) => (e) => {
    setter(e.target.value);
  };

  const digimonSubmitHandler = (e) => {
    e.preventDefault();

    if (!digimonName?.trim()) {
      setErrorMessage("Digimon name is not defined");
      return;
    }

    if (!digimonDescription?.trim()) {
      setErrorMessage("Digimon description is not defined");
      return;
    }

    if (digimonNames.includes(digimonName) && digimonName !== digimon?.name) {
      setErrorMessage(`"${digimonName}" is already in the digimons`);
      return;
    }

    setErrorMessage("");

    const digimonUpdated = {
      name: digimonName,
      description: digimonDescription,
    };

    onSubmit(digimonUpdated);
  };

  return (
    <Form onSubmit={digimonSubmitHandler}>
      <label>Digimon name:</label>
      <input value={digimonName} onChange={changeHandler(setDigimonName)} />

      <label>Digimon description:</label>
      <input
        value={digimonDescription}
        onChange={changeHandler(setDigimonDescription)}
      />

      <Button>Submit</Button>
      {errorMessage && <span>{errorMessage}</span>}
    </Form>
  );
};

export default DigimonForm;
