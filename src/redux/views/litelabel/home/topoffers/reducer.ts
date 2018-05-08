import update from 'immutability-helper';
import { IAction } from './model';
import { Offers } from '../../../../api/offers';
import { Action } from './model';


/* -----------------------------------
 *
 * Top Offers
 *
 * -------------------------------- */

function reducer(state = Offers, action: IAction) {


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
               $set: data.Offers
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