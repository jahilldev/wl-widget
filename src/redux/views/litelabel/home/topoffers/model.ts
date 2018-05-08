

/* -----------------------------------
 *
 * Action
 *
 * -------------------------------- */

export enum Action {
   Request = 'views/litelabel/home/topoffers/request',
   Success = 'views/litelabel/home/topoffers/success',
   Failure = 'views/litelabel/home/topoffers/failure'
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