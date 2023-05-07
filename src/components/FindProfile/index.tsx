import { useState } from "react";
import axios from "axios";

import Button from "../Button";
import NavBar from "../Navbar";
import { BASE_URL } from "../../util/baseurl";

import "./styles.css";

type FormData = {
  name: string;
};

type User = {
  url: string;
  followers: number;
  location: string;
  name: string;
  avatar_url: string;
};

const FindProfile = () => {
  const [formdata, setFormData] = useState<FormData>({
    name: "",
  });

  const [data, setData] = useState<User>();

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .get(`${BASE_URL}/${formdata.name}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log("Erro", error));
  };

  return (
    <>
      <NavBar />
      <div className="container find-Profile-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={formdata.name}
            placeholder="Usúario"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <Button name="Encontrar" />
        </form>
      </div>

      {data && (
        <div className="container">
          <div className="user-data-card-container">
            <div>
              <img src={data?.avatar_url} alt="" />
            </div>
            <div className="user-data-card-description">
              <h2>Informações</h2>
              <p>
                <span>Perfil:</span> {data?.url}
              </p>
              <p>
                <span>Seguidores:</span> {data?.followers}
              </p>
              <p>
                <span>Localidade:</span> {data?.location}
              </p>
              <p>
                <span>Nome:</span> {data?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FindProfile;
