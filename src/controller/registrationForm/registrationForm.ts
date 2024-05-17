import {Request,Response} from 'express';
import {logger,logError} from '../../logs';

import sequelize from '../../models/db';
import registration from '../../models/Registration';

function registrationForm(req:Request,res:Response){
    return res.render('registrationForm/registrationForm');
}

async function registrationFormSubmit(req:Request,res:Response){
  try{
    // console.log(req.body);
    const data = req.body;

    await sequelize.sync();

    await registration.create({
      first_name:data.firstName,
      last_name:data.lastName,
      email:data.email,
      phone_number:data.phoneNumber      
    });
    return res.status(200).json({message:"Thank For Submit Form"});
  }catch(err){
    logError(err);
    return res.status(500).json({message:"Something Went Wrong"});
  }
}

export {registrationForm,registrationFormSubmit};