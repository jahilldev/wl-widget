import { Action as TopOfferAction } from '../../../redux/views/litelabel/home/topoffers';
import { IParams as IOfferParams, getTopOffers } from '../../../redux/api/offers';


/* -----------------------------------
 *
 * IParams
 *
 * -------------------------------- */

interface IParams {
   home?: {
      topOffers?: IOfferParams;
   };
}


/* -----------------------------------
 *
 * Data
 *
 * -------------------------------- */

const data = {

   home: (props?: IParams) => [
      getTopOffers({
         action: TopOfferAction,
         params: {
            OfferTypes: '1',
            CountryCode: 'GB',
            PageSize: 4,
            // TODO: custom
         }
      })
   ]

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { data };