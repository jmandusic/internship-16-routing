import { Link } from "react-router-dom";

import withFetchDigimon from "./withFetchDigimon";

const DigimonRead = ({ digimon }) => {
  return (
    <div>
      <h4>Name: {digimon.name}</h4>
      <h4>Description: {digimon.description}</h4>
      <Link to={`/digimons/update/${digimon.id}`}>
        <button>Update</button>
      </Link>
      <Link to={`/digimons/delete/${digimon.id}`}>
        <button>Delete</button>
      </Link>
    </div>
  );
};

export default withFetchDigimon(DigimonRead);
