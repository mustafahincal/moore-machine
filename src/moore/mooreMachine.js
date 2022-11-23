// const inputString = "aaababbaabb";

const start = "q0";
let transitionTable = {};
let outputTable = {};
let outputSymbols = [];
let alphabet = [];
let inputString = "";
let mooreOutput = [{}];

export const createTables = (transitionTableToSet, outputTableToSet) => {
  transitionTable = transitionTableToSet;
  outputTable = outputTableToSet;
};

export const setInputString = (inputStringToSet) => {
  inputString = inputStringToSet;
  moore(start, mooreOutput, inputString);
};

export const setAlphabetAndOutputSymbols = (
  alphabetToSet,
  outputSymbolsToSet
) => {
  alphabet = alphabetToSet;
  outputSymbols = outputSymbolsToSet;
};

export const getResult = () => {
  return mooreOutput;
};

const moore = (start, mooreOutput, inputString) => {
  let currentState = start;
  let itemToPush = mooreOutput.push({
    letter: " ",
    state: currentState,
    output: outputTable[start],
  });
  inputString.split("").forEach((item) => {
    alphabet.forEach((letter) => {
      if (letter === item) {
        currentState = transitionTable[currentState][letter];
        itemToPush = {
          letter: letter,
          state: currentState,
          output: outputTable[currentState],
        };
        mooreOutput.push(itemToPush);
      }
    });
  });
};
