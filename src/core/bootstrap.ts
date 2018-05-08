import { render } from 'preact';
import { access } from './dependency';
import { Application } from './application';
import { IConfig } from '../config';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

const bootstrap = async () => {

   const document: Document = access('global.document');
   const config: IConfig = access('global.config');

   const root = document.getElementById(config.root || 'root');

   const app = new Application();

   await app.validate();

   app.dispatch();

   render(app.render(), root);

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { bootstrap };