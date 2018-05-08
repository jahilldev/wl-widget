import Preact from 'preact';
import { Provider } from 'preact-redux';
import { Store } from 'redux';
import { IConfig } from '../config';
import { IStore, createStore } from '../redux/store';
import { getAccount } from '../redux/api';
import { Views } from '../views';


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { InvalidKey } from '../components/utility';


/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

class Application {


   private config: IConfig;
   private store: Store;


   public constructor(config: IConfig) {

      this.config = config;
      this.store = createStore();

   }


   public async validate() {

      const { apiKey } = this.config;
      const { dispatch } = this.store;

      // call api endpoint, validate
      // client api key then dispatch
      // redux action

      await dispatch(
         getAccount()
      );

   }


   public dispatch() {

      const { store } = this;

      const data: IStore = store.getState();

      console.log('Application.dispatch:', data);

      // store.dispatch(getEnvironments());

   }


   public render() {

      const { store } = this;

      return (
         <Provider store={store}>
            <Views />
         </Provider>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Application };