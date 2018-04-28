import Preact, { render } from 'preact';
import { Provider, connect } from 'preact-redux';


/* -----------------------------------
 *
 * Polyfill
 *
 * -------------------------------- */

import 'isomorphic-fetch';
import 'promise/polyfill';


/* -----------------------------------
 *
 * Test
 *
 * -------------------------------- */

render(<h1>Hello</h1>, document.getElementById('root'));