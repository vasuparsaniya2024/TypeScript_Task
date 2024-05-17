const express = require("express");
const router = express.Router();

import {registrationForm,registrationFormSubmit} from '../controller/registrationForm/registrationForm';
import {registrationFormValidation} from '../middleware/registrationForm/registrationForm';

router.get('/registrationForm',registrationForm);

router.post('/registrationForm',registrationFormValidation,registrationFormSubmit);


export default router;