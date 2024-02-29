"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLengthGreaterThan(value, length) {
    if (value.length < length)
        return false;
    return true;
}
function isLengthInRange(value, min, max) {
    if (value.length < min || value.length > max)
        return false;
    return true;
}
function isValidEmail(value) {
    if (!isLengthGreaterThan(value, 1))
        return false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value))) {
        return false;
    }
    return true;
}
function isMatch(value1, value2) {
    return value1 === value2;
}
function isValidPassword(value, re) {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (re) {
        reg = re;
    }
    return re.test(value);
}
function isValidNumber(value, re) {
    let reg = /^\d*\.?\d*$/;
    if (re) {
        reg = re;
    }
    return reg.test(value);
}
const validations = {
    isLengthGreaterThan,
    isLengthInRange,
    isValidEmail,
    isMatch,
    isValidPassword,
    isValidNumber,
};
exports.default = validations;
