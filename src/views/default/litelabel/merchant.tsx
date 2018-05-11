import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../../redux/store';
import * as utils from '../../../utility';
import { data } from './data/merchant';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/merchant');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch?: Dispatch<any, any>;
   matches: {
      slug: string;
   };
}


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { Offers } from './containers/merchant';


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
 * Merchant
 *
 * -------------------------------- */

class Merchant extends Component<IProps, {}> {


   public componentWillMount() {

      const { dispatch, matches } = this.props;

      const list = data({
         slug: matches.slug
      });

      list.map(
         (a) => dispatch(a)
      );

   }


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Merchant
            </h1>
            <Link href="/">Home</Link>
            <div className={style.offers}>
               <h2>Offers</h2>
               <Offers />
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

export { Merchant };