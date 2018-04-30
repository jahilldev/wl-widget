import { combineReducers } from 'redux';
import { reducer as account } from './account';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   account

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };