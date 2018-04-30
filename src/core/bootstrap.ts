import { access } from './dependency';
import { Application } from './application';
import { IConfig } from '../config';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

const bootstrap = async (config: IConfig) => {

   const document = access('global.document');
   const app = new Application(document, config);

   await app.validate();

   app.render();

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { bootstrap };