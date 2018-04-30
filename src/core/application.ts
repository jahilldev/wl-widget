import { inject } from './dependency';
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


   private document: Document;
   private config: IConfig;
   private account: IAccount;
   private store: any;


   public constructor(document: Document, config: IConfig) {

      this.document = document;
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

      const { document, account } = this;

      const root = document.getElementById('root');
      const output = await views(account.view) as any;

      render(output, root);

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Application };