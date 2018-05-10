import { IConfig } from './config';


/* -----------------------------------
 *
 * Global
 *
 * -------------------------------- */

declare global {

   const __DEV__: string;
   const __API__: string;

   interface Window {

      __config: IConfig;

   }

}