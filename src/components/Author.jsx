import React from "react";

import "./Author.css";
import avatar from "../assets/images/image-avatar.webp";

function Author() {
  return (
    <div className="author">
      <div className="author-img">
        <img src={avatar} alt="user avatar" />
      </div>
      <p>Greg Hooper</p>
    </div>
  );
}

export default Author;
