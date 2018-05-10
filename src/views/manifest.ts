

/* -----------------------------------
 *
 * IManifest
 *
 * -------------------------------- */

interface IManifest {
   [index: string]: {
      [index: string]: () => Promise<any>;
   };
}


/* -----------------------------------
 *
 * Imports
 *
 * -------------------------------- */

const manifest: IManifest = {
   default: {
      LiteLabel: () => import('./default/litelabel'),
      TopOffers: () => import('./default/topoffers')
   }
};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { manifest };