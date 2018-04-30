

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export const SET: string = 'account/SET';


/* -----------------------------------
 *
 * IAction
 *
 * -------------------------------- */

export interface IAction {
   type: string;
   payload?: {
      data?: any;
      message?: any;
   };
}