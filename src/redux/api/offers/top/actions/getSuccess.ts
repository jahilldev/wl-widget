import { IAction } from '../model';
import { GET_SUCCESS } from '../model';
import { ITopOffers } from '../state';


/* -----------------------------------
 *
 * Get Success
 *
 * -------------------------------- */

export function getSuccess(data: ITopOffers[]): IAction {

   return {
      type: GET_SUCCESS,
      payload: {
         data
      },
   };

}