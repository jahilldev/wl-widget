import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { IStore } from '../../redux/store';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/merchant');


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Link } from '../../components/link';


/* -----------------------------------
 *
 * Merchant
 *
 * -------------------------------- */

class Merchant extends Component<{}, {}> {


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Merchant
            </h1>
            <Link href="/">Home</Link>
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