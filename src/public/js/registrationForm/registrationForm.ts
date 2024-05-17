interface FormData{
  firstName:string,
  lastName:string,
  email:string,
  phoneNumber:number
}

function registration():void{
  const registration = document.getElementById("registrationForm") as HTMLFormElement;
  const formData = new FormData(registration);
  // console.log(formData);

  const formDataObject:{[index:string]:string} = {};
  // const formDataObject:FormData = {};
  for(let [key,value] of formData.entries()){
    formDataObject[key] = value;
  }
    const errorObject:{[index:string]:string} = registrationFormValidation(formDataObject);
    if(Object.keys(errorObject).length > 0){
      errorShow(errorObject);
  }else{
    registrationFormSubmit(formDataObject);
  }
}

async function registrationFormSubmit(data:{[index:string]:string}){
  const response = await fetch('/registrationForm',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    },
  });
  const responseMessage = await response.json();
  try{

    if(!response.ok){
      throw new Error("Form Submit Error");
    }

    if(response.status === 200){
      console.log(responseMessage.message);
      resetRegistrationForm();
      messagePopUp(responseMessage.message);
    }
  }catch(err){
    console.log("Form Submit Error "+err);
    if(response.status === 400){
      errorShow(responseMessage);
    }
    if(response.status === 500){
      messagePopUp(responseMessage.message);
    }
  }
}

function resetRegistrationForm(){
  const allSpan = document.querySelectorAll(".errorspan");
  allSpan.forEach((element)=>{
    element.remove();
  });

  const allFormInput = document.querySelectorAll("input[type='text']");
  if(allFormInput.length > 0){
    allFormInput.forEach((element)=>{
      //this casting we need to done because element does not have value attribute so
      (element as HTMLInputElement).value = "";    
    });
  }
}

function errorShow(errorObject:{[index:string]:string}){
  const allSpan = document.querySelectorAll(".errorspan");
  allSpan.forEach((element)=>{
    element.remove();
  });

  for(let key in errorObject){
    const targetElement = document.querySelector(`[name="${key}"]`);
    if(targetElement){
      const parentOfTargetElement = targetElement.parentElement;
      const errorSpan = parentOfTargetElement?.nextElementSibling;

      if(errorSpan && errorSpan.classList.contains("errorspan")){
        errorSpan.textContent = errorObject[key];
      }else{
        const createSpan = document.createElement("span");
        createSpan.textContent = errorObject[key];
        createSpan.setAttribute("class","errorspan");
        parentOfTargetElement?.insertAdjacentElement("afterend",createSpan);
      }
    }
  }
}

function messagePopUp(responseMessage:string){
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