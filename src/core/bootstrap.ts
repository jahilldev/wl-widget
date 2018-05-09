import { Application } from './application';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

const bootstrap = async () => {

   const app = new Application();

   await app.validate();

   app.container();
   app.render();

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { bootstrap };