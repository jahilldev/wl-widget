import Preact from 'preact';


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

const views = async (key: string) => {

   const view = await list[key];
   const Item = view[key] as any;

   return (
      <Item />
   );

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { views };