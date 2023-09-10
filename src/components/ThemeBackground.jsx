import React from "react";
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
export const ThemeBackground = ({ darkMode, setDarkMode }) => {
  return (
    <>
      {darkMode ? (
        <button
          onClick={() => {
            setDarkMode(false);
          }}
          className="mode-icon"
        >
          <BsSun />
        </button>
      ) : (
        <button
          onClick={() => {
            setDarkMode(true);
          }}
          className="mode-icon"
        >
          <MdOutlineNightlight />
        </button>
      )}
    </>
  );
};
