import { access } from '../core/dependency';
import { IConfig } from '../config';
import * as utils from '../utility';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   [index: string]: any;
   CountryCode: string;
   OfferTypes: string;
}


/* -----------------------------------
 *
 * Top Offers
 *
 * -------------------------------- */

const getTopOffers = async (props: IProps) => {

   const window: Window = access('global.window');
   const config: IConfig = access('global.config');

   const { apiKey } = config;
   const { CountryCode } = props;

   delete props.CountryCode;

   const url = `${__API__}offers/top/${CountryCode}/`;
   const query = utils.params(url, props);

   const result = await window.fetch(query, {
      headers: {
         'X-ApiKey': apiKey
      }
   });

   return result;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { getTopOffers };