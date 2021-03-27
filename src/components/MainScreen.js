import { Link } from "react-router-dom";

import { Button, MainScreenContainer } from "../index.styled";

const MainScreen = () => {
  return (
    <MainScreenContainer>
      <h1>Main menu</h1>

      <div>
        <Link to="/pokemons">
          <Button>Pokemons</Button>
        </Link>

        <Link to="/digimons">
          <Button>Digimons</Button>
        </Link>
      </div>
    </MainScreenContainer>
  );
};

export default MainScreen;
