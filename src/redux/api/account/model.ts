

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export enum Action {
   Request = 'API/ACCOUNT/REQUEST',
   Success = 'API/ACCOUNT/SUCCESS',
   Failure = 'API/ACCOUNT/FAILURE'
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