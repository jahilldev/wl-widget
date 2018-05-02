import { IAction } from '../model';
import { SET_LOADING } from '../model';


/* -----------------------------------
 *
 * Set Loading
 *
 * -------------------------------- */

export function setLoading(data: any): IAction {

   return {
      type: SET_LOADING,
      payload: {
         data
      }
   };

}