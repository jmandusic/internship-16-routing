import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDigimons } from "../../services/digimonServices";
import Loading from "../Loading";

const DigimonList = () => {
  const [digimons, setDigimons] = useState(null);

  useEffect(() => {
    fetchDigimons().then(setDigimons);
  }, []);

  if (!digimons) {
    return <Loading />;
  }

  return (
    <div>
      {digimons.map((digimon) => (
        <Link key={digimon.id} to={`/digimons/${digimon.id}`}>
          {digimon.name}
        </Link>
      ))}

      <Link to="/digimons/create">
        <button>Add new digimon</button>
      </Link>

      <Link to="/">
        <button>Main menu</button>
      </Link>
    </div>
  );
};

export default DigimonList;
