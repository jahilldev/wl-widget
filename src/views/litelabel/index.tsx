import Preact, { Component } from 'preact';
import { Router, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from 'history';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../redux/store';
import { routes } from '../../routes/litelabel';


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
   dispatch?: Dispatch<any, any>;
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


   public props: IProps;


   private onRouteChange = (ev: RouterOnChangeArgs) => {

      const { dispatch } = this.props;

      const data = routes(ev.url);

      data.map(
         (a) => dispatch(a)
      );

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