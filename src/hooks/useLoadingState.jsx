"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useLoadingState = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const wrapper = async (fn, ...params) => {
        setLoading(true);
        const response = await fn(...params);
        setLoading(false);
        return response;
    };
    return { loading, wrapper };
};
exports.default = useLoadingState;
