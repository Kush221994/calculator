import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" value={children} {...rest}>
      {children}
    </button>
  );
};

export default Button;
