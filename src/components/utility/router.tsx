import Preact, { Component } from 'preact';
import { RouteProps, Router as Browser, Route, route, RouterOnChangeArgs } from 'preact-router';
import { createBrowserHistory, createHashHistory } from 'history';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   routes: Array<RouteProps<any>>;
}


/* -----------------------------------
 *
 * Router
 *
 * -------------------------------- */

class Router extends Component<IProps, {}> {


   @inject('global.config')
   private config: IConfig;


   public props: IProps;


   private history() {

      const { config } = this;

      let result;

      if (!config.route) {

         result = createHashHistory();

      }

      return result;

   }


   public render() {

      const { config } = this;
      const { routes } = this.props;

      return (
         <Browser
            history={this.history()}
         >
            {routes.map(
               (item) => (
                  <Route
                     path={(config.route || '') + item.path}
                     component={item.component}
                  />
               )
            )}
         </Browser>
      );

   }


}

/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { Router };