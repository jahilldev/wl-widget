import Preact, { Component } from 'preact';
import { routes } from './routes';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/index');


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Router } from '../../../components/utility';


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


   public render() {

      return (
         <div className={style.wrapper}>
            <Router
               routes={routes}
            />
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