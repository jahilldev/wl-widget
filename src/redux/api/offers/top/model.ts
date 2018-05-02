

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export const GET_REQUEST: string = 'api/offers/top/GET_REQUEST';
export const GET_SUCCESS: string = 'api/offers/top/GET_SUCCESS';
export const SET_DATA: string = 'api/offers/top/SET_DATA';


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