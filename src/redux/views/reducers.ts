import { combineReducers } from 'redux';
import { reducer as litelabel } from './litelabel/reducers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   litelabel

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };