import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">
        <button>Main screen</button>
      </Link>
    </div>
  );
};

export default NotFound;
