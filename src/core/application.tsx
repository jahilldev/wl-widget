import Preact from 'preact';
import { Provider } from 'preact-redux';
import { Store } from 'redux';
import { IStore, createStore } from '../redux/store';
import { getAccount } from '../redux/api';
import { Views } from '../views';


/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

class Application {


   private store: Store;


   public constructor() {

      this.store = createStore();

   }


   public async validate() {

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