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
function registrationFormValidation(data) {
    const errorObject = {};
    // console.log(data);
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
    return errorObject;
}
function registrationFormSubmit(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/registrationForm', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        });
        try {
            const responseMessage = yield response.json();
            if (!response.ok) {
                throw new Error("Form Submit Error");
            }
            if (response.status === 200) {
                console.log(responseMessage.message);
            }
        }
        catch (err) {
            console.log("Form Submit Error " + err);
            const responseMessage = yield response.json();
            if (response.status === 400) {
                console.log(responseMessage.message);
            }
            if (response.status === 500) {
                console.log(responseMessage.message);
            }
        }
    });
}
