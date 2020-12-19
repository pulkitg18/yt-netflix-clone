import React from "react";
import "./style.css";
import faqData from "../../json/faqs.json";
import AccordionData from "./AccordionData";
import { Form } from "..";
const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion__wrapper">
        <h1 className="accordion__title">Frequenly Asked Question</h1>
        <div className="accodion__content">
          {faqData.map((item) => (
            <div className="accordion__item" key={item.id}>
              <AccordionData item={item} />
            </div>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Accordion;
