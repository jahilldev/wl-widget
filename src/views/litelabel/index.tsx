import Preact, { Component } from 'preact';
import { Router, Route } from 'preact-router';
import { createHashHistory } from 'history';
import { connect } from 'preact-redux';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';
import { IStore } from '../../redux/store';
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


   public render() {

      return (
         <Router history={createHashHistory()}>
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