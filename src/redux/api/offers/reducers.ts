import { combineReducers } from 'redux';
import { reducer as top } from './top';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   top

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };