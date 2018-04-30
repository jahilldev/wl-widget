import { bootstrap } from './core/bootstrap';


/* -----------------------------------
 *
 * Polyfill
 *
 * -------------------------------- */

import 'isomorphic-fetch';
import 'promise/polyfill';


/* -----------------------------------
 *
 * Bootstrap
 *
 * -------------------------------- */

bootstrap(window.__vcconf__);


/* -----------------------------------
 *
 * Test
 *
 * -------------------------------- */

// render(<h1>Hello</h1>, document.getElementById('root'));