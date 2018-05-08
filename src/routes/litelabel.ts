import { getTopOffers } from '../redux/api/offers/top';


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
               offerTypes: 'instore',
               countryCode: 'GB',
               pageSize: 5
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