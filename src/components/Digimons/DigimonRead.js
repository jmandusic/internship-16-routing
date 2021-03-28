import { Link } from "react-router-dom";

import withFetchDigimon from "./withFetchDigimon";
import { Detail, DetailsContainer } from "../index.styled";
import { Button } from "../../index.styled";

const DigimonRead = ({ digimon }) => {
  return (
    <DetailsContainer>
      <Detail>
        <h4>Name:</h4>
        <p>{digimon.name}</p>
      </Detail>

      <Detail>
        <h4>Description:</h4>
        <p>{digimon.description}</p>
      </Detail>

      <div>
        <Link to={`/digimons/update/${digimon.id}`}>
          <Button>Update</Button>
        </Link>
        <Link to={`/digimons/delete/${digimon.id}`}>
          <Button>Delete</Button>
        </Link>
      </div>
    </DetailsContainer>
  );
};

export default withFetchDigimon(DigimonRead);
