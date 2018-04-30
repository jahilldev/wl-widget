import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { IStore } from '../../redux/store';
import * as utils from '../../utility';


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

import { TileBlock } from '../../components/tiles';


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


   public render() {

      return (
         <div className="container">
            <h1>Top Offers</h1>
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