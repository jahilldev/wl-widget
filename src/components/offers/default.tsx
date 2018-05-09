import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IProps {
   offers?: IOffers;
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
 * Default
 *
 * -------------------------------- */

class Default extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      const { offers } = this.props;
      const { data } = offers;

      console.log('Default', offers);

      return (
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
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Default };