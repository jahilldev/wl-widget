import Preact, { Component } from 'preact';
import { Link as RouteLink, Router as BrowserRouter } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { createHashHistory } from 'history';
import { inject } from '../core/dependency';
import { IConfig } from '../config';
import * as utils from '../utility';


/* -----------------------------------
 *
 * Router
 *
 * -------------------------------- */

class Router extends Component<{}, {}> {


   @inject('global.config')
   private config: IConfig;


   private getHistory(): any {

      const { route } = this.config;

      if (!route) {

         return createHashHistory();

      }

      return null;

   }


   public render() {

      const { children } = this.props;

      const history = this.getHistory();

      return (
         <BrowserRouter history={history}>
            {children}
         </BrowserRouter>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { Router };