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

   // const url = `${host}validate/`;
   const url = 'https://400d55cb-9b6c-4cad-980e-9f184b8c3f02.mock.pstmn.io/validate';

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