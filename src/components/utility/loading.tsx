import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/loading');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   active: boolean;
   children?: any;
}


/* -----------------------------------
 *
 * Loading
 *
 * -------------------------------- */

const Loading = (props: IProps) => {

   const { active, children } = props;
   const className = !active ? style.active : '';

   return (
      <div className={`${style.wrapper} ${className}`}>
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