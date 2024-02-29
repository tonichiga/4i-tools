"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isSafariBrowser = () => {
    return (navigator.userAgent.indexOf("Safari") != -1 &&
        navigator.userAgent.indexOf("Chrome") == -1);
};
const isFirefoxBrowser = () => {
    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
};
const detectBrowser = {
    isSafariBrowser,
    isFirefoxBrowser,
};
exports.default = detectBrowser;
