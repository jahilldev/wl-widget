import { IOffer } from './offer';


/* -----------------------------------
 *
 * ITopOffers
 *
 * -------------------------------- */

export interface IOffers {
   loading: boolean;
   data: IOffer[];
   error: boolean;
   message: string;
}


/* -----------------------------------
 *
 * Offers
 *
 * -------------------------------- */

export const Offers: IOffers = {
   loading: false,
   data: [],
   error: false,
   message: null
};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export * from './offer';