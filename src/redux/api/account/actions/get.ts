import { access } from '../../../../core/dependency';
import { Action } from '../model';
import { getRequest, getSuccess } from '../../shared';
import { ApiConfig } from '../../config';
import { IConfig } from 'config';


/* -----------------------------------
 *
 * Get
 *
 * -------------------------------- */

export function getAccount() {

   const window: Window = access('global.window');
   const config: IConfig = access('global.config');

   const { apiKey } = config;

   return async (dispatch: any) => {

      dispatch(
         getRequest(
            Action.Request
         )
      );

      const result = await window.fetch(
         `${ApiConfig.Host}validate`
      );

      const data = await result.json();

      if (!result.ok) {

         return dispatch(
            getRequest(
               Action.Failure
            )
         );

      }

      return dispatch(
         getSuccess({
            type: Action.Success,
            data
         })
      );

   };

}