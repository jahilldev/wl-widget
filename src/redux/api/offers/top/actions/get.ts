import { access } from '../../../../../core/dependency';
import { Action } from '../model';
import { getRequest, getSuccess } from '../../../shared';
import { ApiConfig } from '../../../config';
import { IConfig } from 'config';


/* -----------------------------------
 *
 * Props
 *
 * -------------------------------- */

export interface IProps {
   offerTypes: string;
   countryCode: string;
   pageSize: number;
}


/* -----------------------------------
 *
 * Top Offers
 *
 * -------------------------------- */

export function getTopOffers(props: IProps) {

   const window: Window = access('global.window');
   const config: IConfig = access('global.config');

   const { offerTypes, countryCode, pageSize } = props;
   const { apiKey } = config;

   const url = `${ApiConfig.Host}offers/top/${countryCode}`;

   return async (dispatch: (f: any) => void) => {

      dispatch(
         getRequest(
            Action.Request
         )
      );

      const result = await window.fetch(url, {
         headers: {
            'X-ApiKey': apiKey
         }
      });

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