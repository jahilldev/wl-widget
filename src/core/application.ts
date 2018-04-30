import { render } from 'preact';
import { Provider, connect } from 'preact-redux';
import { createStore } from 'redux';
import { IConfig } from '../config';
import { IAccount } from '../account';
import { reducers } from '../redux/reducers';
import { views } from '../views';


/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

class Application {


   private config: IConfig;
   private account: IAccount;


   private root: HTMLElement;
   private store: any;


   public constructor(config: IConfig) {

      this.config = config;
      this.store = createStore(reducers);

   }


   public async validate() {

      // call api endpoint and
      // set this.account property

      this.account = {
         view: 'TopOffers'
      };

   }


   public async render() {

      const { account } = this;

      const output = await views(account.view) as any;

      render(
         output,
         document.getElementById('root')
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Application };