import { IAction } from '../model';
import { GET_REQUEST } from '../model';


/* -----------------------------------
 *
 * Get Request
 *
 * -------------------------------- */

export function getRequest(): IAction {
   return {
      type: GET_REQUEST
   };
}