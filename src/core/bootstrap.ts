import { Application } from './application';
import { IConfig } from '../config';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

const bootstrap = async (config: IConfig) => {

   const app = new Application(config);

   await app.validate();

   app.render();

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { bootstrap };