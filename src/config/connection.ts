require('dotenv').config();
import mysql from 'mysql2/promise';
import {logger} from '../logs';

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.getConnection((err) => {
  if (!err) {
    logger.info('connected..');
  } else {
    logger.logError('Error In Database Connection: ' + err);
  }
});

export default connection;
