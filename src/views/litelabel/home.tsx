import React, { Component } from 'react';
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