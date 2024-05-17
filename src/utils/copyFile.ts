import fs from 'fs-extra';
import path from 'path';
import { logError, logger } from '../logs';

async function copyResources():Promise<void> {
  try{
    // const srcDir:string = path.join(__dirname,"../public/assets");
    const srcDir:string = path.join(__dirname,"../../src/public/assets");
    const destDir:string = path.join(__dirname,"../../dist/public/assets");
    await fs.copy(`${srcDir}`,`${destDir}`);
    logger.info("Copy");
  }catch(err){
    logError("Copy Folder Error "+err);
  }
}

copyResources();

export default copyResources;