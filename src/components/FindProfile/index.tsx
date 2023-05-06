import Button from "../Button";
import "./styles.css";

const FindProfile = () => {
  return (
    <div className="container find-Profile-container">
      <h1>Encontre um perfil Github</h1>
      <form>
        <input type="text" />
        <Button name="Encontrar" />
      </form>
    </div>
  );
};

export default FindProfile;
