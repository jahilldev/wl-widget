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
      const { MerchantSlug } = data.Merchant;

      return (
         <div className={style.wrapper}>
            <Link href={`/${MerchantSlug}`}>
               Asos
            </Link>
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