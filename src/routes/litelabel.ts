import { Action as TopOfferAction } from '../redux/views/litelabel/home/topoffers';
import { getTopOffers } from '../redux/api/offers';


/* -----------------------------------
 *
 * Routes
 *
 * -------------------------------- */

const routes = (path: string) => {

   switch (path) {

      case '/': {

         return [
            getTopOffers({
               action: TopOfferAction,
               params: {
                  OfferTypes: '1',
                  CountryCode: 'GB',
                  PageSize: 5
               }
            })
         ];

      }

      default: {

         return [];

      }

   }

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { routes };