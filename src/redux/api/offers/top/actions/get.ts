// import { getRequest } from '../../../../shared/getRequest';
// import { getSuccess } from '../../../../shared/getSuccess';
// import { getFailure } from '../../../../shared/getFailure';


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

   const { offerTypes, countryCode, pageSize } = props;

   return (dispatch: (f: any) => void) => {

      // dispatch(
      //    getRequest()
      // );

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