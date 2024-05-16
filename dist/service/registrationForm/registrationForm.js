"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationFormService = void 0;
const connection_1 = __importDefault(require("../../config/connection"));
function registrationFormService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertQuery = `INSERT INTO registration(first_name,last_name,email,phone_number) VALUES(?,?,?,?)`;
            const [result] = yield connection_1.default.execute(insertQuery, [data.firstName, data.lastName, data.email, data.phoneNumber]);
        }
        catch (err) {
            throw err;
        }
    });
}
exports.registrationFormService = registrationFormService;
