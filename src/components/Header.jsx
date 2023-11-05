import React from "react";
import { VscColorMode } from "react-icons/vsc";

const Header = ({ handleToggleMode }) => {
  return (
    <div className="header">
      <h1>notes</h1>
      <button
        className="mode"
        onClick={() => handleToggleMode((prevMode) => !prevMode)}>
        Theme
        <VscColorMode size={20} />
      </button>
    </div>
  );
};

export default Header;
