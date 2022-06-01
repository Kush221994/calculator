import * as React from "react";
import Display from "../display/display";
import Button from "../button/button";
import Keyboard from "../keyboard/keyboard";

const Calculator = () => {
  const [result, setResult] = React.useState("");

  const append = (e) => {
    setResult((prevState) => prevState + e.target.value);
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const clear = () => {
    setResult("");
  };

  const compute = () => {
    setResult(eval(result));
  };

  return (
    <div className="calc">
      <Display value={result} />
      <Keyboard
        handleAppend={append}
        handleBackspace={backspace}
        handleClear={clear}
        handleCompute={compute}
      />
    </div>
  );
};

export default Calculator;
