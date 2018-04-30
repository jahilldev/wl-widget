import { IAction } from '../model';
import { SET } from '../model';


/* -----------------------------------
 *
 * Set
 *
 * -------------------------------- */

export function setAccount(data: any): IAction {

   return {
      type: SET,
      payload: {
         data
      }
   };

}