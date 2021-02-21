import React from "react";
import Heading from "./Heading";
import UserList from "./UserList";
import totoro from "../images/totoro.png";

const Home = () => {
  return (
    <div>
      <div className="image-container">
        <img src={totoro} alt="totoro image" />
      </div>
      <Heading />
      <UserList />
    </div>
  );
};

export default Home;
