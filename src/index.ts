require("dotenv").config();
import express, {Application,Request,Response} from 'express';
import bodyParser  from 'body-parser';
import path from 'path';
import {logger,logError} from './logs';
import router from './routes/route';
import copyResources from './utils/copyFile';

const app:Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


//ejs file render we need to set path of located files
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//middleware 
app.use(express.static(path.join(__dirname, 'public')));

copyResources();

app.use(router);
 
app.listen(process.env.PORT, () => {
  try {
    logger.info("Server Listen At " + process.env.PORT);
  } catch (err) {
    logError("Server Lister Error " + err);
  }
});

app.use("*", (req:Request, res:Response) => {
  return res.send("Router Not Found");
});