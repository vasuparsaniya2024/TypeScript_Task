"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const promise_1 = __importDefault(require("mysql2/promise"));
const logs_1 = require("../logs");
const connection = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});
connection.getConnection((err) => {
    if (!err) {
        logs_1.logger.info('connected..');
    }
    else {
        logs_1.logger.logError('Error In Database Connection: ' + err);
    }
});
exports.default = connection;
