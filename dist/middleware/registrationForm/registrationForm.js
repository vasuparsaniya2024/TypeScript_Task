"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationFormValidation = void 0;
function registrationFormValidation(req, res, next) {
    const data = req.body;
    const errorObject = {};
    for (let key in data) {
        switch (key) {
            case "firstName":
                if (!data[key]) {
                    errorObject.firstName = "* require";
                }
                else if (data[key].trim().length === 0 && data[key] !== "") {
                    errorObject.firstName = "* Please Enter FirstName";
                }
                else {
                    delete errorObject.firstName;
                }
                break;
            case "lastName":
                if (!data[key]) {
                    errorObject.lastName = "* require";
                }
                else if (data[key].trim().length === 0 && data[key] !== "") {
                    errorObject.lastName = "* Please Enter LastName";
                }
                else {
                    delete errorObject.lastName;
                }
                break;
            case "email":
                const regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
                if (!data[key]) {
                    errorObject.email = "* require";
                }
                else if (!regexemail.test(data[key]) && data[key] !== "") {
                    errorObject.email = "* Please Enter Valid Email";
                }
                else {
                    delete errorObject.email;
                }
                break;
            // isNaN(data[key]) || 
            case "phoneNumber":
                if (!data[key]) {
                    errorObject.phoneNumber = "* require";
                }
                else if ((isNaN(data[key]) || data[key].length !== 10 || data[key].trim().length === 0 || data[key].charAt(0) === "0") && data[key] !== "") {
                    errorObject.phoneNumber = "* Please Enter Valid Phonenumber";
                }
                else {
                    delete errorObject.phoneNumber;
                }
                break;
        }
    }
    if (Object.keys(errorObject).length > 0) {
        return res.status(400).json(errorObject);
    }
    else {
        next();
    }
}
exports.registrationFormValidation = registrationFormValidation;
