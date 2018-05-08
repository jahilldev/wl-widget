import Preact, { Component } from 'preact';
import { Router, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from 'history';
import { connect } from 'preact-redux';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';
import { IStore } from '../../redux/store';
import { getTopOffers } from '../../redux/api/offers/top';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/index');


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
 * Views
 *
 * -------------------------------- */

import { Home } from './home';
import { Merchant } from './merchant';


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
 * LiteLabel
 *
 * -------------------------------- */

class LiteLabel extends Component<IProps, {}> {


   @inject('global.config')
   private config: IConfig;


   public props: IProps;


   private onRouteChange = (ev: RouterOnChangeArgs) => {

      const { dispatch } = this.props;

      switch (ev.url) {

         case '/': {

            Promise.all([
               dispatch(
                  getTopOffers({
                     offerTypes: 'instore',
                     countryCode: 'GB',
                     pageSize: 5
                  })
               )
            ]);

            break;

         }

         default: {
            // Nothing
         }

      }

   }


   public render() {

      return (
         <Router
            history={createHashHistory()}
            onChange={this.onRouteChange}
         >
            <Route
               path="/"
               component={Home}
            />
            <Route
               path="/:slug"
               component={Merchant}
            />
         </Router>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { LiteLabel };