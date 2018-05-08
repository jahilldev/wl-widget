import { combineReducers } from 'redux';
import { reducer as home } from './home/reducers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   home

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };