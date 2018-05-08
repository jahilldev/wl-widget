

/* -----------------------------------
 *
 * Action
 *
 * -------------------------------- */

export enum Action {
   Request = 'api/offers/top/request',
   Success = 'api/offers/top/success',
   Failure = 'api/offers/top/failure'
}


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