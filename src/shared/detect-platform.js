"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function iOS() {
    if (typeof window === "undefined")
        return false;
    return ([
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
    ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document));
}
exports.default = iOS;
