import React from "react";
import { useNavigate } from "react-router-dom";
import { setAlphabetAndOutputSymbols } from "../moore/mooreMachine";
import styles from "./styles.module.css";

function GetAlphabet({
  alphabet,
  setAlphabet,
  stateCount,
  setStateCount,
  outputSymbols,
  setOutputSymbols,
  createStatesAndOutputs,
}) {
  const navigate = useNavigate();
  const handleSaveButton = () => {
    setAlphabetAndOutputSymbols(alphabet.split(","), outputSymbols.split(","));
    createStatesAndOutputs(stateCount);
    navigate("/getTable");
  };
  return (
    <div>
      <div className={styles.inputContainer}>
        <label htmlFor="alphabet">Enter Alphabet (∑)</label>
        <input
          type="text"
          id="alphabet"
          name="alphabet"
          placeholder="a,b,c,d,... ex."
          value={alphabet}
          onChange={(e) => setAlphabet(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="stateCount">Enter State Count (Q)</label>
        <input
          type="text"
          id="stateCount"
          name="stateCount"
          placeholder="4 ex."
          value={stateCount}
          onChange={(e) => setStateCount(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="output">Enter Output (Γ)</label>
        <input
          type="text"
          id="output"
          name="output"
          placeholder="0,1 ... ex."
          value={outputSymbols}
          onChange={(e) => setOutputSymbols(e.target.value)}
        />
      </div>
      <button onClick={handleSaveButton} className={styles.buttonSave}>
        Save
      </button>
    </div>
  );
}

export default GetAlphabet;
