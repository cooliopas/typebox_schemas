"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSENDSuccessSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const JSENDSuccessSchema = (type) => typebox_1.Type.Object({
    status: typebox_1.Type.Literal('success'),
    data: type,
});
exports.JSENDSuccessSchema = JSENDSuccessSchema;
