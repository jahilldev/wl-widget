import Preact, { Component } from 'preact';
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

import { Router } from '../../components';


/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

import { Home } from './home';
import { Merchant } from './merchant';


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


   @inject('global.config')
   private config: IConfig;


   public props: IProps;


   public render() {

      return (
         <Router>
            <Home path={utils.route('/')} />
            <Merchant path={utils.route('/:slug')} />
         </Router>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { LiteLabel };