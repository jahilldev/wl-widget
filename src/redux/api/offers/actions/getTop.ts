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
      CountryCode: string;
      OfferTypes: string;
   };
}


/* -----------------------------------
 *
 * Top Offers
 *
 * -------------------------------- */

export function getTopOffers(props: IProps) {

   const { action, params } = props;

   return async (dispatch: (f: any) => void) => {

      dispatch(
         getRequest(
            action.Request
         )
      );

      const result = await reqs.getTopOffers(params);
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