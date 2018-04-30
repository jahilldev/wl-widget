import { register } from './core/dependency';
import { bootstrap } from './core/bootstrap';


/* -----------------------------------
 *
 * Polyfill
 *
 * -------------------------------- */

import 'whatwg-fetch';
import 'promise/polyfill';


/* -----------------------------------
 *
 * Dependency
 *
 * -------------------------------- */

register('global.window', window);
register('global.document', document);


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

bootstrap(window.__vcconf__);