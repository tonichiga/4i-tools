"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = exports.detectPlatform = exports.detectBrowser = exports.iOS = exports.validations = void 0;
require("./hooks");
require("./components");
var validations_1 = require("./shared/validations");
Object.defineProperty(exports, "validations", { enumerable: true, get: function () { return __importDefault(validations_1).default; } });
var detect_platform_1 = require("./shared/detect-platform");
Object.defineProperty(exports, "iOS", { enumerable: true, get: function () { return __importDefault(detect_platform_1).default; } });
var detect_browser_1 = require("./shared/detect-browser");
Object.defineProperty(exports, "detectBrowser", { enumerable: true, get: function () { return __importDefault(detect_browser_1).default; } });
var detect_platform_2 = require("./shared/detect-platform");
Object.defineProperty(exports, "detectPlatform", { enumerable: true, get: function () { return __importDefault(detect_platform_2).default; } });
var constants_1 = require("./shared/constants");
Object.defineProperty(exports, "constants", { enumerable: true, get: function () { return __importDefault(constants_1).default; } });