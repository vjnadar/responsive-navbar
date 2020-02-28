import React from "react";
import "./ToggleButton.scss"
const ToggleButton:React.FC = () => {
  return (
    <>
      <button className="toggleButton">
        <div className="toggleButton-line" />
        <div className="toggleButton-line" />
        <div className="toggleButton-line" />
      </button>
    </>
  );
};
export default ToggleButton;
