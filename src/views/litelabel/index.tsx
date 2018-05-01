import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
import { Router } from 'preact-router';
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
 * LiteLabel
 *
 * -------------------------------- */

class LiteLabel extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>Lite Label</h1>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * LiteLabel
 *
 * -------------------------------- */

export { LiteLabel };