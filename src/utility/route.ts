import { access } from '../core/dependency';


/* -----------------------------------
 *
 * Route
 *
 * -------------------------------- */

const route = (href?: string): string => {

   const config = access('global.config');

   const root = config.route || '/';

   return `${root + href.replace(/^\//, '')}`;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { route };