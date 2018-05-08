import { IAction } from '../model';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   type: string;
   data: any;
}


/* -----------------------------------
 *
 * Get Success
 *
 * -------------------------------- */

export function getSuccess(props: IProps): IAction {

   const { type, data } = props;

   return {
      type,
      payload: {
         data
      }
   };

}