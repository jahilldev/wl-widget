import React, { Component } from 'react';
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