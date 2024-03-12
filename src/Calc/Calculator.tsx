/* eslint-disable no-eval */
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (value: string) => {
    if (currentValue === "0" || currentValue === "0.") {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (operator) {
      const prev = parseFloat(prevValue);
      const current = parseFloat(currentValue);
      const result = eval(`${prev} ${operator} ${current}`);
      setPrevValue(`${result} ${op}`);
      setCurrentValue(`${result} ${op}`);
      setOperator(op);
    } else {
      setPrevValue(currentValue);
      setOperator(op);
      setCurrentValue("");
    }
  };

  const handleEqualClick = () => {
    if (operator) {
      const prev = parseFloat(prevValue);
      const current = parseFloat(currentValue);
      const result = eval(`${prev} ${operator} ${current}`);
      setCurrentValue(`${result}`);
      setOperator(null);
    }
  };

  const handleResetClick = () => {
    setCurrentValue("0");
    setPrevValue("");
    setOperator(null);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="calculator">
      <div className="display">{currentValue}</div>
      <div className="buttons">
        {numbers.map((number) => (
          <div key={number} className="row">
            <button onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          </div>
        ))}
        <div className="row">
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={handleEqualClick}>=</button>
          <button onClick={handleResetClick}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;