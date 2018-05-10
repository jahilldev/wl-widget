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

   const url = `${__API__}offers/`;
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

export { getOffers };