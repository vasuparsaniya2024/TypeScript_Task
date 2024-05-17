import { DataTypes } from "sequelize";
import sequelize from "./db";
import { logError, logger } from "../logs";

const registration = sequelize.define("registrationsold",{
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  first_name:{
    type:DataTypes.STRING(45),
    allowNull:false
  },
  last_name:{
    type:DataTypes.STRING(45),
    allowNull:false
  },
  email:{
    type:DataTypes.STRING(150),
    allowNull:false,
    unique:true
  },
  phone_number:{
    type:DataTypes.CHAR(10),
    allowNull:false
  }
});



// sequelize.sync().then(()=>{
//   logger.info("Registration Created");
// }).catch((error)=>{
//   logError("Unable to create Registration table "+error);
// });

export default registration;