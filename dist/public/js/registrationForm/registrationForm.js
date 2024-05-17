"use strict";
// interface FormData{
//   firstName:string,
//   lastName:string,
//   email:string,
//   phoneNumber:number
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function registration() {
    const registration = document.getElementById("registrationForm");
    const formData = new FormData(registration);
    const formDataObject = {};
    // const formDataObject:FormData = {};
    for (let [key, value] of formData.entries()) {
        // in this we need to casting because formdata we also get File type so this our object only take string as value
        formDataObject[key] = value;
    }
    const errorObject = registrationFormValidation(formDataObject);
    if (Object.keys(errorObject).length > 0) {
        errorShow(errorObject);
    }
    else {
        registrationFormSubmit(formDataObject);
    }
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
        const responseMessage = yield response.json();
        try {
            if (!response.ok) {
                throw new Error("Form Submit Error");
            }
            if (response.status === 200) {
                resetRegistrationForm();
                messagePopUp(responseMessage.message);
            }
        }
        catch (err) {
            console.log("Form Submit Error " + err);
            if (response.status === 400) {
                errorShow(responseMessage);
            }
            if (response.status === 500) {
                messagePopUp(responseMessage.message);
            }
        }
    });
}
function resetRegistrationForm() {
    const allSpan = document.querySelectorAll(".errorspan");
    allSpan.forEach((element) => {
        element.remove();
    });
    const allFormInput = document.querySelectorAll("input[type='text']");
    if (allFormInput.length > 0) {
        allFormInput.forEach((element) => {
            //this casting we need to done because element does not have value attribute so
            element.value = "";
        });
    }
}
function errorShow(errorObject) {
    const allSpan = document.querySelectorAll(".errorspan");
    allSpan.forEach((element) => {
        element.remove();
    });
    for (let key in errorObject) {
        const targetElement = document.querySelector(`[name="${key}"]`);
        if (targetElement) {
            const parentOfTargetElement = targetElement.parentElement;
            const errorSpan = parentOfTargetElement === null || parentOfTargetElement === void 0 ? void 0 : parentOfTargetElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("errorspan")) {
                errorSpan.textContent = errorObject[key];
            }
            else {
                const createSpan = document.createElement("span");
                createSpan.textContent = errorObject[key];
                createSpan.setAttribute("class", "errorspan");
                parentOfTargetElement === null || parentOfTargetElement === void 0 ? void 0 : parentOfTargetElement.insertAdjacentElement("afterend", createSpan);
            }
        }
    }
}
function messagePopUp(responseMessage) {
    const oldP = document.getElementById('messagePopUp');
    if (oldP) {
        oldP.remove();
    }
    const messagePopUpDiv = document.createElement('div');
    messagePopUpDiv.setAttribute('id', 'messagePopUpSection__container');
    const createP = document.createElement('p');
    createP.setAttribute('id', 'messagePopUp');
    createP.style.position = 'fixed';
    createP.style.top = '14%';
    createP.style.right = '5%';
    createP.style.zIndex = '10';
    createP.style.padding = '10px';
    createP.style.backgroundColor = '#002f4b';
    createP.style.color = 'white';
    createP.style.borderRadius = '10px';
    createP.style.width = '300px';
    createP.style.textAlign = 'center';
    createP.style.fontSize = '20px';
    createP.innerHTML = responseMessage;
    messagePopUpDiv.appendChild(createP);
    document.body.appendChild(messagePopUpDiv);
    const removeMessagePopUp = setTimeout(() => {
        const messagePopUp = document.getElementById('messagePopUp');
        if (messagePopUp) {
            messagePopUp.remove();
        }
        clearTimeout(removeMessagePopUp);
    }, 6000);
}
