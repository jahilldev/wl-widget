import { access } from '../core/dependency';
import { ApiConfig } from '../redux/api/config';
import { IConfig } from '../config';
import * as utils from '../utility';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   [index: string]: any;
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
   const host = ApiConfig.Host;

   const url = `${host}offers/top/`;
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