import React from "react";
// import Display from "./Display";
import Buttons from "./Buttons";
import Operators from "./Operators";
const App= () => {
  return (
    <>
      <div className="calc">
{/* <Display /> */}
<div className="keypad">
<Buttons />
<Operators /> 
</div>

      </div>
    </>
  )
}

export default App;
