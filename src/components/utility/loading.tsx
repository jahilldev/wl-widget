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
   children?: any;
}


/* -----------------------------------
 *
 * Loading
 *
 * -------------------------------- */

const Loading = (props: IProps) => {

   const { active, children } = props;
   const state = !active ? style.active : '';

   return (
      <div className={`${style.wrapper} ${state}`}>
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