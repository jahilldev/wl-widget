import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../redux/store';
import { getTopOffers } from '../../redux/api/offers/top';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/home');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch: Dispatch<any, any>;
}


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { TopOffers } from '../../containers/offers';


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
 * Home
 *
 * -------------------------------- */

class Home extends Component<IProps, {}> {


   @inject('global.config')
   private config: IConfig;


   public props: IProps;


   public async componentDidMount() {

      const { dispatch } = this.props;

      const data = [
         dispatch(
            getTopOffers({
               offerTypes: 'instore',
               countryCode: 'GB',
               pageSize: 5
            })
         )
      ];

      Promise.all(data);

   }


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Home
            </h1>
            <Link href="/asos-vouchers">Asos</Link>
            <div className={style.topoffers}>
               <TopOffers
                  offerTypes="instore"
                  countryCode="GB"
                  pageSize={5}
               />
            </div>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Home };