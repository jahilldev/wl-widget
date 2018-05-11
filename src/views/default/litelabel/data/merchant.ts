import { Action as OfferAction } from '../../../../redux/views/litelabel/merchant/offers';
import { getMerchantOffers } from '../../../../redux/api/offers';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   slug: string;
}


/* -----------------------------------
 *
 * Data
 *
 * -------------------------------- */

const data = (props?: IProps) => [
   getMerchantOffers({
      action: OfferAction,
      params: {
         MerchantIdentifier: props.slug,
         OfferTypes: '1',
         CountryCode: 'GB',
         PageSize: 20,
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