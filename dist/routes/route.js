"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const registrationForm_1 = require("../controller/registrationForm/registrationForm");
const registrationForm_2 = require("../middleware/registrationForm/registrationForm");
router.get('/registrationForm', registrationForm_1.registrationForm);
router.post('/registrationForm', registrationForm_2.registrationFormValidation, registrationForm_1.registrationFormSubmit);
exports.default = router;
