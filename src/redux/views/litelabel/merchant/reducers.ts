import { combineReducers } from 'redux';
import { reducer as offers } from './offers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   offers

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };