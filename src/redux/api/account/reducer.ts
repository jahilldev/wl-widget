import update from 'immutability-helper';
import { IAction, Action } from './model';
import { Account } from './state';


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

function reducer(state = Account, action: IAction) {


   switch (action.type) {


      case Action.Request: {

         return update(state, {
            loading: {
               $set: true
            }
         });

      }


      case Action.Success: {

         const { data } = action.payload;

         return update(state, {
            data: {
               $set: data
            },
            loading: {
               $set: false
            }
         });

      }


      case Action.Failure: {

         return update(state, {
            loading: {
               $set: false
            },
            error: {
               $set: true
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