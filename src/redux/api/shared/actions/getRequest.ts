import { IAction } from '../model';


/* -----------------------------------
 *
 * Get Request
 *
 * -------------------------------- */

export function getRequest(type: string): IAction {

   return {
      type
   };

}