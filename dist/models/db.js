"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const process_1 = __importDefault(require("process"));
const logs_1 = require("../logs");
const sequelize = new sequelize_1.Sequelize(process_1.default.env.DB_NAME, process_1.default.env.DB_USERNAME, process_1.default.env.DB_PASSWORD, {
    host: process_1.default.env.DB_HOST,
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    logs_1.logger.info("connect");
}).catch((error) => {
    (0, logs_1.logError)("Unable to connect " + error);
});
exports.default = sequelize;
