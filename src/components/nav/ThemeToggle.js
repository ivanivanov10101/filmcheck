import React, {useState} from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle(props) {
  const [icon, setIcon] = useState('DarkModeIcon')
  const themeIsLight = (icon === 'LightModeIcon');
  const Icon = themeIsLight ? <LightModeIcon /> : <DarkModeIcon />
  return (
    <button className="theme-toggle button-8" onClick={props.toggleDarkMode}>
      {/*<img*/}
      {/*  onClick={props.toggleDarkMode}*/}
      {/*  src={*/}
      {/*    props.darkMode*/}
      {/*      ? <DarkModeIcon/>*/}
      {/*      : "../.././public/assets/toggle-icon-dark.jpg"*/}
      {/*  }*/}
      {/*  alt="dark icon"*/}
      {/*/>*/}
      {Icon}
    </button>
  );
}
