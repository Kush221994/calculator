import React from "react";
import Button from "../button/button";

const Keyboard = ({
  handleAppend,
  handleBackspace,
  handleClear,
  handleCompute,
}) => {
  return (
    <div className="keyboard">
      <div className="rows">
        <Button onClick={handleAppend}>%</Button>
        <Button onClick={handleClear}>CE</Button>
        <Button onClick={handleBackspace}>{"<="}</Button>
        <Button onClick={handleAppend}>%</Button>
      </div>
      <div className="rows">
        <Button onClick={handleAppend}>7</Button>
        <Button onClick={handleAppend}>8</Button>
        <Button onClick={handleAppend}>9</Button>
        <Button onClick={handleAppend}>x</Button>
      </div>
      <div className="rows">
        <Button onClick={handleAppend}>4</Button>
        <Button onClick={handleAppend}>5</Button>
        <Button onClick={handleAppend}>6</Button>
        <Button onClick={handleAppend}>-</Button>
      </div>
      <div className="rows">
        <Button onClick={handleAppend}>1</Button>
        <Button onClick={handleAppend}>2</Button>
        <Button onClick={handleAppend}>3</Button>
        <Button onClick={handleAppend}>+</Button>
      </div>
      <div className="rows">
        <Button onClick={handleAppend}>-/+</Button>
        <Button onClick={handleAppend}>0</Button>
        <Button onClick={handleAppend}>.</Button>
        <Button onClick={handleCompute}>=</Button>
      </div>
    </div>
  );
};

export default Keyboard;
