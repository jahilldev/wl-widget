

/* -----------------------------------
 *
 * IProp
 *
 * -------------------------------- */

interface IProps {
   [index: string]: string;
}


/* -----------------------------------
 *
 * Interpolate
 *
 * -------------------------------- */

const interpolate = (value: string, props: IProps, legacy?: boolean) => {

   let result = value;

   for (const key of Object.keys(props)) {

      if (legacy) {

         result = result.replace(
            new RegExp('{{' + key + '}}', 'g'),
            props[key]
         );

         continue;

      }

      result = result.replace(
         new RegExp('\\$\\{' + key + '\\}', 'g'),
         props[key]
      );

   }

   return result;

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { interpolate };