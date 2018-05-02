

/* -----------------------------------
 *
 * IManifest
 *
 * -------------------------------- */

interface IManifest {
   [index: string]: Promise<any>;
}


/* -----------------------------------
 *
 * Imports
 *
 * -------------------------------- */

const manifest: IManifest = {
   LiteLabel: import('./litelabel'),
   TopOffers: import('./topoffers')
};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { manifest };