

/* -----------------------------------
 *
 * Action
 *
 * -------------------------------- */

export enum Action {
   Request = 'views/litelabel/merchant/offers/request',
   Success = 'views/litelabel/merchant/offers/success',
   Failure = 'views/litelabel/merchant/offers/failure'
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