import React from "react";
import jumboData from "../../json/jumbotron.json";
import "./style.css";
const Jumbotron = () => {
  return (
    <div className="wrapper">
      {jumboData.map((jumbo) => (
        <div key={jumbo.id} className="item">
          <div className={`jumbotron ${jumbo.direction}`}>
            <div className="jumbotron__wrapper">
              <h1 className="jumbotron__title">{jumbo.title}</h1>
              <h2 className="jumbotron__subTitle">{jumbo.subTitle}</h2>
            </div>
            <div className="jumbotron__wrapper">
              <img
                className="jumbotron__image"
                src={jumbo.image}
                alt={jumbo.alt}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jumbotron;
