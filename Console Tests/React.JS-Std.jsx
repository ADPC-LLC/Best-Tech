/** @format */

import React from "react";

const PrintNumbers = () => {
  const renderNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 7 === 0) {
        numbers.push(<div key={i}>Five-Seven</div>);
      } else if (i % 5 === 0) {
        numbers.push(<div key={i}>Five</div>);
      } else if (i % 7 === 0) {
        numbers.push(<div key={i}>Seven</div>);
      } else {
        numbers.push(<div key={i}>{i}</div>);
      }
    }
    return numbers;
  };

  return <div>{renderNumbers()}</div>;
};

export default PrintNumbers;
