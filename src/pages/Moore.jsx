import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import styles from "./styles.module.css";
import TransitionOutputTable from "./TransitionOutputTable";
import GetInput from "./GetInput";
import Result from "./Result";
import GetAlphabet from "./GetAlphabet";

function Moore() {
  const [states, setStates] = useState({});
  const [outputs, setOutputs] = useState({});
  const [alphabet, setAlphabet] = useState("");
  const [outputSymbols, setOutputSymbols] = useState("");
  const [stateCount, setStateCount] = useState("");
  const [input, setInput] = useState("");

  const createStatesAndOutputs = (count) => {
    let i = 0;
    let stateValue = {};
    let initStatesToSet = {};
    let initOutputsToSet = {};
    alphabet.split(",").forEach((letter) => {
      stateValue = {
        ...stateValue,
        [letter]: "",
      };
    });
    while (i < count) {
      initStatesToSet = {
        ...initStatesToSet,
        ["q" + i]: stateValue,
      };

      initOutputsToSet = {
        ...initOutputsToSet,
        ["q" + i]: "",
      };
      i++;
    }
    setStates(initStatesToSet);
    setOutputs(initOutputsToSet);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Moore Machine</div>
      <Routes>
        <Route
          path="/"
          element={
            <GetAlphabet
              alphabet={alphabet}
              setAlphabet={setAlphabet}
              stateCount={stateCount}
              setStateCount={setStateCount}
              setOutputSymbols={setOutputSymbols}
              outputSymbols={outputSymbols}
              createStatesAndOutputs={createStatesAndOutputs}
            />
          }
        />
        <Route
          path="/getTable"
          element={
            <TransitionOutputTable
              states={states}
              setStates={setStates}
              outputs={outputs}
              setOutputs={setOutputs}
              alphabet={alphabet.split(",")}
              stateCount={stateCount}
              outputSymbols={outputSymbols.split(",")}
            />
          }
        />
        <Route
          path="/getInput"
          element={<GetInput input={input} setInput={setInput} />}
        />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<div>Error404</div>} />
      </Routes>
    </div>
  );
}

export default Moore;
