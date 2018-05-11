

/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

import { Home } from './home';
import { Merchant } from './merchant';


/* -----------------------------------
 *
 * Routes
 *
 * -------------------------------- */

const routes = [
   {
      async: false,
      path: '/',
      component: Home
   },
   {
      async: false,
      path: '/:slug',
      component: Merchant
      // component: () => import('./merchant').then((v) => v.Merchant)
   }
];


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { routes };