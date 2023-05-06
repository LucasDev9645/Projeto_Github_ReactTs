import "./styles.css";
import Button from "../Button";

const Home = () => {
  return (
    <div className="container">
      <div className="home-container">
        <div>
          <h1>Busque aqui seus dados github</h1>
          <p>Seja Bem Vindo!</p>
        </div>
        <Button name="Começar" />
      </div>
    </div>
  );
};

export default Home;
