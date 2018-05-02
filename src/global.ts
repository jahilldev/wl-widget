import { IConfig } from './config';


/* -----------------------------------
 *
 * Global
 *
 * -------------------------------- */

declare global {

   const __API__: string;

   interface Window {

      __config: IConfig;

   }

}