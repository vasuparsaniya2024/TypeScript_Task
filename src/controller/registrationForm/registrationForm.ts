import {Request,Response} from 'express';
import {logger,logError} from '../../logs';

import {registrationFormService} from '../../service/registrationForm/registrationForm';

function registrationForm(req:Request,res:Response){
    return res.render('registrationForm/registrationForm');
}

async function registrationFormSubmit(req:Request,res:Response){
  try{
    // console.log(req.body);
    const data = req.body;
    await registrationFormService(data);
    return res.status(200).json({message:"Thank For Submit Form"});
  }catch(err){
    logError(err);
    return res.status(500).json({message:"Something Went Wrong"});
  }
}

export {registrationForm,registrationFormSubmit};