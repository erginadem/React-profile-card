import React from "react";
import "./profile.scss";

const Stat = (props) => {
  const { name, value } = props;
  return (
    <div>
      <h3>{value}</h3>
      <h6>{name}</h6>
    </div>
  );
};

export default Stat;
