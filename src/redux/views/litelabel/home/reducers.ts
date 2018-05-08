import { combineReducers } from 'redux';
import { reducer as topoffers } from './topoffers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   topoffers

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };