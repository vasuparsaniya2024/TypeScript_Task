const express = require("express");
const router = express.Router();

import {registrationForm,registrationFormSubmit} from '../controller/registrationForm/registrationForm';

router.get('/registrationForm',registrationForm);

router.post('/registrationForm',registrationFormSubmit);


export default router;