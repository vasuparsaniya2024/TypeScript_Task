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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationFormSubmit = exports.registrationForm = void 0;
const logs_1 = require("../../logs");
const registrationForm_1 = require("../../service/registrationForm/registrationForm");
function registrationForm(req, res) {
    return res.render('registrationForm/registrationForm');
}
exports.registrationForm = registrationForm;
function registrationFormSubmit(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log(req.body);
            const data = req.body;
            yield (0, registrationForm_1.registrationFormService)(data);
            return res.status(200).json({ message: "Thank For Submit Form" });
        }
        catch (err) {
            (0, logs_1.logError)(err);
            return res.status(500).json({ message: "Something Went Wrong" });
        }
    });
}
exports.registrationFormSubmit = registrationFormSubmit;
