import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div>
      <Link to="/pokemons">
        <button>Pokemons</button>
      </Link>
      <Link to="/digimons">
        <button>Digimons</button>
      </Link>
    </div>
  );
};

export default MainScreen;
