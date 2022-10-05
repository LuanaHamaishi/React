import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/StyledComponents";
import "./Style.css";

export default function Titulos() {
  const params = useParams("/posts/:title_id");
  const { title_id } = params;
  const [titulo, setTitulo] = useState({});

  useEffect(() => {
    getTitulo(title_id);
  }, [title_id]);

  /*   async function getTitulo() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${title_id}`
    );
    setTitulo(data);
  } */

  const getTitulo = (title_id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${title_id}`)
      .then(({ data: res }) => setTitulo(res));
  };
  if (!titulo?.id) return null;

  return (
    <div>
      <h1 className="titulo">Posts do JSON placeholder</h1>
      <Link to={"/"}>
        <Button>voltar</Button>
      </Link>
      <h2>{titulo?.title}</h2>
      <h4>{titulo?.body}</h4>
    </div>
  );
}
