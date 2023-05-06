import imgError from "../../../assets/erro.png";

import "./styles.css";

const SearchErrorCard = () => {
  return (
    <div className="container">
      <div className="search-error-card-container">
        <h1>Erro ao buscar usuário!</h1>
        <img src={imgError} alt="erro" />
      </div>
    </div>
  );
};

export default SearchErrorCard;
