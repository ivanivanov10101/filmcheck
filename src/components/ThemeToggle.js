import React from "react";

export default function ThemeToggle(props) {
  return (
    <button className="theme-toggle">
      <img onClick={props.toggleDarkMode} src={props.darkMode ? '../data/toggle-icon-dark.jpg' : "../.././public/assets/toggle-icon-dark.jpg"} alt="dark icon" />
    </button>
  )
}
