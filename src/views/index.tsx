import Preact from 'preact';


/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

const list = {
   TopOffers: import('./topoffers')
};


/* -----------------------------------
 *
 * Views
 *
 * -------------------------------- */

const views = async (key: string) => {

   /** todo */

   try {

      const tpl = await list.TopOffers;

      console.log('views.tpl', tpl);

   } catch (err) {

      console.log('ERROR:', err);

   }

   return (
      <h1>Test</h1>
   );

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { views };