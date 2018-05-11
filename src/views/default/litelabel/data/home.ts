import { Action as TopOfferAction } from '../../../../redux/views/litelabel/home/topoffers';
import { IParams as IOfferParams, getTopOffers } from '../../../../redux/api/offers';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   topOffers?: IOfferParams;
}


/* -----------------------------------
 *
 * Data
 *
 * -------------------------------- */

const data = (props?: IProps) => [
   getTopOffers({
      action: TopOfferAction,
      params: {
         OfferTypes: '1,4,6,7',
         CountryCode: 'GB',
         PageSize: 8,
         // TODO: custom
      }
   })
];


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { data };