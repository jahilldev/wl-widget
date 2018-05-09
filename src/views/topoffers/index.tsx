import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { Action, getTopOffers } from '../../redux/api/offers';
import { IStore } from '../../redux/store';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/index');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch?: any;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Offers } from './containers/offers';


/* -----------------------------------
 *
 * Connect
 *
 * -------------------------------- */

@(connect(
   (state: IStore) => ({
      dispatch: state.dispatch
   })
) as any)


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


   public componentDidMount() {

      const { dispatch } = this.props;

      dispatch(
         getTopOffers({
            action: Action,
            params: {
               OfferTypes: '1',
               CountryCode: 'GB',
               PageSize: 5
            }
         })
      );

   }


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Top Offers
            </h1>
            <Offers />
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