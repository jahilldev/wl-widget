import { Action } from '../model';
import { getRequest, getSuccess } from '../../shared';
import * as reqs from '../../../../requests';


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