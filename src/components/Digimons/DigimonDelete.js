import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { deleteDigimon } from "../../services/digimonServices";
import withFetchDigimon from "./withFetchDigimon";
import { ConfirmationModalContainer } from "../index.styled";
import { Button } from "../../index.styled";

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
    <ConfirmationModalContainer>
      <h1>Are you sure you want to continue?</h1>

      <div>
        <Button onClick={deleteDigimonHandler}>Yes</Button>
        <Link to={`/digimons/${digimon?.id}`}>
          <Button>No, go back</Button>
        </Link>
      </div>
    </ConfirmationModalContainer>
  );
};

export default withFetchDigimon(DigimonDelete);
