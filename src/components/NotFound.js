import { Link } from "react-router-dom";

import { Button, NotFoundContainer } from "../index.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Page not found</h1>
      <Link to="/">
        <Button>Main screen</Button>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
