import { bootstrap } from './core/bootstrap';
import { register } from './core/dependency';


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
register('global.config', window.__config);


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

bootstrap();