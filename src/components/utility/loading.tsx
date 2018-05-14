import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/loading');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   active: boolean;
   className: string;
   children?: any;
}


/* -----------------------------------
 *
 * Loading
 *
 * -------------------------------- */

const Loading = (props: IProps) => {

   const { active, className, children } = props;
   const state = !active ? style.active : '';

   return (
      <div className={`${style.wrapper} ${state} ${className}`}>
         {!active && children}
      </div>
   );

};


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { Loading };