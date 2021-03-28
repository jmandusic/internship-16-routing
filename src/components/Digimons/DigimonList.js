import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchDigimons } from "../../services/digimonServices";
import Loading from "../Loading";
import { Button } from "../../index.styled";
import { ListContainer } from "../index.styled";

const DigimonList = () => {
  const [digimons, setDigimons] = useState(null);

  useEffect(() => {
    fetchDigimons().then(setDigimons);
  }, []);

  if (!digimons) {
    return <Loading />;
  }

  return (
    <ListContainer>
      <div>
        <h3>Digimon list:</h3>

        <Link to="/">
          <Button>Main menu</Button>
        </Link>
      </div>

      {digimons.map((digimon) => (
        <Link key={digimon.id} to={`/digimons/${digimon.id}`}>
          <p>{digimon.name}</p>
        </Link>
      ))}

      <Link to="/digimons/create">
        <Button>Add new digimon</Button>
      </Link>
    </ListContainer>
  );
};

export default DigimonList;
