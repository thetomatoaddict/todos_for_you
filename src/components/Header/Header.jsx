import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import Title from "../Title/Title";
import Switch from "react-switch";
import { WiDaySunny, WiNightClear } from "react-icons/wi"

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <div className={styles.toggle}>
        <Switch onChange={toggleDarkMode} checked={darkMode} uncheckedIcon={<WiDaySunny className={styles.dayIcon}/>} checkedIcon={<WiNightClear className={styles.nightIcon}/>}/>
      </div>
      <Title />
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
