

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export const SET_LOADING: string = 'views/litelabel/home/SET_LOADING';


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