

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export const GET_REQUEST: string = 'API/ACCOUNT/GET_REQUEST';
export const GET_SUCCESS: string = 'API/ACCOUNT/GET_SUCCESS';
export const GET_FAILURE: string = 'API/ACCOUNT/GET_FAILURE';


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