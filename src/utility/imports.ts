

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

const imports = async <T>(list: IList<T>, key?: string) => {

   let keys = Object.keys(list);

   if (key) {

      keys = [key];

   }

   const array = keys.map((k: string) => list[k]());
   const load = await Promise.all(array);

   const result = load.reduce(
      (acc: any, item: any, index) => {

         const k = keys[index];

         acc[k] = item[k];

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