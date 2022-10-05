import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/StyledComponents";
import "./Style.css";

export default function NewPost() {
  const [newPost, setNewPost] = useState({ id: null });

  async function postTitulos() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#000b4b", width: "100%" }}>Adicione um novo Post</h1>
      <Link to={"/"}>
        <Button>voltar</Button>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          alignItems: "center",
        }}
      >
        <input
          className="input"
          type="number"
          placeholder="User Id"
          name="userId"
          onChange={(ev) => {
            return setNewPost({ ...newPost, userId: ev.target.value });
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="Title"
          name="title"
          onChange={(ev) => {
            return setNewPost({ ...newPost, title: ev.target.value });
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="Body"
          name="body"
          onChange={(ev) => {
            console.log(newPost);
            return setNewPost({ ...newPost, body: ev.target.value });
          }}
        />
        <Button onClick={() => postTitulos()}>Adicionar</Button>
      </div>
    </div>
  );
}
