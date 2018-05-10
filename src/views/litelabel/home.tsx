import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/home');


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { TopOffers } from './containers/home';


/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

class Home extends Component<{}, {}> {


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Home
            </h1>
            <Link href="/asos-vouchers">Asos</Link>
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