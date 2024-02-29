"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterInputKey = (e, keys) => {
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
exports.default = tools;
