import { createStore } from 'redux';
import { IAccount } from './account';
import { reducers } from './reducers';


/* -----------------------------------
 *
 * IState
 *
 * -------------------------------- */

export interface IState {
   dispatch?: (a: any) => void;
   account: IAccount;
}


/* -----------------------------------
 *
 * Initialise
 *
 * -------------------------------- */

function store() {

   return createStore(reducers);

}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { store as createStore };

