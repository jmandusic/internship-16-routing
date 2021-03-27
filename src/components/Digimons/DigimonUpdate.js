import { useState } from "react";
import { Redirect, useParams } from "react-router";

import { updateDigimon } from "../../services/digimonServices";
import DigimonForm from "./DigimonForm";
import withFetchDigimon from "./withFetchDigimon";

const DigimonUpdate = ({ digimon }) => {
  const params = useParams();
  const [isDigimonUpdated, setIsDigimonUpdated] = useState(false);

  const updateDigimonHandler = (digimon) => {
    updateDigimon(digimon, params.id).then(() => setIsDigimonUpdated(true));
  };

  if (isDigimonUpdated) {
    return <Redirect to={`/digimons/${params.id}`} />;
  }

  return <DigimonForm onSubmit={updateDigimonHandler} digimon={digimon} />;
};

export default withFetchDigimon(DigimonUpdate);
