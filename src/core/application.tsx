import Preact, { render } from 'preact';
import { Provider } from 'preact-redux';
import { Store } from 'redux';
import { inject } from './dependency';
import { IConfig } from '../config';
import { IStore, createStore } from '../redux/store';
import { getAccount } from '../redux/api';
import { Views } from '../views';


/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

class Application {


   @inject('global.document')
   private document: Document;

   @inject('global.config')
   private config: IConfig;


   private store: Store;
   private root: HTMLElement;


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


   public container() {

      const { document, config } = this;

      const query = config.root || 'root';
      const root = document.getElementById(query);

      this.root = root;

   }


   public render() {

      const { store, root } = this;

      const App = (
         <Provider store={store}>
            <Views />
         </Provider>
      );

      render(App, root);

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Application };