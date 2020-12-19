import React, { useState } from "react";

const AccordionData = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="accordion__header" onClick={() => setShow(!show)}>
        <p>{item.header}</p>

        {show ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
      </div>

      <div className={`accordion__body ${show ? "open" : "close"}`}>
        <span>{item.body}</span>
      </div>
    </>
  );
};

export default AccordionData;
