

/* -----------------------------------
 *
 * ITopOffers
 *
 * -------------------------------- */

export interface ITopOffers {
   loading: boolean;
   data: any[];
   error: boolean;
   message: any;
}


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export const TopOffers: ITopOffers = {
   loading: false,
   data: [],
   error: false,
   message: null
};