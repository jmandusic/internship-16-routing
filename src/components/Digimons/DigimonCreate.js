import { useState } from "react";
import { Redirect } from "react-router";

import { createDigimon } from "../../services/digimonServices";
import DigimonForm from "./DigimonForm";

const DigimonCreate = () => {
  const [isCreated, setIsCreated] = useState(false);

  const addDigimonHandler = (digimon) => {
    createDigimon(digimon).then(() => {
      setIsCreated(true);
    });
  };

  if (isCreated) {
    return <Redirect to="/digimons" />;
  }

  return <DigimonForm onSubmit={addDigimonHandler} />;
};

export default DigimonCreate;
