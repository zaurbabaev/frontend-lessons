import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Books</Link>
      <Link to="/create">Create Book</Link>
    </nav>
  );
}

export default Navbar;
