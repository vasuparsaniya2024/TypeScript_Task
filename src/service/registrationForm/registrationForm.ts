import connection from '../../config/connection';
import {logger,logError} from '../../logs';

interface FormData{
  firstName:string,
  lastName:string,
  email:string,
  phoneNumber:string
}


async function registrationFormService(data:FormData){
  try{
    const insertQuery = `INSERT INTO registration(first_name,last_name,email,phone_number) VALUES(?,?,?,?)`;
    const [result] = await connection.execute(insertQuery,[data.firstName,data.lastName,data.email,data.phoneNumber]);
  }catch(err){
    throw err;
  }
}

export {registrationFormService}