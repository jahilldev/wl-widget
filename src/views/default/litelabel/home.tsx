import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../../redux/store';
import * as utils from '../../../utility';
import { data } from './data/home';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/home');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch?: Dispatch<any, any>;
}


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { TopOffers } from './containers/home';


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Link } from '../../../components/utility';


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


   public componentWillMount() {

      const { dispatch } = this.props;

      const list = data();

      list.map(
         (a) => dispatch(a)
      );

   }


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Home
            </h1>
            <div className={style.topoffers}>
               <h2>Top Offers</h2>
               <TopOffers />
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