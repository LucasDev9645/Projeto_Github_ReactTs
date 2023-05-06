import Button from "../Button";
import NavBar from "../Navbar";
import SearchErrorCard from "./SearchErrorCard";
import UserDataCard from "./UserDataCard";

import "./styles.css";

const FindProfile = () => {
  return (
    <>
      <NavBar />
      <div className="container find-Profile-container">
        <h1>Encontre um perfil Github</h1>
        <form>
          <input type="text" />
          <Button name="Encontrar" />
        </form>
      </div>
      <SearchErrorCard />
    </>
  );
};

export default FindProfile;
