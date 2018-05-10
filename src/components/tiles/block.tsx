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
 * Components
 *
 * -------------------------------- */

import { Picture } from '../utility';


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
            <Link
               className={style.logo}
               href={`/${data.Merchant.MerchantSlug}`}
            >
               <Picture
                  className={style.image}
                  source={[
                     ['min-width: 48em', 'https://images.mndn1.com/image/upload/w_128,h_128,q_70,fl_strip_profile,f_auto/great_little_trading_company_logo_1.jpg'],
                     ['min-width: 35.5em', 'https://images.mndn1.com/image/upload/w_100,h_100,q_70,fl_strip_profile,f_auto/great_little_trading_company_logo_1.jpg'],
                     ['min-width: 0em', 'https://images.mndn1.com/image/upload/w_178,h_178,q_70,fl_strip_profile,f_auto/great_little_trading_company_logo_1.jpg']
                  ]}
               />
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