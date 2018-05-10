import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
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
            <Link href={`/${data.Merchant.MerchantSlug}`}>
               Asos
            </Link>
            <p className={style.title}>
               {data.OfferTitle}
            </p>
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