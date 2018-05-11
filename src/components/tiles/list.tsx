import Preact, { Component } from 'preact';
import { IOffer } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/list');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   data: IOffer;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Link, Picture } from '../utility';


/* -----------------------------------
 *
 * List
 *
 * -------------------------------- */

class TileList extends Component<IProps, {}> {


   public render() {

      const { data } = this.props;

      return (
         <div className={style.wrapper}>
            <p className={style.title}>
               {data.OfferTitle}
            </p>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { TileList };