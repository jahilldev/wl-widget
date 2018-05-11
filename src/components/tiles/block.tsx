import Preact, { Component } from 'preact';
import { IOffer } from '../../redux/api/offers';
import * as utils from '../../utility';


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

import { Link, Picture } from '../utility';


/* -----------------------------------
 *
 * Block
 *
 * -------------------------------- */

class TileBlock extends Component<IProps, {}> {


   private getMerchantLogo() {

      const { data } = this.props;
      const { MerchantMedia } = data.Merchant;

      const image = MerchantMedia.filter(
         ({ IsMainImage, MediaType }) => IsMainImage && MediaType === 'Logo'
      );

      return image[0].MediaUrl;

   }


   public render() {

      const { data } = this.props;

      const logo = this.getMerchantLogo();

      return (
         <div className={style.wrapper}>
            <Link
               className={style.logo}
               href={`/${data.Merchant.MerchantSlug}`}
            >
               <Picture
                  className={style.image}
                  source={[
                     ['min-width: 48em', utils.interpolate(logo, { options: 'w_128,h_128,' }, true)],
                     ['min-width: 35.5em', utils.interpolate(logo, { options: 'w_100,h_100,' }, true)],
                     ['min-width: 0em', utils.interpolate(logo, { options: 'w_178,h_178,' }, true)]
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