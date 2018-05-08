import { Action as TopOfferAction } from '../redux/views/litelabel/home/topoffers';
import { getOffers } from '../redux/api/offers';


/* -----------------------------------
 *
 * Routes
 *
 * -------------------------------- */

const routes = (path: string) => {

   switch (path) {

      case '/': {

         return [
            getOffers({
               action: TopOfferAction,
               type: 'top',
               params: {
                  OfferTypes: 'instore',
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