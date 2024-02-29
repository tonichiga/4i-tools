"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_BASE_PATH = "/images/sprite.svg#";
const SvgMaker = (name, className, basePath = DEFAULT_BASE_PATH) => {
    return (<svg className={className}>
      <use href={`${basePath}${name}`}></use>
    </svg>);
};
exports.default = SvgMaker;
