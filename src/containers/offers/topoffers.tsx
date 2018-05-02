import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/topoffers');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   offerTypes: string;
   countryCode: string;
   pageSize: number;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Loading } from '../../components/utility';


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


   public componentDidMount() {

      console.log('TopOffers.componentDidMount');

   }


   public render() {

      return (
         <div className={style.wrapper}>
            <h2 className={style.title}>
               Top Offers
            </h2>
            <Loading
               active={false}
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

export { TopOffers };