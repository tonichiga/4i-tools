"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    UNPROCESSABLE_ENTITY: 422,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};
const constants = {
    statusCodes,
};
exports.default = constants;
