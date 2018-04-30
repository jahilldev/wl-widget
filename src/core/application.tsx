import Preact from 'preact';
import { Provider } from 'preact-redux';
import { Store } from 'redux';
import { IConfig } from '../config';
import { IStore, createStore } from '../redux/store';
import { Views } from '../views';


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

      // call api endpoint and
      // then dispatch redux action

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