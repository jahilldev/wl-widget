import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IProps {
   title: string;
   offers?: IOffers;
   style?: any;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Loading } from '../../components/utility';


/* -----------------------------------
 *
 * Row
 *
 * -------------------------------- */

class Row extends Component<any, {}> {


   public props: IProps;


   public render() {

      const { style, title, offers } = this.props;

      return (
         <div className={style.wrapper}>
            <h2 className={style.title}>
               {title}
            </h2>
            <Loading
               active={offers.loading}
            >
               <div>
                  LOADED
               </div>
            </Loading>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { Row };