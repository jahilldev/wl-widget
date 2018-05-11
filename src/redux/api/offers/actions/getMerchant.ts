import { Dispatch } from 'redux';
import { getRequest, getSuccess } from '../../shared';
import * as reqs from '../../../../requests';


/* -----------------------------------
 *
 * Props
 *
 * -------------------------------- */

export interface IProps {
   action: any;
   params: {
      [index: string]: any;
      MerchantIdentifier: string;
      CountryCode: string;
      OfferTypes: string;
   };
}


/* -----------------------------------
 *
 * Merchant Offers
 *
 * -------------------------------- */

export function getMerchantOffers(props: IProps) {

   const { action, params } = props;

   return async (dispatch: Dispatch<any, any>) => {

      dispatch(
         getRequest(
            action.Request
         )
      );

      const result = await reqs.getMerchantOffers(params);
      const data = await result.json();

      if (!result.ok) {

         return dispatch(
            getRequest(
               action.Failure
            )
         );

      }

      return dispatch(
         getSuccess({
            type: action.Success,
            data
         })
      );

   };

}