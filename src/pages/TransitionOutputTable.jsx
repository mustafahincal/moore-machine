import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { createTables } from "../moore/mooreMachine";
import { useNavigate } from "react-router-dom";

function TransitionOutputTable({
  states,
  setStates,
  outputs,
  setOutputs,
  stateCount,
  alphabet,
  outputSymbols,
}) {
  useEffect(() => {
    //setAlphabetAndOutputSymbols()
  }, []);
  const navigate = useNavigate();

  const create_rows = () => {
    let rows = [];
    let i = 0;
    while (i < stateCount) {
      let row = (
        <tr key={i}>
          <td>q{i}</td>

          {alphabet.map((letter, index) => (
            <td key={index}>
              <input
                type={"text"}
                name={"q" + i}
                value={states["q" + i][letter]}
                onChange={(e) => onChangeStatesInput(e, letter)}
              />
            </td>
          ))}
          <td>
            <input
              type={"text"}
              name={"q" + i}
              value={outputs["q" + i]}
              onChange={(e) => onChangeOutputsInput(e)}
            />
          </td>
        </tr>
      );
      rows.push(row);
      i++;
    }
    return rows;
  };

  const onChangeStatesInput = (e, inputRoute) => {
    let updatedItem = {};
    if (inputRoute === "a") {
      updatedItem = {
        a: e.target.value,
        b: states[e.target.name]["b"],
      };
    } else {
      updatedItem = {
        a: states[e.target.name]["a"],
        b: e.target.value,
      };
    }
    setStates({ ...states, [e.target.name]: updatedItem });
  };
  const onChangeOutputsInput = (e) => {
    setOutputs({ ...outputs, [e.target.name]: e.target.value });
  };

  const handleSaveButton = () => {
    createTables(states, outputs);
    navigate("/getInput");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Old State</th>
            {alphabet.map((input, index) => (
              <th key={index}>After Input {input}</th>
            ))}
            <th>Character Printed</th>
          </tr>
        </thead>
        <tbody>{create_rows().map((row) => row)}</tbody>
      </table>
      <button onClick={handleSaveButton} className={styles.buttonSave}>
        Save
      </button>
    </div>
  );
}

export default TransitionOutputTable;
