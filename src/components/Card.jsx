import React from "react";

import "./Card.css";
import illustration from "../assets/images/illustration-article.svg";
import CardBody from "./CardBody";
import Author from "./Author";

function Container() {
  return (
    <div className="card">
      <img className="illustration" src={illustration} alt="illustration" />
      <CardBody />
      <Author />
    </div>
  );
}

export default Container;
