import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
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


   @inject('global.config')
   private config: IConfig;


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Home
            </h1>
            <Link href="/asos-vouchers">Asos</Link>
            <div className={style.topoffers}>
               <TopOffers
                  offerTypes="instore"
                  countryCode="GB"
                  pageSize={5}
               />
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