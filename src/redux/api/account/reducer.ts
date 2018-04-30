// import update from 'immutability-helper';
import { IAction } from './model';
import { Account } from './state';
import { SET } from './model';


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

function reducer(state = Account, action: IAction) {


   switch (action.type) {


      case SET: {

         const { data } = action.payload;

         return {...state, ...data};

      }


      default: {

         return state;

      }


   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };