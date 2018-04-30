import { render } from 'preact';
import { access } from './dependency';
import { Application } from './application';
import { IConfig } from '../config';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

const bootstrap = async (config: IConfig) => {

   // const document = access('global.document');
   const root = document.getElementById(config.root || 'root');

   const app = new Application(config);

   await app.validate();

   const node = await app.output();

   render(node, root);

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { bootstrap };