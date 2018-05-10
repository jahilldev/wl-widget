import Preact, { Component } from 'preact';
import { IOffer } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/block');


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
 * Block
 *
 * -------------------------------- */

class TileBlock extends Component<IProps, {}> {


   public render() {

      const { data } = this.props;

      return (
         <div className={style.wrapper}>
            <h4>{data.OfferTitle}</h4>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TileBlock };