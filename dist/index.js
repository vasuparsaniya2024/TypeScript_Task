"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const logs_1 = require("./logs");
const route_1 = __importDefault(require("./routes/route"));
const copyFile_1 = __importDefault(require("./utils/copyFile"));
// import db from './models';
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
//ejs file render we need to set path of located files
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
//middleware 
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
(0, copyFile_1.default)();
app.use(route_1.default);
// db.sequelize.then((req:Request)=>{
//   app.listen(process.env.PORT, () => {
//     try {
//       logger.info("Server Listen At " + process.env.PORT);
//     } catch (err) {
//       logError("Server Lister Error " + err);
//     }
//   });
// });
app.listen(process.env.PORT, () => {
    try {
        logs_1.logger.info("Server Listen At " + process.env.PORT);
    }
    catch (err) {
        (0, logs_1.logError)("Server Lister Error " + err);
    }
});
app.use("*", (req, res) => {
    return res.send("Router Not Found");
});
