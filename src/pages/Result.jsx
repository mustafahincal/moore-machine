import React, { useEffect, useState } from "react";
import { getResult } from "./mooreMachine";
import styles from "./styles.module.css";

function Result() {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput(getResult());
  });
  return (
    <div>
      <div className={styles.resultContainer}>
        {output.map((outputItem, index) => {
          return (
            <div key={index} className={styles.result}>
              <div> {outputItem.letter == " " ? "." : outputItem.letter} </div>
              <div> {outputItem.state} </div>
              <div> {outputItem.output} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
