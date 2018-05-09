import { access } from '../core/dependency';
import { ApiConfig } from '../redux/api/config';
import { IConfig } from '../config';
import * as utils from '../utility';


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

const getAccount = async () => {

   const window: Window = access('global.window');
   const config: IConfig = access('global.config');

   const { apiKey } = config;
   const host = ApiConfig.Host;

   const url = `${host}validate/`;

   const result = await window.fetch(url, {
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

export { getAccount };