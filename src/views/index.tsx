import Preact from 'preact';
import { Provider } from 'preact-redux';


/* -----------------------------------
 *
 * IList
 *
 * -------------------------------- */

interface IList {
   [index: string]: Promise<any>;
}


/* -----------------------------------
 *
 * List
 *
 * -------------------------------- */

const list: IList = {
   TopOffers: import('./topoffers')
};


/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

const views = async (store: any, key: string) => {

   const view = await list[key];
   const Item = view[key] as any;

   return (
      <Provider store={store}>
         <Item />
      </Provider>
   );

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { views };