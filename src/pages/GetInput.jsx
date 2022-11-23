import React, { useState } from "react";
import styles from "./styles.module.css";
import { setInputString } from "../moore/mooreMachine";
import { useNavigate } from "react-router-dom";

function GetInput({ input, setInput }) {
  const navigate = useNavigate();

  const handleButtonSave = () => {
    setInputString(input);
    navigate("/result");
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="inputString">Input String</label>
        <input
          type="text"
          id="inputString"
          name="inputString"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className={styles.buttonSave} onClick={handleButtonSave}>
        Save
      </button>
    </div>
  );
}

export default GetInput;
