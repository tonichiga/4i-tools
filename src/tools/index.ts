import { KeyboardEvent } from "react";

const filterInputKey = (e: KeyboardEvent<HTMLInputElement>, keys: string[]) => {
  let disabledKeys = ["e", "E", ",", ".", "-", "+"];
  if (keys) {
    disabledKeys = keys;
  }

  if (disabledKeys.includes(e.key) || e.shiftKey) {
    e.preventDefault();
  }
};

const tools = {
  filterInputKey,
};

export default tools;
