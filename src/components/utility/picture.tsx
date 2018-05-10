import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   className: string;
   source: string[][];
}


/* -----------------------------------
 *
 * Picture
 *
 * -------------------------------- */

const Picture = (props: IProps) => {

   const { className, source } = props;

   const image = source.slice(-1).pop();

   return (
      <picture>
         {source.map(
            (item) => (
               <source media={item[0]} srcset={item[1]} />
            )
         )}
         <img src={image[1]} className={className} />
      </picture>
   );

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Picture };