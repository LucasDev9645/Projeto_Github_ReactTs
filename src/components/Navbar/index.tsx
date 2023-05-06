import { Link } from "react-router-dom";
import iconHeader from "../../assets/arquivo-de-documento.png";

import "./styles.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <img src={iconHeader} alt="imagem menu" />
      <Link to="/">
        <h1>Busque GitHub</h1>
      </Link>
    </header>
  );
};

export default NavBar;
