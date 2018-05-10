import { Action as TopOfferAction } from '../redux/views/litelabel/home/topoffers';
import { getTopOffers } from '../redux/api/offers';


/* -----------------------------------
 *
 * Data
 *
 * -------------------------------- */

const data = {

   home: () => [
      getTopOffers({
         action: TopOfferAction,
         params: {
            OfferTypes: '1',
            CountryCode: 'GB',
            PageSize: 4
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