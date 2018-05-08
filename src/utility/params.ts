

/* -----------------------------------
 *
 * IList
 *
 * -------------------------------- */

interface IList<T> {
   [index: string]: any;
}


/* -----------------------------------
 *
 * Imports
 *
 * -------------------------------- */

const params = <T>(url: string, list: IList<T>) => {

   console.log('utils.params', url, list);

   const keys = Object.keys(list);

   const array = keys.map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(list[key])}`
   );

   const result = `${url}?${array.join('&')}`;

   return result;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { params };