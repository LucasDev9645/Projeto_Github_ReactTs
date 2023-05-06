import "./styles.css";
import Button from "../Button";
import NavBar from "../Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="home-container">
          <div>
            <h1>Busque aqui seus dados github</h1>
            <p>Seja Bem Vindo!</p>
          </div>
          <Link to="/about">
            <Button name="Começar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
