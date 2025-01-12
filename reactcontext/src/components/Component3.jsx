import React, { useContext } from "react";
import { data } from "../App";

const Component3 = () => {
  const array = useContext(data);
  return (
    <ul>
      {" "}
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Component3;
