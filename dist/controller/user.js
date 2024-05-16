"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScript = void 0;
const logs_1 = require("../logs");
function typeScript(req, res) {
    try {
        return res.send("Welcome to TypeScript");
    }
    catch (err) {
        (0, logs_1.logError)(err);
    }
}
exports.typeScript = typeScript;
