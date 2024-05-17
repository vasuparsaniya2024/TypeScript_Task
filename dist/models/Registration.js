"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
const registration = db_1.default.define("registrationsold", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: sequelize_1.DataTypes.CHAR(10),
        allowNull: false
    }
});
// sequelize.sync().then(()=>{
//   logger.info("Registration Created");
// }).catch((error)=>{
//   logError("Unable to create Registration table "+error);
// });
exports.default = registration;
