import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/home');


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { TopOffers } from '../../containers/offers';


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