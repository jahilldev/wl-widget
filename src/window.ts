import { IConfig } from './config';


/* -----------------------------------
 *
 * Window
 *
 * -------------------------------- */

declare global {

   interface Window {

      __vcconf__: IConfig;
      __CDN__: string;

   }

}