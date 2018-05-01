import React, { Component } from 'react';
import { connect } from 'react-redux';
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
 * Components
 *
 * -------------------------------- */

import { TileBlock } from '../../components/tiles';


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
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>Top Offers</h1>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TopOffers };