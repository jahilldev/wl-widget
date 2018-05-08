import Preact, { Component } from 'preact';
import { Dispatch } from 'redux';
import { connect } from 'preact-redux';
import { ITopOffers } from 'redux/api/offers/top';
import { IStore } from 'redux/store';


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
   dispatch?: Dispatch<any, any>;
   offers?: ITopOffers;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Loading } from '../../components/utility';


/* -----------------------------------
 *
 * Connect
 *
 * -------------------------------- */

@(connect(
   (state: IStore) => ({
      dispatch: state.dispatch,
      offers: state.api.offers.top
   })
) as any)


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


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