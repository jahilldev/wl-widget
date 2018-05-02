import { IAction } from '../model';
import { SET_DATA } from '../model';


/* -----------------------------------
 *
 * Set Data
 *
 * -------------------------------- */

export function setData(data: any): IAction {

   return {
      type: SET_DATA,
      payload: {
         data
      }
   };

}