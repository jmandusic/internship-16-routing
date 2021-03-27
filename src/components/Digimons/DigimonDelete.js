import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { deleteDigimon } from "../../services/digimonServices";
import withFetchDigimon from "./withFetchDigimon";

const DigimonDelete = ({ digimon }) => {
  const [isDigimonDeleted, setIsDigimonDeleted] = useState(false);

  const deleteDigimonHandler = () =>
    deleteDigimon(digimon).then(() => {
      setIsDigimonDeleted(true);
    });

  if (isDigimonDeleted) {
    return <Redirect to="/digimons" />;
  }

  return (
    <div>
      <h2>Are you sure you want to continue</h2>
      <button onClick={deleteDigimonHandler}>Yes</button>
      <Link to={`/digimons/${digimon?.id}`}>
        <button>No, go back</button>
      </Link>
    </div>
  );
};

export default withFetchDigimon(DigimonDelete);
