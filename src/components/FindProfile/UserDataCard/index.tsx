import "./styles.css";

import foto from "../../../assets/681807.jpg";

const UserDataCard = () => {
  return (
    <div className="container">
      <div className="user-data-card-container">
        <div>
          <img src={foto} alt="" />
        </div>
        <div className="user-data-card-description">
          <h2>Informações</h2>
          <p>
            <span>Perfil:</span> github.com/LucasDev9645/Projeto_Github_ReactTs
          </p>
          <p>
            <span>Seguidores:</span> 2650
          </p>
          <p>
            <span>Localidade:</span> Belo Horizonte
          </p>
          <p>
            <span>Nome:</span> Lucas Freitas
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDataCard;
