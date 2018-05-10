import Preact, { Component } from 'preact';
import { Router, Route, RouterOnChangeArgs } from 'preact-router';
import { createHashHistory } from 'history';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/index');


/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

import { Home } from './home';
import { Merchant } from './merchant';


/* -----------------------------------
 *
 * LiteLabel
 *
 * -------------------------------- */

class LiteLabel extends Component<{}, {}> {


   private onRouteChange = (ev: any) => {

      console.log(ev);

   }


   public render() {

      return (
         <div className={style.wrapper}>
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
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { LiteLabel };