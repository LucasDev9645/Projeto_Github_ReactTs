import iconHeader from "../../assets/arquivo-de-documento.png";

import "./styles.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <img src={iconHeader} alt="imagem menu" />
      <h1>Busque GitHub</h1>
    </header>
  );
};

export default NavBar;
