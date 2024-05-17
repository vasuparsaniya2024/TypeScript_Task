import { Sequelize,DataType } from "sequelize";
import process from 'process';
import { logger,logError } from "../logs";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host:process.env.DB_HOST as string,
    dialect:'mysql'
  }
)

sequelize.authenticate().then(()=>{
  logger.info("connect");
}).catch((error)=>{
  logError("Unable to connect "+error);
})

export default sequelize;