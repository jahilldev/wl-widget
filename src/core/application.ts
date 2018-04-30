import { inject } from './dependency';
import { IConfig } from '../config';
import { createStore } from '../redux/store';
import { views } from '../views';


/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

class Application {


   private config: IConfig;
   private view: string;
   private store: any;


   public constructor(config: IConfig) {

      this.config = config;
      this.view = null;
      this.store = createStore();
      this.store = null;

   }


   public async validate() {

      // call api endpoint and
      // set this.view property
      // then dispatch redux action

      this.view = 'TopOffers';

   }


   public async output(): Promise<JSX.Element> {

      const { store, view } = this;

      const output = await views(store, view);

      return output;

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Application };