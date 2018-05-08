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

   return (dispatch: (f: any) => void) => {

      dispatch(
         getRequest(
            Action.Request
         )
      );

      // return loadAnnotations({
      //    token
      // }).then((response: any) => {

      //    if (response.ok) {

      //       return response.json().then(
      //          (res: any) => dispatch(
      //             getSuccess(res)
      //          )
      //       );

      //    } else {

      //       return response.json().then(
      //          (res: any) => dispatch(
      //             getFailure(res)
      //          )
      //       );

      //    }

      // }).catch(
      //    (err: any) => dispatch(
      //       getFailure(err)
      //    )
      // );

   };

}