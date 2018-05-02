import Preact, { Component } from 'preact';
import { Dispatch } from 'redux';
import { connect } from 'preact-redux';
import { IStore } from '../../redux/store';


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
   dispatch?: Dispatch<any, any>;
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

      const { dispatch } = this.props;

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