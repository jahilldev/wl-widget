import { Home } from './home';
import { Merchant } from './merchant';


/* -----------------------------------
 *
 * Routes
 *
 * -------------------------------- */

const routes = [
   {
      path: '/',
      component: Home
   },
   {
      path: '/:slug',
      component: Merchant
   }
];


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { routes };