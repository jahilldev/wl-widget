

/* -----------------------------------
 *
 * IParams
 *
 * -------------------------------- */

export interface IParams {
   OfferTypes: string;
   CountryCode: string;
   PageSize: number;
}


/* -----------------------------------
 *
 * Action
 *
 * -------------------------------- */

export enum Action {
   Request = 'api/offers/request',
   Success = 'api/offers/success',
   Failure = 'api/offers/failure'
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