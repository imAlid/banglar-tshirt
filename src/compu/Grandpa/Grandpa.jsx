import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Father/Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const ringContext = createContext("sonar Ring");

const Grandpa = () => {
  const ring = "sonar ring";
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <ringContext.Provider value="Sonar-Ring">
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
      </ringContext.Provider>
    </div>
  );
};

export default Grandpa;
