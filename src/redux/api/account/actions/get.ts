import { access } from '../../../../core/dependency';
import { Action } from '../model';
import { getRequest, getSuccess } from '../../shared';
import * as reqs from '../../../../requests';
import { ApiConfig } from '../../config';
import { IConfig } from 'config';


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export function getAccount() {

   return async (dispatch: any) => {

      dispatch(
         getRequest(
            Action.Request
         )
      );

      const result = await reqs.getAccount();
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