import React, { useState } from "react";

const Buttons = () => {
  const [result, setResult] = useState("");

  const button = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clear = () => {                                     //for clear number one by one from right side
      setResult(result.slice(0,result.length-1))
  }

  // const clear = () => {                                  //for clear the numbers in one click
  //   setResult("");
  // };

  return (
    <>
      <input type="text" placeholder="0" className="display" value={result} />         { /*Display */}
      <div className="buttonborder">
        <button className="button clearbutton" onClick={clear}>
          Clear
        </button>
        <button className="button" value="+" onClick={button}>
          +
        </button>
        <button className="button" value="7" onClick={button}>
          7
        </button>
        <button className="button" value="8" onClick={button}>
          8
        </button>
        <button className="button" value="9" onClick={button}>
          9
        </button>
        <button className="button" value="-" onClick={button}>
          -
        </button>
        <button className="button" value="4" onClick={button}>
          4
        </button>
        <button className="button" value="5" onClick={button}>
          5
        </button>
        <button className="button" value="6" onClick={button}>
          6
        </button>
        <button className="button" value="*" onClick={button}>
          *
        </button>
        <button className="button" value="1" onClick={button}>
          1
        </button>
        <button className="button" value="2" onClick={button}>
          2
        </button>
        <button className="button" value="3" onClick={button}>
          3
        </button>
        <button className="button" value="/" onClick={button}>
          /
        </button>
        <button className="button" value="0" onClick={button}>
          0
        </button>
        <button className="button" value="." onClick={button}>
          .
        </button>
        <button className="button" value="00" onClick={button}>
          00
        </button>
        <button className="button">=</button>
      </div>
    </>
  );
};

export default Buttons;
