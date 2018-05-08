import update from 'immutability-helper';
import { IAction } from './model';
import { Account } from './state';
import { GET_REQUEST, GET_SUCCESS } from './model';


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

function reducer(state = Account, action: IAction) {


   switch (action.type) {


      case GET_REQUEST: {

         return update(state, {
            loading: {
               $set: true
            }
         });

      }


      case GET_SUCCESS: {

         const { data } = action.payload;

         return update(state, {
            valid: {
               $set: data.valid
            },
            view: {
               $set: data.view
            },
            loading: {
               $set: false
            }
         });

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