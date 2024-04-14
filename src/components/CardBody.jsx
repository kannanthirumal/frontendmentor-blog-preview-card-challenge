import React from "react";
import "./CardBody.css";
import Category from "./Category";

function CardBody() {
  return (
    <div className="card-body">
      <Category text="Learning" />
      <p className="date">Published 21 Dec 2023</p>
      <h1>HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}

export default CardBody;
