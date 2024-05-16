"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const registrationForm_1 = require("../controller/registrationForm/registrationForm");
router.get('/registrationForm', registrationForm_1.registrationForm);
router.post('/registrationForm', registrationForm_1.registrationFormSubmit);
exports.default = router;
