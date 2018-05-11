import Preact, { Component } from 'preact';
import Browser, { RouteProps, Route, route, RouterOnChangeArgs } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { createBrowserHistory, createHashHistory } from 'history';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';


/* -----------------------------------
 *
 * IRoute
 *
 * -------------------------------- */

interface IRoute {
   async: boolean;
   path: string;
   component: any;
}


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   routes: IRoute[];
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
               (item) => {

                  const path = (config.route || '') + item.path;

                  // return item.async ? (
                  //    <AsyncRoute
                  //       path={path}
                  //       getComponent={item.component}
                  //    />
                  // ) : (
                  //    <Route
                  //       path={(config.route || '') + item.path}
                  //       component={item.component}
                  //    />
                  // );

                  return <Route
                     path={(config.route || '') + item.path}
                     component={item.component}
                  />;

               }
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