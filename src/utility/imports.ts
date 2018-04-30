

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

const imports = async <T>(list: IList<T>) => {

   const keys = Object.keys(list);

   const array = keys.map((k: string) => list[k]);
   const load = await Promise.all(array);

   const result = load.reduce(
      (acc: any, item: any, index) => {

         const key = keys[index];

         acc[key] = item[key];

         return acc;

      },
      {}
   );

   return result;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { imports };