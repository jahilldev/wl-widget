

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
 * Imports
 *
 * -------------------------------- */

const list: IList = {
   LiteLabel: import('./litelabel'),
   TopOffers: import('./topoffers')
};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { list };