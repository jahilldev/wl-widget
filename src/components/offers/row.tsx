import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IProps {
   title: string;
   offers?: IOffers;
   style?: any;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Loading } from '../../components/utility';
import { TileBlock } from '../tiles/block';


/* -----------------------------------
 *
 * OfferRow
 *
 * -------------------------------- */

class OfferRow extends Component<any, {}> {


   public props: IProps;


   public render() {

      const { style, title, offers } = this.props;
      const { data } = offers;

      return (
         <div className={style.wrapper}>
            <h2 className={style.title}>
               {title}
            </h2>
            <Loading
               active={offers.loading}
            >

               {data.map((item, index) => {

                  return (
                     <TileBlock
                        key={item.OfferId}
                        data={item}
                     />
                  );

               })}
            </Loading>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { OfferRow };