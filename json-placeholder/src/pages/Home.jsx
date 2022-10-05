import React, { useState } from "react";
import axios from "axios";
import "./Style.css";
import { Link } from "react-router-dom";
import { Button, StyledLabel } from "../components/StyledComponents";

export default function Home() {
  const [titulos, setTitulos] = useState([]);
  const [novoPost, setNovoPost] = useState({});

  async function getTitulos() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setTitulos(data);
    // getTitulos();
  }
  //   getTitulos();

  return (
    <>
      <h1 className="titulo">Posts do JSON placeholder</h1>
      <div>
        <Button onClick={() => getTitulos()}>
          Clique aqui para exibir os títulos!!!
        </Button>
        <Link to="/posts/new">
          <Button>Adicionar um post</Button>
        </Link>
        {titulos.map((titulo) => {
          return (
            <div className="container">
              <Link className="link" to={`/posts/${titulo.id}`}>
                <StyledLabel key={titulo.id} className="button">
                  {titulo.title}
                </StyledLabel>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
