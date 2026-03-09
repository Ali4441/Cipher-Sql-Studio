import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = ({ status, Navigate }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        <div className="navbar__logo">
          <img src="/letter-c.png" alt="CipherSQLStudio Logo" id="Logo" />
        </div>
        <span className="navbar__name">
          Cipher<em>SQL</em>Studio
        </span>
      </Link>


      <div className="navbar__status">
        <div className="navbar__dot"></div>
        {status}
      </div>

      <Link to="/" className="navbar__btn">{Navigate}</Link>
    </nav>
  );
};

export default Navbar;