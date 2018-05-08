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
   type?: string;
   params: {
      [index: string]: any;
   };
}


/* -----------------------------------
 *
 * Offers
 *
 * -------------------------------- */

const getOffers = async (props: IProps) => {

   const window: Window = access('global.window');
   const config: IConfig = access('global.config');

   const { apiKey } = config;
   const { type, params } = props;
   const host = ApiConfig.Host;

   let url = `${host}offers/`;

   if (type) {

      url += type;

   }

   const query = utils.params(url, params);

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

export { getOffers };