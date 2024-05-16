"use strict";
// registrationForm.addEventListener('submit',(event)=>{
//   event.preventDefault();
//   const formData = new FormData(registrationForm);
//   // console.log(formData);
//   console.log(Object.keys(formData).length);
//   if(Object.keys(formData).length === 0){
//     registrationFormValidation(formData);
//   }
// });
// interface FormData{
//   firstName:string,
//   lastName:string,
//   email:string,
//   phoneNumber:number
// }
function registration() {
    const registration = document.getElementById("registrationForm");
    const formData = new FormData(registration);
    // console.log(formData);
    const formDataObject = {};
    // const formDataObject:FormData = {};
    for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }
    const errorObject = registrationFormValidation(formDataObject);
    if (Object.keys(errorObject).length !== 0) {
        console.log(errorObject);
    }
    else {
        registrationFormSubmit(formDataObject);
    }
}
